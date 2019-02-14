const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**İstediğiniz Kullanıcı Bulunamadı.**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Sen Mi Banlayacaksın Tamam Gülmicem.**");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banlanan Kullanıcı", `${bUser} ID ${bUser.id}`)
    .addField("Banlayan Yetkili", `<@${message.author.id}> ID ${message.author.id}`)
    .addField("Banlandığı Kanal", message.channel)
    .addField("Banladığı Zaman", message.createdAt)
    .addField("Banlanma Sebebi", bReason);


    let incidentchannel = message.guild.channels.find(`name`, "log");
    if(!incidentchannel) return message.channel.send("**log Kanalı Bulunamadı.**");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
