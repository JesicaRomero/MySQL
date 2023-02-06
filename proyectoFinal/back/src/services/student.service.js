const connection = require('./../database')

function findMany() {
  const sql = 'SELECT * FROM student'
  return makeQuery(sql)
}

function findOne(id) {
  const sql = `SELECT * FROM student WHERE student_id=${id}`
  return makeQuery(sql)
}

function create(data) {
  const keys = Object.keys(data)
  const values = Object.values(data).map((element) =>
    isNaN(Number(element)) ? `"${element}"` : element
  )
  const sql = `INSERT INTO student (${keys.join(', ')}) VALUES (${values.join(
    ', '
  )})`
  return makeQuery(sql)
}

function update(id, data) {
  const set = []
  for (const [key, value] of Object.entries(data)) {
    set.push(`${key}=${isNaN(Number(value)) ? `"${value}"` : value}`)
  }
  const sql = `UPDATE student SET ${set.join(', ')} WHERE student_id=${id}`
  return makeQuery(sql)
}

function deleteOne(id) {
  const sql = `DELETE FROM student WHERE student_id=${id}`
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
  findMany,
  findOne,
  create,
  update,
  deleteOne,
}
