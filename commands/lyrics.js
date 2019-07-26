module.exports.run = async (client, message, args) => {
    const string = message.translate;
    if (!args) return message.channel.send(string.lyricsError)
    const sa = module.require('superagent');
const { RichEmbed } = require("discord.js")
let {body} = await sa.get('https://some-random-api.ml/lyrics?title=' + encodeURIComponent(args.join(" ")));
const msg = await message.channel.send(string.lyricsSearch)

try {
const embed = new RichEmbed()
  .setColor("RANDOM")
  .setImage(body.link)
  .setTitle(body.title)
  .setDescription(body.lyrics)
  .setAuthor(body.author)
  .setThumbnail(body.thumbnail.genius)
.addField(string.link, body.links.genius)
  .setFooter(string.lyricsAPI); 
  return msg.edit(embed);
} catch(e) {
    if(body.error) {
    return msg.edit(string.nzp);
    }
}



  }

  module.exports.help = {
      name: "piosenka",
    category: "Muzyka",
    description: `Pokazuje cały tekst wybranej przez ciebie piosenki 
    {prefix}piosenka <utwór>`,
    aliases: [],
    permLevel:"Użytkownik"
  }