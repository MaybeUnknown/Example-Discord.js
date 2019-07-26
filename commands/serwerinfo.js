const moment = require("moment");

module.exports.run = async (client, message, args) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
      return message.channel.send(new RichEmbed().setDescription(`${string.serinTitle} ` + message.guild.name)
      .setColor("RANDOM")
      .setThumbnail(message.guild.iconURL)
      .addField(string.serinID, message.guild.id)
      .addField(string.serinOwner, message.guild.owner, true)
      .addField(string.serinRegion, message.guild.region, true)
      .addField(string.serinUsers, message.guild.memberCount,true)
      .addField("Botów:", message.guild.members.filter(member => member.user.bot).size)
     .addField('Liczba ról', message.guild.roles.size)
      .addField(string.serinChannels, `${message.guild.channels.filter(chan => chan.type === 'voice').size} ${string.voice} / ${message.guild.channels.filter(chan => chan.type === 'text').size} ${string.text}`)
      .addField("Kanał AFK", message.guild.afkChannel)
      .addField(string.serinCreated, `${moment.utc(message.guild.createdAt + "-0100'").format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
      .setFooter(`${string.cmd} ${message.author.tag}`)
      .setTimestamp())
  }
  module.exports.help = {
      name: "serverinfo",
      category: "Użytkownik",
          description: `
Pokazuje informacje o serwerze.
{prefix}serverinfo
    `,
    aliases: ["serwerinfo", "Serwerinfo","Serverinfo"],
    permLevel:"Użytkownik"
  }
