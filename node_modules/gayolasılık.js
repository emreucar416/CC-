const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Gay Olasılığın`, `**${Math.floor(Math.random() * 101)}% Gay**! :gay_pride_flag:`)
    .setColor('RANDOM')
    .setFooter(` |  ${message.author.tag} | `)
    return message.channel.send(gayembed);
}

module.exports.help = {
  name:"gayolasılığım"
}
