const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
})

// exporting our child schema
module.exports = mongoose.model('Child', childSchema)