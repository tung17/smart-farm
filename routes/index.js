var express = require('express');
var router = express.Router();

router.get("/", index);
function index(req, res){
	res.sendFile(__dirname + "/index.html");
}

router.get("/login", loginFormGet);
function loginFormGet(req, res){
	res.sendFile(__dirname + "/login.html");
}

module.exports = router;