const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!sUser)    return    message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription(`**${string.person}**`)
    .setFooter(string.message)
    .setTimestamp()).then(message => message.delete(30000));
    let reason = args.slice(1).join(' ')||string.lack;


    let awansEmbed = new RichEmbed()
    .setDescription(string.someone)
    .setColor("RANDOM")
    .addField(string.degraded,`${message.mentions.users.first().username}`)
    .addField(string.by, `${message.author.username}`)
    .addField(string.reason, reason)
    .setTimestamp()

    message.channel.send(awansEmbed)

}
module.exports.help = {
  name: "degrad",
  category: "4FUN",
    description: `Degradujesz wzmiankowaną osobę.
  {prefix}degrad <wzmianka> <powód>`,
  aliases: [],
  permLevel:"Użytkownik"

}
