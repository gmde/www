var TopModes =
{
    Friends: 0,
    Olimp: 1
};

var ViewModelTop = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IArrowList],
        initialize: function()
        {
            this.parent(GameItems.Top);
            this.initArrowList(8);

            this.friends = null;
            this.olimp = null;

            this.mode = ko.observable(null);
        },
        toFriends: function()
        {
            if (this.mode() != TopModes.Friends)
            {
                this.mode(TopModes.Friends);

                if (this.friends != null)
                {
                    this.items(this.friends);
                    this.toStart();
                    return;
                }

                var self = this;
                Game.Social.getFriends(function(answer)
                {
                    self.friends = answer;
                    self.items(answer);
                    self.toStart();
                });
            }
        },
        toOlimp: function()
        {
            if (this.mode() != TopModes.Olimp)
            {
                this.mode(TopModes.Olimp);

                if (this.olimp != null)
                {
                    this.items(this.olimp);
                    this.toStart();
                    return;
                }

                var self = this;
                Game.AjaxInstance.send(this, 'olimp', null, function(answer)
                {
                    self.olimp = answer;
                    self.items(answer);
                    self.toStart();
                })
            }
        },
        select: function(player)
        {
            var args = { uid: player.uid };
            this.fireEvent("actSelectPlayer", args);
        }
    });