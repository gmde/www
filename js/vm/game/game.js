var ViewModelGame = new Class(
    {
        initialize: function()
        {
            this.Auth = new ViewModelAuth();
            this.Dics = new ViewModelDics();

            this.Maps = {};

            this.AjaxInstance = new AjaxManager();
            this.Social = new VKManager();
            this.Message = new ViewModelWindow("Сообщение");
            this.Error = new ViewModelWindow("Ошибка");
            this.Confirm = new ViewModelConfirm();
            this.Window = new ViewModelWindow("Сообщение");

            this.Factors = new ViewModelFactors({ desc: "Физическая форма", img: ""});
            this.ManAwards = new ViewModelManAwards();
            this.ManInfo = new ViewModelPlayerPublic();
            this.ManBody = new ViewModelManBody();

            this.Gym = new ViewModelGym();

            this.Man = new ViewModelMan({ desc: "Физическая форма", img: ""}, this.ManInfo, this.ManBody, this.ManAwards);
            this.Bank = new ViewModelBank({ desc: "Банк", img: ""});
            this.DiningRoom = new ViewModelDiningRoom({ desc: "Жральня", img: ""});
            this.Work = new ViewModelWork({ desc: "Работа", img: ""});
            this.Rest = new ViewModelRest({ desc: "Отдыхальня", img: ""});
            this.Stimulant = new ViewModelStimulant({ desc: "Спортивное питание", img: ""});
            this.Training = new ViewModelTraining({ desc: "Тренировка", img: ""}, this.Gym);
            //this.Shop = new ViewModelWork({ desc: "Магазин", img: ""});
            this.Jobbing = new ViewModelJobbing({ desc: "Подработка", img: ""});
            //this.Inv = new ViewModelWork({ desc: "Вещи", img: ""});
            this.Records = new ViewModelWork({ desc: "Рекорды", img: ""});

            this.Menu = new ViewModelMenu([
                this.Man,
                this.Factors,
                //this.Inv,
                this.Bank,
                this.Work,
                this.Jobbing,
                //this.Shop,
                this.Training,
                this.DiningRoom,
                this.Rest,
                this.Stimulant,
                this.Records
            ]);

            this.Top = new ViewModelTop();
            this.PlayerPublic = new ViewModelPlayerPublic();
            this.PlayerPrivate = new ViewModelPlayerPrivate();
            this.Updates = new ViewModelUpdates();

            this.objectsInProcessing = ko.observable(0);
            this.loading = ko.computed(
                function()
                {
                    if (this.objectsInProcessing() == 0) return false;
                    else return true;
                }
            , this);
        },

        errorHandler: function(error)
        {
            this.Error.message(error);
        }
    });
