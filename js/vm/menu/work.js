var ViewModelWork = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu, IList, ITimer],
        initialize: function(menu)
        {
            this.parent(GameItems.Work);
            this.initList();
            this.initTimer(1000);
            this.initMenu(menu);
        },
        initData: function(data)
        {
            this.initObservableData(data);
            this.data(data);
        },
        get: function()
        {
            this.show();
            this.start();
        },
        initObservableData: function(o)
        {
            for (var i = 0; i < o.length; i++)
            {
                o[i].timer = ko.observable(o[i].time);
            }
            this.data(o);
        },
        run: function()
        {
            for (var i = 0; i < this.data().length; i++)
            {
                var timer = this.data()[i].timer();
                if (timer != "00:00:00") {
                    var h = parseInt(timer.substr(0, 2));
                    var m = parseInt(timer.substr(3, 2));
                    var s = parseInt(timer.substr(6, 2));

                    s--;
                    if (s == -1) {
                        s = 59;
                        m--;
                        if (m == -1) {
                            m = 59;
                            h--;
                        }
                    }
                    var hh = h < 10 ? "0" + h : h;
                    var mm = m < 10 ? "0" + m : m;
                    var ss = s < 10 ? "0" + s : s;
                    this.data()[i].timer(hh + ":" + mm + ":" + ss);
                }
            }
        },
        actFixedUp: function(confirmed)
        {
            if (confirmed == true)
            {
                Game.ajax({ object: this, type: this.type, method: "actFixedUp", params: { desc: this.selected[1]().desc } });
            }
            else
            {
                this.showConfirm("Вы уверены, что хотите обменять голоса?", this, this.actFixedUp);
            }
        },
        actFixedUpHandler: function(o)
        {
            if (o.result == true)
            {
                this.fireEvent('actFixedUp');
                this.close();
            }
        }
    });
