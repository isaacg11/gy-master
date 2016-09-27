import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport('smtps://isaac.j.grey@gmail.com:fresno102@smtp.gmail.com');

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
      let mailOptions = {
        from: '"Yarden" <noreply@yarden.garden>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world', // plaintext body
        html: '<b>Hello world</b>' // html body
      };

      transporter.sendMail(mailOptions, function(error, info){
        if(error){
          res.send(err);

        } else {
          res.send(info);
        }
      });
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
