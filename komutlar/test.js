const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


      var test = new Discord.RichEmbed()
              .addField("Kullanıcı Komutları:", "davetet\n" +
                                   "sevgi\n" +
                                   "rusruleti\n" +
                                   "rastgelesayı\n" +
                                   "kurallar\n" +
                                   "korkunçhikaye\n" +
                                   "sunucu\n", true)

               .addField("Moderatör Komutları:", "zamanlımute\n" +
                                   "söyle\n" +
                                   "oylama\n" +
                                   "bağır\n" +
                                   "başarı\n" +
                                   "emoji\n" +
                                   "uyarı\n" +
                                   "uyarılevel\n" +
                                   "temizle\n" +
                                   "botnick\n", true)

              .setColor("0x#FF0000")

                message.channel.send(test)

}

module.exports.help = {
    name: "komutlar"
}
