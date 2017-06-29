var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("接收到请求");
  res.render('../public/gakki');
});

module.exports = router;
