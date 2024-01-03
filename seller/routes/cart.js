var express = require('express');
const { checkToken } = require('../middleware/auth');
const { add_cart, update_cart, delete_cart, cart_product, all_cart } = require('../Controller/cart');
var router = express.Router();

/* GET home page. */
router.post('/',checkToken, add_cart)
router.post('/update/:id',checkToken, update_cart)
router.delete('/delete/:id',checkToken, delete_cart)
router.get('/get/:userId',checkToken, cart_product)
router.get('/all',checkToken, all_cart)

module.exports = router;