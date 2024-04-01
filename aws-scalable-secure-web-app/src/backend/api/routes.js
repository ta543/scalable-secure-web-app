const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/users', controller.getAllUsers);
router.get('/users/:id', controller.getUserById);
router.post('/users', controller.createUser);
router.put('/users/:id', controller.updateUser);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;
