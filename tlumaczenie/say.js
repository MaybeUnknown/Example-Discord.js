module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) {
   message.channel.send(new bot.Discord.RichEmbed()
    .setColor("2d72e2")
    .setDescription("⚠ | Nie masz permisji do używania tej komendy!")
   .setFooter("Wiadomość zostanie usunięta po 30 sekundach!")
  .setTimestamp()).then(message => message.delete(30000));
    return;
  } 
    var msg = args.join(" ").toLowerCase()
    if (!args[0]||!msg) return message.channel.send(new bot.Discord.RichEmbed()
    .setColor("2d72e2")     
    .setDescription("Wpisz swoją wiadomość!")
    .setFooter("Wiadomość zostanie usunięta po 30 sekundach!")
    .setTimestamp()).then(message => message.delete(30000));
     message.channel.send(msg);
}

module.exports.help = {
    name: "say",
    category: "FUN",
    description: `
Pozwala wypowiedziec napisane zdanie przez bota.
{prefix}say <tekst>
    `,
    aliases: ["powiedz","napisz"],
    permLevel: "Zarządzanie serwerem"
}