var express = require('express');
var router = express.Router();
var calls = require('../lib/calls')

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(calls.breckCall().sunset);
  var breck = calls.breckCall();
  var vail = calls.vailCall();
  res.render('index', { title: 'Express', breck: breck, vail: vail});
});

module.exports = router;
