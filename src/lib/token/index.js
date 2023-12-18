const jwt = require('jsonwebtoken')
const generateToken = (payload, secrect = process.env.ACCESS_TOKEN_SECRET, algorithm = 'HS256', expiresIn = '1h') => {
  try {
    return jwt.sign(payload, secrect, { algorithm, expiresIn })

  } catch (err) {
    console.log(err)
    const error = new Error('Internal server error')
    error.status = 500
    throw error
  }
}

module.exports = {
  generateToken
}