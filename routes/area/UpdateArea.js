const express = require('express');
const router = express.Router();
const connection = require('./../../database/database');
const { Pool, Client } = require('pg');

router.post('/',async (req,res)=>
{
	const client = new Client(connection);
	await client.connect();
	await client.query(
		'UPDATE area SET Name=$1,Type=$2,Description=$3 WHERE ID = $4',
		[
			req.body.Name,
			req.body.Type,
			req.body.Description,
			req.query.userid,
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
});

router.get('/',(req,res)=>
{
	res.render('UpdateArea');
});

module.exports = router;