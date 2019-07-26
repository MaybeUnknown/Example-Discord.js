module.exports.run = async (client, message, args, tools) => {
    let Jimp = require("jimp");
    let { Attachment } = require("discord.js");
    if(!args) return message.channel.send("nope");
    if(parseInt(args[0])>50) return message.channel.send("Można max 50 px mocy bluru!"); 
    let user = message.mentions.users.first() && args[1] ? message.mentions.users.first() : (args[1] ? client.users.get(args[1]) : message.author);
    if(!user) return message.channel.send("Nie ma takiego użytkownika");
    Jimp.read(user.displayAvatarURL, (err, img) => {
      if (err) throw err;
      img
        .resize(512, 512)
        .quality(75)
        .blur(parseInt(args[0]||5))
        .write("temp2.png", async () => {
          message.channel.send(new Attachment("./temp2.png", "xd.png"));
        });
    });
}

module.exports.help = {
  name: "blur",
  description: `Blur
  {prefix}blur [moc (w px)] [id_uzytkownika]`,
  category: "Obrazy",
  permLevel: "Użytkownik"
}

