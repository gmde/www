﻿var ViewModelDiningRoom = new Class(
    {
        Extends: Ajax,
        Implements: [IMenu, ICatalog],
        initialize: function(menu)
        {
            this.parent(GameItems.DiningRoom);
            this.initMenu(menu);
            this.initCatalog(9, 'food');
        },
        get: function(next)
        {
            this.initItems();
            this.show();
        }
    });