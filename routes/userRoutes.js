let usersController = require('../controllers/userController');
let express = require('express');

let router = express.Router();
router.post('/users',usersController.addUser);
router.get('/users', usersController.getAllUser);
router.get('/users/:idUser', usersController.getUserById);
router.delete('/users/:idUser', usersController.removeMember);

module.exports = router;
