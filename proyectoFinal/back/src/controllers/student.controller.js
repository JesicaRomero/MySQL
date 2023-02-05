const studentService = require('./../services/student.service')

async function getStudents(req, res, next) {
  try {
    const { id } = req.query
    const students = id
      ? await studentService.findOne(id)
      : await studentService.findMany()
    res.json({ students })
  } catch (error) {
    next(error)
  }
}

async function createStudent(req, res, next) {
  const data = req.body
  try {
    await studentService.create(data)
    res.json({ ok: true, message: 'Alumno creado' })
  } catch (error) {
    next(error)
  }
}

async function updateStudent(req, res, next) {
  const { id } = req.query
  const data = req.body
  try {
    await studentService.update(id, data)
    res.json({ ok: true, message: 'Alumno actualizado' })
  } catch (error) {
    next(error)
  }
}

async function deleteStudent(req, res, next) {
  try {
    const { id } = req.query
    await studentService.deleteOne(id)
    res.json({ ok: true, message: 'Alumno eliminado' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
}
