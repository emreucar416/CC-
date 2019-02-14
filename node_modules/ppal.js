const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let request = await message.channel.send("~**PP Alınıyor...**~");
  let taggedUser = message.mentions.users.first() || message.author;

  await message.channel.send({files: [
  {
    attachment: taggedUser.displayAvatarURL,
    name: "avatar.png"
  }
]});
message.delete();
}
module.exports.help = {
  name:"ppal"
}
