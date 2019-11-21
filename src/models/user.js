const pool = require('../config/db')
const conn = require('../config/db')

module.exports = {

  getUser: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM enginer', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO enginer SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUser: (data, userid) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE enginer SET ? WHERE userid = ?', [data, userid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (userid) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM enginer WHERE userid = ?', userid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  searchNS: (name, skill) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM enginer WHERE name LIKE '%${name}%' OR skill LIKE '%${skill}%' order by name DESC` ,
       (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  
  },
  pageUser: (limit, offset) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM enginer LIMIT ${limit} OFFSET ${offset}` ,
       (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  
  }
}
  

