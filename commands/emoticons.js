const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    try {
      let emojis;
      if (message.guild.emojis.size === 0) emojis = string.emoticonError;
      else emojis = `**${string.emoticon} ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
      message.channel.send(emojis);
      } catch (err) {
        message.channel.send(`**${err.name}: ${err.message}**`)
      }
}

 

module.exports.help = {
    name: "emotkiinfo",
  category: "Użytkownik",
    description: `Pokazuje wszystkie emotki, które są dodane na serwerze.
    {prefix}emotkiinfo`,
    aliases: [],
    permLevel:"Użytkownik"
}