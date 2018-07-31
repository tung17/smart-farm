const express = require('express');
const router = express.Router();

router.get("/", index);
function index(req, res){
	res.sendFile(__dirname + "/index.html");
}

module.exports = router;