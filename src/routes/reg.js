const express = require('express')
const Route = express.Router()

//const { regCallback, regPromise, regAsyncAwait, regGetToken } = require('../controllers/reg')
//const { tokenVerify } = require('../helpers/auth')

const regController = require('../controllers/reg')

Route
.all('/*')
.patch('/:regid',regController.patchReg)
.get('/', regController.getReg)
.post('/', regController.addReg)
.delete('/:regid', regController.deleteReg)
 
 // .get('/callback', regCallback)
  //.get('/promise', tokenVerify, regPromise)
  //.get('/async', tokenVerify, regAsyncAwait)
  //.get('/token', regGetToken)

module.exports = Route
