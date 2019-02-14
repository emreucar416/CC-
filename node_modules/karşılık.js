const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

  if(!args[0]) return message.channel.send("**Lütfen 2 Kişi Yazınız.** \n `sevgi <kullanıcı> <kullanıcı>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'Muhteşem Bir Şekilde Seviyorsunuz Birbiriniziç :ok_hand:'
        var bondLevelResults = `¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦`
    } else
    if (bondLevel == 100) {
        var ship = 'İkiniz Çok Yakışıyorsunuz. <3 :ok_hand:'
        var bondLevelResults = `¦¦¦¦¦¦¦¦¦¦`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Gayet Güzel Bir Aşk. <3'
        var bondLevelResults = `¦¦¦¦¦¦¦¦¦??`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Gayet Güzel Bir Aşk. <3'
        var bondLevelResults = `¦¦¦¦¦¦¦¦????`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Gayet Güzel Bir Aşk. <3'
        var bondLevelResults = `¦¦¦¦¦¦¦??????`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'Bazı Düşünceler Var Aranızda. '
        var bondLevelResults = '¦¦¦¦¦¦¦??????'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Eh.'
        var bondLevelResults = '¦¦¦¦¦¦????????'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Eh. '
        var bondLevelResults = `¦¦¦¦¦??????????`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Eh. '
        var bondLevelResults = `¦¦¦¦????????????`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Eh. '
        var bondLevelResults = `¦¦¦??????????????`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'Yorumsuz.'
        var bondLevelResults = `¦¦????????????????`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Tanışmanız Sıkıntılı Olabilir.'
        var bondLevelResults = `¦¦????????????????`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Tanışmak İstiyor Musunuz.'
        var bondLevelResults = `?¦??????????????????`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Evet İmkansız Bir Aşk Gidin Başka Birilerini Bulun.'
        var bondLevelResults = `????????????????????`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("Sevgililer", `${message.author} x ${args[0]}`)
        .addField("Sevgi Puanınız", `${bondLevel}%`)
        .addField("Sevgi Barınız", bondLevelResults)
        .addField("Benim Yorumum", ship);


        return message.channel.send(bondEmbed)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("Sevgililer", `${args[0]} x ${args[1]}`)
        .addField("Sevgi Puanınız", `${bondLevel}%`)
        .addField("Sevgi Barınız", bondLevelResults)
        .addField("Benim Yorumum", ship);


        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("Sevgililer", `${args[0]} x ${args[1]} x ${args[2]}`)
        .addField("Sevgi Puanınız", `${bondLevel}%`)
        .addField("Sevgi Barınız", bondLevelResults)
        .addField("Benim Yorumum", ship);


        return message.channel.send(bondEmbed)
    }
}




module.exports.help = {
    name: "sevgi"
}
