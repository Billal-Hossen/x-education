const bcrypt = require('bcryptjs')
const generateHash = async (payload, soltRound = 10) => {

  const salt = await bcrypt.genSalt(soltRound)
  return await bcrypt.hash(payload, salt)
}

module.exports = {
  generateHash
}