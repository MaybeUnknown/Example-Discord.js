const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {
const string = message.translate;
  const { RichEmbed } = require('discord.js');
  if(!args[0]||args[0] <= 0) return message.channel.send(`${string.minutnik}`);
  var Timer = args[0];
  message.channel.send(new RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${string.usm}`  + `${ms(ms(Timer), {long: true})}`)
  .setTimestamp());
  setTimeout(() => {
  message.channel.send(`${string.mm} ${ms(ms(Timer), {long: true})}` + message.author.toString())
  }, ms(Timer));
}
module.exports.help = {
  name: "minutnik",
  category: "Użytkownik",
  description: `{prefix}minutnik <czas>`,
  aliases:[],
  permLevel: "Użytkownik"
};