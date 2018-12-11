var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World! ');
});

var port = process.env.PORT || 3000;
app.disable('x-powered-by');
app.set('etag', false);
app.listen(port);
