var ViewModelJobbing = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu, IList, ITimerClock, IRandom],
        initialize: function(menu)
        {
            this.parent(GameItems.Jobbing);
            this.initList();
            this.initTimerClock('00:01:00');
            this.initMenu(menu);

            this.weight = ko.observable();
            this.itemsSelected = ko.observableArray([]);

            this.summaryWeight = ko.computed(function()
                {
                    var weight = 20;
                    for (var i = 0; i < this.itemsSelected().length; i++)
                    {
                        weight += (this.itemsSelected()[i].weight * 2);
                    }
                    return weight;
                }, this);

            this.items(
                [
                    { weight: 30, header: "30", x: "10px", y: "10px", degree: 'rotate(0deg)', name: "Диск, 30 кг", d30: true, d25: false, d20: false, d15: false, d10: false, d5: false, d2d5: false, d1d25: false },
                    { weight: 25, header: "25", x: "10px", y: "10px", degree: 'rotate(40deg)', name: "Диск, 25 кг", d30: false, d25: true, d20: false, d15: false, d10: false, d5: false, d2d5: false, d1d25: false },
                    { weight: 20, header: "20", x: "100px", y: "10px", degree: 'rotate(-50deg)', name: "Диск, 20 кг", d30: false, d25: false, d20: true, d15: false, d10: false, d5: false, d2d5: false, d1d25: false },
                    { weight: 15, header: "15", x: "10px", y: "100px", degree: 'rotate(120deg)', name: "Диск, 15 кг",  d30: false, d25: false, d20: false, d15: true, d10: false, d5: false, d2d5: false, d1d25: false },
                    { weight: 10, header: "10", x: "20px", y: "10px", degree: 'rotate(230deg)', name: "Диск, 10 кг", d30: false, d25: false, d20: false, d15: false, d10: true, d5: false, d2d5: false, d1d25: false },
                    { weight: 5, header: "5", x: "10px", y: "50px", degree: 'rotate(10deg)', name: "Диск, 5 кг", d30: false, d25: false, d20: false, d15: false, d10: false, d5: true, d2d5: false, d1d25: false },
                    { weight: 2.5, header: "2,5", x: "10px", y: "10px", degree: 'rotate(40deg)', name: "Диск, 2.5 кг", d30: false, d25: false, d20: false, d15: false, d10: false, d5: false, d2d5: true, d1d25: false },
                    { weight: 1.25, header: "1,25", x: "10px", y: "10px", degree: 'rotate(10deg)', name: "Диск, 1.25 кг", d30: false, d25: false, d20: false, d15: false, d10: false, d5: false, d2d5: false, d1d25: true }
                ]
            );

            this.itemsSelectedLeft = ko.computed(function()
            {
                var arr = [];
                for (var i = this.itemsSelected().length - 1; i >= 0; i--)
                {
                    arr.push(this.itemsSelected()[i]);
                }
                return arr;
            }, this);

            this.itemsSelectedRight = ko.computed(function()
            {
                return this.itemsSelected();
            }, this);
        },
        select: function(disc)
        {
            var arrSelected = this.itemsSelected();
            var arr = this.items();
            var arrNew = [];
            for (var i = 0; i < arr.length; i++)
            {
                if (arr[i].weight != disc.weight)
                {
                    arrNew.push(arr[i]);
                }
                else
                {
                    arrSelected.push(arr[i]);
                }
            }
            this.items(arrNew);
            this.itemsSelected(arrSelected);
            if (this.summaryWeight() == this.weight())
            {
                this.stop();
                Game.AjaxInstance.send(this, 'complete', null, function(answer)
                {
                    var text = "Вес собран. Награда: " + answer.prize.money + " долларов и " +
                        answer.prize.gold + " монет";
                    Game.Window.message(text);
                    Game.PlayerPrivate.get();
                });
            }
        },
        getHandler: function(o)
        {
            if (o.message != undefined)
            {
                Game.Window.message(o.message);
                return;
            }

            var weight = o;
            this.itemsSelected([]);

            var arr = this.items();

            for(var i = 0; i < arr.length; i++)
            {
                arr[i].x = this.getRandom(0, 300) + 'px';
                arr[i].y = this.getRandom(0, 200) + 'px';
                arr[i].degree = 'rotate(' + this.getRandom(0, 360) + 'deg)';
            }
            this.items(arr);

            this.weight(weight);
            Game.Confirm.showDialog("Необходимо собрать штангу весом: " + weight + ". Начать?", this, this.begin)
        },
        begin: function(confirm)
        {
            if (confirm == true)
            {
                this.show();
                this.start();
            }
        },
        timeIsUp: function()
        {
            this.hide();
            Game.Window.message("Время вышло");
        }
    });
