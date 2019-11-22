const express = require('express')
const Route = express.Router()
const regController = require('../controllers/reg')

Route
.all('/*')
.patch('/:regid',regController.patchReg)
.get('/', regController.getReg)
.post('/', regController.addReg)
.delete('/:regid', regController.deleteReg)
 
module.exports = Route
