/*
var ViewModelWork = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu, IDisplay, INestedList, IConfirm],
        initialize: function(menu, path, confirm) {
            this.parent();
            this.type = GameItems.Work;
            this.initDisplay();
            this.initMenu(menu);
            this.initList();
            this.initConfirm(confirm);

            this.path = path;

            this.selected.push(ko.observable(null)); // prof
            this.selected.push(ko.observable(null)); // post
            this.selected.push(ko.observable(null)); // post-detail

            this.selectLevel.push(null);
            this.selectLevel.push(null);
            this.selectLevel.push(null);
        },
        getHandler: function(o) {
            //this.parent(result);

            o = this.addImgPath(o);
            this.data(o);

            this.show();
        },
        addImgPath: function(o) {
            for (var i = 0; i < o.length; i++) {
                o[i].img = this.path + o[i].img + ".png";
            }
            return o;
        },
        actFixedUp: function(confirmed) {
            if (confirmed == true) {
                Game.ajax({ object: this, type: this.type, method: "actFixedUp", params : { desc: this.selected[1]().desc } });
            }
            else {
                this.showConfirm("Вы уверены, что хотите обменять голоса?", this, this.actFixedUp);
            }
        },
        actFixedUpHandler: function(o) {
            if (o.result == true) {
                this.fireEvent('actFixedUp');
                this.close();
            }
        },
        selectLevel: []
    });
*/