module.exports.run = async (client,message,args) => {
      const { RichEmbed }  = require("discord.js")
    if (!args) return message.channel.send("...")
    const sa = module.require('superagent');
let {body} = await sa.get('https://some-random-api.ml/lyrics?title=' + encodeURIComponent(args.join(" ")));
const msg = await message.channel.send("Szukam tekstu piosenki...")


let embed = new RichEmbed()
  .setColor('#f4df42')
  .setImage(body.link)
  .setTitle(body.title)
  .setDescription(body.lyrics)
  .setAuthor(body.author)
  .setThumbnail(body.thumbnail.genius)
    .addField("Link", body.links.genius)
  .setFooter("Używam API https://some-random-api.ml/lyrics"); 


  return msg.edit(embed)
  }

  module.exports.help = {
    name: "piosenka",
    category: 'muzyczne',
    description: `
    Pokazuje przez ciebie wpisany tekst piosenki.
{prefix}piosenka
    `,
    aliases: ["Piosenka"],
    permLevel:"Użytkownik"
}