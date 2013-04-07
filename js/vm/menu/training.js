var ViewModelTraining = new Class(
    {
        Extends: Ajax,
        Implements: [Events, IMenu, IArrowList, IDic],
        initialize: function(menu, gym)
        {
            this.parent(GameItems.Training);
            this.initArrowList(1);
            this.initMenu(menu);

            this.Gym = gym;
            this.dicExercises = null;
            this.dicGyms = null;
        },
        initDic: function(dicExercises, dicGyms)
        {
            for(var i = 0; i < dicGyms.length; i++)
            {
                var gym = dicGyms[i];
                gym.exercises = this.joinTo(gym.exercises, dicExercises);
                gym.img = '/images/gyms/' + gym.img + '.jpg';
            }
            this.dicExercises = dicExercises;
            this.dicGyms = dicGyms;
        },
        setAvailables: function()
        {
            for(var i = 0; i < this.dicGyms.length; i++)
            {
                var gym = this.dicGyms[i];
                gym.available = this.isAvailable(gym);
            }
        },
        hide: function()
        {
            if (this.display() == true)this.display(false);
            this.Gym.hide();
        },
        isAvailable: function(gym)
        {
            if (gym.req == null) return true;

            var level = Game.PlayerPublic.level();
            var friends = Game.PlayerPrivate.data().friends;

            for(var i = 0; i < gym.req.conditions.length; i++)
            {
                var req = gym.req.conditions[i];
                if (req.level != undefined && req.friends != undefined)
                {
                    if (req.level <= level && req.friends <= friends) return true;
                }
            }
            return false;
        },
        get: function()
        {
            this.setAvailables();
            this.items(this.dicGyms);
            this.show();
        },
        select: function(gym)
        {
//            var text = item.reqDesc[0];
//            var url = 'http://translate.google.com/translate_tts?q=' + text + '&tl=ru';
//            var audioElement = document.createElement('audio');
//            audioElement.setAttribute('src', url);
//            audioElement.volume = 0.5;
//            audioElement.play();

            if (gym.available == false)
            {
                Game.Window.message(gym.req.text);
                return;
            }

            this.Gym.get(gym);
        }
    });
