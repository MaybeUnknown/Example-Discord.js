exports.run = async (client, message, args) => {
    const string = message.translate;
    const { RichEmbed } = require("discord.js");
    const db = require('quick.db');
if (db.fetch(message.author.id + message.guild.id +  ".kasa") < 120) {
    return message.channel.send(string.versusError)
   }
db.subtract(message.author.id + message.guild.id +  ".kasa", 20);
 


const rzut = Math.floor(Math.random() * 100 + 1);
const rzutbota = Math.floor(Math.random() * 100 + 1); 
if (rzut > rzutbota) {
db.add(message.author.id + message.guild.id + ".kasa", rzut);
 message.channel.send(new RichEmbed().setTitle(string.winTextLottery).setDescription(`• **${string.YourThrow}** = ${rzut}\n • **${string.BotThrow}** = ${rzutbota}`).setColor("#ADFF2F"));
 

}
if (rzutbota > rzut) {
 db.subtract(message.author.id + message.guild.id +  ".kasa", rzutbota);
 message.channel.send(new RichEmbed().setTitle(string.versusLost).setDescription(`• **${string.YourThrow}** = ${rzut}\n • **${string.BotThrow}** = ${rzutbota}`).setColor("#B22222"));
}
}   
exports.help = {
   name: 'pojedynek',
   category: "Economy",
       description: `
Toczysz pojedynek z botem jęśli wygrasz dostaniesz nagrode
{prefix}pojedynek    `,
    aliases: [],
    permLevel:"Użytkownik"
 }

