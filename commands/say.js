module.exports.run = async (client, message, args) => {
  const string = message.translate;
  const { RichEmbed } = require('discord.js'); 
  if (!message.member.hasPermission("MANAGE_GUILD")) {
  message.channel.send(new RichEmbed()
  .setColor("2d72e2")
    .setDescription(string.permsout)
  .setTimestamp())
    return;
  } 
    if (!args[0]||!args) return message.channel.send(new RichEmbed()
    .setColor("2d72e2")     
    .setDescription(string.message_brak)
    .setTimestamp())
    let xd = message.guild.channels.get(args[0]);
    if(xd) {
      await xd.send(args.slice(1).join(" "));
      message.reply("Wysłano na inny kanał");
      message.delete();
    } else {
      message.delete();
      message.channel.send(args.join(" "));
    }
}

module.exports.help = {
    name: "say",
    category: "Administracyjne",
    description: `
Pozwala wypowiedziec napisane zdanie przez bota.
{prefix}say [id_kanału] <tekst>
    `,
    aliases: ["powiedz","napisz"],
    permLevel: "Zarządzanie serwerem"
}