var steam = require('steam-provider')
var provider = new steam.SteamProvider();
var { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
     const string = message.translate;
     let game = args[0]
     let steampng = "https://cdn.discordapp.com/attachments/540964717267648512/585474433351811073/steam_obra.jpg"
     if (!game) return message.reply(string.wpg)
     provider.search(game).then(result => {
     provider.detail(result[0].id, "english", "en").then(results => {
     message.channel.send(new RichEmbed()
     .setAuthor('Steam Store', steampng)
   .setColor("RANDOM")
     .setTitle(result[0].name)
     .addField(`ID`, result[0].id)
     .setThumbnail(results.otherData.imageUrl)
     .addField(`${string.g}`, results.genres)
     .addField(`${string.platforma}`, results.otherData.platforms, true)
     .addField(`${string.cpob}`,` **${results.priceData.initialPrice}** ${string.cn} **${results.priceData.finalPrice}** EUR  `, true)
     .addField(`${string.c}`, results.otherData.features, true)
     .addField(`${string.ou}`, results.otherData.metacriticScore, true)
     .addField(`${string.tw}`, results.otherData.developer, true)
     .addField(`${string.d}`, results.otherData.publisher)
   .setColor("RANDOM")).catch(e => {
         console.log(e)
         message.reply(`${string.nmg} ` + game + `${string.ns}`)
     })
 })
 }) 
}
module.exports.help = {
  name: 'steam',
  category: 'Gry',
  description: 'Informacje o danej grze z steamu.',
     aliases: ["Steam"],
    permLevel:"Użytkownik"

}