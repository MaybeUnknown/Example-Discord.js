const Discord = require("discord.js");
exports.run = async (client, message, args) => {
      const string = message.translate;
    const { RichEmbed } = require('discord.js');
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription(string.ozn)
    .setFooter(`${string.wyw} ${message.author.tag}`)
    .setTimestamp())

    let hugEmbed = (new RichEmbed()
    .setDescription(`**${message.author.username}** ${string.hug} **${message.mentions.users.first().username}**!`)
    .setColor("RANDOM")
    .setTimestamp())
    message.channel.send(hugEmbed)

}
module.exports.help = {
  name: "przytul",
  category: "4FUN",
     description: `
Przytulasz oznaczoną osobę.
{prefix}przytul <osoba>
    `,
    aliases: [],
    permLevel:"Użytkownik"
}
