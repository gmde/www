var ViewModelDiningRoom = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu, IDisplay, INestedList],
        initialize: function(menu, confirm)
        {
            this.parent(GameItems.DiningRoom);
            this.initMenu(menu);
            this.initList();

            this.selected.push(ko.observable(null)); // category
            this.selected.push(ko.observable(null)); // food
            this.selected.push(ko.observable(null)); // food-detail

            this.selectLevel.push(null);
            this.selectLevel.push(null);
            this.selectLevel.push(null);
        },
        getHandler: function(o)
        {
            this.data(o);
            this.show();
        },
        actFixedUp: function(confirmed)
        {
            if (confirmed == true)
            {
                Game.ajax({ object: this, type: this.type, method: "actFixedUp", params: { desc: this.selected[1]().desc } });
            }
            else
            {
                Game.Confirm.showDialog("Вы уверены, что хотите обменять голоса?", this, this.actFixedUp);
            }
        },
        actFixedUpHandler: function(o)
        {
            if (o.result == true)
            {
                this.fireEvent('actFixedUp');
                this.close();
            }
        },
        selectLevel: []
    });