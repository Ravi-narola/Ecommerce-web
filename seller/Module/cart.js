const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    price: {
        type: String
    },
    thumb: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1,
    },
    total_price:{
        type:Number
    }
}, { timestamps: true });

//Export the model
module.exports.cart = mongoose.model('cart', cartSchema);