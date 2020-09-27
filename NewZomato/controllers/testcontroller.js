const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

let db;

const express = require('express');
const { Router } = require('express');
const router = express.Router();

mongoClient.connect(url, (err, client) => {
    if (err) {
        console.log(err)
    }
    else {
        db = client.db('trial');
        console.log(`DB connected`);
    }
});

router.get('/api/location', (req, res) => {
    db.collection('city').find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.json(result);
        }
    });
});

router.get('/api/mealtype', (req, res) => {
    db.collection('mealtypes').find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.json(result);
        }
    });
});

router.get('/api/cuisine', (req, res) => {
    db.collection('cuisines').find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.json(result);
        }
    });
});

router.get('/allrestaurants', (req, res) => {
    db.collection('restaurants').find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.json(result);
        }
    });
});

router.get('/restaurants', (req, res) => {
    let query = {};
    //Area
    if ((req.query.area === '1' || req.query.area === '2') && (req.query.mealtype == null || req.query.mealtype == "") && (req.query.id == null || req.query.id == "")) {
        console.log("first");
        switch (req.query.area) {
            case "1": {
                query = { area: /^1/ };
                break;
            }

            case "2": {
                query = { area: /^2/ };
                break;
            }

            default: {
                console.log(`switch error`);
            }
        }
    }

    else if (req.query.area && (req.query.mealtype == null || req.query.mealtype == "") && (req.query.id == null || req.query.id == "")) {
        console.log("second");
        query = { area: req.query.area };
    }
    //Area and id
    else if (req.query.area && req.query.id) {
        console.log("third");
        if ((req.query.area === '1' || req.query.area === '2')) {
            console.log("fourth");
            switch (req.query.area) {
                case "1": {
                    query = { area: /^1/, _id: req.query.id };
                    break;
                }

                case "2": {
                    query = { area: /^2/, _id: req.query.id };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }

        else {
            console.log("fifth");
            query = { area: req.query.area, _id: req.query.id };
        }
    }

    //Area and mealtype
    else if (req.query.area && req.query.mealtype) {
        console.log("sixth");
        if ((req.query.area === '1' || req.query.area === '2')) {
            console.log("seventh");
            switch (req.query.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.query.mealtype };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.query.mealtype };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }

        else {
            console.log("eight");
            query = { area: req.query.area, "type.mealtype": req.query.mealtype };
        }
    }

    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.json(result);
        }
    });

});

router.get('/restaurants/:area/:mealtype', (req, res) => {
    let query = {};
    let sortquery = {};
    if (req.query.area == null &&
        req.query.cuisine == null &&
        req.query.lcost == null &&
        req.query.hcost == null &&
        req.query.sort == null) {
        if (req.params.area === '1' || req.params.area === '2') {
            console.log(`nine`);
            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            console.log(`tenth`);
            query = { area: req.params.area, "type.mealtype": req.params.mealtype };
        }
        callDb();
    }

    //passing area & price range & cuisine & sort
    else if (req.query.area && req.query.lcost && req.query.hcost && req.query.cuisine && req.query.sort) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var lcost = req.query.lcost;
        var hcost = req.query.hcost;
        var cuisine = req.query.cuisine;
        var sort = req.query.sort;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?lcost=${lcost}&hcost=${hcost}&cuisine=${cuisine}&sort=${sort}`);
    }

    //passing area & price range & cuisine
    else if (req.query.area && req.query.lcost && req.query.hcost && req.query.cuisine) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var lcost = req.query.lcost;
        var hcost = req.query.hcost;
        var cuisine = req.query.cuisine;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?lcost=${lcost}&hcost=${hcost}&cuisine=${cuisine}`);
    }

    //passing area & price range & sort
    else if (req.query.area && req.query.lcost && req.query.hcost && req.query.sort) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var lcost = req.query.lcost;
        var hcost = req.query.hcost;
        var sort = req.query.sort;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?lcost=${lcost}&hcost=${hcost}&sort=${sort}`);
    }

    //passing area & cuisine & sort
    else if (req.query.area && req.query.cuisine && req.query.sort) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var cuisine = req.query.cuisine;
        var sort = req.query.sort;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?cuisine=${cuisine}&sort=${sort}`);
    }

    //passing area & price range
    else if (req.query.area && req.query.lcost && req.query.hcost) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var lcost = req.query.lcost;
        var hcost = req.query.hcost;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?lcost=${lcost}&hcost=${hcost}`);
    }

    //passing area & cuisine
    else if (req.query.area && req.query.cuisine) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var cuisine = req.query.cuisine;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?cuisine=${cuisine}`);
    }

    //passing area & sort
    else if (req.query.area && req.query.sort) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        var sort = req.query.sort;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}?sort=${sort}`);
    }

    //passing area
    else if (req.query.area) {
        var mealtype = req.params.mealtype;
        var area = req.query.area;
        res.redirect(`http://localhost:5000/restaurants/${area}/${mealtype}`);
    }

    //passing cuisine, price range, sort
    else if (req.query.cuisine && req.query.lcost && req.query.hcost && req.query.sort) {

        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    sortquery = { cost: parseInt(req.query.sort) };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    sortquery = { cost: parseInt(req.query.sort) };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
            sortquery = { cost: parseInt(req.query.sort) };
        }
        callDb();
    }

    //passing cuisine and price range//
    else if (req.query.cuisine && req.query.lcost && req.query.hcost) {

        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
        }
        callDb();
    }

    //passing price range and sort//
    else if (req.query.sort && req.query.lcost && req.query.hcost) {

        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    sortquery = { cost: parseInt(req.query.sort) };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    sortquery = { cost: parseInt(req.query.sort) };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
            sortquery = { cost: parseInt(req.query.sort) };
        }
        callDb();
    }

    //passing cuisine and sort//
    else if (req.query.cuisine && req.query.sort) {

        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine };
                    sortquery = { cost: parseInt(req.query.sort) };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine };
                    sortquery = { cost: parseInt(req.query.sort) };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine };
            sortquery = { cost: parseInt(req.query.sort) };
        }
        callDb();
    }

    //passing cuisine//
    else if (req.query.cuisine) {

        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine };
        }
        callDb();
    }

    //passing price range

    else if (req.query.lcost && req.query.hcost) {

        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype, cost: { $gte: parseInt(req.query.lcost), $lte: parseInt(req.query.hcost) } };
        }
        callDb();
    }

    //passing sort
    else if (req.query.sort) {
        sortquery = { cost: parseInt(req.query.sort) };
        if (req.params.area === '1' || req.params.area === '2') {

            switch (req.params.area) {
                case "1": {
                    query = { area: /^1/, "type.mealtype": req.params.mealtype };
                    break;
                }

                case "2": {
                    query = { area: /^2/, "type.mealtype": req.params.mealtype };
                    break;
                }

                default: {
                    console.log(`switch error`);
                }
            }
        }
        else {
            query = { area: req.params.area, "type.mealtype": req.params.mealtype };
        }
        callDb();
    }

    else {
        console.log(`error in code`);
    }

    function callDb() {
        db.collection('restaurants').find(query).sort(sortquery).toArray((err, result) => {
            if (err) {
                throw err;
            }
            else {
                res.json(result);
            }
        });
    }

});

//getOrder
router.get('/orders', (req, res) => {
    db.collection('orders').find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.json(result);
        }
    });
});

//Place Order
router.post('/placeOrder', (req, res) => {
    console.log('In post');
    //console.log(req.body);
    var a=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentdate = new Date();
    var datetime = a[currentdate.getDay()] +" - "+ currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    var data = {
        order_id: req.body.order_id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        restId: req.body.restId,
        person: req.body.person,
        restname: req.body.restname,
        date: datetime

    };
    db.collection('orders').update(data, data, { upsert: true }, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            console.log('Order placed');
        }
    });
    res.sendStatus(200);
});

module.exports = router;

