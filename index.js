const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var session = require("express-session");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");

app.use(express.static(__dirname+ '/public'));
app.use(session({
  secret: 'keyboard cat'}));
app.set("view engine", "ejs");
app.listen(process.env.PORT || 8000);

app.get("/", index);
function index(req, res){
	res.sendFile(__dirname + "/index.html");
}