require('dotenv/config')
const hiring = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT

const route = require('./src/routes')

hiring.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`)
})
hiring.use(bodyParser.json())
hiring.use(bodyParser.urlencoded({ extended: false }))
hiring.use(morgan('dev'))

hiring.use('/', route)