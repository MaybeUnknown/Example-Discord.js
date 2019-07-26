module.exports.run = async (client, message, args, tools) => {
    const string = message.translate;
    let Jimp = require("jimp");
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(`${string.brp}`);
    if(!args&&!args[1]) return message.channel.send("nope");
    let user = client.users.get(args[0]);
    if(!user) return message.channel.send(`${string.brtz}`);
    Jimp.read(user.displayAvatarURL, (err, img) => {
      if (err) throw err;
      img
        .resize(256, 256)
        .quality(75) 
        .write("temp.png", async () => {
          let emoji = await message.guild.createEmoji("./temp.png", args.slice(1).join(" "));
          message.channel.send(`${string.ute}`+emoji);
        });
    });
}
module.exports.help = {
  name: "useremoji",
  description: `Tworzy emotke z avatarem wybranej osoby
  {prefix}useremoji <id_osoby> <nazwa_emoji>`,
  category: "Obrazy",
   aliases: [],
  permLevel: "Użytkownik"
}

