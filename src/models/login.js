const conn = require('../config/db')

module.exports = {
  getLogin: (email) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT  password FROM reg where email = ?', email, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
