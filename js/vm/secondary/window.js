var ViewModelWindow = new Class(
    {
        Implements: [IDisplay],
        initialize: function(header)
        {
            this.initDisplay();
            this.header = ko.observable(header);
            this.wrap = ko.observable(null);
        },
        message: function(text)
        {
            this.wrap(text);
            this.show();
        }
    });
