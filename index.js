const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");
const UserRoute = require('./routes/user/AppUser');
const AreaRoute = require('./routes/area/AppArea');
const session = require("express-session");

app.use(session({
  secret: 'smartfarm',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname+ '/public'));

app.set("view engine", "ejs");

app.use('/user',UserRoute);
app.use('/area',AreaRoute);

app.get('/',(req,res)=>
{
	res.render("index");
	console.log(req.session.username);
})
app.listen(process.env.PORT || 8000);
