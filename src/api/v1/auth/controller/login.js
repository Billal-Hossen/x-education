const { generateToken } = require("../../../../lib/token")
const authService = require('../../../../lib/auth')

const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await authService.login(email, password)
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }

    const accessToken = generateToken(payload)
    const response = {
      code: 200,
      message: "Signin successful",
      data: {
        access_token: accessToken
      }
    }

    res.status(200).json(response)

  } catch (err) {
    next(err)
  }
}

module.exports = login