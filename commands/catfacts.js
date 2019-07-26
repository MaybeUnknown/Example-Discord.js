const Discord =require("discord.js");
module.exports.run = async (client,message,args) => {
  const string = message.translate;
  const sa = module.require('superagent');
  const { RichEmbed } = require("discord.js")
  let {body} = await sa.get('https://some-random-api.ml/catfact');
  
  const msg = await message.channel.send(string.catfactsSearch)
  let embed = new RichEmbed()
    .setColor('#f4df42')
    .setTitle(body.fact).setFooter(string.catfactsAPI); 

  return msg.edit(embed);
}

module.exports.help = {
    name: "faktykoty",
    category: 'Facts',
    description: `
Pokazuje losowe fakty o kotach
{prefix}faktykot
    `,
    aliases: ["Faktykot"],
    permLevel:"Użytkownik"
}