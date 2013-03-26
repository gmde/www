var ViewModelMenu = new Class(
    {
        Implements: IList,
        initialize: function(items)
        {
            this.initList();
            this.items = items;
            this.itemIsOpen = ko.computed(function()
            {
                for (var i = 0; i < this.items.length; i++)
                {
                    if (this.items[i].display)
                    {
                        if (this.items[i].display() == true) return true;
                    }
                }
                return false;
            }, this);
        },
        selectOverride: function(item)
        {
            for (var i = 0; i < this.items.length; i++)
            {
                var it = this.items[i];
                if (it.close)it.close();
            }
            item.open();
        }
    });
