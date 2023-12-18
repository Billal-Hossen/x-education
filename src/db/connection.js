const mongoose = require('mongoose')

let connectionURL = process.env.DB_CONNECTION_URL?.replace('<username>', process.env.DB_USER)

connectionURL = connectionURL.replace('<password>', process.env.DB_PASS)

const connectDB = async () => {
  await mongoose.connect(connectionURL, {
    dbName: process.env.DB_NAME, useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log('Database connection successful')
}

module.exports = connectDB