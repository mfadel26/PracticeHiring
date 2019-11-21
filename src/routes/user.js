const express = require('express')
const Route = express.Router()
const { verifyToken } = require('../helpers/auth')

//const { userCallback, userPromise, userAsyncAwait, userGetToken } = require('../controllers/user')
//const { tokenVerify } = require('../helpers/auth')

const userController = require('../controllers/user')

Route
.all('/*')
.get('/', verifyToken, userController.getUser)
.get('/search', userController.searchNS)
.get('/page',verifyToken, userController.pageUser)
.post('/', verifyToken, userController.addUser)
.patch('/:userid', userController.updateUser)
.delete('/:userid', userController.deleteUser)
 
 // .get('/callback', userCallback)
  //.get('/promise', tokenVerify, userPromise)
  //.get('/async', tokenVerify, userAsyncAwait)
  //.get('/token', userGetToken)

module.exports = Route
