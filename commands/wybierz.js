exports.run = async (client, message, args) => {
    const { RichEmbed } = require("discord.js");
     const string = message.translate;
    let rzeczy = args.join(" ").split(",");
    if(rzeczy.length<2) return message.channel.send(`${string.wyb}`);
    let rand = Math.floor(Math.random() * rzeczy.length);
    message.channel.send(new RichEmbed().setColor("RANDOM")
                             .addField(`${string.wybrana}`, rzeczy[rand]));
}
    
exports.help = {
    name: "wybierz",
    category: '4FUN',
    description: `
Wybiera losową rzecz
{prefix}wybierz <rzecz1>, <rzecz2>, [rzecz3], [rzecz4] ...
    `,
      aliases: [],
    permLevel:"Użytkwonik"
}