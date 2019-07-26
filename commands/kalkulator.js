var math = require('mathjs');
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
   const string = message.translate;
   let input = args.join(" ");
  if (!input) {
      message.channel.send(`${string.caltulat}`);
      return;
  }

  const question = args.join(" ")

  let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return message.reply(`${string.rwn}`);
  }
  const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField(`${string.rownan}` + ":", question, true)
      .addField(`${string.wynk}` + ":", answer)

  message.channel.send({
      embed
  })
}
exports.help = {
  name: "oblicz",
  category: "4FUN",
    description: `Bot liczy twoje dowolne równienie
 {prefix}oblicz <równanie> `,
 aliases: [],
 permLevel:"Użytkownik"
}