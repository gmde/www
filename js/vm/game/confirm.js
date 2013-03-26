var ViewModelConfirm = new Class(
    {
        Extends: ViewModelWindow,
        initialize: function()
        {
            this.parent("Confirmation");
            this.context = null;
            this.callback = null;
        },
        showDialog: function(message, context, callback)
        {
            this.context = context;
            this.callback = callback;
            this.message(message);
        },
        yes: function()
        {
            this.hide();
            if (this.callback != null) this.callback.call(this.context, true);
        },
        no: function()
        {
            this.hide();
        }
    });
