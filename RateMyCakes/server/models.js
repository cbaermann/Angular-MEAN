const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RateMyCakes', { useNewUrlParser: true })

const CakeSchema = new mongoose.Schema({
    baker:{
        type: String,
        required: [true, "Baker's name is required"],
        minlength: [2, "Must contain at least 2 characters"]
    },
    image: {
        type: String,
        required: [true, "You must provide image URL"],
    },
    ratings: {
        stars: {
            type: Number,
        },
        comment: String,
    }
}, { timestamps: true })

const cake = mongoose.model("cakes", CakeSchema);

module.exports = cake;