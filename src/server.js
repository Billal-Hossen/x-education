require('dotenv').config()
const connectDB = require('./db')
const app = require('./app')

const main = async () => {
  try {
    await connectDB()
    app.listen(8000, () => {
      console.log('App listing on http://localhost:4000')
    })

  } catch (error) {
    console.log('Database connection error')
    console.log(error)
  }
}

main()