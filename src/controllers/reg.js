require('dotenv/config')
const regModel = require('../models/reg')
const { response } = require('../helpers/helpers')
const bcrypt = require('bcryptjs')
module.exports = {
  getReg: (req, res) => {
    regModel.getReg()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addReg: (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      const { email, password, type } = req.body
      const data = {
        email,
        password: hash,
        type
      }
      regModel.addReg(data)
        .then(result => {
          res.json(result)
        })
        .catch(err => {
          console.log(err)
        })
    })
  },
  patchReg: (req, res) => {
    const id = req.params.id
    const { email, password, type } = req.body
    const data = {
      email,
      password,
      type
    }
    RegModel.patchReg(data, id)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteReg: (req, res) => {
    const regid = req.params.regid

    regModel.deleteReg(regid)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  } 
}

