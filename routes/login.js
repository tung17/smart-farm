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

router.get("/", loginFormGet);
function loginFormGet(req, res){
	res.render("login.ejs");
}

router.post("/", urlencodedParser, loginFormPost);
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

module.exports = router;