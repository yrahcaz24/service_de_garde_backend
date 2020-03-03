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
    gender : {
        type: String,
        required: true,
    },
    assignedEducator : {
        type: String,
        required: false,
    },
    allergies : {
        type: String,
        required: false,
    },
    vaccinations : {
        type: String,
        required: false,
    },
    medicalRestrictions : {
        type: String,
        required: false,
    },
    behaviorProblems : {
        type: String,
        required: false,
    },
    incidenceHistory : {
        type: String,
        required: false,
    },
    communication : {
        type: String,
        required: true,
    },
    developpementNotes : {
        type: String,
        required: false,
    },
    trustedContacts : {
        type: String,
        required: false,
    },
    coordPrincipal : {
        type: String,
        required: true,
    },
    coordSecondary : {
        type: String,
        required: true,
    },
    paymentHistory : {
        type: String,
        required: false,
    },
    programs : {
        type: String,
        required: false,
    }

})

// exporting our child schema
module.exports = mongoose.model('Child', childSchema)