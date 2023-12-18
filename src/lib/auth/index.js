const userService = require('../user')
const { generateHash } = require('../../utils/hashing')
const register = async ({ name, email, password, role }) => {
  const user = await userService.existUser(email)
  if (user) {
    const error = new Error('User already exist')
    error.status = 400
    throw error
  }
  password = await generateHash(password)
  return await userService.createUser({ name, email, password, role })
}

module.exports = { register }