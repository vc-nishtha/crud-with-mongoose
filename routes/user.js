const router = require('express').Router();
const controller = require('../controllers/user.controller');

router.post('/add', controller.addUser);
router.get('/list', controller.getUser);
router.delete('/:id', controller.deleteUser);
router.patch('/', controller.updateUser);

module.exports = router;