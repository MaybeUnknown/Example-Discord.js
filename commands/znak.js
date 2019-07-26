  module.exports.run = async (client, message, args) => {
    const string = message.translate;
    let argum = message.content.split("|")
    argum[0] = argum[0].replace((require('quick.db').fetch(message.guild.id + ".prefix") || "c!") + "znak", "")
    if(!args.join(' ')) return message.channel.send(`${string.przy}`);
    const { RichEmbed, Attachment } = require('discord.js');
        message.channel.send("Generuję obrazek...").then(async (mesg) => {
        let image = new Attachment(`http://www.customroadsign.com/generate.php?line1=${encodeURIComponent(argum[0])}&line2=${encodeURIComponent(argum[1] || "")}&line3=${encodeURIComponent(argum[2] || "")}&line4=${encodeURIComponent(argum[3] || "")}`, "znak.jpg");
        await message.channel.send(`${string.znak}`, image);
        mesg.delete();
    });

  }
  
  module.exports.help = {
    name: "znak",
    category: "4FUN",
    description: `
Poznawala na napisanie swojej wiadomości na znaku drogowym
{prefix}znak <treść>
    `,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
