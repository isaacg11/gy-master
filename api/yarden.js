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
        email: req.body.email
    });
    newCustomer.save(function (err, customer) {
        if (err) {
            res.send(err);
        }
        else {
            var from_email = new helper.Email('noreply@yarden.garden');
            var to_email = new helper.Email(req.params["email"]);
            var subject = "Registration confirmed for Yarden!";
            var content = new helper.Content('text/plain', "Ahoy! we've added you to the waiting list for Yarden BETA, you will be notified by when it is released to the public. Cheers!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFyZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieWFyZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0FBQ3RHLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFHdEMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7SUFDeEMsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDLENBQUE7QUFFRixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtJQUM5QyxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxNQUFNO0NBQ3JCLENBQUMsQ0FBQTtBQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztJQUMvQyxJQUFJLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQztRQUM3QixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO0tBQ3RCLENBQUMsQ0FBQztJQUVILFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLEVBQUUsUUFBUTtRQUM3QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUMzRCxJQUFJLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksT0FBTyxHQUFHLG9DQUFvQyxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsK0hBQStILENBQUMsQ0FBQztZQUNoTCxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbkUsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ3BCLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBSyxFQUFFLFFBQVE7Z0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7SUFDM0MsSUFBSSxjQUFjLEdBQUcsSUFBSSxXQUFXLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtRQUNuQixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ3JCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDckIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztRQUN6QixZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO0tBQ3BDLENBQUMsQ0FBQztJQUVILGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLEVBQUUsUUFBUTtRQUNoQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsTUFBTSxDQUFDIn0=