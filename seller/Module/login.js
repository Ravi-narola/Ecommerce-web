const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var SellerSchema = new mongoose.Schema({
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
module.exports.seller = mongoose.model('Seller', SellerSchema);