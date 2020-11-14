const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    age: {type: Number},
    position: {type: String},
    sector: {type: String}
},{
    versionKey: false
})

const employees = mongoose.model('collectionEmployees', employeeSchema)

module.exports = employees