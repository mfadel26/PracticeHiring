const express = require('express')
const Route = express.Router()
const { jwtout} = require('../controllers/logout')

Route
.patch('/', jwtout)
module.exports = Route

  

  

