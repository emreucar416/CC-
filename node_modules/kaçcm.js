const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Seninki`, `**${Math.floor(Math.random() * 101)}cm :eggplant: **`)
    .setColor('RANDOM')
    return message.channel.send(gayembed);
}

module.exports.help = {
  name:"kaçcm"
}
