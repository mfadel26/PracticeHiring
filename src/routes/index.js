const express = require('express')
const Route = express.Router()

const user = require('./user')
const company = require('./company')
const logout = require('./logout')
const reg = require('./reg')
const login = require('./login')
const { verifyToken } = require('../helpers/auth')
Route

Route
  .use('/login', login)
  .use('/company', verifyToken, company)
 .use('/user', verifyToken, user)
  .use('/reg', reg)
  .use('/logout', logout)
module.exports = Route

  

  

