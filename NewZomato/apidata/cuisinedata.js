/* (GET) http://localhost:5000/api/cuisine */


db.cuisines.insertMany(
    [
        {
            _id: 1,
            name: "North Indian",
            cuisine: 1
        },

        {
            _id: 2,
            name: "South Indian",
            cuisine: 2
        },

        {
            _id: 3,
            name: "Chinese",
            cuisine: 3
        },

        {
            _id: 4,
            name: "Fast Food",
            cuisine: 4
        },

        {
            _id: 5,
            name: "Cafe & Desserts",
            cuisine: 5
        },

        {
            _id: 6,
            name: "Continental",
            cuisine: 6
        },

        {
            _id: 7,
            name: "Maharashtrian",
            cuisine: 7
        },

        {
            _id: 8,
            name: "Biryani",
            cuisine: 8
        },
    ]
)