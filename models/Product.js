
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    //id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    sale_price: { type: Number },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;