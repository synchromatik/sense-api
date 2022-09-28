const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')
require('dotenv').config()

// init app
const app = express()

// const winston = require('winston')
const morgan = require('morgan')

app
	.options('*', cors());

app
	.use(cors())
	.use(morgan('dev'))
	.use('/api', routes)

// mongo 
mongoose
	.connect(process.env.mongourl, { useNewUrlParser: true })
	.then(() => {
		app.listen(3001, () => console.log('Server ready'))
	})
	.catch(error => console.log(error))

