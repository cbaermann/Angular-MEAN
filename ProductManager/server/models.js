const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ProductManager', { useNewUrlParser: true })

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "must give a name"], minlength: [4, "must be at least 4 characters"]},
    price: {type: Number, required: [true, "must give a price"]},
    image: {type: String}
}, { timestamps: true })

const product = mongoose.model('product', ProductSchema);

module.exports = product;