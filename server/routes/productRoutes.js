const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/productController');


// GET all products
router.get('/get', getAllProducts);

// POST a new product (Admin only)
router.post('/create', createProduct);

module.exports = router;
