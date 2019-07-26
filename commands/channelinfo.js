module.exports.run = async (client, message, args) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    const moment = require("moment");
    if(string.language === "pl") {
    moment.locale('pl')
    }
    
    if(message.channel.type === "dm") return message.channel.send(string.channelinfoError);
    
    message.channel.send(new RichEmbed()
                        .setTitle(string.chinfoTitle + message.channel.name).setColor("RANDOM")
                        .setDescription(`**ID**: ${message.channel.id}\n${string.chinfoPosition} ${message.channel.position}\n${string.chinfoCategory} ${message.channel.parent} (ID: ${message.channel.parentID})\n${string.chinfoCreated} ${moment.utc(message.channel.createdTimestamp).format('dddd, MMMM Do YYYY, HH:mm:ss')}`))
  }
  
  module.exports.help = {
      name: "channelinfo",
      category: "Użytkownik",
          description: `
Pokazuje informacje o danym kanale.
{prefix}channelinfo <kanał>
    `,
    aliases: [],
    permLevel:"Użytkownik"
  }