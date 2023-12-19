const CustomError = require("../../../../utils/customError")
const courseService = require('../../../../lib/course')
const { model } = require("mongoose")

const findCourseById = async (req, res, next) => {
  const id = req.params.id
  try {
    if (!id) {
      throw new CustomError(400, 'id is required')
    }
    const course = await courseService.findCourseById(id)
    if (!course) throw new CustomError(404, 'Not found any course')
    res.status(200).json({ data: { ...course } })

  } catch (error) {
    next(error)

  }
}

module.exports = findCourseById