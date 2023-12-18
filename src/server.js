require('dotenv').config()
const connectDB = require('./db')
const app = require('./app')
const port = process.env.PORT || 8080
const main = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`App listing on http://localhost:${port}`)
    })

  } catch (error) {
    console.log('Database connection error')
    console.log(error)
  }
}

main()