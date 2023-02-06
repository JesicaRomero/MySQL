const express = require('express')
const cors = require('cors')

const errorHandling = require('./error/errorHandling')
const studentRoutes = require('./routes/student.routes')
const additionalRoutes = require('./routes/additional.routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(studentRoutes)
app.use(additionalRoutes)
app.use(errorHandling.notFound)
app.use(errorHandling.internalServer)

module.exports = app
