const Discord = require("discord.js");
module.exports.run = async (client, message) => {
        const { RichEmbed } = require('discord.js');
  let autorzy = new RichEmbed()
  .setTitle(`Autorzy  ${client.user.username}a`)
.setColor("RANDOM")
.setDescription(`💻Główni developerzy:\n ${client.users.get('540932919259168789').tag}\n ${client.users.get('494017032283619329').tag}\n 💿Developerzy:\n ${client.users.get('305060312971870208').tag}`)
.setTimestamp() 
  message.channel.send(autorzy)
  return;
}



module.exports.help = {
    name: "autorzy"
}
