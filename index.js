var express = require("express");

var app = express();

app.disable("x-powered-by");

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	var headers = req.headers;
	var ip = req.host;
	var lang = headers['accept-language'].split(',')[0];
	var os = headers['user-agent'].split(/[\(\)]/)[1];
	res.json({
		"ip": ip,
		"language": lang,
		"os": os
	});
});

app.listen(app.get('port'), function() {
	console.log('Express running on http://localhost:' + app.get('port') + ' - Ctrl + C to terminate.')
});