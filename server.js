var fs = require('fs');

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

app.get('/', function (req, res, next) {
	return res.send('<p>Upload a file to get the file size.</p>' +
		'<form method="post" action="/api/get-metadata" enctype="multipart/form-data">' + 
		'<input type="file" name="singleFile" />' +
		'<button type="submit">Submit</button>' +
		'</form>');
});

app.post('/api/get-metadata', upload.single('singleFile'), function (req, res, next) {
	var response = {};
	response.size = req.file.size;
	res.json(response);
});

app.listen(port, function () {
	console.log('Server up and listening at port: ' + port);
});