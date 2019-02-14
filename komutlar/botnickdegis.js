const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {

  if(!args){
    return message.channel.send(":x: " + "| Lütfen Botun Yeni İsmini Girin");
  }
  message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send("Artık Adım " + args.join(" ") + "!")).catch(console.error);
} else {
  return message.reply(":x: " + "| Bu Komudu Sadece **Moderatör** Yetkisi Olanlar Kullanabilir.")
  }
}

module.exports.help = {
    name: "botnick"
}
