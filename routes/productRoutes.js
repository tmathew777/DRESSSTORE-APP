const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.postProduct);
router.put('/products/:id', productController.putProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/categories', productController.getAllCategories);
router.get('/categories/:id', productController.getCategoryById);
router.post('/categories', productController.postCategory);
router.put('/categories/:id', productController.putCategory);
router.delete('/categories/:id', productController.deleteCategory);

module.exports = router;
