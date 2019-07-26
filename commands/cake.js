module.exports.run = async (client, message, args) => {
  const string = message.translate;
  let argum = message.content.split("|")
    argum[0] = argum[0].replace((require('quick.db').fetch(message.guild.id + ".prefix") || "c!") + "cake", "")
    const { RichEmbed, Attachment } = require('discord.js');
    if(!args.join(' ')) return message.channel.send(string.cake_ex);
        message.channel.send(string.generate).then(async (mesg) => {
        let image = new Attachment(`http://www.cakemessage.com/generate.php?top1=${encodeURIComponent(argum[0])}&top2=${encodeURIComponent(argum[1] || "")}&top3=${encodeURIComponent(argum[2] || "")}&top4=${encodeURIComponent(argum[3] || "")}`, "znak.jpg");
        await message.channel.send(string.cake, image);
        mesg.delete();
    });
  }
  
  module.exports.help = {
    name: "cake",
    category: "4FUN",
    description: `
    Pokazuje napisane przez ciebie ciastko
    {prefix}ciastko dla|coś|z|okazji
    `,
      aliases: [],
      permLevel:"Użytkownik"
  }
  
