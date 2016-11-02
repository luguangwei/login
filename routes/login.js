var express = require('express');
var router = express.Router();
var User=require("./model/user")

/* GET home page. */
router.get('/',function(req,res,next){
	res.render('login', { 
		title: '11',
		_id:"",
		userName:'',
		passWord:''
	});
});

router.post("/new",function(req,res,next){

	var user=new User({
		name: req.body.userName,
		password: req.body.passWord
	})

	User.find({name:user.name},function(err,docs){

		console.log(docs)

		if(docs==''){
			user.save(function(err){
				console.log(err)
				return 
			})
			res.send("新用户")
		}
		else{
			if(docs[0].password == user.password){
				res.send("success login")
			}
		}
	})
})


module.exports = router;
