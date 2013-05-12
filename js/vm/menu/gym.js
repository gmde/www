var ViewModelGym = new Class(
        {
            Extends: Ajax,
            Implements: [IArrowList, IDic, ITimer],
            initialize: function()
            {
                this.initTimer(25);
                this.parent(GameItems.Gym);
                this.initArrowList(10);

                this.WEIGHT_STEP = 1.25;
                this.WEIGHT_MIN = 20;
                this.WEIGHT_MAX = 1000;
                this.PROGRESS_MAX = 100;
                this.PROGRESS_MIN = 0;
                this.REPEATS_STEP = 1;
                this.REPEATS_MIN = 1;
                this.REPEATS_MAX = 100;

                this.execution = {
                    busy: ko.observable(false),
                    progress: ko.observable(null),
                    executed: ko.observable(null),
                    max: null,
                    speeds: []
                };
            },
            get: function(gym)
            {
                this.data(gym);
                this.items(gym.exercises);
                this.show();
            },
            select: function(exercise)
            {
                if (this.execution.busy() == true) return;
                if (exercise.init == undefined)
                {
                    exercise.weight = ko.observable(this.WEIGHT_MIN);
                    exercise.repeats = ko.observable(this.REPEATS_MIN);
                    exercise.force = ko.observable(false);
                    exercise.journal = ko.observableArray([]);
                    exercise.init = true;
                }
                this.selected(exercise);
            },

            execute: function()
            {
                var exercise = this.selected();
                if (exercise.repeats() < this.REPEATS_MIN || this.REPEATS_MAX < exercise.repeats())
                {
                    Game.Window.message(
                        "Количество повторений должно быть в диапазоне от " + this.REPEATS_MIN +
                            " до " + this.REPEATS_MAX);
                    return;
                }
                if (exercise.weight() < this.WEIGHT_MIN || this.WEIGHT_MAX < exercise.weight())
                {
                    Game.Window.message(
                        "Вес должен быть в диапазоне от " + this.WEIGHT_MIN +
                            " до " + this.WEIGHT_MAX + " кг");
                    return;
                }

                this.execution.busy(true);
                this.execution.progress(this.PROGRESS_MIN);
                this.execution.executed(0);

                var params = {
                    gymId: this.data()._id,
                    exerciseId: exercise._id,
                    weight: exercise.weight(),
                    repeats: exercise.force() == true ? 0 : exercise.repeats()
                };

                var self = this;
                Game.AjaxInstance.send(this, 'execute', params,
                    function(answer)
                    {
                        if (answer.message != undefined)
                        {
                            Game.Window.message(answer.message);
                            self.execution.busy(false);
                            return;
                        }

                        Game.PlayerPrivate.data().energy(
                            Game.PlayerPrivate.data().energy() - answer.energy
                        );

                        self.execution.speeds = [];
                        self.execution.max = answer.repeatsMax;

                        var i = 0,
                            rest = answer.repeats;
                        while(rest > 0)
                        {
                            rest = rest - 1;
                            self.execution.speeds[i] = rest < 0 ? {
                                complete: (rest + 1) * self.PROGRESS_MAX
                            } : {
                                complete: self.PROGRESS_MAX
                            };
                            i++;
                        }
                        self.start();
                    },
                    function()
                    {
                        self.execution.busy(false);
                    });
            },
            run: function()
            {
                var exercise = this.selected();
                var i = this.execution.executed();
                if (this.execution.progress() >= this.execution.speeds[i].complete)
                {
                    var ii = this.execution.speeds[i].complete == 100 ? i + 1 : i;
                    this.execution.executed(ii);

                    if (this.execution.speeds.length <= i + 1)
                    {
                        this.stop();
                        var journal = exercise.journal();
                        journal.push({ weight: exercise.weight(), cnt: ii });
                        exercise.journal(journal);

                        var self = this;
                        setTimeout(function(){ self.execution.busy(false);}, 1000);
//                        this.execution.busy(false);
                        return;
                    }

                    this.execution.progress(this.PROGRESS_MIN);
                }
                this.execution.progress(this.execution.progress() + 5);
            }
        })
    ;
