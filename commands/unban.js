module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send( new bot.Discord.RichEmbed().setColor("RANDOM").setTitle(":x: Nie masz permisji, aby użyć tej komendy!"));
    var member = args[0];
    if(!member || member.length != 18) return  message.channel.send(new bot.Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Wpisz poprawne ID")
    .setTimestamp())
    message.guild.unban(member)
           .catch(error => message.reply(`Przepraszam ${message.author} nie mogę odbanować tego użytkownika: ${error}`))
           .then(() => message.channel.send(`Użytkownik o ID ${member} został odbanowany przez ${message.author.tag}.`));
}

module.exports.help = {
    name: "unban",
    category: "Administracyjne",
    description: `Odbanowuje wziankowaną osobę.
{prefix}unban <ID> [powód]`,
  aliases: ["UnBan"],
  permLevel: "Banowanie członków"
}