const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Course name is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Course description is required"]
  },
  price: {
    type: Number,
    required: [true, "Course price is required"]
  },
  duration: {
    type: String,
    required: [true, "Course duration is required"]
  },
  level: {
    type: String,
    required: [true, "Course level is required"]
  },
  topics: {
    type: [String],
    required: true
  },
  schedule: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    classDays: {
      type: [String],
      required: true
    },
    classTime: {
      type: String,
      required: true
    }
  }
}, { timestamps: true })

const Course = model('Course', courseSchema)

module.exports = Course