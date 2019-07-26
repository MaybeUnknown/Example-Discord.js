exports.run = (client, message, args) => {
    const string = message.translate;
    const { RichEmbed} = require("discord.js")
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(string.wlistPer)
    const db = require("quick.db")
if (!args[0]) return  message.channel.send(new RichEmbed().setColor("#008000").setTitle(string.wlistList).addField("Kick", db.fetch(message.guild.id + "kick") || string.profilError).addField("Ban", db.fetch(message.guild.id + "ban") || string.profilError).setFooter(`${string.wlistFooter} ` + db.fetch(message.guild.id + ".prefix") + `warnlist set <ban/kick> <${string.wlistWarns}>`))

  if (args[0] === "set") {
    if (args[1] === "ban") {
      if (!args[2]) return message.channel.send(string.wlistBan)
if (isNaN(args[2])) return message.channel.send(args[2] + ` ${string.notNumber}`)
db.subtract(message.guild.id + "banWarn", db.fetch(message.guild.id + "banWarn") || 0)
db.add(message.guild.id + "banWarn", args[2])
message.channel.send(new RichEmbed().setDescription(`<:tak:520944421865390090> ${string.banSetWarn} ` + args[2] + ` ${string.warnors}`).setColor("#008000"))
    }
    if (args[1] === "kick") {
      if (!args[2]) return message.channel.send(string.wlistKick)
if (isNaN(args[2])) return message.channel.send(args[2] + ` ${string.notNumber}`)
db.add(message.guild.id + "kickWarn", args[2])
message.channel.send(new RichEmbed().setDescription(`<:tak:520944421865390090> ${string.kickSetWarn} ` + db.fetch(message.guild.id + "kickWarn") + ` ${string.warnors}`).setColor("#008000"))
    }
    if (!args[1]) return message.channel.send(string.notDef)
  }

}

exports.help = {
    name: 'warnlist',
    category: "Administracyjne",
        description: `
Przez tą komendę możesz ustawić za ile warnów ma być ban lub kick
{prefix}warnlist <argument>
    `,
    aliases: [],
    permLevel:"Administrator"
  }