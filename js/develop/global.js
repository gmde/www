var SocialHttpRoot = "http://vk.com/";
var SocialHttpId = SocialHttpRoot + "id";

var GameItems =
{
    Auth: "",
    Dics: "dics",
    PlayerPrivate: "private",
    PlayerPublic: "public",
    Top: "top",
    Olimp: "olimp",
    Bank: "bank",
    //Shop: "shop",
    Training: "training",
    Gym: "gym",
    Rest: "factors",
    Stimulant: "factors",
    Work: "work",
    //Rat: "rat",
    //Inv: "inv",
    ManFactors: "factors",
    ManBody: "body",
    ManAwards: "awards",
    DiningRoom: "factors",
    Jobbing: "jobbing"
}

var Game;

function Start(f)
{
    infuser.defaults.templateUrl = "view";
    Game = new ViewModelGame();

    Game.Auth.auth(function()
    {
        Game.Dics.get(function(dics)
        {
            Game.Training.initDic(dics.exercises, dics.gyms);
            Game.Factors.dicFactors = dics.factors;
            Game.ManAwards.dicAwards = dics.awards;
            Game.ManBody.dicMuscles = dics.muscles;
            Game.ManBody.dicMusclesView = dics.muscles_view;
            Game.Top.toFriends();

            f();
            ko.applyBindings(Game);
        });
    });
}
