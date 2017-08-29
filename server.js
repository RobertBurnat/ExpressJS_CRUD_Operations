var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var stringifyFile;
var app = express();

app.use(bodyParser.json());

app.get('/getNote', function(req,res) {

fs.readFile('./test.json', 'utf-8', function(err, data) {
	if (err) throw err;
	fileContent = data;
	res.send(data);
	});

});

app.post('/updateNote/:note', function(req,res) {
	stringifyFile = req.params.note;
	fs.appendFile('./test.json', stringifyFile, function(req, res, next) {
		// if (err) throw err; wyrzuca błąd że (err) is not defined, bez tego smiga
		console.log('file updated');
	});
});

app.listen(3000);