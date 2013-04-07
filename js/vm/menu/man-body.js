var ManViewTypes =
{
    Front: 'front',
    Back: 'back'
};

var ViewModelManBody = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMouse, IDic],
        initialize: function()
        {
            this.parent(GameItems.ManBody);
            this.initMouse();

            this.front = {};
            this.back = {};

            this.viewType = ko.observable(null);

            this.dicMuscles = null;
            this.dicMusclesView = null;
        },
        switchMode: function(viewType, view)
        {
            if (this.viewType() != viewType)
            {
                this.viewType(viewType);
                this.data(view);
            }
            this.show();
            $('#image-body').maphilight({fillColor: 'ff0000', strokeOpacity: 0, fillOpacity: 0.3, fade: true});
        },
        toFront: function()
        {
            this.switchMode(ManViewTypes.Front, this.front);
        },
        toBack: function()
        {
            this.switchMode(ManViewTypes.Back, this.back);
        },
        getFrazzleDesc: function(value)
        {
            if (value == 0) return "Усталости нет";
            if (0 < value && value <= 0.2) return "Небольшая усталость";
            if (0.2 < value && value <= 0.5) return "Средняя усталость";
            if (0.5 < value && value <= 0.8) return "Сильная усталость";
            if (0.8 < value && value <= 1) return "Очень сильная усталость";
        },
        getPowerDesc: function(value)
        {
            if (-0.3 < value && value < 0) return "Слабый мышечный тонус";
            if (value == 0) return "Нормальный мышечный тонус";
            if (0 < value && value <= 0.1) return "Повышенный мышечный тонус";
            if (0.1 < value && value <= 0.2) return "Сильный мышечный тонус";
            if (0.2 < value && value <= 0.3) return "Очень сильный мышечный тонус";
        },
        getHandler: function(body)
        {
            var level = Game.PlayerPublic.level();
            if (level == undefined) throw 'level is undefined';

            var result = $.grep(this.dicMusclesView, function(e){ return e._id == level; });
            this.front.muscles = result[0].front;
            this.front.image = 'images/body/' + level + '_front.png';
            this.back.muscles = result[0].back;
            this.back.image = 'images/body/' + level + '_back.png';

            var self = this;
            var handler = function(view)
            {
                for (var i = 0; i < view.muscles.length; i++)
                {
                    var muscle = view.muscles[i];
                    var musclePlayerInfo = body[muscle._id];
                    var muscleBaseInfo = self.dicMuscles[muscle._id];
                    muscle.name = muscleBaseInfo.name;
                    muscle.frazzle = self.getFrazzleDesc(musclePlayerInfo.frazzle);
                    muscle.power = self.getPowerDesc(musclePlayerInfo.power);
                    muscle.hovered = ko.observable(false);
                }
            };

            handler(this.front);
            handler(this.back);

            this.data(this.front);

            this.joinMuscles(body);
            this.toFront();
        },

        joinMuscles: function(body)
        {
            for (var i = 0; i < body.length; i++)
            {
                var muscle = body[i];
                var muscleType = this.dicMuscles[i];

                muscle.name = muscleType.name;
                muscle.power = muscleType.power + muscleType.power * muscle.power;
                muscle.mass = muscleType.mass;
            }
        }
    });