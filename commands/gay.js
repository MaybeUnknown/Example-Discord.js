const db = require('quick.db')

exports.run = async (client, message, args) => {
    if(!db.fetch("gayrekord")) {
      db.set("gayrekord", 104)
    }
    function getRandomInt(min, max) {
      min = Math.ceil(1);
      max = Math.floor(120);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let procent = getRandomInt();
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    const przedmiot = args.join(" ");
    function wyrownanie() {
      client.channels.get("585487817036136456").send(new RichEmbed().setColor("#00FFFF").setTitle(message.author.tag + " wyrównał rekord!").setDescription(procent + "%"));
    }
    function pobicie() {
      client.channels.get("585487817036136456").send(new RichEmbed().setColor("#FFFF00").setTitle(message.author.tag + " pobił rekord!").setDescription(procent + "%"));
    }
    
    
    if (!przedmiot){
      const warningEmbed = new RichEmbed()
      .setColor("ff0000")
      .addField(`Gay`, `Jesteś gayem w  ${procent}%!`)
      .setFooter("Aktualny rekord % gay to " + db.fetch("gayrekord"));
      if(procent === require("quick.db").fetch("gayrekord")) { warningEmbed.setDescription("Wyrównałeś rekord!"); wyrownanie(); };
      if(procent > require("quick.db").fetch("gayrekord")) {  db.set("gayrekord", procent); warningEmbed.setDescription("Pobiłeś rekord!"); pobicie(); };
      return message.channel.send(warningEmbed);   
     }

     const gay = new RichEmbed()
     .setColor("2d72e2")
     .addField(`Gay :gay_pride_flag:`, `:gay_pride_flag: ${przedmiot} ${string.isGay} ${procent}%.`)
     .setFooter("Aktualny rekord % gay to " + db.fetch("gayrekord"));
     if(procent === require("quick.db").fetch("gayrekord")) { gay.setDescription("Wyrównałeś rekord!"); wyrownanie()};
     if(procent > require("quick.db").fetch("gayrekord")) { db.set("gayrekord", procent); gay.setDescription("Pobiłeś rekord!"); pobicie();};
     message.channel.send(gay);
     return;
   }
  
exports.help = {
  name: "gay",
  category: "4FUN",
    description: `Pokazuje w ilu procentach jesteś gayem. Komenda jest rozrywkowa
  {prefix} <wzmianka`,
  aliases: [],
  permLevel:"Użytkownik"
}