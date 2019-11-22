const conn = require('../config/db')

module.exports = {
  jwtout: (email) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE reg set jwt = NULL WHERE email = ?', email, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}