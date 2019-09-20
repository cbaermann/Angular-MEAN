const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Exam', { useNewUrlParser: true })



const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "must give a name"], minlength: [3, "must be at least 3 characters"]},
    type: {type: String, required: [true, "must give a type"], minlength: [3, "Pet type must be at least 3 characters"]},
    description: {type: String, required: [true, "must have a description"], minlength: [3, "Pet description must be at least 3 characters"]},
    skillone: {type: String},
    skilltwo: {type: String},
    skillthree: {type: String},
}, { timestamps: true })

const pet = mongoose.model('pet', PetSchema);

module.exports = pet;