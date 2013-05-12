var ViewModelStimulant = new Class(
    {
        Extends: Ajax,
        Implements: [IMenu, ICatalog],
        initialize: function(menu)
        {
            this.parent(GameItems.Stimulant);
            this.initMenu(menu);
            this.initCatalog(9, 'stimulant');
        },
        get: function(next)
        {
            this.initItems();
            this.show();
        }
    });