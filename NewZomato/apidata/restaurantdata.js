/* (GET) http://localhost:5000/api/restaurantsearchpage */

db.restaurant.insertMany(
    [
        //-----------------------------------Area 11-----------------------------------//
        //Hotel Lijesh
        {
            "_id": "1",
            "name": "Hotel Lijesh",
            "city_name": "Mumbai",
            "city": '1',
            "area": '11',
            "locality": "Mumbai Urban & Suburban, Mumbai",
            "thumb": "/pictures/img/zthumb/lijesh.jpeg",
            "cost": 350,
            "address": "Bhaudaji Road Extension, Sunder Kamla Nagar, Opposite North Indian Association, Matunga East, Mumbai",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '2',
                    "name": "lunch"
                },

                {
                    "mealtype": '3',
                    "name": "dinner"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": '2',
                    "name": "South Indian"
                },

                {
                    "cuisine": '7',
                    "name": "Maharashtrian"
                }
            ]
        },

        //Gopalas Veg Kitchen
        {
            "_id": "2",
            "name": "Gopala's Veg Kitchen",
            "city_name": "Mumbai",
            "city": '1',
            "area": '11',
            "locality": "Mumbai Urban & Suburban, Mumbai",
            "thumb": "/pictures/img/zthumb/Gopalas.jpeg",
            "cost": 700,
            "address": "Laxmi Udyog Nagar, IND Colony, LBS Marg, Kanjurmarg West, Bhandup, Mumbai",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '2',
                    "name": "lunch"
                },

                {
                    "mealtype": '3',
                    "name": "dinner"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": '1',
                    "name": "North Indian"
                },

                {
                    "cuisine": '2',
                    "name": "South Indian"
                },

                {
                    "cuisine": '3',
                    "name": "Chinese"
                },

                {
                    "cuisine": '4',
                    "name": "Fast Food"
                }
            ]
        },
        //Shalimar
        {
            "_id": "10",
            "name": "Shalimar",
            "city_name": "Mumbai",
            "city": '1',
            "area": '11',
            "locality": "Mumbai Urban & Suburban, Mumbai",
            "thumb": "",
            "cost": 700,
            "address": "Vazir Building, Shalimar Corner, Bhendi Bazaar, Sandhurst Road, Mohammad Ali Road, Mumbai",
            "type": [

                {
                    "mealtype": '2',
                    "name": "lunch"
                },

                {
                    "mealtype": '3',
                    "name": "dinner"
                },

            ],

            "Cuisine": [
                {
                    "cuisine": '8',
                    "name": "Biryani"
                }
            ],
            "contact": "+912223456630, +912223456631"
        },

        //Effingut
        {
            "_id": "14",
            "name": "Effingut",
            "city_name": "Mumbai",
            "city": '1',
            "area": '11',
            "locality": "Mumbai Urban & Suburban, Mumbai",
            "thumb": "https://b.zmtcdn.com/data/pictures/5/18707035/03c0f4f18fa23eec213144e65df3e379.jpg",
            "cost": 1500,
            "address": "Near The Bentley Showroom, Dhanraj Mahal, Colaba, Mumbai",
            "type": [

                {
                    "mealtype": '3',
                    "name": "dinner"
                },

                {
                    "mealtype": '5',
                    "name": "drinks"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": '1',
                    "name": "North Indian"
                },

                {
                    "cuisine": '6',
                    "name": "Continental"
                }
            ],
            "contact": "+919004549324"
        },

        //Doolally Taproom
        {
            "_id": "20",
            "name": "Doolally Taproom",
            "city_name": "Mumbai",
            "city": '1',
            "area": '11',
            "locality": "Mumbai Urban & Suburban, Mumbai",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/17754523/cbfdcaead6125f782f373c6265c6aff9.jpg",
            "cost": 1800,
            "address": "Ground Floor, Raj Kutir, 3rd Road, Near Railway Station, Khar, Mumbai",
            "type": [

                {
                    "mealtype": '5',
                    "name": "drinks"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": '1',
                    "name": "North Indian"
                },

                {
                    "cuisine": '6',
                    "name": "Continental"
                }
            ],
            "contact": "+912248931314"
        },


        //-----------------------------------Area 12-----------------------------------//
        //Starbucks Coffee- Thane

        {
            "_id": "3",
            "name": "Starbucks Coffee- Thane",
            "city_name": "Mumbai",
            "city": '1',
            "area": '12',
            "locality": "Thane, Mumbai",
            "thumb": "/pictures/img/zthumb/starbucksthane.jpeg",
            "cost": 700,
            "address": "Ground Floor, Viviana Mall, Eastern Express Highway, Near Jupiter Hospital, Majiwada, Thane West, Thane",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": '4',
                    "name": "Fast Food"
                },

                {
                    "cuisine": '5',
                    "name": "Cafe & Desserts"
                }
            ]
        },

        //Dough & Creme
        {
            "_id": "4",
            "name": "Dough & Crème",
            "city_name": "Mumbai",
            "city": '1',
            "area": '12',
            "locality": "Thane, Mumbai",
            "thumb": "/pictures/img/zthumb/dough.jpeg",
            "cost": 300,
            "address": "G3/11, Phase 6, Srushti Brahmand, Ghodbunder Road, Manpada-Thane West",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": '4',
                    "name": "Fast Food"
                },

                {
                    "cuisine": '5',
                    "name": "Cafe & Desserts"
                }
            ]
        },

        //Chinese wok
        {
            "_id": "11",
            "name": "Chinese Wok - Wok Express",
            "city_name": "Mumbai",
            "city": '1',
            "area": '12',
            "locality": "Thane, Mumbai",
            "thumb": "https://b.zmtcdn.com/data/pictures/0/18780110/b0b08ad06718bad4018411aff6b449c7.jpg",
            "cost": 800,
            "address": "Shop 2, 3, 4, Shree Akansha CHS, Ravi Industrial Compound, Madanlal Dhingra Road, Panch Pakhadi, Thane West",
            "type": [

                {
                    "mealtype": '2',
                    "name": "lunch"
                },

                {
                    "mealtype": '3',
                    "name": "dinner"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": '3',
                    "name": "Chinese"
                }
            ],
            "contact": "+912225300636"
        },

        //Durga Lunch Home
        {
            "_id": "12",
            "name": "Durga Lunch Home",
            "city_name": "Mumbai",
            "city": "1",
            "area": "12",
            "locality": "Thane, Mumbai",
            "thumb": "https://b.zmtcdn.com/data/pictures/0/18541500/f5cd9983fd32a71d7fe8c4ea440b1224.jpg",
            "cost": 500,
            "address": "Opposite Golden Park Society, Mukta Nagar, Khopat, Thane West, Thane",
            "type": [

                {
                    "mealtype": "2",
                    "name": "lunch"
                },

                {
                    "mealtype": "3",
                    "name": "dinner"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },
                {
                    "cuisine": "3",
                    "name": "Chinese"
                }
            ],
            "contact": "+919004958513"
        },

        //Utsav
        {
            "_id": "13",
            "name": "Utsav Restaurant",
            "city_name": "Mumbai",
            "city": "1",
            "area": "12",
            "locality": "Thane, Mumbai",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/c73/6a88b779358541df0135d70329f11c73_1541274741.jpg",
            "cost": 1000,
            "address": "Runwal Nagar, Opposite Eastern Express Highway, Majiwada, Thane West, Thane",
            "type": [

                {
                    "mealtype": "2",
                    "name": "lunch"
                },

                {
                    "mealtype": "3",
                    "name": "dinner"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },
                {
                    "cuisine": "3",
                    "name": "Chinese"
                }
            ],
            "contact": "+912225459000"
        },

         //Intermeeze
         {
            "_id": "21",
            "name": "Intermezze - Brewery & Gastropub",
            "city_name": "Mumbai",
            "city": "1",
            "area": "12",
            "locality": "Thane, Mumbai",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/592/48ae4fc3eed812e0120abe3b9749d592_1539960223.jpg",
            "cost": 1500,
            "address": "S8/S108, The Walk, Hiranandani Estate, Thane West, Thane",
            "type": [

                {
                    "mealtype": "5",
                    "name": "drinks"
                }

            ],

            "Cuisine": [
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },
                {
                    "cuisine": "4",
                    "name": "Fast Food"
                },
                {
                    "cuisine": "6",
                    "name": "Continental"
                }
            ],
            "contact": "+918928462520"
        },

        //-----------------------------------Area 21-----------------------------------//
        //Barometer
        {
            "_id": "5",
            "name": "Barometer",
            "city_name": "Pune",
            "city": '2',
            "area": '21',
            "locality": "Kothrud, Pune",
            "thumb": "/pictures/img/zthumb/barometer.jpeg",
            "cost": 1500,
            "address": "Shop 2, Chintamani Pride, City Pride Road, Paschimanagri, Kothrud, Pune",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": '1',
                    "name": "North Indian"
                },

                {
                    "cuisine": '4',
                    "name": "Fast Food"
                },

                {
                    "cuisine": '6',
                    "name": "Continental"
                }
            ]
        },

        //Sheetal Restaurant
        {
            "_id": "6",
            "name": "Sheetal Restaurant",
            "city_name": "Pune",
            "city": '2',
            "area": '21',
            "locality": "Kothrud, Pune",
            "thumb": "/pictures/img/zthumb/sheetal.jpeg",
            "cost": 900,
            "address": "147 & 16/17, Charudatta Apartment, Kothrud, Pune",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '2',
                    "name": "lunch"
                },

                {
                    "mealtype": '3',
                    "name": "dinner"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": '1',
                    "name": "North Indian"
                },

                {
                    "cuisine": '3',
                    "name": "Chinese"
                }

            ]
        },

        //Midnight Kakery
        {
            "_id": "15",
            "name": "Midnight Kakery",
            "city_name": "Pune",
            "city": "2",
            "area": "21",
            "locality": "Kothrud, Pune",
            "thumb": "https://b.zmtcdn.com/data/pictures/4/18607014/af830f824f24625cbf44ac8b66268bfb.jpg",
            "cost": 300,
            "address": "Shop 6, Sairang Commercial Complex, Near Paranjpe School, DP Road, Kothrud, Pune",
            "type": [
               
                {
                    "mealtype": "4",
                    "name": "snacks"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": "4",
                    "name": "Fast Food"
                },

                {
                    "cuisine": "5",
                    "name": "Cafe & Desserts"
                }

            ],
            "contact": "+918788269785"
        },
        
        //Tiranga Bhavan
        {
            "_id": "16",
            "name": "Tiranga Bhuvan Kothrud",
            "city_name": "Pune",
            "city": "2",
            "area": "21",
            "locality": "Kothrud, Pune",
            "thumb": "https://b.zmtcdn.com/data/pictures/0/10140/b28dbfe49a4e73c096a4f2c70b249713.jpg",
            "cost": 1100,
            "address": "Pitambar Heights, Paud Phata Road, Beside Paud Phata Fly Over, Kothrud, Pune",
            "type": [
               
                {
                    "mealtype": "2",
                    "name": "lunch"
                },

                {
                    "mealtype": "3",
                    "name": "dinner"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },

                {
                    "cuisine": "7",
                    "name": "Maharashtrian"
                },

                {
                    "cuisine": "8",
                    "name": "Biryani"
                }

            ],
            "contact": "+919881025552, +912025410600"
        },

        //Aroma's Hyderabad House
        {
            "_id": "17",
            "name": "Aroma's Hyderabad House",
            "city_name": "Pune",
            "city": "2",
            "area": "21",
            "locality": "Kothrud, Pune",
            "thumb": "https://b.zmtcdn.com/data/pictures/0/10220/07e80a54edf6255d5ea6b7c2f4b25e47.jpg",
            "cost": 900,
            "address": "Shop 8, Building A1, New Friends Society, Paud Road, Kothrud, Pune",
            "type": [
               
                {
                    "mealtype": "2",
                    "name": "lunch"
                },

                {
                    "mealtype": "3",
                    "name": "dinner"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },

                {
                    "cuisine": "8",
                    "name": "Biryani"
                }

            ],
            "contact": "+912025428012, +918983177444"
        },

        //-----------------------------------Area 22-----------------------------------//
        //BurgerKing
        {
            "_id": "7",
            "name": "Burger King- Hinjawadi",
            "city_name": "Pune",
            "city": '2',
            "area": '22',
            "locality": "Hinjawadi, Pune",
            "thumb": "/pictures/img/zthumb/burgerking.jpeg",
            "cost": 500,
            "address": "Survey 81/7, Ground Floor, Mithran, Opposite JSPM College, Tathwade, Hinjawadi, Pune",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
              
                {
                    "cuisine": '4',
                    "name": "Fast Food"
                }
            ]
        },

        //Radha's Kitchen
        {
            "_id": "8",
            "name": "Radha's Kitchen",
            "city_name": "Pune",
            "city": '2',
            "area": '22',
            "locality": "Hinjawadi, Pune",
            "thumb": "/pictures/img/zthumb/radha.jpeg",
            "cost": 400,
            "address": "Shop 5, Arihant Arcade, Laxmi Chowk, Marunji Road, Hinjawadi, Pune",
            "type": [
                {
                    "mealtype": '1',
                    "name": "breakfast"
                },

                {
                    "mealtype": '2',
                    "name": "lunch"
                },

                {
                    "mealtype": '3',
                    "name": "dinner"
                },

                {
                    "mealtype": '4',
                    "name": "snacks"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": '1',
                    "name": "North Indian"
                },

                {
                    "cuisine": '2',
                    "name": "South Indian"
                },

                {
                    "cuisine": '3',
                    "name": "Chinese"
                },

                {
                    "cuisine": '4',
                    "name": "Fast Food"
                }

            ]
        },

        //Spice Factory
        {
            "_id": "18",
            "name": "Spice Factory",
            "city_name": "Pune",
            "city": "2",
            "area": "22",
            "locality": "Hinjawadi, Pune",
            "thumb": "https://b.zmtcdn.com/data/pictures/0/18617210/5840d1c325ec1d586166e906549dbe21.jpg",
            "cost": 2000,
            "address": "2nd Floor, White Square, Hinjawadi Wakad Road, Hinjawadi, Pune",
            "type": [
               
                {
                    "mealtype": "2",
                    "name": "lunch"
                },

                {
                    "mealtype": "3",
                    "name": "dinner"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },

                {
                    "cuisine": "3",
                    "name": "Chinese"
                },

                {
                    "cuisine": "8",
                    "name": "Biryani"
                }

            ],
            "contact": "+919975075055, +919860111233, +917066692566"
        },

        //Pind Punjab
        {
            "_id": "19",
            "name": "Pind Punjab",
            "city_name": "Pune",
            "city": "2",
            "area": "22",
            "locality": "Hinjawadi, Pune",
            "thumb": "https://b.zmtcdn.com/data/pictures/1/18540371/d8bc15f5746cb822101112bd9b674fa5.jpg",
            "cost": 800,
            "address": "Plot 5, Sairang Woods, Near ICICI Bank, Phase 2, Hinjawadi, Pune",
            "type": [
               
                {
                    "mealtype": "2",
                    "name": "lunch"
                },

                {
                    "mealtype": "3",
                    "name": "dinner"
                }

            ],

            "Cuisine": [
               
                {
                    "cuisine": "1",
                    "name": "North Indian"
                },

                {
                    "cuisine": "3",
                    "name": "Chinese"
                },

                {
                    "cuisine": "8",
                    "name": "Biryani"
                }

            ],
            "contact": "+917887873222, +917887874222, +917887875222"
        },

    ]
)