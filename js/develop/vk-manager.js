var VKManager = new Class(
    {
        getFriends: function(next)
        {
            var friends = [
                { id: 1, name: 'user1', avatar: 'img' },
                { id: 2, name: 'user2', avatar: 'img' },
                { id: 3, name: 'user3', avatar: 'img' },
                { id: 4, name: 'user4', avatar: 'img' },
                { id: 5, name: 'user5', avatar: 'img' },
                { id: 6, name: 'user6', avatar: 'img' },
                { id: 7, name: 'user7', avatar: 'img' },
                { id: 8, name: 'user8', avatar: 'img' },
                { id: 9, name: 'user9', avatar: 'img' },
                { id: 10, name: 'user10', avatar: 'img' }
            ];
            next(friends);
        },
        getInfo: function()
        {
            var info = { name: "user", avatar: "ava" };
            return info;
        }
    });