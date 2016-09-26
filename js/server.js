var express = require('express');
var app = express();

app.use(express.static('.'));
let PORT = process.env.PORT || 3001;
app.listen( PORT , function () {
  console.log('Example app listening on port '+PORT+'!');
});
