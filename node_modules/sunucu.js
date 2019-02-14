const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setDescription("Sunucu Hakkında")
  .setColor("#15f153")
  .addField("Sunucu Adı", message.guild.name)
  .addField("Toplam Kullanıcı", message.guild.memberCount);

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "sunucu"
}
