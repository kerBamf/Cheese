const mongoose = require('./connection')

const cheeseSchema = new mongoose.Schema({
    name: String,
    contryOfOrigin: String,
    image: String,
}, {timestamps: true})

const Cheese = mongoose.model('cheese', cheeseSchema)

module.exports = Cheese