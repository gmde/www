var AjaxManager = new Class(
    {
        initialize: function()
        {
            this.SERVER_NAME = "http://109.171.100.215:8080/";
            this.URL_END = "callback=?";
            this.TIMEOUT = 10000;
        },
        send: function(sender, method, params, callback, onError)
        {
            if (sender.processing == true)
            {
                Game.errorHandler("Процесс занят");
                return;
            }

            var process = function(mode)
            {
                sender.processing = mode;
                Game.objectsInProcessing(Game.objectsInProcessing() + (mode ? 1 : -1));
            };


            process(true);

            var url = this.SERVER_NAME + sender.type + "?method=" + method + "&" ;

            if (params != null)
            {
                for(var name in params)
                {
                    url = url + name + "=" + params[name] + "&";
                }
            }

            url += this.URL_END;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                timeout: this.TIMEOUT,
                success: function(answer)
                {
                    process(false);
                    if (answer.error != undefined)
                    {
                        Game.errorHandler(answer.error);
                        if (onError != undefined)onError();
                    }
                    else
                    {
                        callback(answer);
                    }
                },
                error: function()
                {
                    process(false);
                    Game.errorHandler('Ошибка сервера, попробуйте еще раз.');
                    if (onError != undefined)onError();
                }
            });
        }

    });