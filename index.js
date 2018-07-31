const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const urlencodedParser = bodyparser.urlencoded({ extended: false });
const ejs = require("ejs");
const { Pool, Client } = require('pg');

var index = require('./routes/index');

app.use(express.static(__dirname+ '/public'));

app.set("view engine", "ejs");

app.use("/",index);

app.listen(process.env.PORT || 8000);
