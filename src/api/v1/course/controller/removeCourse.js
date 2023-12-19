const courseService = require('../../../../lib/course')
const removeCourse = async (req, res, next) => {
  const id = req.params.id
  try {
    await courseService.removeCourse(id)
    res.status(204).end()

  } catch (error) {
    next(error)
  }
}

module.exports = removeCourse