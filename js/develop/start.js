function StartWindow()
{
    Game.Window.message("text");
}

function StartConfirm()
{
    Game.Confirm.showDialog("text", function(result){ alert(result);});
}

function StartManFactors()
{
    Game.ManFactors.get();
}

function StartManInfo()
{
    Game.ManInfo.get();
}

function StartManBody()
{
    Game.PlayerPublic.get(function()
    {
        Game.Menu.select(Game.Man);
    });
}

function StartManAwards()
{
    Game.ManAwards.get();
}

function StartMan()
{
    Game.Man.get();
}

function StartPlayerPublic()
{
    Game.PlayerPublic.get();
}

function StartPlayerPrivate()
{
    Game.PlayerPrivate.get();
}

function StartBank()
{
    Game.Bank.get();
}

function StartWork()
{
    Game.Work.get();
}

function StartJobbing()
{
    Game.Jobbing.get();
}

function StartGym()
{
    Game.PlayerPublic.get(function()
    {
        Game.PlayerPrivate.get(function()
        {
            Game.Training.get();
            Game.Training.select(Game.Training.dicGyms[0]);
        });
    });
}

function StartTraining()
{
    Game.PlayerPublic.get(function()
    {
        Game.PlayerPrivate.get(function()
        {
            Game.Training.get();
        });
    });
}

function StartTop()
{
    Game.Top.get();
}

function StartMenu()
{
}

function StartIndex()
{
    Game.PlayerPublic.get(function()
    {
        Game.Menu.select(Game.Man);
    });
    StartPlayerPrivate();
    StartMenu();
}

function HilightOptions()
{
    $.fn.maphilight.defaults = {
        fill: true,
        fillColor: 'ff0000',
        fillOpacity: 0.5,
        stroke: true,
        strokeColor: 'ff0000',
        strokeOpacity: 1,
        strokeWidth: 1,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: true,
        shadowX: 1,
        shadowY: 1,
        shadowRadius: 15,
        shadowColor: '000000',
        shadowOpacity: 0.8,
        shadowPosition: 'outside',
        shadowFrom: true
    }
}