"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sg = require('sendgrid')('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');
var helper = require('sendgrid').mail;
var Customer = mongoose.model('Customer', {
    email: String
});
var Application = mongoose.model('Application', {
    name: String,
    email: String,
    phone: String,
    address: String,
    cityStateZip: String
});
router.post('/customer', function (req, res) {
    res.send(req.body);
});
router.post('/application', function (req, res) {
    var newApplication = new Application({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        cityStateZip: req.body.cityStateZip
    });
    newApplication.save(function (err, customer) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(customer);
        }
    });
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFyZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieWFyZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0FBQ3RHLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFHdEMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7SUFDeEMsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDLENBQUE7QUFFRixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtJQUM5QyxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxNQUFNO0NBQ3JCLENBQUMsQ0FBQTtBQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7SUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUE4QnJCLENBQUMsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztJQUMzQyxJQUFJLGNBQWMsR0FBRyxJQUFJLFdBQVcsQ0FBQztRQUNuQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ25CLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDckIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNyQixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3pCLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7S0FDcEMsQ0FBQyxDQUFDO0lBRUgsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMifQ==