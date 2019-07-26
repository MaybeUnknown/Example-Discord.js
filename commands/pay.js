exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const kasa = db.fetch(message.author.id + message.guild.id + ".kasa");
    const { RichEmbed } = require('discord.js');
    if(!message.mentions.members.first() || !args[0]) return message.channel.send(string.pay);
    let id
    if(message.mentions.members.first()) {
        id = message.mentions.members.first().id;
    } else {
        if(client.users.get(args[0])) {
            id = args[0];   
        } else {
            return message.channel.send(string.idp)
        }        
    }
    if(isNaN(args[1])) return message.channel.send(string.mppk);
    if(args[1] > kasa) return message.channel.send(`${string.mnp}`  + kasa);
    db.subtract(message.author.id + message.guild.id + ".kasa", args[1]);
    db.add(id + message.guild.id + ".kasa", args[1]);
    message.channel.send(`${string.przelano} ` + args[1] +  ` ${string.pdo}  ` +  client.users.get(id).tag);
}

exports.help = {
    name: 'pay',
    category: "Economy",
     description: `Włacisz wybranej osobie.
    {prefix}pay <wzmianka lub ID osoby >`,
    aliases: ["zapłać", "przelew", "pożyczka"],
    permLevel: "Użytkownik"
  }