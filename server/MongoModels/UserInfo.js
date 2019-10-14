var mongoose = require('mongoose');

var userInfoScheme = mongoose.Schema({

    UserName: {type: String, required:false},
    UserEmail: {type: String, required:true},
    UserID:{type: String, required:true},
    UserEmailVerified:{type: Boolean, required:true}

});


var UserInfo = module.exports = mongoose.model('UserInfo',userInfoScheme);
