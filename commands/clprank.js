const Discord = require('discord.js');
exports.run = async (client, message, args, ops) => {
    const { RichEmbed } = require("discord.js");
    client.channels.get("569595003949678602").send(new RichEmbed().setColor("RANDOM").setDescription(args.slice(1).join(" ")).setAuthor(client.users.get(args[0]).username, client.users.get(args[0]).avatarURL).setFooter("Administracja i właściciele bota odpowiadają za cleverbota")) 
};
module.exports.help = {
    name: "clprank",
     category: 'Bot owners',
         description: `
    Komenda do cleverbota
{prefix}clprank
    `,
    aliases: [],
    permLevel:"Deweloper bota"
    
}
