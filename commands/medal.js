module.exports.run = async (client, message, args) => {
    const string = message.translate;
    let argum = message.content.split("|")
    argum[0] = argum[0].replace((require('quick.db').fetch(message.guild.id + ".prefix") || "c!") + "medal", "")
    const { RichEmbed, Attachment } = require('discord.js');
    if(!args.join(' ')) return message.channel.send(string.medal);
        message.channel.send(string.gb).then(async (mesg) => {
        let image = new Attachment(`http://www.getamedal.com/generate.php?top1=${encodeURIComponent(argum[0])}&top2=${encodeURIComponent(argum[1] || "")}&top3=${encodeURIComponent(argum[2] || "")}&top4=${encodeURIComponent(argum[3] || "")}`, "znak.jpg");
        await message.channel.send(`${string.med}`, image);
        mesg.delete();
    });
  }
  
  module.exports.help = {
    name: "medal",
    category: "4FUN",
       description: `Tworzy medal z twoim napisem 
    {prefix}medal np. Medal|dla|wygranej|osoby`,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
