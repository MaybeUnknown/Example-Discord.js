const Discord = require("discord.js");
module.exports.run = async (client, message) => {
  const string = message.translate;
  const { RichEmbed } = require('discord.js');
  let xd = require("../configxd.js");
  let autorzy = new RichEmbed()
  .setTitle(`${string.author} --> ${client.user.username}`)
  .setColor("RANDOM")
  .setDescription(`:desktop: **${string.gl}**\n${client.users.get('566521151459819530').tag}, \n${client.users.get('494017032283619329').tag},\n \n:mouse_three_button: **${string.pro}**\n${client.users.get('305060312971870208').tag},\n${client.users.get('591681694218846255').tag}`)
    .setFooter(`Komenda użyta przez ${message.author.tag}`)  
  .setTimestamp() 
  message.channel.send(autorzy)
  return;
}
module.exports.help = {
    name: "autorzy",
     category: 'Bot',
        description: `
Pokazuje wszystkich twórców bota Communitybot
{prefix}autorzy
    `,
    aliases: [],
    permLevel:"Użytkownik"
}
