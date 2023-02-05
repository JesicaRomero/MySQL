const mysql = require('mysql2')
require('dotenv').config()
const { createQueries, insertQueries, queries } = require('./queries')

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, POPULATE_DB } = process.env

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

connection.connect((err) =>
  err ? console.log(err) : console.log('Conexión correcta')
)

function makeQuery(sql) {
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
    }
  })
}

if (POPULATE_DB == 'true') {
  console.log('Creating tables...')
  for (const sql of createQueries) {
    makeQuery(sql)
  }
  console.log('Inserting data...')
  for (const sql of insertQueries) {
    makeQuery(sql)
  }
}

for (const sql of queries) {
  console.log(sql)
  makeQuery(sql)
}
