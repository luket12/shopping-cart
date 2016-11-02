var express = require('express');
var router = express.Router();

// Get products
var products = require('../models/product');

// Start CSRF Secuirity
var csrf = require('csurf');
var csurfProtection = csrf();
router.use(csurfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  var productArr = products.find(function(err, docs) {
      // Only 3 columns
      var productsChunk = [];
      var chunkSize = 3;

      for (i=0; i< docs.length; i+=chunkSize) {
          productsChunk.push(docs.slice(i, i + chunkSize));
      }
      res.render('shop/index', { title: 'Shopping Cart', products: productsChunk });
  });
});

// set up user page routes
router.get('/user/signup', function(req,res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

module.exports = router;
