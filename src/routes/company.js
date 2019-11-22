const express = require('express')
const Route = express.Router()
const { verifyToken } = require('../helpers/auth')
const companyController = require('../controllers/company')

Route
.all('/*')
.get('/', verifyToken, companyController.getCompany)
.post('/', companyController.addCompany)
.patch('/:companyid', companyController.updateCompany)
.delete('/:companyid', companyController.deleteCompany)
 
module.exports = Route
