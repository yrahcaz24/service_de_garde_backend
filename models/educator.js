const mongoose = require('mongoose')

const educatorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    hiredDate: {
        type: String,
        required: true,
    },
    training: {
        type: String,
        required: false,
    },
    specializations: {
        type: String,
        required: false,
    }

})

// exporting our child schema
module.exports = mongoose.model('Educator', educatorSchema)