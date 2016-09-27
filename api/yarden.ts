import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

router.post('/customer', function(req, res){
  console.log(req.body);
  res.send({message: 'success'});
});

export = router;
