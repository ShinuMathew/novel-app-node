const mongoose = require('mongoose');

let Novels = mongoose.model('novels', {
    name : String,
    author : String,
    authorid : String
})

module.exports = {Novels}