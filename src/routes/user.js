const express = require('express')
const Route = express.Router()
const { verifyToken } = require('../helpers/auth')
const userController = require('../controllers/user')

Route
.all('/*')
.get('/', verifyToken, userController.getUser)
.get('/search', userController.searchNS)
.post('/', verifyToken, userController.addUser)
.patch('/:userid', userController.updateUser)
.delete('/:userid', userController.deleteUser)
 
module.exports = Route
