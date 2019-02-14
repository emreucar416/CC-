const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

    if (!args.slice(0)
		.join(' ')) return message.channel.send('Komudu Yanlış Kullandınız Lütfen Örnekteki Gibi Yazınız. Örnek: hastebin <text>')
		.then(msg => msg.delete({
			timeout: 300000
		}));
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(0)
			.join(' '))
		.then(body => {
			message.channel.send('Yazınız İletildi.\nLİNK: https://hastebin.com/' + body.body.key);
		});

}

module.exports.help = {
    name:"hastebin"
 }
