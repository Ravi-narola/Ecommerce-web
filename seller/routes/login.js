var express = require('express');
const { seller_login, check_email, update_password } = require('../Controller/login');
var router = express.Router();

/* GET home page. */
router.post('/', seller_login)
router.post('/check_email', check_email)
router.post('/update_password/:id', update_password)

module.exports = router;