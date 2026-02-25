const express = require('express');

const adminData = require('./admin.js')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop')
  const products = adminData.products
  res.render('shop' , {prods :products , doctitle :'shop' , path : '/' , pageTitle : 'Shop'})
  console.log(adminData.products)
});

module.exports = router;
