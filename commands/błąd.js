module.exports.run = async (client, message, args) => {
    const { RichEmbed }  = require("discord.js")
    const string = message.translate;
    const propo = args.join(" ");
    if (!propo){
     return message.channel.send(new RichEmbed()
       .setAuthor(message.author.tag)
       .setDescription(string.bla)
       .setColor("#f55d42"));
    }
   var prop = await client.channels.get("593053651883524106").send(new RichEmbed()
     .setAuthor(message.author.tag)
     .setTitle(string.zbl)
     .setDescription(propo)
     .setColor("#f55d42"));
     
    await prop.react("👍");
    await prop.react("👎");
    
    message.channel.send(new RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("#f55d42")
      .setDescription(string.tbla));
   } 
   
  module.exports.help = {
   name: "błąd",
    category: "Bot",
        description: `
    Zgłaszasz do developerów bota błąd w bocie.
{prefix}błąd <treść>
    `,
    aliases: [],
    permLevel:"Użytkownik"
  } 