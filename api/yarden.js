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
router.post('/customer/:email', function (req, res) {
    var newCustomer = new Customer({
        email: req.params["email"]
    });
    newCustomer.save(function (err, customer) {
        if (err) {
            res.send(err);
        }
        else {
            var from_email = new helper.Email('noreply@yarden.garden');
            var to_email = new helper.Email(['isaac.j.grey@gmail.com', 'isaacgreywebdeveloper@gmail.com']);
            var subject = "Registration Confirmed For Yarden (BETA)!";
            var content = new helper.Content('text/plain', "Ahoy! You've been added to the waiting list for Yarden, we will notify you upon it's release. Cheers!");
            var mail = new helper.Mail(from_email, subject, to_email, content);
            var request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON(),
            });
            sg.API(request, function (error, response) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.send(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFyZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieWFyZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0FBQ3RHLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFHdEMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7SUFDeEMsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDLENBQUE7QUFFRixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtJQUM5QyxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxNQUFNO0NBQ3JCLENBQUMsQ0FBQTtBQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztJQUMvQyxJQUFJLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQztRQUM3QixLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDM0IsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzNELElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLHdCQUF3QixFQUFFLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUMvRixJQUFJLE9BQU8sR0FBRywyQ0FBMkMsQ0FBQztZQUMxRCxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLHVHQUF1RyxDQUFDLENBQUM7WUFDeEosSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRW5FLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTthQUNwQixDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFTLEtBQUssRUFBRSxRQUFRO2dCQUN0QyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFTLEdBQUcsRUFBRSxHQUFHO0lBQzNDLElBQUksY0FBYyxHQUFHLElBQUksV0FBVyxDQUFDO1FBQ25DLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDbkIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNyQixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ3JCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtLQUNwQyxDQUFDLENBQUM7SUFFSCxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLFFBQVE7UUFDaEMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFTLE1BQU0sQ0FBQyJ9