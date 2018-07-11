var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

//home
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/files/html/index.html');
})

//projets
app.get('/maths', function (req, res) {
    res.sendFile(__dirname + '/files/html/projets/maths.html');
})
app.get('/psu', function (req, res) {
    res.sendFile(__dirname + '/files/html/projets/psu.html');
})
app.get('/shell', function (req, res) {
    res.sendFile(__dirname + '/files/html/projets/shell.html');
})
app.get('/cpe', function (req, res) {
    res.sendFile(__dirname + '/files/html/projets/cpe.html');
})
app.get('/timeline', function (req, res) {
    res.sendFile(__dirname + '/files/html/projets/timeline.html');
})

//css
app.get('/creative.min.css', function (req, res) {
    res.sendFile(__dirname + '/files/css/creative.min.css');
})
app.get('/timeline.css', function (req, res) {
    res.sendFile(__dirname + '/files/css/timeline.css');
})
app.get('/timeline-style.css', function (req, res) {
    res.sendFile(__dirname + '/files/css/timeline-style.css');
})

//font
app.get('/font1', function (req, res) {
    res.sendFile(__dirname + '/files/css/font1.css');
})
app.get('/font2', function (req, res) {
    res.sendFile(__dirname + '/files/css/font2.css');
})

//script
app.get('/timeline-2017-2018.js', function (req, res) {
    res.sendFile(__dirname + '/files/js/timeline-2017-2018.js');
})

//framework
app.get('/bootstrap.min.css', function (req, res) {
    res.sendFile(__dirname + '/files/framework/bootstrap/css/bootstrap.min.css');
})
app.get('/font-awesome.min.css', function (req, res) {
    res.sendFile(__dirname + '/files/framework/font-awesome/css/fontawesome.css');
})
app.get('/magnific-popup.css', function (req, res) {
    res.sendFile(__dirname + '/files/framework/magnific-popup/magnific-popup.css');
})
app.get('/jquery.min.js', function (req, res) {
    res.sendFile(__dirname + '/files/framework/jquery/jquery.min.js');
})
app.get('/bootstrap.bundle.min.js', function (req, res) {
    res.sendFile(__dirname + '/files/framework/bootstrap/js/bootstrap.bundle.min.js');
})
app.get('/jquery.easing.min.js', function (req, res) {
    res.sendFile(__dirname + '/files/framework/jquery-easing/jquery.easing.min.js');
})
app.get('/scrollreveal.min.js', function (req, res) {
    res.sendFile(__dirname + '/files/framework/scrollreveal/scrollreveal.min.js');
})
app.get('/jquery.magnific-popup.min.js', function (req, res) {
    res.sendFile(__dirname + '/files/framework/magnific-popup/jquery.magnific-popup.min.js');
})

//js
app.get('/creative.min.js', function (req, res) {
    res.sendFile(__dirname + '/files/js/creative.min.js');
})

//img
app.get('/header-img', function (req, res) {
    res.sendFile(__dirname + '/files/img/header.jpg');
})
app.get('/portfolio1', function (req, res) {
    res.sendFile(__dirname + '/files/img/portfolio/thumbnails/1.jpg');
})
app.get('/portfolio2', function (req, res) {
    res.sendFile(__dirname + '/files/img/portfolio/thumbnails/2.jpg');
})
app.get('/portfolio3', function (req, res) {
    res.sendFile(__dirname + '/files/img/portfolio/thumbnails/3.jpg');
})
app.get('/portfolio4', function (req, res) {
    res.sendFile(__dirname + '/files/img/portfolio/thumbnails/4.jpg');
})

//server
app.listen(port, function () {
  console.log('Listening on port 8080 !')
})