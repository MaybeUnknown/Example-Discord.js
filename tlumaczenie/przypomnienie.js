const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {
      const { RichEmbed }  = require("discord.js")
  if(!args[0]||args[0] <= 0)   return    message.channel.send(new RichEmbed()
  .setColor("RANDOM")            
  .setDescription("Musisz wpisać poprawny czas!")
  .setFooter("Wiadomość zostanie usunięta po 30 sekundach!")
  .setTimestamp()).then(message => message.delete(30000));
  var Timer = args[0];
  message.channel.send(new RichEmbed().setColor("RANDOM")
                      .setTitle(" Przypomnienie zostało ustawione na: " + `${ms(ms(Timer), {long: true})}`)
                      .setTimestamp());
  setTimeout(() => {
 message.author.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Przypomnienie!"))
  }, ms(Timer));
}

module.exports.help = {
  name: "przypomnienie"
}