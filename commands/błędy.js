var { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
    if (!client.developers.includes(message.author.id)) return message.channel.send(new RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"));
    message.channel.send(new RichEmbed().setColor("RANDOM")
                             .setTitle("Lista błędów podczas ładoawnia komend bota")
                             .setDescription(client.cerrors[0] ? client.cerrors.map(x=>`${x.cmd}: ${x.error}`) : "Brak błędów! Yaaay"))
}
module.exports.help = {
  name: 'błędy',
  category: 'Bot owners',
  aliases: ["errors","err"]
}