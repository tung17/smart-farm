const express = require('express');
const router = express.Router();
const connection = require('./../../database/database');
const { Pool, Client } = require('pg');

router.get("/", loginFormGet);
function loginFormGet(req, res){
	res.render("login.ejs");
}

router.post("/", loginFormPost);
async function loginFormPost(req, res){
	var username = req.body.username;
	var password = req.body.password;
	const client = new Client(connection);
	await client.connect();
	client.query('select username, password from userinfo where username=$1 and password=$2',[username, password], (error, response) =>{
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