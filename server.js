var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

//home
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
})

//projets
app.get('/maths', function (req, res) {
    res.sendFile(__dirname + '/html/projets/maths.html');
})
app.get('/psu', function (req, res) {
    res.sendFile(__dirname + '/html/projets/psu.html');
})
app.get('/shell', function (req, res) {
    res.sendFile(__dirname + '/html/projets/shell.html');
})
app.get('/cpe', function (req, res) {
    res.sendFile(__dirname + '/html/projets/cpe.html');
})
app.get('/timeline', function (req, res) {
    res.sendFile(__dirname + '/html/projets/timeline.html');
})

//css
app.get('/creative.min.css', function (req, res) {
    res.sendFile(__dirname + '/html/css/creative.min.css');
})
app.get('/timeline.css', function (req, res) {
    res.sendFile(__dirname + '/html/css/timeline.css');
})
app.get('/timeline-style.css', function (req, res) {
    res.sendFile(__dirname + '/html/css/timeline-style.css');
})

//script
app.get('/timeline-2017-2018.js', function (req, res) {
    res.sendFile(__dirname + '/html/js/timeline-2017-2018.js');
})

//vendor
app.get('/bootstrap.min.css', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/bootstrap/css/bootstrap.min.css');
})
app.get('/font-awesome.min.css', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/font-awesome/css/fontawesome.css');
})
app.get('/magnific-popup.css', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/magnific-popup/magnific-popup.css');
})
app.get('/jquery.min.js', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/jquery/jquery.min.js');
})
app.get('/bootstrap.bundle.min.js', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/bootstrap/js/bootstrap.bundle.min.js');
})
app.get('/jquery.easing.min.js', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/jquery-easing/jquery.easing.min.js');
})
app.get('/scrollreveal.min.js', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/scrollreveal/scrollreveal.min.js');
})
app.get('/jquery.magnific-popup.min.js', function (req, res) {
    res.sendFile(__dirname + '/html/vendor/magnific-popup/jquery.magnific-popup.min.js');
})

//js
app.get('/creative.min.js', function (req, res) {
    res.sendFile(__dirname + '/html/js/creative.min.js');
})

//font
app.get('/font1', function (req, res) {
    res.sendFile(__dirname + '/html/css/font1.css');
})
app.get('/font2', function (req, res) {
    res.sendFile(__dirname + '/html/css/font2.css');
})

//img
app.get('/header-img', function (req, res) {
    res.sendFile(__dirname + '/html/img/header.jpg');
})
app.get('/portfolio1', function (req, res) {
    res.sendFile(__dirname + '/html/img/portfolio/thumbnails/1.jpg');
})
app.get('/portfolio2', function (req, res) {
    res.sendFile(__dirname + '/html/img/portfolio/thumbnails/2.jpg');
})
app.get('/portfolio3', function (req, res) {
    res.sendFile(__dirname + '/html/img/portfolio/thumbnails/3.jpg');
})
app.get('/portfolio4', function (req, res) {
    res.sendFile(__dirname + '/html/img/portfolio/thumbnails/4.jpg');
})

//server
app.listen(port, function () {
  console.log('Listening on port 8080 !')
})