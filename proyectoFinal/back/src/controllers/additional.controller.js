const additionalService = require('./../services/additional.service')

async function avgMark(req, res, next) {
  try {
    const { id } = req.query
    const data = await additionalService.avgMark(id)
    res.json({ avg: roundToTwo(data[0].avg) })
  } catch (error) {
    next(error)
  }
}

async function getStudentsSubjects(req, res, next) {
  try {
    const { id } = req.query
    if (id) {
      const data = await additionalService.getStudentsSubjects(id)
      const subjects = data.map((subject) => subject.title)
      res.json({ subjects })
    } else {
      const data = await additionalService.getAllStudentsSubjects()
      res.json({ data })
    }
  } catch (error) {
    next(error)
  }
}

async function getTeachersSubjects(req, res, next) {
  try {
    const { id } = req.query
    if (id) {
      const data = await additionalService.getTeachersSubjects(id)
      const subjects = data.map((subject) => subject.title)
      res.json({ subjects })
    } else {
      const data = await additionalService.getAllTeacherSubject()
      res.json({ data })
    }
  } catch (error) {
    next(error)
  }
}

function roundToTwo(num) {
  return Math.round(Number(num) * 100) / 100
}

module.exports = {
  avgMark,
  getStudentsSubjects,
  getTeachersSubjects,
}
