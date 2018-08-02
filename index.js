const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");
const UserRoute = require('./routes/user/AppUser');
const AreaRoute = require('./routes/area/AppArea');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname+ '/public'));

app.set("view engine", "ejs");

app.use('/user',UserRoute);
app.use('/area',AreaRoute);

app.get('/',(req,res)=>
{
	res.render("index");
})
app.listen(process.env.PORT || 8000);
