const { RichEmbed } = require('discord.js');
const moment = require("moment");
exports.run = (client, message, args) => {
    const string = message.translate;
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;
    const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${string.norp} ${role.name}`)
        .addField(`${string.rd}`, role.id)
        .addField(`${string.col}`, role.hexColor)
        .addField(`${string.lczz}`, role.members.size)
         return message.channel.send({
         embed: embed
    });
};
module.exports.help = {
    name: "roleinfo",
    category: 'Użytkownik',
     description: `Pokazuje informacje o danej roli. 
        {prefix}roleinfo <rola>`,
        aliases: [],
        permLevel:"Użytkownik"
}