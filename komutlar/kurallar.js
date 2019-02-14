const Discord = module.require('discord.js');

var rules1 = new Discord.RichEmbed()
        .addField("Kurallar Sayfa (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__  • Sarki açmak Isterseniz #müzik Kanalina yazın Kesinlikle +18 şarkılar açmak yasak.\n" +
                                  "__**2.**__  • Spam ve Flood yapmak yasaktır.\n" +
                                  "__**3.**__  • Discord Reklamı yapmak yasaktır.\n" +
                                  "__**4.**__  • Din tartışması Siyaset ve Irkçılık yapmaktır.\n" +
                                  "__**5.**__  • Yetki istemek yasaktır. \n")


        .setColor("0xFF0000")

var rules2 = new Discord.RichEmbed()
        .addField("Kurallar Sayfa (2/2):", "__**6.**__   • Küfürlü nick kullanmak yasaktır.\n" +
                                  "__**7.**__   • Yetkili kişilere saygısızlık yapmayın.\n" +
                                  "__**8.**__  • Küfür,Argo Kelimeler kullanmak yasaktır.\n" +
                                  "__**9.**__  • Odalari trollemek, insanları rahatsız etmek yasaktır.\n" +
                                  "__**10.**__  • Sohbet odalarında tartışma çıkarmak yasak.\n" +
                                  "---------------------------------------------------------------------------------------\n", true)

        .setColor("0xFF0000")

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("Bin2:362263530424107009")
              })

}

module.exports.help = {
    name: "kurallar"
}
