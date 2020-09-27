/* (GET) http://localhost:5000/api/mealtype */

db.mealtypes.insertMany(
    [
        {
            _id: "1",
            name: "breakfast",
            mealtype: "1",
            mealdata: "Start your day with delicious breakfast options.",
            imgsrc: "/pictures/idli.jpg"
        },

        {
            _id: "2",
            name: "lunch",
            mealtype: "2",
            mealdata: "Have a great afternoon with lip smacking lunch options.",
            imgsrc: "/pictures/lunchnewnew.jpg"
        },

        {
            _id: "3",
            name: "dinner",
            mealtype: "3",
            mealdata: "End your day with a perfect dinner.",
            imgsrc: "/pictures/dinnernewnew.jpg"
        },

        {
            _id: "4",
            name: "snacks",
            mealtype: "4",
            mealdata: "Grab a delicious snack for your little cravings.",
            imgsrc: "/pictures/snacks.jpg"
        },

        {
            _id: "5",
            name: "drinks",
            mealtype: "5",
            mealdata: "Enjoy cocktails, mocktails, beer, vodka and much more.",
            imgsrc: "/pictures/drinksnew.jpg"
        },

        {
            _id: "6",
            name: "nightlife",
            mealtype: "6",
            mealdata: "Hangout and explore nearby popular nightclubs.",
            imgsrc: "/pictures/night.png"
        }
    ]
)

