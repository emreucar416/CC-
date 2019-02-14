const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
let cooldown = new Set();
let cdseconds = 5;
bot.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

 let jsfile = files.filter(f => f.split(".").pop() === "js")
 if(jsfile.length <= 0){
   console.log("Komut Bulunamadı.");
   return;
  }

 jsfile.forEach((f, i) =>{
   let props = require(`./komutlar/${f}`);
   console.log(`${f} Kullanıma Hazır.`);
   bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} Aktif.`);
  bot.user.setActivity("Hayalleriyle", {type: "STREAMING", url: "https://www.youtube.com/channel/UCLhapNtnTKVxCLFU3udydRg"});
});

bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;


   let prefix = botconfig.prefix;
   if(!message.content.startsWith(prefix)) return;
   if(cooldown.has(message.author.id)){
     message.delete();
     return message.reply("5 Saniye Sonra Tekrar Komut Kullanabilirsin.")
   }


   // if(!message.member.hasPermission("ADMINISTRATOR")){
     cooldown.add(message.author.id);
   // }

   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);


   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args);

   setTimeout(() => {
     cooldown.delete(message.author.id)
   }, cdseconds * 1000)


});

bot.login(tokenfile.token);
