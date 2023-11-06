const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const compression = require('compression')
const { default: helmet } = require('helmet')
const { errorHandler } = require('@src/base/helpers/Wrapper')
const ExampleController = require('@controllers/ExampleController')


const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    ExampleController.get
)
app.use(errorHandler)
module.exports = app