const express = require('express')

const routes = require('./routers')

//  app
const app = express()

// middleware
app.use(express.json())

app.use(routes)

app.use((err, _req, res, next) => {
  // TODO: format error
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  })
})

module.exports = app