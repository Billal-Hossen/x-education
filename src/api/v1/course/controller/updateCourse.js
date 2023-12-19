const CustomError = require("../../../../utils/customError")
const courseService = require('../../../../lib/course')

const updateCourse = async (req, res, next) => {
  const id = req.params.id
  const { name, description, price, duration, level, topics, startDate, endDate, classDays, classTime } = req.body
  try {
    if (!id) {
      throw new CustomError(400, 'id is required')
    }
    const course = await courseService.updateCourse(id, { name, description, price, duration, level, topics, startDate, endDate, classDays, classTime })
    console.log(course)
    res.status(200).json({ message: 'Course updated successfully' })

  } catch (error) {
    next(error)

  }
}

module.exports = updateCourse