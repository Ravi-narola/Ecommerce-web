const mongoose = require('mongoose'); // Erase if already required

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    total_price: {
        type: String,
        required: true,
    },
});

var orderSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String
    },
    userId:{
        type:String
    },
    product:[productSchema],
    address: {
        type: String,
        required: true
    },
    shipping:{
        type:String,
        default:"19"
    },
    total:{
        type:String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: Number
    },
    country: {
        type: String,
        default: "India"
    },
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });

//Export the model
module.exports.order = mongoose.model('order', orderSchema);