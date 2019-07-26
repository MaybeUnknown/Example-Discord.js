module.exports.run = async (client, message, args) => {
  const { RichEmbed } = require("discord.js");
  const db = require("quick.db");
  
  if(db.get(message.author.id + ".permlvl") < 7 || !db.has(message.author.id + ".permlvl")) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Nie masz uprawnień do użycia tej komendy.\n**Wymagany poziom uprawnień to `7` (`Programista`).**"));
  if(!args[0]) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Łoo panie(i), gdzie argumenty??\n**Poprawne użycie:** `bot add <cbotowner/programista/support> <id użytkownika>` lub `bot degrad <id admina>`."));
  if(args[0] === "add"){
      if(!args[1]) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Łoo panie(i), gdzie argumenty??\n**Poprawne użycie:** `bot add <cbotowner/programista/support> <id użytkownika>`."));
      if(args[1] === "cbotowner"){
          if(db.get(message.author.id + ".permlvl") < 8 || !db.has(message.author.id + ".permlvl")) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Nie masz uprawnień do użycia tej komendy.\n**Wymagany poziom uprawnień to `8` (`Właściciel Bota`).**"));
          const amember = args[2];
          if(!args[2] && !amember) return message.channel.send("Musisz podać id użytkownika, którego chcesz dodać na stanowisko **Cbot-Owner**.");
          if(!client.fetchUser(amember)) {
            return message.channel.send("Nie odnaleziono użytkownika");
          } else {
              db.push("cbot.cbotowners", amember);
              db.set(amember + ".permlvl", 8);
              message.channel.send(`Użytkownik **${client.users.get(amember).tag}** (**${client.users.get(amember).id}**) został dodany, jako Cbot-Owner.`)
          }
      }
      if(args[1] === "programista"){
          const amember = args[2];
          if(!args[2] && !amember) return message.channel.send("Musisz podać id użytkownika, którego chcesz dodać na stanowisko **Programista**.");
          if(!client.fetchUser(amember)) {
            return message.channel.send("Nie odnaleziono użytkownika");
          } else {
              db.push("cbot.programisci", amember);
              db.set(amember + ".permlvl", 7);
              message.channel.send(`Użytkownik **${client.users.get(amember).tag}** (**${client.users.get(amember).id}**) został dodany, jako programista bota.`)
          }
      }
      if(args[1] === "support"){
          const amember = args[2];
          if(!args[2] && !amember) return message.channel.send("Musisz podać id użytkownika, którego chcesz dodać na stanowisko **Support**.");
          if(!client.fetchUser(amember)) {
            return message.channel.send("Nie odnaleziono użytkownika");
          } else {
              db.push("cbot.support", amember);
              db.set(amember + ".permlvl", 6);
              message.channel.send(`Użytkownik **${client.users.get(amember).tag}** (**${client.users.get(amember).id}**) został dodany, jako support bota.`)
          }
      }
  }
  if(args[0] === "degrad"){
      message.channel.send("Ta funkcja niebawem =)");
  }
}

module.exports.help = {
    name: "bot",
    category: "Administracyjne",
    description: `
Zarządza posadami w bocie.
    `,
    //aliases: ["powiedz","napisz"],
    permLevel: "Zarządzanie serwerem"
}