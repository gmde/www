oFactorTypes = {
    Food: { name: "Еда"},
    Stimulant: { name: "Допинг"},
    Rest: { name: "Отдых"},
    Therapy: { name: "Лечение"}
};
oAggs = { type: oFactorTypes.Food, name: "Яйца", picture: "aggs", weight: 100, carbs: 40, protein: 20};
oChicken = { type: oFactorTypes.Food, name: "Курица", picture: "chicken", weight: 250, carbs: 30, protein: 25};
oMassage = { type: oFactorTypes.Rest, name: "Массаж", picture: "massage" };
oSustanon = { type: oFactorTypes.Stimulant, name: "Сустанон", picture: "sustanon" };
oTherapy1 = { type: oFactorTypes.Therapy, name: "Прогревание", picture: "therapy1" };

oManFactors = [ oAggs, oChicken, oMassage, oSustanon, oTherapy1, oMassage, oSustanon, oTherapy1, oMassage, oSustanon, oTherapy1, oMassage, oSustanon, oTherapy1];

oMuscleTypes = {
    Calves: { name: "Икры"},
    Quads: { name: "Бедра"},
    Abs: { name: "Пресс"},
    Chest: { name: "Грудь"},
    Traps: { name: "Трапеция"},
    Neck: { name: "Шея"},
    Deltoid: { name: "Дельты"},
    Biceps: { name: "Бицепс"},
    Triceps: { name: "Трицепс"},
    Forearm: { name: "Предплечье"},
    Back: { name: "Спина"}
};
oCalves = { type: oMuscleTypes.Calves, level: 1, frazzle: 0.1, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oQuads = { type: oMuscleTypes.Quads, level: 2, frazzle: 0.2, trauma: 0.1, view: { x: 10, y: 10, picture: "../images/pic/rating.png", layer: 3, map: "10,10,30,10,30,30,10,30" } };
oAbs = { type: oMuscleTypes.Abs, level: 3, frazzle: 0.3, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oChest = { type: oMuscleTypes.Chest, level: 1, frazzle: 0.5, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oTraps = { type: oMuscleTypes.Traps, level: 2, frazzle: 0.7, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oNeck = { type: oMuscleTypes.Neck, level: 3, frazzle: 0.2, trauma: 0.3, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oDeltoid = { type: oMuscleTypes.Deltoid, level: 2, frazzle: 0.3, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oBiceps = { type: oMuscleTypes.Biceps, level: 1, frazzle: 0.2, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oTriceps = { type: oMuscleTypes.Triceps, level: 2, frazzle: 0.4, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oForearm = { type: oMuscleTypes.Forearm, level: 1, frazzle: 0.1, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };
oBack = { type: oMuscleTypes.Back, level: 1, frazzle: 0.2, trauma: 0, view: { x: 50, y: 50, picture: "../images/pic/rating.png", layer: 4, map: "50,50,70,50,70,70,50,70"} };

//oManBody = [ oCalves, oQuads, oAbs, oChest, oTraps, oNeck, oDeltoid, oBiceps, oTriceps, oForearm, oBack ];
oManBody = [ oCalves, oQuads ];

oAward = { name: "Награда 1", date: "12-03-2012", picture: "award" };
oManAwards = [ oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward, oAward ];

var oPlayerPublicMyself = { id: 5653333, name: "Имя", picture: "", mass: 67, place: 3 };
var oPlayerPrivate = { friends: 5, money: 9, gold: 1, energy: 77, energyMax: 100 };

var oJobbing = { available: true, weight: 112.500 };

var oWork = [
    {
        available: true,
        time: "00:00:00",
        desc: "Training room 1",
        req: { level: 3, friends: 1 },
        cost: { energy: 2 }
    },
    {
        available: true,
        time: "00:03:00",
        desc: "Training room 2",
        req: { level: 5, friends: 3 },
        cost: { energy: 4 }
    },
    {
        available: false,
        time: "00:00:00",
        desc: "Training room 3",
        req: { level: 10, friends: 5 },
        cost: { energy: 6 }
    }
];

var oUpdates = [
    { desc: "Стиль Хай-Тек", img: "images/updates/hi-tech.jpg" },
    { desc: "Мусор", img: "images/updates/garbage.jpg" }
];

var oBank = [
    { desc: "Обмен голосов на доллары", hash: "dollar", img: "images/pic/dollar.png", data: [
        { text: "1 на 3" },
        { text: "3 на 10" }
    ] },
    { desc: "Обмен голосов на монеты", hash: "coin", img: "images/pic/coin.png", data: [
        { text: "1 на 2" },
        { text: "3 на 7" }
    ] },
    { desc: "Обмен голосов на энергию", hash: "energy", img: "images/pic/energy.png", data: [
        { text: "1 на 1" },
        { text: "3 на 4" }
    ] }
];

var oResultTrue = { result: true };

var oTopPlayersPartition0 = [
    { firstName: "Андрей", lastName: "Рахуба", photo: "http://cs402721.userapi.com/u121717236/e_3af963f5.jpg", uid: "121717236" },
    { firstName: "Антон", lastName: "Лапшин", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "Сергей", lastName: "Смольский", photo: "http://cs405730.userapi.com/u49632214/e_44513414.jpg", uid: "49632214" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" }
];
var oTopPlayersPartition1 = [
    { firstName: "123e2", lastName: "rf234r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" },
    { firstName: "121232", lastName: "43r", photo: "http://cs10629.userapi.com/u5653333/e_56268c00.jpg", uid: "5653333" }
];

var oFlatMyself = {
    uid: 5653333,
    guest: false,
    rooms: [
        {
            id: 0,
            desc: "Зал",
            available: true,
            requirements: {
                level: 0,
                achievement: null,
                coin: 0
            },
            items: [
                { id: 2081, itemDesc: 'КотЭ *Серый*', groupDesc: 'КотЭ', categoryDesc: 'Животные', cost: { d: 15, coin: 0 }, picture: 'Images/Item/Animal/Cote1_png24', layer: 100, x: 69, y: 437, map: '133,447,156,448,152,529,77,530,75,526,102,516,103,500,115,471,130,465', display: 1 },
                { id: 2184, itemDesc: 'Бульдог', groupDesc: 'Собака', categoryDesc: 'Животные', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Animal/dog4_png24', layer: 100, x: 232, y: 384, map: '352,400,370,411,351,513,361,520,321,531,273,520,263,489,271,475,308,446,308,425,317,410', display: 1 },
                { id: 1001, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_1', layer: 40, x: 50, y: 463, map: '50,514,50,491,102,470,120,479,120,479,135,500,60,524', display: 2 },
                { id: 1002, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_2', layer: 40, x: 95, y: 440, map: '144,498,144,477,155,463,194,464,194,485,185,500', display: 1 },
                { id: 1009, itemDesc: 'Железный сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/3/chest_3_3', layer: 40, x: 160, y: 440, map: '204,505,204,482,215,467,225,464,259,486,260,510,233,527', display: 1 },
                { id: 824, itemDesc: 'Стол Nevero', groupDesc: 'Стол', categoryDesc: 'Модерн', cost: { d: 120, coin: 120 }, picture: 'Images/Item/Modern/Table/4/mod_table_4', layer: 30, x: 240, y: 350, map: '264,384,356,362,432,392,422,467,331,510,271,455', display: 2 },
                { id: 2282, itemDesc: 'Черепаха', groupDesc: 'Экзотические', categoryDesc: 'Животные', cost: { d: 40, coin: 40 }, picture: 'Images/Item/Animal/turtle', layer: 27, x: 210, y: 367, map: '217,391,288,372,242,409', display: 1 },
                { id: 772, itemDesc: 'Диван Mobis', groupDesc: 'Диван', categoryDesc: 'Хай-тек', cost: { d: 100, coin: 100 }, picture: 'Images/Item/Hi_tech/Couch/hi_tech_couch_2', layer: 25, x: 325, y: 245, map: '414,272,585,284,585,416,577,420,549,412,502,437,375,382,376,334,413,326', display: 2 },
                { id: 672, itemDesc: 'Тумба Aside', groupDesc: 'Тумба', categoryDesc: 'Хай-тек', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Hi_tech/Cupboard/hi_tech_cupboard_2', layer: 20, x: 65, y: 345, map: '86,387,150,359,176,360,176,400,118,440,86,437', display: 2 },
                { id: 2392, itemDesc: 'Мужчина в чёрном пиджаке', groupDesc: 'Люди', categoryDesc: 'Люди', cost: { d: 300, coin: 300 }, picture: 'Images/Item/Human/man_2', layer: 15, x: 226, y: 206, map: '257,208,283,270,266,376,235,370', display: 2 },
                { id: 17401, itemDesc: 'Замок 1 ур.', groupDesc: 'Защита', categoryDesc: 'Безопасность', cost: { d: 100, coin: 10 }, picture: 'Images/Item/Defend/defend_1', layer: 0, x: 0, y: 0, map: '', display: 4 },
                { id: 18501, itemDesc: 'Скрепка', groupDesc: 'Взлом', categoryDesc: 'Безопасность', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Defend/key_1', layer: 0, x: 0, y: 0, map: '', display: 4 },
                { id: 421, itemDesc: 'Дверь Evita', groupDesc: 'Дверь', categoryDesc: 'Модерн', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Modern/Door/1/mod_door_1', layer: 10, x: 250, y: 190, map: '260,208,304,210,305,318,262,323', display: 2 },
                { id: 1142, itemDesc: '*Весна* Джузеппе Арчимбольдо', groupDesc: 'Картина 1', categoryDesc: 'Разное', cost: { d: 500, coin: 500 }, picture: 'Images/Item/Misc/Picture/1/misc_picture_2', layer: 10, x: 545, y: 160, map: '547,168,620,160,620,273,547,267', display: 2 },
                { id: 1243, itemDesc: 'Растение *Cornelius*', groupDesc: 'Растение', categoryDesc: 'Разное', cost: { d: 85, coin: 85 }, picture: 'Images/Item/Misc/Plant/3/misc_plant_3', layer: 10, x: 334, y: 205, map: '340,206,382,215,370,360,346,355', display: 2 },
                { id: 1341, itemDesc: 'Картина *Мона Лиза* (подделка)', groupDesc: 'Картина 2', categoryDesc: 'Разное', cost: { d: 100, coin: 100 }, picture: 'Images/Item/Misc/Picture2/1/misc_picture2_1', layer: 10, x: 456, y: 175, map: '455,184,503,177,504,265,455,263', display: 2 },
                { id: 15410, itemDesc: 'Светильник *Staft*', groupDesc: 'Светильник', categoryDesc: 'Разное', cost: { d: 200, coin: 200 }, picture: 'Images/Item/Misc/Light/10/misc_light_10', layer: 10, x: 166, y: 166, map: '186,185,195,180,236,184,233,232,213,234,213,371,227,372,227,379,215,384,190,380,193,376,207,370,208,234,190,232,182,197', display: 1 },
                { id: 16021, itemDesc: 'Пятно', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Flowed-ceiling-left', layer: 7, x: 175, y: 51, map: '193,61,225,70,242,87,209,84,183,70', display: 2 },
                { id: 18501, itemDesc: 'Скрепка', groupDesc: 'Взлом', categoryDesc: 'Безопасность', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Defend/key_1.png', layer: 10, x: 0, y: 0, map: '', display: 5 },
                { id: 324, itemDesc: 'Стены Castello', groupDesc: 'Стены', categoryDesc: 'Модерн', cost: { d: 110, coin: 110 }, picture: 'Images/Item/Modern/Walls/4/mod_walls_4', layer: 5, x: 0, y: 34, map: '0,34,196,132,363,160,714,63,714,461,363,347,336,350,326,348,328,323,314,319,234,332,236,368,210,374,0,498', display: 3 },
                { id: 112, itemDesc: 'Напольное покрытие Quick-step', groupDesc: 'Пол', categoryDesc: 'Классика', cost: { d: 12, coin: 12 }, picture: 'Images/Item/Classic/Floor/2/cl_floor_2', layer: 0, x: 0, y: 315, map: '0,536,0,472,187,367,213,363,213,327,318,315,340,319,340,338,345,340,363,336,714,440,714,536', display: 0 },
                { id: 235, itemDesc: 'Потолок Destiny', groupDesc: 'Потолок', categoryDesc: 'Поп-арт', cost: { d: 260, coin: 260 }, picture: 'Images/Item/Pop_art/Ceiling/pop-art_ceiling_5', layer: 0, x: 0, y: 0, map: '0,0,714,0,714,70,363,163,190,135,0,40', display: 0 }

            ]
        },
        {
            id: 1,
            desc: "Ванная",
            available: false,
            requirements: {
                level: 3,
                achievement: null,
                coin: 15
            },
            items: null
        }
    ]
};
var oFlatGuest = {
    uid: 121717236,
    guest: true,
    rooms: [
        {
            id: 0,
            desc: "Зал",
            available: true,
            requirements: {
                level: 0,
                achievement: null,
                coin: 0
            },
            items: [
                { id: 1001, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_1', layer: 40, x: 50, y: 463, map: '50,514,50,491,102,470,120,479,120,479,135,500,60,524', display: 2 },
                { id: 1002, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_2', layer: 40, x: 95, y: 440, map: '144,498,144,477,155,463,194,464,194,485,185,500', display: 1 },
                { id: 1003, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_3', layer: 40, x: 160, y: 440, map: '196,506,196,485,216,472,246,484,246,506,227,522', display: 1 },
                { id: 835, itemDesc: 'Стол Sileon', groupDesc: 'Стол', categoryDesc: 'Поп-арт', cost: { d: 167, coin: 163 }, picture: 'Images/Item/Pop_art/Table/pop-art_table_5', layer: 30, x: 240, y: 330, map: '255,373,272,360,320,350,362,352,410,365,391,460,314,490,265,451', display: 2 },
                { id: 736, itemDesc: 'Диван Accord', groupDesc: 'Диван', categoryDesc: 'Поп-арт', cost: { d: 412, coin: 4451 }, picture: 'Images/Item/Pop_art/Couch/pop-art_couch_6', layer: 25, x: 320, y: 270, map: '350,288,442,288,535,306,645,320,714,348,714,536,559,535,520,453,488,413,344,374', display: 2 },
                { id: 636, itemDesc: 'Тумба Virginia', groupDesc: 'Тумба', categoryDesc: 'Поп-арт', cost: { d: 244, coin: 2 }, picture: 'Images/Item/Pop_art/Cupboard/pop-art_cupboard_6', layer: 20, x: 10, y: 330, map: '26,398,161,344,203,345,188,162,188,405,85,476,39,473,39,404', display: 2 },
                { id: 536, itemDesc: 'Люстра Vogue', groupDesc: 'Люстра', categoryDesc: 'Поп-арт', cost: { d: 255, coin: 25 }, picture: 'Images/Item/Pop_art/Chandelier/pop-art_chandelier_6', layer: 15, x: 270, y: 20, map: '323,28,374,27,424,83,415,180,352,193,288,184,277,82', display: 1 },
                { id: 16007, itemDesc: 'Пакет', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Bag', layer: 11, x: 147, y: 344, map: '170,361,178,361,186,371,187,392,178,397,162,397,162,374', display: 2 },
                { id: 436, itemDesc: 'Дверь New-York', groupDesc: 'Дверь', categoryDesc: 'Поп-арт', cost: { d: 265, coin: 26 }, picture: 'Images/Item/Pop_art/Door/pop-art_door_6', layer: 10, x: 250, y: 190, map: '253,194,310,199,310,317,253,324', display: 1 },
                { id: 16001, itemDesc: 'Масло', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Oleina', layer: 7, x: 0, y: 453, map: '78,467,112,470,118,479,133,480,143,490,103,505,81,524,62,525,44,520,13,531,1,529,1,522,32,,501,31,495,36,493,62,494,90,485,72,484,72,475', display: 2 },
                { id: 17401, itemDesc: 'Замок 1 ур.', groupDesc: 'Защита', categoryDesc: 'Безопасность', cost: { d: 100, coin: 10 }, picture: 'Images/Item/Defend/defend_1', layer: 0, x: 0, y: 0, map: '', display: 4 },
                { id: 16002, itemDesc: 'Газеты', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Papers', layer: 7, x: 252, y: 453, map: '288,459,328,462,372,469,378,488,376,511,338,507,324,528,268,509,277,494,269,483', display: 2 },
                { id: 16004, itemDesc: 'Пакеты', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Bags', layer: 7, x: 574, y: 413, map: '630,430,650,442,654,464,664,453,680,452,698,470,697,490,687,500,669,498,652,514,632,511,619,496,619,472,612,458,618,436', display: 2 },
                { id: 16006, itemDesc: 'Вещи', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Shirts-2', layer: 7, x: 319, y: 395, map: '352,406,378,402,389,408,390,420,372,421,371,433,354,432,334,425,334,418,341,411', display: 2 },
                { id: 16008, itemDesc: 'Коробки', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Two-box', layer: 7, x: 276, y: 360, map: '295,379,307,373,341,372,347,380,300,391', display: 1 },
                { id: 16009, itemDesc: 'Вещи', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Shirts-1', layer: 7, x: 214, y: 354, map: '227,367,249,361,258,369,233,375', display: 1 },
                { id: 16011, itemDesc: 'Коробка', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Box', layer: 7, x: 224, y: 314, map: '241,322,251,326,258,334,251,340,235,342,229,333', display: 1 },
                { id: 16012, itemDesc: 'Пакет', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Box-bag', layer: 7, x: 285, y: 307, map: '327,315,332,329,323,332,314,331,309,324,311,319', display: 1 },
                { id: 16015, itemDesc: 'Скол', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Break-middle', layer: 7, x: 230, y: 186, map: '233,195,254,207,255,218,260,219,254,241,259,248,241,265,232,252,235,246, 232,232,239,222,232,202', display: 1 },
                { id: 16019, itemDesc: 'Паутина', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Web-right', layer: 7, x: 325, y: 140, map: '364,153,381,153,399,169,408,191,405,210,392,223,375,229,362,224,348,208,341,190,340,174,348,159', display: 1 },
                { id: 16021, itemDesc: 'Пятно', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Flowed-ceiling-left', layer: 7, x: 175, y: 51, map: '193,61,225,70,242,87,209,84,183,70', display: 2 },
                { id: 373, itemDesc: 'Стены Boni', groupDesc: 'Стены', categoryDesc: 'Хай-тек', cost: { d: 60, coin: 6 }, picture: 'Images/Item/Hi_tech/Walls/hi_tech_walls_3', layer: 5, x: 0, y: 42, map: '0,38,190,133,364,163,714,65,714,454,363,343,339,347,333,345,332,322,316,317,222,330,222,370,189,376,0,488', display: 3 },
                { id: 173, itemDesc: 'Пол Sliter', groupDesc: 'Пол', categoryDesc: 'Хай-тек', cost: { d: 120, coin: 10 }, picture: 'Images/Item/Hi_tech/Floor/hi_tech_floor_3', layer: 0, x: 0, y: 301, map: '0,536,0,472,187,367,213,363,213,327,318,315,340,319,340,338,345,340,363,336,714,440,714,536', display: 0 },
                { id: 235, itemDesc: 'Потолок Destiny', groupDesc: 'Потолок', categoryDesc: 'Поп-арт', cost: { d: 260, coin: 20 }, picture: 'Images/Item/Pop_art/Ceiling/pop-art_ceiling_5', layer: 0, x: 0, y: 0, map: '0,0,714,0,714,70,363,163,190,135,0,40', display: 0 }
            ]
        },
        {
            id: 1,
            desc: "Ванная",
            available: false,
            requirements: {
                level: 3,
                achievement: null,
                coin: 15
            },
            items: null
        }
    ]
};

var oFlatGuestGuard = {
    uid: 49632214,
    guest: true,
    rooms: [
        {
            id: 0,
            desc: "Зал",
            available: true,
            requirements: {
                level: 0,
                achievement: null,
                coin: 0
            },
            items: [
                { id: 2083, itemDesc: 'КотЭ *Мелкий*', groupDesc: 'КотЭ', categoryDesc: 'Животные', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Animal/Cote3_png24', layer: 100, x: 73, y: 451, map: '116,473,151,464,157,481,164,527,123,529,108,523,106,505,116,494', display: 1 },
                { id: 1001, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_1', layer: 40, x: 50, y: 463, map: '50,514,50,491,102,470,120,479,120,479,135,500,60,524', display: 2 },
                { id: 1002, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_2', layer: 40, x: 95, y: 440, map: '144,498,144,477,155,463,194,464,194,485,185,500', display: 1 },
                { id: 1003, itemDesc: 'Старый сундук', groupDesc: 'Сундук', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Chest/1/chest_1_3', layer: 40, x: 160, y: 440, map: '196,506,196,485,216,472,246,484,246,506,227,522', display: 1 },
                { id: 724, itemDesc: 'Диван Roxet', groupDesc: 'Диван', categoryDesc: 'Модерн', cost: { d: 112, coin: 112 }, picture: 'Images/Item/Modern/Couch/4/mod_couch_4', layer: 25, x: 365, y: 255, map: '461,278,634,293,671,320,637,463,611,489,387,392,380,340,433,327,429,293', display: 2 },
                { id: 533, itemDesc: 'Люстра Simphony', groupDesc: 'Люстра', categoryDesc: 'Поп-арт', cost: { d: 21, coin: 21 }, picture: 'Images/Item/Pop_art/Chandelier/pop-art_chandelier_3', layer: 15, x: 285, y: 28, map: '352,43,361,72,410,95,413,108,381,135,339,137,293,116,306,81,344,69', display: 1 },
                { id: 16007, itemDesc: 'Пакет', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Bag', layer: 11, x: 147, y: 344, map: '170,361,178,361,186,371,187,392,178,397,162,397,162,374', display: 2 },
                { id: 436, itemDesc: 'Дверь New-York', groupDesc: 'Дверь', categoryDesc: 'Поп-арт', cost: { d: 265, coin: 265 }, picture: 'Images/Item/Pop_art/Door/pop-art_door_6', layer: 10, x: 250, y: 190, map: '253,194,310,199,310,317,253,324', display: 1 },
                { id: 1141, itemDesc: 'Картина *После дождя*', groupDesc: 'Картина 1', categoryDesc: 'Разное', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Misc/Picture/1/misc_picture_1', layer: 10, x: 564, y: 170, map: '564,175,621,167, 621,213,563,214', display: 2 },
                { id: 1244, itemDesc: 'Растение *Essentials*', groupDesc: 'Растение', categoryDesc: 'Разное', cost: { d: 220, coin: 220 }, picture: 'Images/Item/Misc/Plant/4/misc_plant_4', layer: 10, x: 328, y: 205, map: '337,209,382,221,371,353,343,349', display: 2 },
                { id: 1341, itemDesc: 'Картина *Мона Лиза* (подделка)', groupDesc: 'Картина 2', categoryDesc: 'Разное', cost: { d: 100, coin: 100 }, picture: 'Images/Item/Misc/Picture2/1/misc_picture2_1', layer: 10, x: 456, y: 175, map: '455,184,503,177,504,265,455,263', display: 2 },
                { id: 1443, itemDesc: 'Телевизор LG LCD 27', groupDesc: 'Телевизор', categoryDesc: 'Разное', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Misc/TV/3/misc_tv_3', layer: 10, x: 83, y: 270, map: '90,282,162,275,162,323,90,347', display: 2 },
                { id: 15410, itemDesc: 'Светильник *Staft*', groupDesc: 'Светильник', categoryDesc: 'Разное', cost: { d: 200, coin: 200 }, picture: 'Images/Item/Misc/Light/10/misc_light_10', layer: 10, x: 166, y: 166, map: '186,185,195,180,236,184,233,232,213,234,213,371,227,372,227,379,215,384,190,380,193,376,207,370,208,234,190,232,182,197', display: 1 },
                { id: 16001, itemDesc: 'Масло', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Oleina', layer: 7, x: 0, y: 453, map: '78,467,112,470,118,479,133,480,143,490,103,505,81,524,62,525,44,520,13,531,1,529,1,522,32,,501,31,495,36,493,62,494,90,485,72,484,72,475', display: 2 },
                { id: 16002, itemDesc: 'Газеты', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Papers', layer: 7, x: 252, y: 453, map: '288,459,328,462,372,469,378,488,376,511,338,507,324,528,268,509,277,494,269,483', display: 2 },
                { id: 16003, itemDesc: 'Coca-cola', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Coca-cola', layer: 7, x: 451, y: 453, map: '573,464,575,464,581,478,582,494,610,514,607,518,569,524,540,518,512,517,486,505,484,498,474,502,468,495,471,488,482,483,524,492,538,475,547,478,547,488,570,490,570,473', display: 2 },
                { id: 16004, itemDesc: 'Пакеты', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Bags', layer: 7, x: 574, y: 413, map: '630,430,650,442,654,464,664,453,680,452,698,470,697,490,687,500,669,498,652,514,632,511,619,496,619,472,612,458,618,436', display: 2 },
                { id: 16006, itemDesc: 'Вещи', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Shirts-2', layer: 7, x: 319, y: 395, map: '352,406,378,402,389,408,390,420,372,421,371,433,354,432,334,425,334,418,341,411', display: 2 },
                { id: 16008, itemDesc: 'Коробки', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Two-box', layer: 7, x: 276, y: 360, map: '295,379,307,373,341,372,347,380,300,391', display: 1 },
                { id: 16009, itemDesc: 'Вещи', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Shirts-1', layer: 7, x: 214, y: 354, map: '227,367,249,361,258,369,233,375', display: 1 },
                { id: 16010, itemDesc: 'Лужа', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Flowed-puddle', layer: 7, x: 317, y: 268, map: '336,280,340,280,342,347,354,348,360,354,332,355,326,349,334,347', display: 1 },
                { id: 16011, itemDesc: 'Коробка', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Box', layer: 7, x: 224, y: 314, map: '241,322,251,326,258,334,251,340,235,342,229,333', display: 1 },
                { id: 16012, itemDesc: 'Пакет', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Box-bag', layer: 7, x: 285, y: 307, map: '327,315,332,329,323,332,314,331,309,324,311,319', display: 1 },
                { id: 16013, itemDesc: 'Грязь', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Flowed-left', layer: 7, x: 66, y: 272, map: '82,280,91,280,97,287,98,317,89,363,85,363,77,345,74,290', display: 2 },
                { id: 16014, itemDesc: 'Скол', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Break-left', layer: 7, x: 42, y: 155, map: '66,170,130,170,111,199,129,216,130,224,123,235,130,241,107,260,87,255,79,245,54,237,54,231,68,219,52,211,51,202,60,193,58,187,66,187', display: 2 },
                { id: 16015, itemDesc: 'Скол', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Break-middle', layer: 7, x: 230, y: 186, map: '233,195,254,207,255,218,260,219,254,241,259,248,241,265,232,252,235,246, 232,232,239,222,232,202', display: 1 },
                { id: 16016, itemDesc: 'Скол', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Break-right', layer: 7, x: 500, y: 225, map: '516,246,536,252,543,247,549,251,556,237,566,239,579,249,577,263,584,279,566,273,559,278,551,275,540,283,524,284,513,275', display: 2 },
                { id: 16017, itemDesc: 'Паутина', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Web-left-left', layer: 7, x: 0, y: 0, map: '0,0,57,0,77,40,34,140,0,160', display: 1 },
                { id: 16019, itemDesc: 'Паутина', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Web-right', layer: 7, x: 325, y: 140, map: '364,153,381,153,399,169,408,191,405,210,392,223,375,229,362,224,348,208,341,190,340,174,348,159', display: 1 },
                { id: 16020, itemDesc: 'Паутина', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Web-right-right', layer: 7, x: 600, y: 11, map: '683,25,714,48,714,231,,661,194,626,156,616,111,622,72,649,42', display: 1 },
                { id: 16021, itemDesc: 'Пятно', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Flowed-ceiling-left', layer: 7, x: 175, y: 51, map: '193,61,225,70,242,87,209,84,183,70', display: 2 },
                { id: 16022, itemDesc: 'Пятно', groupDesc: 'Мусор', categoryDesc: 'Нет стиля', cost: { d: 0, coin: 0 }, picture: 'Images/Item/Garbage/Flowed-ceiling-right', layer: 7, x: 405, y: 40, map: '417,53,464,58,500,69,496,77,457,69,428,69,415,57', display: 2 },
                { id: 335, itemDesc: 'Стены Smile', groupDesc: 'Стены', categoryDesc: 'Поп-арт', cost: { d: 385, coin: 385 }, picture: 'Images/Item/Pop_art/Walls/pop-art_walls_5', layer: 5, x: 0, y: 33, map: '0,33,196,132,363,160,714,63,714,461,363,347,336,350,326,348,328,323,314,319,234,332,236,368,210,374,0,498', display: 3 },
                { id: 135, itemDesc: 'Напольное покрытие Messina', groupDesc: 'Пол', categoryDesc: 'Поп-арт', cost: { d: 160, coin: 160 }, picture: 'Images/Item/Pop_art/Floor/pop-art_floor_5', layer: 0, x: 0, y: 315, map: '0,536,0,472,187,367,213,363,213,327,318,315,340,319,340,338,345,340,363,336,714,440,714,536', display: 0 },
                { id: 235, itemDesc: 'Потолок Destiny', groupDesc: 'Потолок', categoryDesc: 'Поп-арт', cost: { d: 260, coin: 260 }, picture: 'Images/Item/Pop_art/Ceiling/pop-art_ceiling_5', layer: 0, x: 0, y: 0, map: '0,0,714,0,714,70,363,163,190,135,0,40', display: 0 }
            ]
        },
        {
            id: 1,
            desc: "Ванная",
            available: false,
            requirements: {
                level: 3,
                achievement: null,
                coin: 15
            },
            items: null
        }
    ]
};

var oItem = { itemDesc: 'Люстра Vogue', picture: 'Images/Item/Pop_art/Chandelier/pop-art_chandelier_6' };

var oResult = { result: true };

var oPrize = { d: 5, coin: 1, item: oItem };

var oSpend = { energy: 12 }

var oResultPrize = { result: true, prize: oPrize };

var oResultPrizeSpend = { result: true, prize: oPrize, spend: oSpend };

