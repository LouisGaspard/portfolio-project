var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var port = process.env.PORT || 8080;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'process.env.MAIL',
      pass: 'process.env.PASS'
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/html/contact.html');
})
app.post('/send_contact', function (req, res) {
    var lname = req.body.lname,
        fname = req.body.fname,
        mail = req.body.mail,
        object = req.body.object,
        message = req.body.message;
    var mailOptions = {
        from: mail,
        to: 'louis.gaspard55@gmail.com',
        subject: fname + lname + object,
        text: message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    res.redirect('/contact');
})
app.get('/html/header.html', function (req, res) {
    res.sendFile(__dirname + '/html/header.html');
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/html/about.html');
})
app.get('/my_printf', function (req, res) {
    res.sendFile(__dirname + '/html/projects/my_printf.html');
})
app.get('/my_ls', function (req, res) {
    res.sendFile(__dirname + '/html/projects/my_ls.html');
})
app.get('/my_sokoban', function (req, res) {
    res.sendFile(__dirname + '/html/projects/my_sokoban.html');
})

app.listen(port, function () {
  console.log('Listening on port %s !', port)
})
