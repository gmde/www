var ViewModelFactors = new Class(
    {
        Extends: Ajax,
        Implements: [IArrowList, IDic, IMenu],
        initialize: function(menu)
        {
            this.parent(GameItems.ManFactors);
            this.initMenu(menu);
            this.initArrowList(9);

            this.dicFactors = null;

            this.desc = "Факторы";
        },
        getHandler: function(answer, next)
        {
            var result = this.joinTo(answer, this.dicFactors);
            this.items(result);
            Game.PlayerPublic.factors(result);
            this.parent(answer, next);
        }
    });
