var express=require('express');
var router=express.Router();

let aDate;

/* GET home page. */
router.get('/',function(req,res,next){
  console.log(aDate);
  res.render('index',{title:'Express',date:aDate});
});

module.exports=router;
