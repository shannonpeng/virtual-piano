var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

var HOME_DIR = '25d09735.ngrok.io';

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Set up Firebase
/*var FirebaseAdmin = require('firebase-admin');
var serviceAccount = require('../data/bandify-62b35-firebase-adminsdk-dnry9-93f4217a08.json');

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://bandify-62b35.firebaseio.com"
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'jammr'
	});
});

io.on('connection', function(socket) {
	socket.on('piano-key', function(note){
		socket.emit('piano-key', note);
	});
});

/* GET jam-session. */
router.get('/jam/:id', function(req, res, next) {
	
	res.render('jam-session', {
		title: req.params.id,
		url: HOME_DIR + '/jam/' + req.params.id
	});

});

module.exports = router;
