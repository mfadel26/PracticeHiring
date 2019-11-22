const conn = require('../config/db')

module.exports = {

        getReg: () => {
            return new Promise((resolve, reject) => {
              conn.query('SELECT * FROM reg', (err, result) => {
                if (!err) {
                  resolve(result)
                } else {
                  reject(new Error(err))
                }
              })
            })
          },
          getJwtDB: (regid) => {
            return new Promise((resolve, reject) => {
              conn.query('SELECT jwt FROM reg WHERE email = ? LIMIT 1', regid, (err, result) => {
                if (err) reject(new Error(err))
                resolve(result)
              })
            })
          },
          patchJwtById: (token, email) => {
            return new Promise((resolve, reject) => {
              conn.query("UPDATE reg set jwt = ? WHERE email = ? ", [token, email], (err, result) => {
                if (err) reject(new Error(err))
                resolve(result)
              
              })
            })
          },
  addReg: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO reg SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteReg: (regid) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM reg WHERE regid = ?', regid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
