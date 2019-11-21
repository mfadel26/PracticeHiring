require('dotenv/config')
const userModel = require('../models/user')

module.exports = {
  getUser: (req, res) => {
    userModel.getUser()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addUser: (req, res) => {
    const { name, description, skill, location,
            date_of_birth, showcase, date_created, 
            date_updated } = req.body
    const data = {
      name,
      description,
      skill,
      location,
      date_of_birth,
      showcase,
      date_created : new Date(),
      date_updated : new Date()
      
    }
    userModel.addUser(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  updateUser: (req, res) => {
    const userid = req.params.userid
    const { name, description, skill, location,
      date_of_birth, showcase, date_created, 
      date_updated } = req.body
    const data = { 
      name,
      description, 
      skill, 
      location, 
      date_of_birth, 
      showcase, 
      date_created : new Date(), 
      date_updated : new Date()
    }

    userModel.updateUser(data, userid)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  searchNS : (req, res) => {
    const name = req.query.name
    const skill = req.query.skill
    const sortParam = req.query.sortParam
    const sortChoose = req.query.sortChoose
    const limit = req.query.limit
    const offset = req.query.offset
    userModel.searchNS(name, skill, sortParam, sortChoose, limit, offset)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })

  },
  pageUser : (req, res) => {
    const limit = req.query.limit
    const offset = req.query.offset
    userModel.pageUser(limit, offset)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
    })

  },
  deleteUser: (req, res) => {
    const userid = req.params.userid

    userModel.deleteUser(userid)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
}
