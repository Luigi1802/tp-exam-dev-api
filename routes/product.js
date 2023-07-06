const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.post('/creer-produit', productController.createProduct);

module.exports = router;