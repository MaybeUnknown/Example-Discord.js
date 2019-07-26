exports.run = async (client, message, args) => {
    const string = message.translate;
  const sa = module.require('superagent');
  const { RichEmbed } = require("discord.js")
  let {body} = await sa.get('https://some-random-api.ml/dogfact');
  
  
  const msg = await message.channel.send(string.dogsfactsSearch)
  let embed = new RichEmbed()
    .setColor('#f4df42')
    .setTitle(body.fact).setFooter(string.dogsfactsAPI); 
  
  
  return msg.edit(embed);
    }
exports.help = {
 name: "faktydog",
 category: "Facts",
 description: `Pokazuje fakty o psach
  {prefix}faktydog`,
  aliases: [],
  permLevel:"Użytkownik"
}