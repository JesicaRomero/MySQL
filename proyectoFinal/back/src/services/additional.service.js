const connection = require('./../database')

function avgMark(id) {
  const sql = `SELECT AVG(mark) as "avg" FROM mark WHERE student_id=${id}`
  return makeQuery(sql)
}

function getStudentsSubjects(id) {
  const sql = `SELECT title FROM subject 
INNER JOIN subject_teacher ON subject.subject_id = subject_teacher.subject_id 
INNER JOIN \`group\` ON subject_teacher.group_id = \`group\`.group_id
INNER JOIN student ON \`group\`.group_id = student.student_id 
WHERE student.student_id=${id}`
  return makeQuery(sql)
}

function getAllStudentsSubjects() {
  const sql = `SELECT student.first_name, student.last_name, subject.title
 FROM student
 INNER JOIN \`group\` ON student.group_id = \`group\`.group_id
 INNER JOIN subject_teacher ON \`group\`.group_id = subject_teacher.group_id
 INNER JOIN subject ON subject_teacher.subject_id = subject.subject_id`
  return makeQuery(sql)
}

function getTeachersSubjects(id) {
  const sql = `SELECT title FROM subject
INNER JOIN subject_teacher ON subject.subject_id = subject_teacher.subject_id 
WHERE subject_teacher.teacher_id=${id}`
  return makeQuery(sql)
}

function getAllTeacherSubject() {
  const sql = `SELECT teacher.first_name, teacher.last_name, subject.title FROM subject
    INNER JOIN subject_teacher ON subject.subject_id = subject_teacher.subject_id 
    INNER JOIN teacher ON subject_teacher.teacher_id = teacher.teacher_id`
  return makeQuery(sql)
}

function makeQuery(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  avgMark,
  getStudentsSubjects,
  getAllStudentsSubjects,
  getTeachersSubjects,
  getAllTeacherSubject,
}
