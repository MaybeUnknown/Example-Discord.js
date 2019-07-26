exports.run = (client, message, args) => {
    const string = message.translate;
    const { RichEmbed} = require("discord.js")
    const db = require("quick.db")
message.channel.send(new RichEmbed().setTitle(string.warns).setColor("RANDOM").setDescription(`${string.dailyMoney} ` + (db.fetch(message.author.id + message.guild.id + ".warn") || "0") + ` ${string.Warns}`))

}

exports.help = {
    name: 'warninfo',
    category: "Administracyjne",
        description: `
Pokazuje informacji o podanym użytkowniku ile ma warnów
{prefix}warinfo
    `,
    aliases: [],
    permLevel:"Użytkownik"
  }