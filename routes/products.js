const express = require('express');
const { products, getProduct, deleteProduct, addProduct } = require('../controllers/products');
const router = express.Router();

// get many products
router.route('/products').get(products); // accepts query parameters page and limit which default to 0 and 10 respectively
// get a particular product
router.route('/product/:id').get(getProduct);
// delete a particular product
router.route('/delete_product/:id').delete(deleteProduct);
// add a product
router.route('/add_product').post(addProduct);

module.exports = router;