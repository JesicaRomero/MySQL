const express = require('express')

const additionalController = require('../controllers/additional.controller')

const router = express.Router()

router.get('/media', additionalController.avgMark)
router.get('/apuntadas', additionalController.getStudentsSubjects)
router.get('/impartidas', additionalController.getTeachersSubjects)

module.exports = router
