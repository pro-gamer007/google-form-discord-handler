const express = require('express');
const Discord = require('discord.js');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const client = new Discord.Client();
client.login(process.env.bot_token);
const webhook = new Discord.WebhookClient(process.env.webhook_id, process.env.webhook_token);

app.get('/', function(req, res) {
	res.send('YOO whats up!');
});

app.post('/webhook/forms', function(req, res) {
	const details = req.body;
	let message = (`**New Application!**\n**Name**: ${details.name}\n**Tag:** ${details.tag}\n**Application Link:** ${details.appLink}`);
	if (details.downloadLink) {
		message = (`**New Application!**\n**Name**: ${details.name}\n**Tag:** ${details.tag}\n**Application Link:** ${details.appLink}\n**Download Link:** ${details.downloadLink}`);
	}
	webhook.send(message);
	res.send('Done!');
});

app.listen(3000);
console.log('Server online!');