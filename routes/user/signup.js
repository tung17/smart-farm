const express = require('express');
const router = express.Router();
const connection = require('./../../database/database');
const { Pool, Client } = require('pg');

router.get("/", signUpGet);
function signUpGet(req, res){
	res.render("createAccount.ejs");
}

router.post("/", signUpPost);
async function signUpPost(req, res){
  var username = req.body.username,
  password = req.body.password, 
  reEnter = req.body.reEnter,
  email = req.body.email;
  if(password == reEnter){
  	const client = new Client(connection);
  	await client.connect();
  	Client.query('INSERT INTO userinfo (username, password, email) values ($1, $2, $3)',[username, password, email], (err, res) => {
	console.log(err, res);
	client.end();
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