var ITimer = new Class(
    {
        initTimer: function(delta)
        {
            this.interval = null;
            this.delta = delta;
        },
        start: function()
        {
            this.stop();
            this.beforeStart();

            var self = this;
            this.interval = setInterval(function()
            {
                self.run();
            }, this.delta);
        },
        stop: function()
        {
            clearInterval(this.interval);
        },
        run: function()
        {
        },
        beforeStart: function()
        {
        }
    }
);

var IDic = new Class(
    {
        joinTo: function(array, dic)
        {
            var result = [];
            for (var i = 0; i < array.length; i++)
            {
                var id = array[i];
                for (var j = 0; j < dic.length; j++)
                {
                    var item = dic[j];
                    if (id == item._id)
                    {
                        result.push(item);
                    }
                }
            }
            return result;
        }
    }
);

var ITimerClock = new Class(
    {
        Implements: [ITimer],
        initTimerClock: function(time)
        {
            this.TIME_INIT = time;
            this.initTimer(1000);
            this.time = ko.observable(null);
        },
        beforeStart: function()
        {
            this.time(this.TIME_INIT);
        },
        run: function()
        {
            var time = this.time();
            if (time != "00:00:00")
            {
                var h = parseInt(time.substr(0, 2));
                var m = parseInt(time.substr(3, 2));
                var s = parseInt(time.substr(6, 2));

                s--;
                if (s == -1)
                {
                    s = 59;
                    m--;
                    if (m == -1)
                    {
                        m = 59;
                        h--;
                    }
                }
                var hh = h < 10 ? "0" + h : h;
                var mm = m < 10 ? "0" + m : m;
                var ss = s < 10 ? "0" + s : s;
                this.time(hh + ":" + mm + ":" + ss);
                if (this.time() == "00:00:00") this.timeIsUp();
            }
        },
        timeIsUp: function()
        {
        }
    }
);

var IMouse = new Class(
    {
        initMouse: function()
        {
            this.mouseX = ko.observable();
            this.mouseY = ko.observable();

            this.x = ko.computed(function()
            {
                return this.mouseX() + "px";
            }, this);
            this.y = ko.computed(function()
            {
                return this.mouseY() + "px";
            }, this);
        },
        mouseOver: function(item)
        {
            var result = $.grep(this.data().muscles, function(e)
            {
                return e._id == item._id;
            });
            result[0].hovered(true);
        },
        mouseOut: function(item)
        {
            var result = $.grep(this.data().muscles, function(e)
            {
                return e._id == item._id;
            });
            result[0].hovered(false);
        },
        mouseMove: function(event)
        {
            this.mouseX(event.layerX + 15);
            this.mouseY(event.layerY + 10);
        }
    });

var IRandom = new Class(
    {
        getRandom: function(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
);

var IList = new Class(
    {
        initList: function()
        {
            this.items = ko.observableArray(null);
            this.selected = ko.observable(null);
        },
        select: function(item)
        {
            this.selected(item);
            if (this.selectOverride) this.selectOverride(item);
        }
    });

var IArrowList = new Class(
    {
        Implements: [IList],
        initArrowList: function(maxShownItems)
        {
            this.initList();
            this.maxShownItems = maxShownItems;
            this.i = ko.observable(0);

            this.shownItems = ko.computed(function()
            {
                if (this.items() == null) return null;
                var items = [];
                for (var i = this.i(); i < this.items().length && i < this.i() + this.maxShownItems; i++)
                {
                    items.push(this.items()[i]);
                }
                return items;
            }, this);

            this.item = ko.computed(function()
            {
                if (this.items() == null) return null;
                    return this.items()[this.i()];
            }, this);

            this.left = ko.computed(function()
            {
                return this.i() > 0;
            }, this);

            this.right = ko.computed(function()
            {
                if (this.items() == null) return null;
                return this.i() < this.items().length - this.maxShownItems;
            }, this)
        },
        toLeft: function()
        {
            if (this.left() == false) return;
            this.i(this.i() - 1);
        },
        toRight: function()
        {
            if (this.right() == false) return;
            this.i(this.i() + 1);
        },
        toStart: function()
        {
            this.i(0);
        }
    });

var INestedList = new Class(
    {
        initList: function()
        {
            this.selected = [];
        },
        select: function(n, item)
        {
            this.selected[n](item);
            this.clear(n + 1);
            if (this.selectLevel[n]) this.selectLevel[n](item);
        },
        clear: function(n)
        {
            for (var i = n; i < this.selected.length; i++)
            {
                this.selected[i](null);
            }
        }
    });

var IDisplay = new Class(
    {
        initDisplay: function()
        {
            this.display = ko.observable(false);
        },
        hide: function()
        {
            if (this.display() == true)this.display(false);
        },
        show: function()
        {
            if (this.display() == false)this.display(true);
        }
    });

var IMenu = new Class(
    {
        initMenu: function(item)
        {
            this.desc = item.desc;
            this.img = item.img;
        },
        open: function()
        {
            if (this.clear)this.clear(0);
            if (this.get)this.get();
        },
        close: function()
        {
            if (this.hide) this.hide();
        }
    });
