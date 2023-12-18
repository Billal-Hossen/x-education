const userService = require('../user')
const { generateHash, hashMatched } = require('../../utils/hashing')

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

const login = async (email, password) => {
  const user = await userService.getUserByEmail(email)

  if (!user) {
    const error = new Error('Wrong credentials')
    error.status = 400
    throw error
  }

  const matchedPassword = await hashMatched(password, user.password)
  if (!matchedPassword) {
    const error = new Error('Wrong credentials')
    error.status = 400
    throw error
  }

  return { ...user._doc, id: user.id }
}

module.exports = { register, login }