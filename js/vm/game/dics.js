var ViewModelDics = new Class(
    {
        Extends: Ajax,
        initialize: function()
        {
            this.parent(GameItems.Dics);
        },

        getFactorsByGroup: function(group)
        {
            var factors = Game.Dics.data().factors;
            var items = [];
            for(var i = 0; i < factors.length; i++)
            {
                var factor = factors[i];
                if (factor.group == group)
                {
                    items.push(factor);
                }
            }
            return items;
        }
    });
