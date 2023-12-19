const CustomError = require("../utils/customError")

const authorize = (roles = ['admin']) => (req, _res, next) => {

  if (roles.includes(req.user.role)) {
    return next()
  } else {
    throw new CustomError(401, 'Authentication Failed')
  }

}

module.exports = authorize