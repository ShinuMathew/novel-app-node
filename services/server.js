const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

var { Novels } = require('./dbmodel/novels')
var { Authors } = require('./dbmodel/authors')

app.use(cors())
app.use(bodyparser.json())

mongoose.connect("mongodb://localhost:27017/Novel");

app.get('/novels', (req, res)=>{
    Novels.find().then(data=>res.status(200).json(data))    
})

app.get('/author', (req, res)=>{
    Authors.find().then(data=>res.status(200).json(data))
})

app.get('/author/:id', (req, res)=>{
    setTimeout(()=>{
        Authors.find({authorid:req.params.id}).then(data=>res.status(200).json(data))
    }, 2000)
})

app.get('/get')
app.listen(3002);