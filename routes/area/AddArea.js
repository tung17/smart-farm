const express = require('express');
const router = express.Router();
const connection = require('./../../database/database');
const { Pool, Client } = require('pg');

router.post('/',async (req,res)=>
{
	const client = new Client(connection);
	await client.connect();
	await client.query(
		'insert into area (Name,Type,Description,userid,farmid) VALUES($1,$2,$3,$4,$5)',
		[
			req.body.Name,
			req.body.Type,
			req.body.Description,
			req.body.userid,
			req.body.farmid
		],(err,respond)=>
			{
				if(err)
				{
					res.status(500).send('Cannot access database');
					client.end();
				}
				else
				{
					res.status(200).send("it's ok");
					client.end();
				}
			});
});

router.get('/',async (req,res)=>
{
	res.render('AddArea');
});

module.exports = router;