const expres = require('express');
const router = expres();
const {createHabit , getHabit , updateHabit , deleteHabit} = require('../controllers/habitController');
const  { verifyToken } = require('../middleware/authmiddleware')

router.post('/' ,verifyToken , createHabit);
router.get('/' ,verifyToken , getHabit);
router.put('/:id' ,verifyToken , updateHabit);
router.delete('/:id' ,verifyToken , deleteHabit);

module.exports = router ;