require('dotenv/config')
const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/reg')

module.exports = {
  response: (res, status, data) => {
    const result = {}
    result.status = status
    result.result = data
    return res.status(result.status).json(result)
  },
  validateLogin:  (reqData, passData) => {
    
    // return console.log(passData)
    
     if (passData != undefined) {
      const reqPass = reqData.password
      const sqlPass = passData[0].password
      const dbjwt = passData[0].jwt
      const email = reqData.email

      if(!dbjwt) {
        if (bcrypt.compareSync(reqPass, sqlPass)) {

          const pyload = {
            eml: reqData.email,
            uuid: uuid()
          }
          const token = jwt.sign(pyload, process.env.KEYS, { expiresIn: '24h' })
          userModel.patchJwtById(token, email)
          return token
        }
      
      } else {
        return dbjwt
      }
    } else {
      return "check your password"
    }
  },     

  verifyToken: async (req, res, next) => {
    //for key jwt
    const token = req.headers.token

    if (!token) {
      return res.status(200).send('login dulu')
    } 

    try {
      const decode = jwt.decode(token, { complete: true })
      const email = decode.payload.eml
      const tokenDb = await userModel.getJwtDB(email)
      const tokenCheck = tokenDb[0].jwt

      if (!tokenDb && !token) {
        return res.send('Login dulu')
      }
      if (tokenCheck === token) {
        jwt.verify(token, process.env.KEYS, (err, decode) => {
          if (tokenCheck === !token) {
            return res.status(400).send('Token doesnt exist')
          } else {
            next()
          }
        })
      } else {
        return res.status(400).send('Please Login to Continue your step')
      }
    } catch (error) {
    }
  }
}