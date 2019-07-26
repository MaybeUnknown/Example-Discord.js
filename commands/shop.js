exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require("quick.db");
    const Discord = require("discord.js");
    if(args[0] === "dodaj") {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Nie masz permisji do tego!");
        if(!args[1] && !args[2])  return message.channel.send("Przykładowe użycie komendy: c!sklep dodaj VIP 1000");
        if(!message.guild.roles.find(role => role.name === args[1])) return message.channel.send("Nazwa roli jest nieprawidłowa!");
        if(isNaN(args[2])) return message.channel.send("Nieprawidłowa kwota!");
        if(args[1] && args[2]) {
                const g = message.guild.id;
                db.add(g + "role", 1)
                const id = db.fetch(g + "role");
                db.set(message.guild.id + "r" + id + "nazwa", args[1]);
                db.set(message.guild.id + "r" + id + "cena", args[2]);
                message.channel.send("Dodano role " + args[1] + " do sklepu z ceną " + args[2]);
             
        }
    }
    if(args[0] === "usun") {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Nie masz permisji do tego!");
        if(!args[1])  return message.channel.send("Przykładowe użycie komendy: c!sklep usun 1");
        if(db.fetch(message.guild.id + "r" + args[1] + "nazwa") === null) return message.channel.send("Podano błedne ID!");
        if(db.fetch(message.guild.id + "r" + args[1] + "cena") === "deleted") return message.channel.send("Podano błedne ID!");
        if(args[1]) {
            const g = message.guild.id;
                const id = args[1];
                db.set(message.guild.id + "r" + id + "cena", "deleted");
                message.channel.send("Usunięto role pod ID " + args[1] + " w sklepie (" + db.fetch(message.guild.id + 'r' + id + "nazwa") + ")");
        }
    }
    if(!args[0]) {
    const embed = new Discord.RichEmbed().setTitle("Sklep serwera " + message.guild.name).setColor("RANDOM").setFooter("Możliwe argumenty: dodaj, ~~kup~~, usun");
    if(db.fetch(message.guild.id + "role")  == null) {
        embed.setDescription("Nic nie ma w sklepie! Aby coś dodać użyj  " +  (db.fetch(message.guild.id + ".prefix") || "c!") + "sklep dodaj <nazwa roli> <cena>"); 
    } else {
        embed.setDescription("Rzeczy w sklepie: " + db.fetch(message.guild.id + "role"));
    }
    let rzeczy = 0;
    for(let i = 1; i < db.fetch(message.guild.id + "role"); i++) {
        
        if(db.fetch(message.guild.id + "r" + i + "cena") !== "deleted" && db.fetch(message.guild.id + "r" + i + "cena") !== null) {
         rzeczy++;       
         embed.addField("Rola " + db.fetch(message.guild.id + "r" + i + "nazwa") + "(ID: " + i + ")", "Cena: " + db.fetch(message.guild.id + "r" + i + "cena") + "\nAby kupić użyj " +  (db.fetch(message.guild.id + ".prefix") || "c!") + "sklep kup " + i);
        }
    }
    embed.setDescription("Rzeczy w sklepie: " + rzeczy);
    message.channel.send(embed);
}
}

exports.help = {
    name: 'sklep',
    category: "Economy",
        description: `
Sklep serwerowy
{prefix}sklep
    `,
    aliases: ["shop"],
    permLevel:"Użytkownik"
  }