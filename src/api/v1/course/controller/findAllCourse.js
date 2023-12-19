const CustomError = require("../../../../utils/customError")
const courseService = require('../../../../lib/course')


const findAllCourse = async (_req, res, next) => {
  try {
    const courses = await courseService.findAllCourse()
    if (!courses) throw new CustomError(404, 'Not found any course')
    res.status(200).json({ data: [...courses] })

  } catch (error) {
    next(error)

  }
}

module.exports = findAllCourse