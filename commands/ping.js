module.exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js')
    const string = message.translate;
  const m = await message.channel.send(`${string.chwl}`);
  m.edit(new RichEmbed()
         .setTitle("🏓")
         .addField(`${string.msg}`, `${m.createdTimestamp - message.createdTimestamp}ms`) 
         .addField(`${string.ap}`, Math.round(client.ping)+"ms"));
}

module.exports.help = {
    name: "ping",
    category: "Bot",
        description: `
  Podaje ping bota
  {prefix}ping
  `,
    aliases: ["pong","Ping"],
    permLevel:"Użytkownik"
}