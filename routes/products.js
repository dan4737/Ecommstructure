const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const { authenticate, authorizeAdmin } = require('../middlewares/auth');

const router = express.Router();

// Public: Get all products
router.get('/', getProducts);

// Admin: Create a product
router.post('/', authenticate, authorizeAdmin, createProduct);

// Admin: Update a product
router.put('/:id', authenticate, authorizeAdmin, updateProduct);

// Admin: Delete a product
router.delete('/:id', authenticate, authorizeAdmin, deleteProduct);

module.exports = router;
