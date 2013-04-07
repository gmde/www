var ViewModelPlayerPrivate = new Class(
    {
        Extends: Ajax,
        Implements: Events,
        initialize: function(id)
        {
            this.parent(GameItems.PlayerPrivate);
            this.id = id;
        },
        getHandler: function(privateInfo, next)
        {
            //TODO: get social data
            privateInfo.friends = 5;
            privateInfo.energy = ko.observable(privateInfo.energy);
            privateInfo.energyDesc = ko.computed(function(){
                return privateInfo.energy() + "/" + privateInfo.energyMax;
            }, this);

            this.parent(privateInfo, next);
        },
        act: function(args)
        {
            this.fireEvent('actPlayerPrivate', args);
        }
    });
