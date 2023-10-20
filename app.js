var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');

var i = 3;

var app = express();

app.use(express.static(__dirname + '/www'))
    .use(cookieParser());



app.get('/', function(req, res) {
    res.redirect('/index.html');
    res.end();
});

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) { next(); }
}

var nodemailer = require('nodemailer');

var maillist = [
  'aplusneveraminus@gmail.com',
  'contact@aplusneveraminuscleaningservice.com'
];

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aplusneveraminus@gmail.com',
    pass: 'zuguingmtigigugz'
  }
});

var mailOptions = {};

app.get('/contact', function(req, res) {
  var q = req.query;
  var first, email, phone, message;
  first = q.name;
  email = q.email;
  phone = q.phone;
  message = q.message;
 mailOptions = {
    from: 'crystalclearhomecleaning9@gmail.com',
    to: maillist,
    subject: 'New contact from website...',
    text: first + '.\n' + email + '.\n' + phone + '.\n' + message
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send("SUCCESS");
    } else {
      res.send("SUCCESS");
    }
  });

});

process.on('uncaughtException', function(err) {
    console.log("Node NOT Exiting...");
    console.log(err);
});

if (i === 1) {
    app.listen(process.env.PORT || 8080);
    app.timeout = 5000;
} else if (i === 2) {
    app.listen(process.env.PORT || 8080);
    app.timeout = 5000;
} else if (i === 3) {
    app.listen(process.env.PORT || 8080);
    console.log(process.env.PORT);
    app.timeout = 5000;
};
