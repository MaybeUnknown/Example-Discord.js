const { RichEmbed } = require("discord.js");
module.exports = async (client) => {
  client.on("disconnect", ()  => {
      client.users.get("494017032283619329").send(new RichEmbed()
              .setTitle("Bot sie rozłączył z Discordem!")
              .setColor("#00FFFF"));
  });
  client.on("reconnect", ()  => {
    client.users.get("494017032283619329").send(new RichEmbed()
            .setTitle("Bot sie łączy ponownie z Discordem!")
            .setColor("#FFFF00"));
});
};