var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});

app.get('/ui/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

app.get('/ui/bsnl.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bsnl.png'));
});

app.get('/ui/aaruush.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aaruush.png'));
});

app.get('/ui/sof.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sof.png'));
});

app.get('/ui/Facebook-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Facebook-icon.png'));
});

app.get('/ui/Google-Plus-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Google-Plus-icon.png'));
});

app.get('/ui/Linkedin-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Linkedin-icon.png'));
});

app.get('/ui/Github-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Github-icon.png'));
});

app.get('/ui/Website-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Website-icon.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
