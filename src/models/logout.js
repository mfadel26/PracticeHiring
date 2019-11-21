const conn = require('../config/db')

module.exports = {
  jwtout: (regid) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE reg set jwt = NULL WHERE regid = ?', regid, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}