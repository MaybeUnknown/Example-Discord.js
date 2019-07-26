exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
const string = message.translate;
  message.channel.send(new RichEmbed()
.setTitle(`${string.usersTitle} ${message.guild.name}`)
.setColor("RANDOM")
.addField(string.usersAll, message.guild.memberCount)
.addField(`<:online:565501760702119946>${string.usersOnline}`, message.guild.members.filter(m => m.presence.status === 'online').size)
.addField(`<:idle:565501707501568032>${string.usersIdle}`, message.guild.members.filter(m => m.presence.status === 'idle').size)
.addField(`<:dnd:565501599506759681>${string.usersDnd}`, message.guild.members.filter(m => m.presence.status === 'dnd').size)
.addField(`<:offline:565501658935590922>${string.usersOffline}`, message.guild.members.filter(m => m.presence.status === 'offline').size)
.addField("Streaming",message.guild.members.filter(s => s.presence.status === 'streaming').size)
.setFooter(`${string.cmd} ${message.author.tag}`)
.setTimestamp())
}

module.exports.help = {
  name: 'członkowie',
  category: "Użytkownik",
   description: `Pokazuje ifnoramcje o aktywności użytkwoników.
{prefix}członkowie`,
  aliases: [],
  permLevel: "Użytkownik"
} 