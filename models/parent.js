const mongoose = require('mongoose')

const parentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    listOfChildren: {
        type: String,
        required: true,
    }

})

// exporting our child schema
module.exports = mongoose.model('Parent', parentSchema)