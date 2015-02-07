var express = require("express");
var app = express();

// template engine
var hbs = require('hbs');

// Apply authentication to server.
// Username: Bane, Password: rip
//app.use(express.basicAuth('Bane', 'rip'));
app.use(express.static(__dirname));
app.engine('html', require('hbs').__express);
app.set('views', __dirname + '/');
app.set('view engine', 'html');

app.get('/map', function(req, res) {
	res.render('map.html');
});

app.get('/', function(req, res) {
    res.render('index.html');
    // permanent redirect
    //res.redirect(301, "http://your.tumblr.com");
});

// spin up server (appfog)
app.listen(process.env.PORT || 8080, null);
// spin up server (azure or other)
//app.listen(process.env.PORT || 8080, null);
console.log('server running on port 8080');