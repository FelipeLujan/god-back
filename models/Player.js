const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    victories: {
        type: Number,
        default: 0
    }
})
module.exports = player = mongoose.model('player', playerSchema)
