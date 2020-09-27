/* (GET)  http://localhost:5000/api/location */

db.city.insertMany(
    [
        // All locations of Mumbai.
        {
            _id: "a",
            name: "All Mumbai",
            city_name: "Mumbai",
            city: "1",
            area: "1",
            country_name: "India"
        },
    
        {
            _id: "1",
            name: "Mumbai Urban & Suburban, Mumbai",
            city_name: "Mumbai",
            city: "1",
            area: "11",
            country_name: "India"
        },
    
        {
            _id: "2",
            name: "Thane, Mumbai",
            city_name: "Mumbai",
            city: "1",
            area: "12",
            country_name: "India"
        },
    
        {
            _id: "3",
            name: "Kalyan-Dombivili, Mumbai",
            city_name: "Mumbai",
            city: "1",
            area: "13",
            country_name: "India"
        },
    
        {
            _id: "4",
            name: "Navi Mumbai, Mumbai",
            city_name: "Mumbai",
            city: "1",
            area: "14",
            country_name: "India"
        },
    
        // All locations of Pune.
        {
            _id: "b",
            name: "All Pune",
            city_name: "Pune",
            city: "2",
            area: "2",
            country_name: "India"
        },
    
        {
            _id: "5",
            name: "Kothrud, Pune",
            city_name: "Pune",
            city: "2",
            area: "21",
            country_name: "India"
        },
    
        {
            _id: "6",
            name: "Hinjawadi, Pune",
            city_name: "Pune",
            city: "2",
            area: "22",
            country_name: "India"
        },
    
        {
            _id: "7",
            name: "Hadapsar, Pune",
            city_name: "Pune",
            city: "2",
            area: "23",
            country_name: "India"
        },
    
    ]    
);
