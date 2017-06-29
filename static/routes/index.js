var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("接收到请求");
  res.sendFile(path.resolve(__dirname, '..') + '/public/gakki.html');
});

module.exports = router;
