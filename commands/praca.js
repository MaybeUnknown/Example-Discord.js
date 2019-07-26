module.exports.run = (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const { RichEmbed } = require('discord.js');
    const zarobek =  50 + Math.floor(Math.random() * 200 + 1);
    if(Date.now() < db.fetch(message.author.id + message.guild.id + ".praca")) {
        const embed2 = new RichEmbed().setTitle(string.nmp).setDescription(string.ph).setColor("#00FFFF")
        return  message.channel.send(embed2)
    }  
    const zawodypl = ["Strażak", "Budowlaniec", "Żul", "Programista", "Informatyk", "Śmieciarz", "Kucharz", "Rolnik", "Kelner", "Psychiatra", "Lekarz", "Ogrodnik", "Sprzedawca", "Stolarz"];
    db.add(message.author.id + message.guild.id + '.kasa', zarobek);   
    db.set(message.author.id  + message.guild.id + ".praca",  Date.now() + 86400000)
    const kasa = db.fetch(message.author.id + message.guild.id + ".kasa");
    const zawod = zawodypl[Math.floor(Math.random() * zawodypl.length)];
    const embed = new RichEmbed().setTitle(`${string.prj}` + zawod).setDescription(`${string.zarobek}` + zarobek).addField(string.dailyMoney, kasa).setColor("#00FFFF")
    message.channel.send(embed)

    
    



}
  
module.exports.help = {
      name: "praca",
      category: "Economy",
    aliases: ["pracowanie", "zarabiaj", "zaróbnażycie", "praca"],
    permLevel: "Użytkownik"
  }
