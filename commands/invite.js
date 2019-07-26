const Discord = require("discord.js");
exports.run = async (client, message) => {
  const { RichEmbed } = require('discord.js');
  let invite = new RichEmbed()
  .setColor("RANDOM")
  .setDescription("Dodaj bota https://tiny.pl/tc8cb \n Serwer Support https://discord.gg/zKCSAFG\n Panel bota: http://rkubapl.malopolska.pl:8888/")
  .setTimestamp();
  message.channel.send(invite)
  return;
}

exports.help = {
    name: "invite",
    category: "Bot",
        description: `
Pokazuje najprzydatniejsze linki pozwalające ustawić bota.
{prefix}invite
    `,
    aliases: ["dodaj","Invite","Panel","panel","Dodaj","Support","support"],
    permLevel:"Użytkownik"
}
