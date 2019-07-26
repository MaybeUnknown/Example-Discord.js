module.exports.run = async (client, message, args) => {
    if (!client.developers.includes(message.author.id)) return message.channel.send(new Discord.RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"))
    const { RichEmbed } = require("discord.js");
    const fs = require('fs');
    let msg = await message.channel.send(new RichEmbed().setColor("RANDOM")
                                             .setTitle("Czyszczenie logów..."));
    fs.writeFile('./logs.log', '', async () => {
        msg.edit(new RichEmbed().setColor("RANDOM")
                     .setTitle("Pomyślnie wyczyszczono logi!"));
    });
}
  
module.exports.help = {
      name: "clearlogs",
      category: "Bot owners",
          description: `
Czyści logi w pliku logs.log
{prefix}clearlogs
    `,
      aliases: ["clogs"],
      permLevel:"Bot owners"
  }