var express = require('express');
var router = express.Router();
var calls = require('../lib/calls')

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(calls.breckCall().sunset);
  var breck = calls.breckCall();
  var vail = calls.vailCall();
  var bc = calls.bcCall();
  var ks = calls.ksCall();
  var ab = calls.abCall();
  res.render('index', { title: 'Express', breck: breck, vail: vail, bc: bc, ks: ks, ab: ab});
});

module.exports = router;
