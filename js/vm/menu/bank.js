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
        getHandler: function(o) {
            this.parent(o);
            this.show();
        },
        actExchange: function(confirmed) {
            if (confirmed == true) {
                Game.ajax({ object: this, type: this.type, method: "actExchange", params : { desc: this.selected[1]().desc } });
            }
            else {
                Game.Confirm.showDialog("Вы уверены, что хотите обменять голоса?", this, this.actExchange);
            }
        },
        actExchangeHandler: function(o) {
            var o = JSON.parse(o);
            if (o.result == true) {
                this.fireEvent('actExchange');
                this.close();
            }
        },
        selectLevel: []
    });
