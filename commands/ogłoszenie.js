client.db = require('quick.db');
exports.run = async (client, message, args, color) => {
  const { RichEmbed } = require('discord.js');
  const string = message.translate;
  const user =  await client.db.fetch("ogl.autorid");
  message.channel.send(new RichEmbed().setAuthor(client.users.get(user).tag, client.users.get(user).avatarURL).setDescription(await client.db.fetch("ogl")));
      }
  module.exports.help = {
    name: "ogłoszenie",
    category: "Bot",
    description: `
Pokazuje ogłoszenia dotyczące bota.
{prefix}ogłoszenie
`,
  aliases: [],
  permLevel:"Użytkownik"
}