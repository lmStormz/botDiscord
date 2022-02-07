const Discord = require("discord.js");
const config = require("./config.json");
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix="!";

//var leaguepedia=require('mwclient');
//leaguepedia =mwclient.Site('lol.fandom.com', path='/')


var d = new Date();
var jour=[];
jour[0]="Lundi";
jour[1]="Mardi";
jour[2]="Mercredi";
jour[3]="Jeudi";
jour[4]="Vendredi";
jour[5]="Samedi";
jour[6]="Dimanche";



client.on("message", function(message) {
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
     var nbr = d.getDay()-1;
    message.reply(`On est ${jour[nbr]}!`);
  }



});

client.login(config.BOT_TOKEN);
