var ViewModelPlayerPublic = new Class(
    {
        Extends: Ajax,
        initialize: function(id)
        {
            this.parent(GameItems.PlayerPublic);

            this.MASS_BASE = 40;

            this.id = id;
            this.level = ko.observable(null);
            this.factors = ko.observableArray(null);

            this.mass = ko.computed(function()
            {
                if (this.level() == null || this.factors() == null) return '?';
                var foods = $.grep(this.factors(), function(e){ return e.group == 'food'; });

                var mass = this.MASS_BASE + this.MASS_BASE * this.level() / 30;
                for (var i = 0; i < foods.length; i++)
                {
                    mass += foods[i].weight / 1000;
                }
                return mass.toFixed(1) + " кг";
            }, this);
        },
        getHandler: function(o, next)
        {
            this.level(o.level);

            var info = Game.Social.getInfo();
            o.avatar = info.avatar;
            o.name = info.name;
            o.link = SocialHttpId + this.id;

            this.parent(o, next);
        }
    });