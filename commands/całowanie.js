const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    let cUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!cUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription(string.ozn)
    .setFooter(`${string.wyw} ${message.author.tag}`)
    .setTimestamp())

    let caluj = (new RichEmbed()
    .setDescription(`**${message.author.username}** ${string.poc} **${message.mentions.users.first().username}**!`)
    .setColor("RANDOM")
    .setTimestamp())
    message.channel.send(caluj)

}
module.exports.help = {
  name: "całuj",
  category: "4FUN",
     description: `
Całujesz oznaczoną osobę.
{prefix}całuj <osoba>
    `,
    aliases: [],
    permLevel:"Użytkownik"
}
