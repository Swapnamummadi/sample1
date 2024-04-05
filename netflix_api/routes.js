


const express = require('express')
const model = require('./model/db')

const parser = require('body-parser')


const cont = require('./controller/controller')

let index = express()

index.use(parser.json())

index.post('/my-list',cont.create)
index.get('/my-list',cont.getData)
index.put('/my-list/:id',cont.updatedata)
index.delete('/my-list/:id',cont.deleteData)


module.exports = index
