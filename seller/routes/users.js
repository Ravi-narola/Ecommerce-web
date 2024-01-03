var express = require('express');
const { register, user_login_data, user_check_email, user_update_password, user_stat } = require('../Controller/user');
var router = express.Router();

/* GET users listing. */
router.post('/register', register)
router.post('/', user_login_data)
router.post('/check_email', user_check_email)
router.post('/forgot', user_update_password)
router.get('/stat', user_stat)

module.exports = router;