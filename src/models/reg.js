const pool = require('../config/db')
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
