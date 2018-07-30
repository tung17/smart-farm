const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var session = require("express-session");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");
const { Pool, Client } = require('pg');

var index = require('./routes/index');

app.use(express.static(__dirname+ '/public'));

app.use(session({
  secret: 'keyboard cat'}));
app.set("view engine", "ejs");

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'userdatabase',
  password: 'postgres', //password for user postgres
  port: 5432,
});

app.use("/",index);

app.listen(process.env.PORT || 8000);
