"use strict";
require('dotenv').config({ silent: true });
var express = require('express');
var favicon = require('express-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
app.use(favicon(__dirname + '/ngApp/images/favicon.png'));
var mongo_url = "mongodb://isaac:1234@ds035786.mlab.com:35786/get-yarden";
mongoose.connect(mongo_url, function () {
    console.log("connected to " + mongo_url);
});
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
if (process.env.NODE_ENV !== 'test')
    app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./ngApp'));
app.use('/scripts', express.static('bower_components'));
app.use('/api', require('./api/yarden'));
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    var error = (app.get('env') === 'development') ? err : {};
    res.send({
        message: err.message,
        error: error
    });
});
module.exports = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0MsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDM0MsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFDbEMsSUFBTyxZQUFZLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFDL0MsSUFBTyxVQUFVLFdBQVcsYUFBYSxDQUFDLENBQUM7QUFDM0MsSUFBTyxRQUFRLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFDdEMsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDLENBQUMsQ0FBQztBQUcxRCxJQUFJLFNBQVMsR0FBRyx5REFBeUQsQ0FBQztBQUMxRSxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixTQUFXLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUdILEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUkvQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUM7SUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFFeEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFFekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDbkMsRUFBRSxDQUFDLENBQUMscUNBQXFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFHSCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQzdCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUM7QUFHSCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUM7SUFFOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixLQUFLLEVBQUUsS0FBSztLQUNiLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsR0FBRyxDQUFDIn0=