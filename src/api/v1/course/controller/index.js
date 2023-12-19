const create = require('./create')
const findAllCourse = require('./findAllCourse')
const findCourseById = require('./findSingleCourse')
const removeCourse = require('./removeCourse')
const updateCourse = require('./updateCourse')



module.exports = {
  create,
  findCourseById,
  findAllCourse,
  removeCourse,
  updateCourse
}