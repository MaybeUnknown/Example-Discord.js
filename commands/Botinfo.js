exports.run = async (client, message, args, level) => {
    const string = message.translate;
    const { RichEmbed } = require("discord.js");
    const info = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(string.Info)
    .setDescription(`${string.tekst}`)
  .addField(`${string.linki}`, `[Support](https://discord.gg/ayQsJMG) 
  [Link do dodania bota](https://discordapp.com/oauth2/authorize?client_id=540951867233009666&permissions=8&scope=bot)
  [Zagłosuj na bota](https://discordbots.org/bot/540951867233009666/vote)
  [Panel](http://rkubapl.malopolska.pl:8888/)`)                                                           
  .setTimestamp()
  .setFooter(`${string.cmd}  ${message.author.tag}`)
  message.channel.send(info)
  };
  module.exports.help = {
    name: "botinfo",
    category: "Bot",
    description: "Informacje o CommmunityBocie",
      aliases: [],
     permLevel:"Użytkownik"
  }
    