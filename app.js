
var express = require('express');
const path = require('path');
const { fileURLToPath } = require("url");
var app = express();
//this line also added
app.use(express.static('public')); 
app.get('/', function (req, res) {
  res.send('marker.html');
});
// new code to show html page
app.get("/showfile", (req, res, next) => { 
  // show the page
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'public/marker.html');
 
  res.sendFile(_retfile);
 });

 // old code
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});