const express = require('express');
const router = express.Router();
const connection = require('./../../database/database');
const { Pool, Client } = require('pg');


router.get('/',async (req,res)=>
{
	const client = new Client(connection);
	await client.connect();

	await client.query('select * from area',async (err,respond)=>
	{
		console.log(respond.rows);
		console.log(req.session.username);
		await client.end();
	});
	res.send("it's ok");
});

module.exports = router;