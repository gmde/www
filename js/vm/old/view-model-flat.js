var ViewModelFlat = new Class(
    {
        Extends: IAjax,
        Implements: [Events, IDisplay, IConfirm, IArrow, IMouse],
        initialize: function(viewModel, info, defense, confirm) {
            this.parent(viewModel);
            this.initDisplay();
            this.initConfirm(confirm);
            this.initArrow();
            this.initMouse();

            this.params = null;

            this.info = info;
            this.defense = defense;

            this.room = ko.observable(null);
            this.totalCost = ko.observable(0);
        },

        getHandler : function(flat) {
            this.resetArrow();
            this.defense.hide();
            this.info.hide();

            flat = this.initData(flat);
            this.data(flat);

            this.params = { guest: this.data().guest, uid: this.data().uid };

            this.process();
            this.show();
        },
        process: function(){
            this.room(this.data().rooms[this.i]);
            var right = false;
            if (this.data().rooms.length - 1 > this.i)
            {
                if (this.data().guest == false)
                {
                    right = true;
                }
                else
                {
                    right = this.data().rooms[this.i + 1].available;
                }
            }
            this.right(right);
            this.left(this.i > 0);
        },
        initData: function(flat) {
            var totalFlat = 0;

            for (var r = 0; r < flat.rooms.length; r++) {
                var totalRoom = 0;
                var room = flat.rooms[r];
                var accesorize = new Array();

                if (room.items == null) continue;
                for (var i = 0; i < room.items.length; i++) {
                    var item = room.items[i];

                    totalRoom += item.cost.d;
                    item.x1 = item.x + "px";
                    item.y1 = item.y + "px";
                    item.x2 = item.x + "px";
                    item.y2 = item.y + "px";
                    item.pictureShop = item.display == 4 ? item.picture + ".png" : item.picture + "_shop.jpg";
                    item.picture1 = null;
                    item.picture2 = null;
                    item.hovered = ko.observable(false);

                    switch (item.display) {
                        case 0:
                            item.picture1 = item.picture + ".jpg";
                            break;
                        case 1:
                            item.picture1 = item.picture + ".png";
                            break;
                        case 2:
                            item.picture1 = item.picture + "_png24.png";
                            item.picture2 = item.picture + "_png8.png";
                            break;
                        case 3:
                            item.picture1 = item.picture + "_png8.png";
                            item.picture2 = item.picture + "_jpeg.jpg";
                            item.y2 = "163px";
                            break;
                        case 4: // accessorize
                            item.picture1 = item.picture + ".png";
                            if (item.groupDesc == "Защита" && flat.guest == true) {
                                this.defense.data(item);
                                this.defense.show();
                            }
                            accesorize.push(item);
                            break;
                    }
                }
                room.totalCost = ko.observable(totalRoom);
                room.accessorize = ko.observable(accesorize);
                totalFlat += totalRoom;
            }
            this.totalCost(totalFlat);
            return flat;
        },
        select: function(item) {
            this.params.id = item.id;
            this.params.coords = { x: this.mouseX(), y: this.mouseY()};
            this.params.idRoom = this.room().id;

            switch (item.groupDesc) {
                case "Сундук":
                {
                    this.actOpenChest(false);
                    return;
                }
                case "Мусор":
                {
                    this.actCleanGarbage();
                    return;
                }
            }
            if (this.data().guest == true) {
                this.actTheftItem(false);
                return;
            }
            this.info.data(item);
            this.info.show();
        },

        actTheftItem: function(args) {
            if (args == true) {
                this.game.ajax({ object: this, type: this.type, method: "actTheftItem", params: this.params });
            }
            else if (args == false) {
                this.showConfirm("Вы уверены, что хотите украсть эту вещь? Затраты энергии: 5, вероятность: 15%", { object: this, method: "actTheftItem" });
            }
            else {
                args.params = this.params;
                this.fireEvent("actTheftItem", args);
            }
        },
        actCleanGarbage: function(args) {
            if (args == undefined) {
                this.game.ajax({ object: this, type: this.type, method: "actCleanGarbage", params: this.params });
            }
            else {
                args.params = this.params;
                this.fireEvent("actCleanGarbage", args);
            }
        },
        actOpenChest: function(args) {
            if (args == true)
                this.game.ajax({ object: this, type: this.type, method: "actOpenChest", params : this.params });
            else if (args == false)
                this.showConfirm("Вы уверены, что хотите открыть этот сундук?", { object: this, method: "actOpenChest" });
            else {
                args.params = this.params;
                this.fireEvent("actOpenChest", args);
            }
        },
        actUnlock: function(args) {
            if (args == true)
                this.game.ajax({ object: this, type: this.type, method: "actUnlock", params : this.params });
            else if (args == false)
                this.showConfirm("Комната заблокирована. Требования: уровень " + this.room().requirements.level + ". Хотите разблокировать эту комнату за " + this.room().requirements.coin + " монет?", { object: this, method: "actUnlock" });
            else {
                args.params = this.params;
                this.fireEvent("actUnlock", args);
            }
        }
    });