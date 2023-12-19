const router = require('express').Router()
const { controllers: authController } = require('../api/v1/auth')
const { controllers: courseController } = require('../api/v1/course')
const authenticate = require('../middleware/authenticate')
const authorize = require('../middleware/authorize')

router
  .post('/api/v1/auth/register', authController.register)
  .post('/api/v1/auth/login', authController.login)

router
  .post('/api/course', authenticate, authorize(['admin']), courseController.create)
  .get('/api/course', authenticate, authorize(['admin']), courseController.findAllCourse)
  .get('/api/course/:id', authenticate, authorize(['admin']), courseController.findCourseById)
  .delete('/api/course/:id', authenticate, authorize(['admin']), courseController.removeCourse
  )
  .patch('/api/course/:id', authenticate, authorize(['admin']), courseController.updateCourse)

module.exports = router