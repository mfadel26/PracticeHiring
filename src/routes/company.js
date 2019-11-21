const express = require('express')
const Route = express.Router()
const { verifyToken } = require('../helpers/auth')

//const { companyCallback, companyPromise, companyAsyncAwait, companyGetToken } = require('../controllers/company')
//const { tokenVerify } = require('../helpers/auth')

const companyController = require('../controllers/company')

Route
.all('/*')
.get('/', verifyToken, companyController.getCompany)
.post('/', companyController.addCompany)
.patch('/:companyid', companyController.updateCompany)
.delete('/:companyid', companyController.deleteCompany)
 
 // .get('/callback', companyCallback)
  //.get('/promise', tokenVerify, companyPromise)
  //.get('/async', tokenVerify, companyAsyncAwait)
  //.get('/token', companyGetToken)

module.exports = Route
