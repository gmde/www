var AjaxTest = function(o)
{
    var obj;

    switch (o.type)
    {
        case GameItems.ManAwards:
            obj = oManAwards;
            break;
        case GameItems.ManBody:
            obj = oManBody;
            break;
        case GameItems.ManFactors:
            obj = oManFactors;
            break;
        case GameItems.Work:
            obj = oWork;
            break;
        case GameItems.Bank:
            obj = oBank;
            break;
        case GameItems.PlayerPublic:
            if (o.params == null)
            {
                obj = oPlayerPublicMyself;
                break;
            }
            switch (o.params.uid.toString())
            {
                case "121717236":
                    obj = oPlayerPublicGuest;
                    break;
                case "49632214":
                    obj = oPlayerPublicGuestGuard;
                    break;
                case "5653333":
                    obj = oPlayerPublicMyself;
                    break;
            }
            break;
        case GameItems.PlayerPrivate:
            switch (o.method)
            {
                case "get":
                    obj = oPlayerPrivate;

                    break;

                case "actGetPay":
                    obj = oResultTrue;

                    break;
            }
            break;
        case GameItems.Updates:
            obj = oUpdates;
            break;
        case GameItems.Top:
            if (o.params.mode == TopModes.Friends)
            {
                switch (o.params.partition)
                {
                    case 0:
                        obj = oTopPlayersPartition0;

                        break;
                    case 1:
                        obj = oTopPlayersPartition1;

                        break;
                }
            }
            else
            {
                obj = [];
            }
            break;
    }
    return obj;
};