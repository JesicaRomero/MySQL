const express = require('express')
const studentController = require('../controllers/student.controller')

const router = express.Router()

router.get('/alumnos', studentController.getStudents)
router.post('/alumnos', studentController.createStudent)
router.put('/alumnos', studentController.updateStudent)
router.delete('/alumnos', studentController.deleteStudent)

module.exports = router
