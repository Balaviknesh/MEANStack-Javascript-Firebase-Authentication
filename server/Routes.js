const express = require('express');
const app = express();
const homeRoutes = express.Router();
var UserLogin = require("./MongoModels/UserLogin");
let UserInfo = require('./MongoModels/UserInfo');
var firebase = require("firebase/app");
require("firebase/auth");


var firebaseConfig = {
    apiKey: "please fill here",
    authDomain: "please fill here",
    databaseURL: "please fill here",
    projectId: "please fill here",
    storageBucket: "please fill here",
    messagingSenderId: "please fill here",
    appId: "please fill here"
};
firebase.initializeApp(firebaseConfig);

//User Login
homeRoutes.route('/Login').post(function (req, res) {

    if(req) {

        var username = req.body.username;
        var password = req.body.password;

        var userlogin = new UserLogin();
        userlogin.UserName = username;
        userlogin.Password = password;


        firebase.auth().signInWithEmailAndPassword(username, password).then(
            function () {

                res.send({success: 'user logged in'});
                console.log("User Logged in successfully");


                // userlogin.save((err, result) => {
                //
                //     if(err){
                //         console.log("Error in database insertion");
                //         res.send({success: "Failed to add in database", status: 500});
                //     }
                //
                //     else{
                //
                //         console.log("Insert Success");
                //         res.send({success: "added in database", status: 200});
                //
                //
                //     }
                //
                // });


            }
        ).catch(function (error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if (error) {
                res.send({
                    success: errorMessage
                })
            }
        });

    }
});

// get user info
homeRoutes.route('/profile').get(function (req, res) {
    res.send("Welcome to FireRasp Profile")
});


module.exports = homeRoutes;

