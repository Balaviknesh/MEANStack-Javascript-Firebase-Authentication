var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var UserLogin = require("./MongoModels/UserLogin");
const homeRoutes = require('./Routes');


mongoose.connect("mongodb://localhost:27017/FRDB", function (err, res)
{

    if(err){
        console.log("MongoDB Conncetion Error");

    }

    else{
        console.log("MongoDB Connection successfull");
    }

});

app.use(cors());

app.use(bodyparser.json());

app.use('/', homeRoutes);

app.set('port', process.env.variables || 3000);

app.get('/getVersion', (req, res) => {

    res.send({success: "Hello there "})

});


app.listen(app.get('port'), function (err, res) {

    if(err){
        console.log("Connection Error");
    }
    else{
        console.log("Connected Succesfully", app.get('port'));

    }

});
