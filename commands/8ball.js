module.exports.run = (client, message, args, tools) => {
	const string = message.translate;
	var sayings = [string.yes,
											string.finally,
											string.course,
											string.no,
											string.thought,
											string.reply,
											string.later,
											string.course1,
											string.yes];
											
	const { RichEmbed } = require('discord.js');
	let errEmb = new RichEmbed()
    .setColor("bc3b3b")
    .setAuthor(string.wybd)
    .setDescription(string.ball)
    .setFooter(`${string.zglp}`);
	if(!args[0]) {
	    return message.channel.send(errEmb);
	} else {
		message.channel.send(new RichEmbed()
		.setColor("RANDOM")
		.setDescription(string.question)
		.setAuthor(message.author.tag, message.author.displayAvatarURL)      
		.addField(sayings[Math.floor((Math.random() * sayings.length) + 1)],`🎱`));
	}
}
module.exports.help = {
  name: "8ball",
category: "4FUN",
   description: `
Wpisz pytanie a bot odpowie ci na nie!
{prefix}8ball <pytanie>
    `,
    aliases: ["zapytaj"],
    permLevel:"Użytkownik"
}

