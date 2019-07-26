const moneta = ["Wyrzuciłem **reszke**",
"Wyrzuciłem **orła**"
];
module.exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js')
  const m = await message.channel.send("Rzucam monetą!");
  m.edit(new RichEmbed()
        .setColor("RANDOM")
        .setDescription( moneta[Math.floor(Math.random()*moneta.length)])
        .setFooter(`Komenda użyta przez ${message.author.tag}`))
}
module.exports.help = {
    name: "moneta",
    category: "4FUN",
    description: `Bot rzuca monetą 
    {prefix}moneta`,
    aliases: [],
    permLevel:"Użytkownik"
}
