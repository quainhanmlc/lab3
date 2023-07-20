var express = require('express');
var router = express.Router();

router.get('/greenwich',(req, res)=>{
    var greenwich = "greenwich";
    var pass = true;
    var grade = 6.5;
    var contry = ['Us', 'Uk']
    var sport = ['Bolling', 'Football']
    res.render('greenwich',{
        fwg: greenwich,
        pass: pass,
        grade: grade,
        contry: contry,
        sport: sport
    });
});
module.exports = router;