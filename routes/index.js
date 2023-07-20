var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/MyLovePhuong', function(req, res){
  res.render('NguyenThuPhuong');
});

module.exports = router;
