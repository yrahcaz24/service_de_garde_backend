const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateTime: {
        type: String,
        required: true,
    },
    participants: {
        type: String,
        required: false,
    }

})

// exporting our child schema
module.exports = mongoose.model('Activities', activitiesSchema)