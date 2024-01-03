var express = require('express');
const { checkToken } = require('../middleware/auth');
const { add_order, update_order, delete_order, order_product, all_order, month_income } = require('../Controller/order');
var router = express.Router();

/* GET home page. */
router.post('/',checkToken, add_order)
router.post('/update/:id',checkToken, update_order)
router.delete('/delete/:id',checkToken, delete_order)
router.get('/get/:userId',checkToken, order_product)
router.get('/all',checkToken, all_order)
router.get('/income ',checkToken, month_income)

module.exports = router;