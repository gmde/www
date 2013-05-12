var ViewModelRest = new Class(
    {
        Extends: Ajax,
        Implements: [IMenu, ICatalog],
        initialize: function(menu)
        {
            this.parent(GameItems.Rest);
            this.initMenu(menu);
            this.initCatalog(9, 'rest');
        },
        get: function(next)
        {
            this.initItems();
            this.show();
        }
    });