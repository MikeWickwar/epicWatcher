var express = require('express');
var router = express.Router();
var calls = require('../lib/calls')

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(calls.brekCall());
  var yomama = calls.brekCall();
  console.log(yomama.response);
  res.render('index', { title: 'Express' });
});

module.exports = router;
