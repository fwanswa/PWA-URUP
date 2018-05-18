var express = require("express");
var bodyParser = require('body-parser');
const fs = require('fs');


var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.send('hello world');
})

app.post('/register', urlencodedParser, function(req, res) {

	fs.appendFile('keys.txt', req.body.data + "\n\n");

	fs.readFile('keys.txt', 'utf8', function(err, data) {
		if (err) throw err;
		console.log(data)
	})


	
	res.end(JSON.stringify({"data": "Registered user for notifications"}));
})

app.post('/message', urlencodedParser, function(req, res) {

	fs.readFile('keys.txt', 'utf8', function(err, data) {
		if (err) throw err;
		console.log(data)
	})

})

var server = app.listen(8080, function() {
	console.log("Running server");
})