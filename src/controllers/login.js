require('dotenv/config')
const modelsLogin = require('../models/login')
const validate = require('../helpers/auth')
module.exports = {
  getLogin: async (req, res) => {
    const data = {
      email: req.body.email,
      password: req.body.password
    }
    try {
      const passData = await modelsLogin.getLogin(data.email)
      const result = validate.validateLogin(data, passData)

      res.send(result)
    } catch (err) {
      console.log(err)
    }
  }
}
