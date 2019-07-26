const { RichEmbed } = require("discord.js");
module.exports = async (client) => {
  client.on("guildCreate", guild => {
      client.channels.get("546285096018247700").send(new RichEmbed()
              .setTitle("Dołączyłem na  serwer!")
              .setColor("#2ecc71")
              .setDescription(`Nazwa serwera: ${guild.name}`)
              .addField("Id serwera: ", `${guild.id} `)
              .addField("Liczba członków :", `${guild.memberCount} członków`)
              .addField("Właścicielem serwera jest", `${guild.owner} (${client.users.get(guild.owner.id).tag})`)
              .addField("ID właściciela:", `${guild.owner.id}`))
  });
  client.on("guildDelete", async guild => {
    client.channels.get("546285096018247700").send(new RichEmbed()
              .setTitle("Odszedłem z serwera")
              .setDescription(`Nazwa serwera: ${guild.name}`)
              .setColor("#e74c3c")
              .addField("Id serwera: ", `${guild.id} `)
              .addField("Liczba członków :", `${guild.memberCount} członków`)
              .addField("Właścicielem serwera:", `${guild.owner} (${client.users.get(guild.owner.id).tag})`)
              .addField("ID właściciela:", `${guild.owner.id}`));
  });
 };