var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
   var fileBuff = new Buffer();
   fileBuff.write(fs.readFileSync('/index.html'));

   response.send(fileBuff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
