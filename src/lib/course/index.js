const CustomError = require("../../utils/customError")
const { Course } = require('../../model')

const create = async ({ name, description, price, duration, level, topics, startDate, endDate, classDays, classTime }) => {

  if (!name || !description || !price || !duration || !level || !topics || !startDate || !endDate || !classDays || !classTime) {
    throw new CustomError(400, 'Invalid paramaters')
  }
  const courseData = {
    name, description, price, duration, level, topics,
    schedule: {
      startDate, endDate, classDays, classTime
    }
  }
  const course = new Course(courseData)
  return await course.save()
}

const findCourseById = async (id) => {
  const course = await Course.findById(id)
  if (!course) {
    throw new CustomError(404, 'Invalid id')
  }
  return { ...course._doc, id: course._id }
}

const findAllCourse = async () => {
  return await Course.find({})
}

const removeCourse = async (id) => {
  const course = await Course.findById(id)
  if (!course) throw new CustomError(404, 'Course not found!')
  return await Course.findByIdAndDelete(id)
}

const prepareUpdateData = (data, { name, description, price, duration, level, topics, startDate, endDate, classDays, classTime }) => {
  data.name = name ? name : data.name
  data.description = description ? description : data.description
  data.price = price ? price : data.price
  data.duration = duration ? duration : data.duration
  data.level = level ? level : data.level
  data.schedule.startDate = startDate ? startDate : data.schedule.startDate
  data.schedule.endDate = endDate ? endDate : data.schedule.endDate
  data.schedule.classTime = classTime ? classTime : data.schedule.classTime

  if (topics) {
    if (Array.isArray(topics)) {
      data.topics = topics
    }
    else {
      data.topics.push(topics)
    }
  }

  if (classDays) {
    if (Array.isArray(classDays)) {
      data.schedule.classDays = classDays
    }
    else {
      data.schedule.classDays.push(classDays)
    }
  }

  return data

}

const updateCourse = async (id, { name, description, price, duration, level, topics, startDate, endDate, classDays, classTime }) => {
  const existCourse = await Course.findById(id)
  const preparedData = prepareUpdateData(existCourse, { name, description, price, duration, level, topics, startDate, endDate, classDays, classTime })
  return await preparedData.save()
}

module.exports = { create, findCourseById, findAllCourse, removeCourse, updateCourse }