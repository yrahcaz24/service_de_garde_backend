const express = require('express')
const router = express.Router()
const Educator = require('../models/educator')

// Get all educator
router.get('/', async (req, res) => {
    try {
        const educator = await Educator.find()
        res.json(educator)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get one educator
router.get('/:id', getEducator, (req, res) => {
    res.json(res.educator)
})

// Create one educator
router.post('/', async (req, res) => {
    const educator = new Educator({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        hiredDate: req.body.hiredDate,
        training: req.body.training,
        specializations: req.body.specializations
    })

    try {
        const newEducator = await educator.save()
        res.status(201).json(newEducator)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update one educator
router.patch('/:id', getEducator, async(req, res) => {
    if (req.body.firstName != null) {
        res.child.firstName = req.body.firstName
    }

    if (req.body.lastName != null) {
        res.child.lastName = req.body.lastName
    }

    if (req.body.dateOfBirth != null) {
        res.child.dateOfBirth = req.body.dateOfBirth
    }

    if (req.body.hiredDate != null) {
        res.child.hiredDate = req.body.hiredDate
    }

    if (req.body.training != null) {
        res.child.training = req.body.training
    }

    if (req.body.specializations != null) {
        res.child.specializations = req.body.specializations
    }

    try {
        const updatedEducator = await res.educator.save()
        res.json(updatedEducator)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete one educator
router.delete('/:id', getEducator, async(req, res) => {
    try {
        await res.educator.remove()
        res.json({ message: 'Deleted This educator.' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getEducator(req, res, next) {
    try {
        educator = await Educator.findById(req.params.id)
        if(educator == null){
            return res.status(404).json({ message: `Can't find educator` })
        }
    } catch (error) {
        return res.status(500).json({ message:error.message })
    }

    res.educator = educator
    next()
}

module.exports = router