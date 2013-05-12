var ViewModelBank = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu, INestedList],
        initialize: function(menu) {
            this.parent(GameItems.Bank);
            this.initMenu(menu);
            this.initList();

            this.selected.push(ko.observable(null)); // type
            this.selected.push(ko.observable(null)); // type-detail

            var self = this;
            this.selectLevel.push(null);
            this.selectLevel.push(function(item) {
                self.actExchange(false);
            });
        },
        initData: function(data)
        {
            this.data(data);
        },
        get: function()
        {
            this.show();
        },
//        getHandler: function(o) {
//            this.parent(o);
//            this.show();
//        },
        selectLevel: []
    });
