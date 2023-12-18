const authService = require('../../../../lib/auth')
const { generateToken } = require('../../../../lib/token')

const register = async (req, res, next) => {
  const body = req.body
  try {
    const user = await authService.register(body)
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }

    const accessToken = generateToken(payload)

    const response = {

      code: 201,
      message: "Signup successful",
      data: {
        access_token: accessToken
      }
    }

    res.status(201).json(response)




  } catch (error) {
    next(error)
  }
}

module.exports = register