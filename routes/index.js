var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

var HOME_DIR = '4c9cd33e.ngrok.io';

// Set up Firebase
/*var FirebaseAdmin = require('firebase-admin');
var serviceAccount = require('../data/bandify-62b35-firebase-adminsdk-dnry9-93f4217a08.json');

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://bandify-62b35.firebaseio.com"
});
*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'jammr'
	});
});
*/

/* GET jam-session. */
router.get('/', function(req, res, next) {
	
	res.render('jam-session', {
		title: 'jammr',
		url: HOME_DIR
	});

});

module.exports = router;
