function StartWindow()
{
    Game.Window.message("text");
}

function StartConfirm()
{
    Game.Confirm.showDialog("text", function(result){ alert(result);});
}

function StartFactors()
{
    Game.Factors.get();
}

function StartDiningRoom()
{
    Game.DiningRoom.get();
}

function StartStimulant()
{
    Game.Stimulant.get();
}

function StartCatalog()
{
    Game.Catalog = Game.Rest;
    Game.Catalog.get();
}

function StartRest()
{
    Game.Rest.get();
}

function StartManInfo()
{
    Game.ManInfo.get();
}

function StartItemHead()
{
    Game.ItemHead = { img: '1.jpg', name: '12354'};
}

function StartItemCost()
{
    var parent = { buy: function() { alert('buy');}};
    Game.ItemCost = { money: 5, gold: 1, votes: 1, parent: parent };
}

function StartItemDesc()
{
    Game.ItemDesc = {
        img: '1.jpg',
        name: 'Название1'
    };
}

function StartItemFood()
{
    var parent = { buy: function() { alert('buy');}};
    Game.ItemFood = {
        img: '1.jpg',
        name: 'Название1',
        cost: { money: 5, gold: 1, votes: 1, parent: parent },
        food: { protein: 10, carbs: 30, weight: 200 }
    };
}

function StartItemRest()
{
    var parent = { buy: function() { alert('buy');}};
    Game.ItemRest = {
        img: '1.jpg',
        name: 'Название1',
        duration: 1,
        cost: { money: 5, gold: 1, votes: 1, parent: parent },
        reg: { energy: 0.3, frazzle: 0.1, growth: 0 }
    };
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