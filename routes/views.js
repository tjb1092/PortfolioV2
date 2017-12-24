const express = require('express');
const router = express.Router();

router.get('/about', function(req,res){
  res.render('about');
});

router.get('/portfolio', function(req,res){
  res.render('portfolio');
});
router.get('/contact', function(req,res){
  res.render('contact');
});

module.exports = router;
