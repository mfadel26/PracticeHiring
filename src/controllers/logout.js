const modelsLogout = require('../models/logout')
const jwt = require('jsonwebtoken')
module.exports = {
jwtout: async(req, res) => {
    try {
        const jwtHeader =req.headers.token
        const regid =jwt.decode(jwtHeader, { complete: true })
        .payload.eml
        const result = await modelsLogout.jwtout(regid)
        console.log(result)
        res.status(200).json({
            status: 200,
            result: result
        })
    } catch (err){
      console.log(err)
    }
  }
}