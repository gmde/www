var ViewModelGym = new Class(
    {
        Extends: Ajax,
        Implements: [IArrowList, IDic, ITimer],
        initialize: function()
        {
            this.initTimer(50);

            this.WEIGHT_MIN = 20;
            this.MAX_PROGRESS = 100;
            this.MIN_PROGRESS = 0;

            this.progress = ko.observable(0);
            this.cntFact = 0;
            this.speeds = null;
            this.currentSpeed = null;
            this.busy = ko.observable(false);

            this.parent(GameItems.Gym);
            this.initArrowList(10);
        },
        get: function(gym)
        {
            this.data(gym);
            this.items(gym.exercises);
            this.show();
        },
        select: function(exercise)
        {
            if (this.busy() == true) return;
            if (exercise.init == undefined)
            {
                exercise.weight = ko.observable(this.WEIGHT_MIN);
                exercise.cntPlan = ko.observable(0);
                exercise.cntExecuted = ko.observable(0);
                exercise.journal = ko.observableArray([]);
                exercise.init = true;
            }
            this.selected(exercise);
        },
        execute: function()
        {
            var exercise = this.selected();
            if (exercise.cntPlan() < 1)
            {
                Game.Window.message("Количество повторений должно быть больше 0");
                return;
            }

            this.busy(true);
            this.progress(this.MIN_PROGRESS);

            var params = {
                exerciseId: exercise._id,
                weight: exercise.weight(),
                cntPlan: exercise.cntPlan()
            };

            var self = this;
            Game.AjaxInstance.send(this, 'execute', params, function(answer)
                {
                    Game.Window.message(answer.toString());

                    exercise.cntExecuted(0);

                    self.cntFact = answer.cntFact;
                    var cntMax = answer.cntMax;
                    var energy = answer.energy;

                    Game.PlayerPrivate.data().energy(
                        Game.PlayerPrivate.data().energy() - energy
                    );

                    self.speeds = [10, 10, 10, 9, 9, 9, 8, 8, 8, 7];
                    self.currentSpeed = self.speeds[0];
                    self.start();
                },
                function()
                {
                    self.busy(false);
                });
        },
        run: function()
        {
            var exercise = this.selected();

            if (this.progress() >= this.MAX_PROGRESS)
            {
                this.progress(this.MIN_PROGRESS);
                exercise.cntExecuted(exercise.cntExecuted() + 1);
                if (exercise.cntExecuted() == this.cntFact)
                {
                    this.busy(false);
                    var journal = exercise.journal();
                    journal.push({ weight: exercise.weight(), cnt: exercise.cntExecuted() });
                    exercise.journal(journal);
                    this.stop();
                    return;
                }
                this.currentSpeed = this.speeds[exercise.cntExecuted()];
            }
            this.progress(this.progress() + this.currentSpeed);
        }
    });
