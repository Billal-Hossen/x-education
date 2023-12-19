const courseService = require('../../../../lib/course')
const create = async (req, res, next) => {
  try {
    const course = await courseService.create(req.body)
    console.log(course)
    if (course) {
      res.status(201).json({ message: 'The course has been added successfully' })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = create