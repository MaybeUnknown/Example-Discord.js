exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const kasa = db.fetch(message.author.id + message.guild.id + ".kasa")
    const { RichEmbed } = require('discord.js');
    const embed = new RichEmbed().setTitle(string.dailyTitle).setDescription(`**${string.dailyMoney}** ` + (kasa || "0")).setColor("#00FFFF")
    message.channel.send(embed)
}

exports.help = {
    name: 'monety',
    category: "Economy",
    aliases: ["kasa", "money", "pieniążki", "hajs", "monetki", "dolary", "hajsiwo"]
  }