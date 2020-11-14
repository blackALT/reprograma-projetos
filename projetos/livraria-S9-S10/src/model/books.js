const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    author: {type: String},
    category: {type: String},
    available: {type: Boolean}
},{
    versionKey: false
})

const books = mongoose.model('collectionBooks', bookSchema)

module.exports = books