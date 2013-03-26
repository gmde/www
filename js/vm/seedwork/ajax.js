var Ajax = new Class(
    {
        Implements: [IDisplay],
        initialize: function(type)
        {
            this.initDisplay();
            this.type = type;
            this.processing = false;
            this.data = ko.observable(null);
        },
        get: function(next)
        {
            var self = this;
            Game.AjaxInstance.send(this, 'get', null, function(answer)
            {
                self.getHandler(answer, next);
            });
        },
        getHandler: function(answer, next)
        {
            this.data(answer);
            this.show();
            if (next != undefined) next(answer);
        }
    });