const express = require('express');
const router = express.Router();
const bodyparser = require("body-parser");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'userdatabase',
  password: 'postgres', //password for user postgres
  port: 5432,
});

router.get("/", index);
function index(req, res){
	res.sendFile(__dirname + "/index.html");
}

router.get("/login", loginFormGet);
function loginFormGet(req, res){
	res.render("login.ejs");
}

router.post("/login", urlencodedParser, loginFormPost);
function loginFormPost(req, res){
	var username = req.body.username;
	var password = req.body.password;

	pool.query('select username, password from userinfo where username=$1 and password=$2',[username, password], (error, response) =>{
		console.log(error,response);
		console.log(response.rowCount);
		if (response.rowCount >=1)
		{
			res.redirect("/");
		}
		else {
			var incorrect = "Incorrect username or password.";
			res.render("login.ejs", { incorrect: incorrect
			});
		}
	});
}


router.get("/sign-up", signInGet);
function signInGet(req, res){
	res.render("createAccount.ejs");
};

router.post("/sign-up", urlencodedParser, signInPost);
function signInPost(req, res){
  var username = req.body.username,
  password = req.body.password, 
  reEnter = req.body.reEnter,
  email = req.body.email;

  if(password == reEnter){
  	pool.query('INSERT INTO userinfo (username, password, email) values ($1, $2, $3)',[username, password, email], (err, res) => {
	console.log(err, res);
	pool.end();
		});
  	res.redirect("/");
	}
	else {
		var refuseString = "The password and re-entered password must be the same";
		res.render("createAccount", {password: refuseString,
			reEnter: refuseString
		});
	}
}
module.exports = router;