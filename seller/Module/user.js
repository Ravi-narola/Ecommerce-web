const mongoose = require('mongoose'); // Erase if already required

var userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});

//Export the model
module.exports.user_login = mongoose.model('User_login', userSchema);