const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QuoteRanks', { useNewUrlParser: true })

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Author's name is required"],
        minlength: [2, "Must contain at least 2 characters"]
    },

    quote: {
        vote: {
            type: Number,
        },
        comment:{
            type: String,
            minlength: [3, "must be at least 3 characters"]
        }
    }
}, { timestamps: true })

const author = mongoose.model("authors", AuthorSchema);

module.exports = author;