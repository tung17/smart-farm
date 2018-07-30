var express = require("express");
var app = express();
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'userdatabase',
  password: 'postgres', //password for user postgres
  port: 5432,
})

app.get("/", function(req, res){
	res.send("Hello World");
	pool.query('SELECT * from userinfo', (err, res) => {
  console.log(err, res)
  pool.end()
});
});

app.listen(3000);

