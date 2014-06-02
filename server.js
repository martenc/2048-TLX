var express = require("express");
var app = express();

// Apply authentication to server.
// Username: Bane, Password: rip
//app.use(express.basicAuth('Bane', 'rip'));
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.render('index.html');
    // permanent redirect
    //res.redirect(301, "http://your.tumblr.com");
});

// spin up server (appfog)
app.listen(process.env.VMC_APP_PORT || 8080, null);
// spin up server (azure or other)
//app.listen(process.env.PORT || 8080, null);
console.log('server running on port 8080');