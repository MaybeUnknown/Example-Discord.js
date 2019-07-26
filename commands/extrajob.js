exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const { RichEmbed } = require('discord.js');
    if(Date.now() < db.fetch(message.author.id + message.guild.id + ".ejob")) {
        const embed2 = new RichEmbed()
        .setTitle(string.ejobTitle)
        .setDescription(string.ejobNot)
        .setColor("#00FFFF")
        return message.channel.send(embed2)
    }  
    const ile = Math.floor(Math.random() * 500 + 100);
    db.add(message.author.id  +  message.guild.id + '.kasa', ile);   
    db.set(message.author.id  +  message.guild.id + ".ejob",  Date.now() + 21600)
    const kasa = db.fetch(message.author.id + message.guild.id +  ".kasa")
    const embed = new RichEmbed()
    .setTitle(string.ejobTitle)
    .setDescription(`${string.ejobJobed} ${ile}`)
    .setColor("#00FFFF")
    message.channel.send(embed)
}

exports.help = {
    name: 'dorabiaj',
    category: 'Economy',
      description: "Dorabiasz pieniądze w bocie",
  aliases: [],
  permLevel:"Użytkwonik"
  }