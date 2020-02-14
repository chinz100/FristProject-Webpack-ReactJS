//'use strict';
const express = require('express');
const app = express();
const server = require('http').Server(app)
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser') //* update
const axios = require('axios')

/* 
var session = require('express-session')
app.set('trust proxy', 1)
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }})) 
*/
 
const port = process.env.port || 3000;
server.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');

const linka = "/www/";
 
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
 // res.redirect('https://');
});

app.use(express.static(path.resolve(__dirname, '..' + linka)));



app.get('/setting', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  //res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  res.sendFile(path.resolve(__dirname, '..' + linka + 'setting/index.html'));
});


app.post('/upload', function(req, res) {
  /*
  console.log(req.files.fileToUpload); // the uploaded file object
  console.log('Cookies: ', req.cookies);
  console.log('tm_id: ', req.cookies.user_id)
  console.log('tm_key: ', req.cookies.user_key)
  */
  res.send(200)
});
    


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..' + linka + 'index.html'));
});

