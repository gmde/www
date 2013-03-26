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
            //this.Warning = new ViewModelWindow("Предупреждение");
            this.Confirm = new ViewModelConfirm();
            this.Window = new ViewModelWindow("Сообщение");
            //this.Notification = new ViewModelNotification();

            this.ManFactors = new ViewModelManFactors();
            this.ManAwards = new ViewModelManAwards();
            this.ManInfo = new ViewModelPlayerPublic();
            this.ManBody = new ViewModelManBody();

            this.Gym = new ViewModelGym();

            this.Man = new ViewModelMan({ desc: "Физическая форма", img: ""}, this.ManFactors, this.ManInfo, this.ManBody, this.ManAwards);
            this.Bank = new ViewModelBank({ desc: "Банк", img: ""});
            this.DiningRoom = new ViewModelDiningRoom({ desc: "Столовая", img: ""});
            this.Work = new ViewModelWork({ desc: "Работа", img: ""});
            this.Rest = new ViewModelWork({ desc: "Отдых", img: ""});
            this.Training = new ViewModelTraining({ desc: "Тренировка", img: ""}, this.Gym);
            this.Shop = new ViewModelWork({ desc: "Магазин", img: ""});
            this.Jobbing = new ViewModelJobbing({ desc: "Подработка", img: ""});
            this.Inv = new ViewModelWork({ desc: "Вещи", img: ""});
            this.Records = new ViewModelWork({ desc: "Рекорды", img: ""});

            this.Menu = new ViewModelMenu([
                this.Man,
                this.Inv,
                this.Bank,
                this.Work,
                this.Jobbing,
                this.Shop,
                this.Training,
                this.DiningRoom,
                this.Rest,
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

        init: function()
        {
            this.initEvents();
        },

//        ajax: function(o)
//        {
//            this.AjaxInstance.send(o);
//        },

        errorHandler: function(error)
        {
            this.Error.message(error);
        },

        initEvents: function()
        {
            var self = this;
            this.Top.addEvent("actSelectPlayer", function(args)
            {
                self.handlerSelectPlayer(args);
            });
            this.PlayerPrivate.addEvent("actGetPay", function(args)
            {
                self.handlerGetPay(args);
            });
        },

        handlerSelectPlayer: function(args)
        {
            this.PlayerPublic.get(args);
        },
        handlerGetPay: function(args)
        {
            this.PlayerPublic.get();
            this.PlayerPrivate.get();
            this.Message.message("Поздравляем! Вы получили зарплату.");
        },
        handlerFixedUp: function(args)
        {
            this.PlayerPublic.get();
            this.PlayerPrivate.get();
            this.Message.message("Поздравляем! Вы перешли на новую должность.");
        },
        handlerExchange: function(args)
        {
            this.PlayerPublic.get();
            this.PlayerPrivate.get();
            this.Message.message("Обмен голосов прошёл успешно.");
        },
        handlerSell: function(args)
        {
            this.PlayerPrivate.get();
            this.Message.message("Вещь продана.");
        },
        handlerHide: function(args)
        {
            this.PlayerPrivate.get();
            this.Message.message("Вещь перемещена в инвентарь.");
        },
        handlerUnlock: function()
        {
            this.PlayerPrivate.get();
            this.Message.message("Комната разблокирована.");
        },

        startApp: function()
        {
            this.PlayerPublic.get();
            this.PlayerPrivate.get();
            this.Top.get();
        }
    });
