
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

var app = express();
//this line also added
app.use(express.static('public')); 
app.get('/', function (req, res) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'marker.html');
 
  res.sendFile(_retfile);
});
// new code to show html page
app.get("/showfile", (req, res, next) => { 
  // show the page
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'marker.html');
 
  res.sendFile(_retfile);
 });

 // old code
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});