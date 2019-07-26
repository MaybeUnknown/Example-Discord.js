module.exports.run = async (client, message, args) => {
    let mention = message.mentions.users.first();
    if(!mention) return message.channel.send("Musisz zmentionować osobę.");
    let procent = Math.floor(Math.random()*100);
    let { RichEmbed } = require("discord.js");
    message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(mention.displayAvatarURL, "❤ Tester Miłosny ❤")
.setDescription(`💗 ${mention.tag}
💗 ${message.author.tag}

${procent}% || ${"​​​​​​█".repeat(Math.floor(procent/4))}`))
  }
  
  module.exports.help = {
    name: "love",
    category: "4FUN",
    description: `
Love Tester
{prefix}love <mention>
    `,
    aliases: [],
    permLevel:"Użytkownik"
  }
  