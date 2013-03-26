var ViewModelMan = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu],
        initialize: function(menu, factors, info, body, awards)
        {
            this.parent(GameItems.Man);
            this.initMenu(menu);

            this.ManFactors = factors;
            this.ManInfo = info;
            this.ManBody = body;
            this.ManAwards = awards;
        },
        get: function()
        {
            this.ManFactors.get();
            this.ManInfo.get();
            this.ManBody.get();
            this.ManAwards.get();
            this.show();
        },
        hide: function()
        {
            if (this.display() == true)this.display(false);
            this.ManFactors.hide();
            this.ManInfo.hide();
            this.ManBody.hide();
            this.ManAwards.hide();
        }
    });
