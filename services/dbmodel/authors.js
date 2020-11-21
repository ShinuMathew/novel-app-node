const mongoose = require('mongoose')

let Authors = mongoose.model('authors', {
    address : {
        street : String,
        city : String,
        state : String,
        zip : String
    },
    name : String,
    authorid : String,
    age : Number,
    img : String
})

module.exports = { Authors }