const express = require('express');
// Express - to serve the client

const bodyParser = require ('body-parser');
// body parser - To handle the data of post
/*
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
https://www.npmjs.com/package/body-parser
*/
const fs = require ('fs');

let shipCtrl = require ('./shippersController');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../client'));
app.use(express.static('../node_modules'));

/************************************  
 * API  
 * 
 * This is the main api that listens to client requests and serves the appropriate html file 
 * back to the client
 * 
 * ****************************************** */

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('../client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        res.end(data) 
    });
   
});

// Listen to '/shippers' in GET Verb methods
app.get('/shippers', function (req, res) {
    customerCtrl.Read(function(err, shippers) {
        if (err) {
            res.end('error!');
        }

        res.end(JSON.stringify(shippers));
    })
   
});

// // Listen to '/product' in POST Verb methods
//  app.post('/product', function (req, res) {
//      console.log(req.body); // get the body data of post
//      res.end();
//  })


// Start the server
var server = app.listen(8081, function () {
    console.log('listening to 8081')
})