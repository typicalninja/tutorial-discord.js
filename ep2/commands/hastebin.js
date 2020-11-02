const client = require('discord.js');
const Discord = require('discord.js');
const Hastebin = require("hastebin-save");

module.exports = {
	name: 'hastebin',
	description: '',
  args: true,
 usage: '<code>',
	cooldown: 5,
	async execute(message,args) {
const text = args.join(" ")

if(text.length < 6) return message.channel.send("the code to post to hastebin must be over 6 chrs long")

if(text.length > 1000) return message.channel.send("the code to post to hastebin must be under 1000 chrs ")

Hastebin.upload(text, link => {
  message.delete()
    message.channel.send("https://hastebin.com/" + link);
});

   },
