const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Authors', { useNewUrlParser: true })

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Author must have a name"], minlength:[3, "Must contain at least 3 characters"]},
}, { timestamps: true })

const author = mongoose.model('authors', AuthorSchema);

module.exports = author;