const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");

var index = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');


app.use(express.static(__dirname+ '/public'));

app.set("view engine", "ejs");

app.use("/",index);
app.use("/login", login);
app.use("/sign-up", signup);

app.listen(process.env.PORT || 8000);
