exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const { RichEmbed } = require('discord.js');
    if(Date.now() < db.fetch(message.author.id + message.guild.id + ".hajsy")) {
        const embed2 = new RichEmbed().setTitle(string.dailyTitle).setDescription(string.dailyNot).setColor("#00FFFF")
        return  message.channel.send(embed2)
    }  
    db.add(message.author.id + message.guild.id + '.kasa', 200);   
    db.set(message.author.id  + message.guild.id + ".hajsy",  Date.now() + 86400000)
    const kasa = db.fetch(message.author.id + message.guild.id + ".kasa")
    const embed = new RichEmbed().setTitle(string.dailyTitle).setDescription(string.dailyPicked).addField(string.dailyMoney, kasa).setColor("#00FFFF")
    message.channel.send(embed)
}

exports.help = {
    name: 'daily',
    category: "Economy",
        description: `
    Dostajesz dniówkę 
{prefix}daily`,
    aliases: ["dniówka", "dziennyhajs", "dejhajs"]
  }