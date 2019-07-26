const Discord = require("discord.js");
exports.run = (client, message, args) => {
	const string = message.translate;
	const { RichEmbed } = require('discord.js');
	var cm = Math.floor(Math.random() * 40); 
	var banan = "─".repeat(Math.floor(cm / 5)); 
	 const embed = new RichEmbed()
	.setColor("RANDOM")
	.addField(string.banan, `${string.db}` + message.author.username + `${string.wynosi}**` + cm + "** cm")
	.addField(string.dl, "```" + banan + "⇾```")
	message.channel.send(embed);


}

module.exports.help = {
    name: "banan",
    category: "4FUN",
    description: `
Pokazuje długośc banana
{prefix}banan
    `,
    aliases: ["Banan"],
    permLevel:"Użytkownik"
}   
