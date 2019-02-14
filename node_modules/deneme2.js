module.exports.run = (bot, message) => {
  var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day  = date.getDate();
		message.channel.sendMessage("Bu Günün Tarihi**'"  + day + "/" + month + "/" + year + "'**." );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name : "tarih",
  description: "shows tthe date in belgium",
  usage: "date"
};
