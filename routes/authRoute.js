const expres = require('express');
const router = expres();
const {register , login} = require('../controllers/authController');

router.post('/register' , register);
router.post('/login' , login);

module.exports = router ;