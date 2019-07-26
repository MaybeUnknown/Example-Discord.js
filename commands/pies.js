const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setImage(body.message).setFooter("https://dog.ceo/api/breeds/image/random")
    message.channel.send({embed})
    
}
module.exports.help = {
    name: "dog",
    category: 'Obrazy',
      description: `Pokazuje losowego psa
    {prefix}dog`,
    aliases: [],
    permLevel: "Użytkownik"
}