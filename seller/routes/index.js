var express = require('express');
const { add_product, all_product, update_product, delete_product, all_category, search_product, product_category, single_product, hot_deal } = require('../Controller/product');
const { checkToken } = require('../middleware/auth');
var router = express.Router();
var cors = require('cors')

router.use(cors());

/* GET home page. */
router.post('/', add_product)
router.get('/all', all_product)
router.get('/hot_deal', hot_deal)
router.get('/single/:id', single_product)
router.post('/update/:id',checkToken, update_product)
router.delete('/delete/:id',checkToken, delete_product)
router.get('/category',checkToken, all_category)
router.get('/search/:key', search_product)
router.get('/category/:category',checkToken, product_category)

module.exports = router;
