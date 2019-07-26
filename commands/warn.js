exports.run = async (client, message, args) => {
    const string = message.translate;
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(string.warnPEr)
    const db = require('quick.db')


if (!args[0]) return message.channel.send(string.warnErr)
const { RichEmbed } = require("discord.js");
let reason = args.slice(2).join(' ');
if(!reason) reason = string.withoutReasonBan;
const user = message.mentions.users.first() || args[1]; //To służy do dowiedzenia sie czy podano usera
let member = message.mentions.members.first();
if(args[0] === "add") {
    if(!user) return message.channel.send(string.warn_err);
    const uzytkownik = message.mentions.users.first().id || args[1]; //A to słuzy do ID zeby zwarnować
    db.add(uzytkownik + message.guild.id + ".warn", 1)
    message.channel.send(`${string.addWarn} ` + client.users.get(uzytkownik).username);
    message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
    .setColor(3447003)
    .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
    .setDescription(`**${string.banModerator}**: ${message.author.tag}\n **${string.banReason}**: ${reason}\n**${string.warnCount}**: ${db.fetch(uzytkownik + message.guild.id + ".warn")}`).setFooter("WARN").setTimestamp()).catch(console.error); 
//if (db.fetch(message.guild.id + "banWarn") === null || db.fetch(message.guild.id + "kickWarn") === null) message.channel.send("Polecamy ustawić za ile warnów jest ban/kick. (`" + (db.fetch(message.guild.id + ".prefix") || "!")+ "warnlist ustaw <ban/kick> <ilosc-warnow>`)") 
// if(db.fetch(message.guild.id + "kickWarn") === db.fetch(uzytkownik + message.guild.id + ".warn")) {

// if (!message.guild.me.hasPermission(['KICK_MEMBERS'])) return message.reply('Potrzebuje permisji **`KICK_MEMBERS`** aby wyrzucic użytkownika.');
// console.log("xd")
// await member.kick("autoKick za warny");
// message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
// .setColor('#00CED1')
// .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
// .setDescription(`**Moderator**: ${message.author.tag}\n **Powód**: ${reason}\n**Ilość warnów**: ${db.fetch(uzytkownik + message.guild.id + ".warn")}`).setFooter("KICK").setTimestamp()).catch(console.error); 
// }
// if(db.fetch(message.guild.id + "banWarn") === db.fetch(uzytkownik + message.guild.id + ".warn")) {
// 
// if (!message.guild.me.hasPermission(['BAN_MEMBERS'])) return message.reply('Potrzebuje permisji **`BAN_MEMBERS`** aby wyrzucic użytkownika.');
// console.log("xd")
// await member.ban("autoBan za warny")
// message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
// .setColor("#FFD700")
// .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
// .setDescription(`**Moderator**: ${message.author.tag}\n**Powód**: ${reason}\n**Ilość warnów**: ${db.fetch(message.guild.id + "ban")}`).setFooter("BAN").setTimestamp()).catch(console.error); 
// }
}
if(args[0] === "delete") {
    if(!user) return message.channel.send(string.warnusun_err);
    const uzytkownik = message.mentions.users.first().id || args[1]; //A to słuzy do ID zeby zwarnować
    if (db.fetch(uzytkownik + message.guild.id + ".warn") === 0) return message.channel.send(string.nullWarn)
    db.subtract(uzytkownik + message.guild.id + ".warn", 1)
    message.channel.send('Usunięto warna ' + client.users.get(uzytkownik).username);
    message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
    .setColor("#9932CC")
    .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
    .setDescription(`**${string.banModerator}**: ${message.author.tag}\n **${string.banReason}**: ${reason}\n**${string.banReason}**: ${db.fetch(uzytkownik + message.guild.id + ".warn")}`).setFooter("DELETE-WARN").setTimestamp()).catch(console.error); 
}
}

exports.help = {
    name: 'warn',
    category: "Administracyjne",
        description: `
Daje użytkownikowi warna lub go usuwa.
{prefix}warn add lub delete <użytkownik>
    `,
    aliases: [],
    permLevel:"Administrator"
  }

