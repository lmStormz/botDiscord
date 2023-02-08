const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

//Create a new client instance
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
   ]
 });

const prefix="!";

//var leaguepedia=require('mwclient');
////leaguepedia =mwclient.Site('lol.fandom.com', path='/')

var d = new Date();
var days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];


client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
   else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }


   else if (command === "date") {
   var day = days[ d.getDay() ];
      message.reply(day);
      }

});

console.log("Ready");
client.login(token);
