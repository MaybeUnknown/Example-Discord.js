exports.run = (client, message, args) => {
  if(!args[0]) return message.channel.send("Nie można ocenić pustki...");
  var { RichEmbed } = require("discord.js");
  var losowa = Math.floor(Math.random() * 10) + 1
  let embed = (new RichEmbed()
                   .setColor("RANDOM")
                   .addField("Ocena", "Oceniam na **" + losowa + "/10**\n"+"⭐".repeat(losowa)));
  message.channel.send(embed);
}
module.exports.help = {
    name: "oceń",
    category: "4FUN",
    description: `Bot ocenia twoją rzecz
    {prefix}oceń <rzecz>`,
    permLevel: "Użytkownik"
  }