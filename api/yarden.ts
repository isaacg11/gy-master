import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let sg = require('sendgrid')('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');
let helper = require('sendgrid').mail;
let from_email = new helper.Email('noreply@yarden.garden');
let to_email = new helper.Email('isaac.j.grey@gmail.com');
let subject = 'Hello World from the SendGrid Node.js Library!';
let content = new helper.Content('text/plain', 'Hello, Email!');
let mail = new helper.Mail(from_email, subject, to_email, content);

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
  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    if(error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
  // let newCustomer = new Customer({
  //   email: req.body.email
  // });
  //
  // newCustomer.save((err, customer) => {
  //   if(err) {
  //     res.send(err);
  //   } else {
  //
  //   }
  // })
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
