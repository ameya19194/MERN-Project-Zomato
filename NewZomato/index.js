const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });

/*const restController=require('./controllers/restaurantcontroller');
app.use('/', restController);*/

const testController=require('./controllers/testcontroller');
app.use('/', testController);

app.listen(5000, () => {
    console.log(`server started at port: 5000`);
})


