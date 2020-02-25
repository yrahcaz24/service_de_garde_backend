const express = require('express')
const router = express.Router()
const Child = require('../models/child')

// Get all children
router.get('/', async (req, res) => {
    try {
        const children = await Child.find()
        res.json(children)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get one child
router.get('/:id', getChild, (req, res) => {
    res.json(res.child)
})

// Create one child
router.post('/', async (req, res) => {
    const child = new Child({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth
    })

    try {
        const newChild = await child.save()
        res.status(201).json(newChild)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update one child
router.patch('/:id', getChild, async(req, res) => {
    if (req.body.firstName != null) {
        res.child.firstName = req.body.firstName
    }

    if (req.body.lastName != null) {
        res.child.lastName = req.body.lastName
    }

    if (req.body.dateOfBirth != null) {
        res.child.dateOfBirth = req.body.dateOfBirth
    }

    try {
        const updatedChild = await res.child.save()
        res.json(updatedChild)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete one child
router.delete('/:id', getChild, async(req, res) => {
    try {
        await res.child.remove()
        res.json({ message: 'Deleted This Child.' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getChild(req, res, next) {
    try {
        child = await Child.findById(req.params.id)
        if(child == null){
            return res.status(404).json({ message: `Can't find child` })
        }
    } catch (error) {
        return res.status(500).json({ message:error.message })
    }

    res.child = child
    next()
}

module.exports = router