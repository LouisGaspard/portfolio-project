var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var port = process.env.PORT || 8080;

const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgres://ihblanrwpgvlwq:476fc0004722f2711b25c5cfa585d9c1e6c10a4f6c55ad1896d10754ca9b8fb7@ec2-54-217-217-194.eu-west-1.compute.amazonaws.com:5432/d87ab73hqpb2pl',
    ssl: true,
});

client.connect();

client.query('CREATE DATABASE users;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS
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
app.get('/html/style.css', function (req, res) {
    res.sendFile(__dirname + '/html/style.css');
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/html/about.html');
})

//PROJECTS
app.get('/my_printf', function (req, res) {
    res.sendFile(__dirname + '/html/projects/my_printf.html');
})
app.get('/my_ls', function (req, res) {
    res.sendFile(__dirname + '/html/projects/my_ls.html');
})
app.get('/my_sokoban', function (req, res) {
    res.sendFile(__dirname + '/html/projects/my_sokoban.html');
})
app.get('/minishell1', function (req, res) {
    res.sendFile(__dirname + '/html/projects/minishell1.html');
})
app.get('/minishell2', function (req, res) {
    res.sendFile(__dirname + '/html/projects/minishell2.html');
})
app.get('/42sh', function (req, res) {
    res.sendFile(__dirname + '/html/projects/42sh.html');
})

//MATHS PROJECTS
app.get('/101pong', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/101pong.html');
})
app.get('/102architect', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/102architect.html');
})
app.get('/103cipher', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/103cipher.html');
})
app.get('/104intersection', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/104intersection.html');
})
app.get('/105torus', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/105torus.html');
})
app.get('/106bombyx', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/106bombyx.html');
})
app.get('/107transfer', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/107transfer.html');
})
app.get('/108trigo', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/108trigo.html');
})
app.get('/109titration', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/109titration.html');
})
app.get('/110borwein', function (req, res) {
    res.sendFile(__dirname + '/html/projects/maths/110borwein.html');
})

//SERVER LAUNCH
app.listen(port, function () {
  console.log('Listening on port %s !', port)
})
