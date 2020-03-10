const express = require('express')
const router = express.Router()
const Parent = require('../models/parent')

// Get all parents
router.get('/', async (req, res) => {
    try {
        const parent = await Parent.find()
        res.json(parent)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get one parent
router.get('/:id', getParent, (req, res) => {
    res.json(res.parent)
})

// Create one Parent
router.post('/', async (req, res) => {
    const parent = new Parent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        listOfChildren: req.body.listOfChildren
    })

    try {
        const newParent = await parent.save()
        res.status(201).json(newParent)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update one Parent
router.patch('/:id', getParent, async(req, res) => {
    if (req.body.firstName != null) {
        res.child.firstName = req.body.firstName
    }

    if (req.body.lastName != null) {
        res.child.lastName = req.body.lastName
    }

    if (req.body.listOfChildren != null) {
        res.child.listOfChildren = req.body.listOfChildren
    }

    try {
        const updatedParent = await res.parent.save()
        res.json(updatedParent)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete one Parent
router.delete('/:id', getParent, async(req, res) => {
    try {
        await res.parent.remove()
        res.json({ message: 'Deleted This Parent.' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getParent(req, res, next) {
    try {
        parent = await Parent.findById(req.params.id)
        if(parent == null){
            return res.status(404).json({ message: `Can't find parent` })
        }
    } catch (error) {
        return res.status(500).json({ message:error.message })
    }

    res.parent = parent
    next()
}

module.exports = router