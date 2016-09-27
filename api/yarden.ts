import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// model

let Customer = mongoose.model('Customer', {
  email: String
})

router.post('/customer', function(req, res){
  let newCustomer = new Customer({
    email: req.body.email
  });

  newCustomer.save((err, customer) => {
    if(err) {
      res.send(err);
    } else {
      res.send(customer);
    }
  })
});

export = router;
