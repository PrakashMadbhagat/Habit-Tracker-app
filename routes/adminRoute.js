const express = require('express');
const router = express();
const {getUser , CreateHabitTemplete} = require('../controllers/adminController')
const { verifyToken , isAdmin} = require('../middleware/authmiddleware');

router.get('/users', verifyToken , isAdmin , getUser)
router.post('/habit-templete', verifyToken , isAdmin , CreateHabitTemplete);

module.exports = router