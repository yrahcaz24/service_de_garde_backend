const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    childName: {
        type: String,
        required: true,
    },
    dateTime: {
        type: String,
        required: false,
    }
})

// exporting our child schema
module.exports = mongoose.model('Attendence', attendanceSchema)