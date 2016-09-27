"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://isaac.j.grey%40gmail.com:fresno102@smtp.gmail.com');
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
    var newCustomer = new Customer({
        email: req.body.email
    });
    newCustomer.save(function (err, customer) {
        if (err) {
            res.send(err);
        }
        else {
            var mailOptions = {
                from: '"Yarden" <isaac.j.grey@gmail.com>',
                to: 'isaac.j.grey@gmail.com',
                subject: 'Hello',
                text: 'Hello world',
                html: '<b>Hello world</b>'
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    res.send(err);
                }
                else {
                    res.send(info);
                }
            });
        }
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFyZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieWFyZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLDJEQUEyRCxDQUFDLENBQUM7QUFHMUcsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7SUFDeEMsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDLENBQUE7QUFFRixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtJQUM5QyxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxNQUFNO0NBQ3JCLENBQUMsQ0FBQTtBQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7SUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUM7UUFDN0IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztLQUN0QixDQUFDLENBQUM7SUFFSCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLFFBQVE7UUFDN0IsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxXQUFXLEdBQUc7Z0JBQ2hCLElBQUksRUFBRSxtQ0FBbUM7Z0JBQ3pDLEVBQUUsRUFBRSx3QkFBd0I7Z0JBQzVCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLG9CQUFvQjthQUMzQixDQUFDO1lBRUYsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsVUFBUyxLQUFLLEVBQUUsSUFBSTtnQkFDcEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztvQkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVoQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztJQUMzQyxJQUFJLGNBQWMsR0FBRyxJQUFJLFdBQVcsQ0FBQztRQUNuQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ25CLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDckIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNyQixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3pCLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7S0FDcEMsQ0FBQyxDQUFDO0lBRUgsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMifQ==