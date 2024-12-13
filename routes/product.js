const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import the product model

// Route to fetch and display products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from MongoDB
        res.render('pages/products', { result: products }); // Render the products.ejs file with the fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
