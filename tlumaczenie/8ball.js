var sayings = ["TAK!",
										"TAK",
										"Tak definitywnie!",
										"Oczywiście!",
										"Nie",
										"A jak myślisz?",
										"Odpowiem ci jak będziesz miał wyższą role!",
										"Zapytaj o to później",
										"Oczywiście, że nie",
										"Tak"];

exports.run = (client, message, args, tools) => {
const { RichEmbed } = require('discord.js');
  message.channel.send(new RichEmbed()
                      .setColor("RANDOM")
                      .setDescription("Odpowiedź na pytanie:")
                      .setAuthor(message.author.tag)      
                      .addField(sayings[Math.floor((Math.random() * sayings.length) + 0)],`🎱`));
}
module.exports.help = {
  name: "8ball"
}