const path = require('path');

const express = require('express');

const productsController = require('../controller/products');

const router = express.Router();


router.get('/add-product',(req,res,next) => {
    res.render('add-product', productsController.getAddProduct);
});
router.post('/add-product', productsController.postAddProduct);


module.exports = router;
 