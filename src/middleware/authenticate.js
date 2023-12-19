const userService = require('../lib/user')
const { verifyToken } = require('../lib/token')
const CustomError = require('../utils/customError')

const authenticate = async (req, _res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  try {
    const decode = verifyToken({ token })
    const user = await userService.getUserByEmail(decode.email)
    if (!user) {
      throw new CustomError(401, 'Authentication Failed')
    }


    req.user = { ...user._doc, id: user.id }
    next()
  } catch (error) {
    next(error)
  }




}

module.exports = authenticate