const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    rate:{
        type:String,
        required:true,
    },
    images:{
     type:Array
    },
    thumb:{
     type:String,
     required:true
    }
},{timestamps:true});

//Export the model
module.exports.product = mongoose.model('Product', productSchema);