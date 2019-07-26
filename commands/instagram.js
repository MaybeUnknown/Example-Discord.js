const Discord = require("discord.js");
 const sa = module.require('superagent');

exports.run = async (client, message, args) => {
 if(!args[0]) return message.channel.send("Podaj link do posta jako argument");
 let {body} = await sa.get('https://api.instagram.com/oembed/?url=' + args[0]);
 if(!body) return message.channel.send("Nie znaleziono posta");
 message.channel.send(new Discord.RichEmbed()
                    .setDescription(body.title)
                    .setColor("RANDOM")
                    .setTitle(body.author_name)
                    .setImage(body.thumbnail_url)
                    .addField("Źródła:", `[[Profil autora postu]](${body.author_url}) [[Link do postu]](${args[0]})`)
                    .setFooter("Instagram").setTimestamp());
                    
}
module.exports.help = {
  name: "instagram",
  category: "Użytkownik",
     description: `Pokazuje twój post z instagrama
    {prefix}instagram <link do posta>`,
    aliases: [],
    permLevel:"Użytkownik"

}
