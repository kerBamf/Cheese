const express = require('express')
const router = express.Router()
const Cheese = require('../models/cheese')


//Get Route
router.get("/", async (req, res) => {
    try {
        res.json(await Cheese.find({}))
    } catch(error) {
        res.status(400).json(error)
    }
})

//POST Route
router.post("/", async (req, res) => {
    try {
        res.json(await Cheese.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

//PUT Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, { new: true}))
    } catch(error) {
        res.status(400).json(error)
    }
})

//Delete Route
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router