var ViewModelManAwards = new Class(
    {
        Extends: Ajax,
        Implements: [IArrowList, IDic],
        initialize: function()
        {
            this.parent(GameItems.ManAwards);
            this.initArrowList(11);

            this.dicAwards = null;

            this.desc = "Факторы";
        },
        getHandler: function(answer, next)
        {
            var result = this.joinTo(answer, this.dicAwards);
            this.items(result);
            this.parent(answer, next);
        }
    });