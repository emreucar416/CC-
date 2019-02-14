module.exports.run = async (client, message, _args, _level) => { // eslint-disable-line no-unused-vars
  const msg = await message
    .channel
    .send('')
  msg.edit('A')
  msg.edit("X")
  msg.edit("R")
  msg.edit("E")
  msg.edit("S")
  msg.edit(":heart:")
  msg.edit("JAXRES :heart:")
};



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'User',
};

module.exports.help = {
  name: 'qq',
  category: 'Miscelaneous',
  description: 'It pings Q, the supernatural being from Star Trek....think we have a script mixu' +
      'p',
  usage: 'Hey Q!',
};
