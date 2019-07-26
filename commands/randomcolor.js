const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    let color = Math.floor(Math.random() * 16777214) + 1
    message.channel.send(new RichEmbed().setColor(color).setDescription(`${string.color} 0x${color.toString(16).toUpperCase()}`))
};

exports.help = {
  name: "color",
  category: "4FUN",
  description: `Pokazuje losowy kolor.
  {prefix}kolor`,
  aliases: ["color"],
  permLevel:"Użytkownik"
}