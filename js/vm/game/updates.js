var ViewModelUpdates = new Class(
    {
        Implements: [IDisplay, IList],
        initialize: function()
        {
            this.initDisplay();
            this.initList();

            this.desc = "Обновления"
        }
    });
