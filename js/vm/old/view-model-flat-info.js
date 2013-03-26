var ViewModelFlatInfo = new Class(
    {
        Extends: IAjax,
        Implements: [Events, IDisplay, IConfirm],
        initialize: function(viewModel, confirm) {
            this.parent(viewModel);
            this.initDisplay();
            this.initConfirm(confirm);
        },
        actSell: function(args) {
            if (args == true) {
                this.game.ajax({ object: this, type: this.type, method: "actSell", params : { id: this.data().id } });
            }
            else if (args == false) {
                this.showConfirm("Вы уверены, что хотите продать эту вещь? Доход от продажи будет составлять: " + Math.round(this.data().cost.d * 0.7) + "$", { object: this, method: "actSell" });
            }
            else {
                this.hide();
                this.fireEvent("actSell", args);
            }
        },

        actHide: function(args) {
            if (args == true) {
                this.game.ajax({ object: this, type: this.type, method: "actHide", params : { id: this.data().id } });
            }
            else if (args == false) {
                this.showConfirm("Вы уверены, что хотите убрать эту вещь?", { object: this, method: "actHide" });
            }
            else {
                this.hide();
                this.fireEvent("actHide", args);
            }
        }
    });
