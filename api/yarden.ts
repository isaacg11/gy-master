import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let request = require('request');

// models
let Customer = mongoose.model('Customer', {
  email: String
})

let Application = mongoose.model('Application', {
  name: String,
  email: String,
  phone: String,
  address: String,
  cityStateZip: String
})

// POST - new customer
router.post('/customer', function(req, res){
  let newCustomer = new Customer({
    email: req.body.email
  });

  newCustomer.save((err, customer) => {
    if(err) {
      res.send(err);
    } else {
      request.post('https://api:pubkey-8bd3e6190d6c41cf927549e1ccc2bd68@api.mailgun.net/v3/getyarden.herokuapp.com/messages', {from: 'noreply@yarden.garden', to: "<isaac.j.grey@gmail.com>", subject: 'Hello!', text: 'heya!'}, function (error, response, body) {
        if(error) {
          res.send(error);
        } else {
          res.send(response)
        }
      })
    }
  })
});

// POST - new application
router.post('/application', function(req, res){
  let newApplication = new Application({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    cityStateZip: req.body.cityStateZip
  });

  newApplication.save((err, customer) => {
    if(err) {
      res.send(err);
    } else {
      res.send(customer);
    }
  })
});

export = router;
