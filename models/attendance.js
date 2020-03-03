const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    childName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
    arrivalTime: {
        type: String,
        required: false,
    },
    departureTime: {
        type: String,
        required: false,
    }
    
})

// exporting our child schema
module.exports = mongoose.model('Attendence', attendanceSchema)