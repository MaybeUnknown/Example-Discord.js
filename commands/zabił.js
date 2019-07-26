const Discord = require("discord.js");
exports.run = async (client, message, args) => {
     const string = message.translate;
    const { RichEmbed } = require('discord.js');
    let zUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!zUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription(string.ozn)
    .setFooter(`${string.wyw} ${message.author.tag}`)
    .setTimestamp())

    let zabij = (new RichEmbed()
    .setDescription(`**${message.author.username}** ${string.kill} **${message.mentions.users.first().username}**!`)
    .setColor("RANDOM")
    .setTimestamp())
    message.channel.send(zabij)

}
module.exports.help = {
  name: "zabij",
  category: "4FUN",
     description: `
Zabijasz oznaczoną osobę. Tej komendy nie trzeba prać na poważnie.
{prefix}zabij <osoba>
    `,
    aliases: [],
    permLevel:"Użytkownik"
}
