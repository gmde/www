var ViewModelAuth = new Class(
    {
        Extends: Ajax,
        Implements: Events,
        initialize: function()
        {
            this.parent(GameItems.Auth);
        },
        auth: function(next)
        {
            Game.AjaxInstance.send(this, 'auth', { playerId: 0, authKey: '123'}, function(answer)
            {
                console.log(answer);
                if (next != undefined)next();
            });
        }
    });
