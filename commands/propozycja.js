module.exports.run = async (client, message, args) => {
    const { RichEmbed }  = require("discord.js")
    const propo = args.join(" ");
    if (!propo){
     return message.channel.send(new RichEmbed()
       .setAuthor(message.author.tag)
       .setDescription("Musisz wpisać swoją propozycje!")
       .setColor("RANDOM"));
    }
   var prop = await client.channels.get("587643203008724996").send(new RichEmbed()
     .setAuthor(message.author.tag)
     .setThumbnail(message.author.avatarURL)
     .setTitle("Propozycja!")
     .setDescription(propo)
     .setColor("RANDOM"));
     
    await prop.react("👍");
    await prop.react("👎");
    
    message.channel.send(new RichEmbed()
      .setAuthor(message.author.tag)
      .setThumbnail(message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(`**Dziękujemy za pomoc w ulepszaniu bota!**`));
   } 
   
  module.exports.help = {
   name: "propozycja",
    category: "Bot"
  } 