const { RichEmbed } = require('discord.js');

exports.run = (bot, message, args) => {
// if(!agrs[0]) return message.channel.send("Podaj dzień np. 18");
// if(isNan(args[0])) return message.channel.send("Podaj liczbę.");
// if(db.fetch(message.author.id + 'dzien') !== null) return message.channel.send("Obstawiłeś już dzień premiery bota!")
// message.channel.send(new Discord.RichEmbed().setFooter("Ta komanda nie ma na celu promowania hazardu!").setTitle("Wybrałeś dzień!").setDescription("Jesli bot wyjdzie " + args[0] + " dnia kwietnia lub maja dostaniesz do bota 400$."));
// db.set(message.author.id + `dzien`, args[0]);
// db.add(args[0] + "dzien", 1);


};
module.exports.help = {
    name: "botw",
    category: 'administracyjne',
    description: `
Pokazuje informacje o podanej roli.
{prefix}roleinfo <podana rola>
`,
  aliases: ["rinfo"]
}