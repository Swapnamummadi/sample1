

const express = require('express')
const cors = require('cors')
const router = require('./routes')
const db = require('mongoose')


let index = express()

index.use(cors())
db.connect('mongodb://localhost:27017/netflixapi')

index.use(router)

index.listen(1113)



