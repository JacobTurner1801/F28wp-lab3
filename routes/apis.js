const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController');
//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalog', productController.getCatalogue);
router.get('/api/article/:reference', productController.getProductByID);
router.post('/api/login', clientController.loginControl);
router.post('/api/register', clientController.registerControl);
//export router
module.exports = router;