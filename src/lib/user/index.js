const { User } = require('../../model')

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email })
  return user ? user : false
}

const existUser = async (email) => {
  const user = await getUserByEmail(email)
  return user ? true : false

}


const createUser = async ({ name, email, password, role }) => {
  if (!name || !email || !password) {
    const error = new Error('Invalied parameters')
    error.status = 400
    throw error
  }
  const user = new User({ name, email, password, role })
  await user.save()
  return { ...user._doc, id: user.id }
}

module.exports = {
  createUser,
  getUserByEmail,
  existUser
}