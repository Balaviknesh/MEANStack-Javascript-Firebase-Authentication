var mongoose = require('mongoose');

var userLoginScheme = mongoose.Schema({

    UserName: {type: String, required:true},
    Password: {type: String, required:true},

});


var UserLogin = module.exports = mongoose.model('UserLogin',userLoginScheme);
