exports.run = async (client, message, args) => {
    const string = message.translate;
  const sa = module.require('superagent');
  const { RichEmbed } = require("discord.js")
  let {body} = await sa.get('https://some-random-api.ml/pandafact');
  
  
  const msg = await message.channel.send(string.pandafactsSearch)
  let embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle(body.fact).setFooter(string.pandafactsAPI); 
  
  
  return msg.edit(embed);
}

exports.help = {
 name: "faktypanda",
 category: "Facts",
    description: `Pokazuje fakty na temat pand  
    {prefix}faktypanda`,
    aliases: [],
    permLevel:"Użytkownik"
}
