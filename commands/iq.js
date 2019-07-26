module.exports.run = async (client, message, args) => {
     const string = message.translate;
    function getRandomInt(min, max) {
      min = Math.ceil(1);
      max = Math.floor(100);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let procent = getRandomInt();
    const { RichEmbed } = require('discord.js');
    const przedmiot = args.join(" ");
    
    
    if (!przedmiot){
      const warningEmbed = new RichEmbed()
      .setColor("#f5c842")
      .addField(` 💡${string.pn}`, `${string.pos}  ${procent}%!`)
      .setFooter(`${string.cmd} ${message.author.tag}`);
      return message.channel.send(warningEmbed);   
     }

     const iq = new RichEmbed()
     .setColor("#f5c842")
     .addField(`💡 ${string.pn}`, ` ${przedmiot} ${string.ma}  ${procent}%.`)
     .setFooter(`${string.cmd} ${message.author.tag}`);
     message.channel.send(iq);
     return;
   }
  
exports.help = {
  name: "iq",
  category: "4FUN",
    description: `Pokazuje twój lub wzmiankowanej osoby poziom inteligencji.
  {prefix} <wzmianka>`,
  aliases: [],
  permLevel:"Użytkownik"
}
