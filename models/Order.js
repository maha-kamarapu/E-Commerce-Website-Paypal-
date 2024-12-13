// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    //id: Number,
    cost: Number,
    name: String,
    email: String,
    status: { type: String, default: 'not paid' },
    city: String,
    address: String,
    phone: String,
    date: { type: Date, default: Date.now },
    products_ids: [Number],
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
