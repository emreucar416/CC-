const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    client.generateInvite().then(link => {
        var embed = new Discord.RichEmbed()
            .setColor(9955331)
            .addField("Davet Link'i", "[Buraya Tıkla](" + link + ")", false);

        message.channel.send(embed);
    });
};

module.exports.help = {
    name: "davetet",
    alias: ["inv"],
    permission: "default",
    type: "general",
    guildOnly: false,
	help: "Get invite link to invite me to your guild(server)"
};
