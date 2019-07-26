exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    const string = message.translate;
    message.channel.send(new RichEmbed()
                        .setTitle(string.infoTitle)
                        .addField(string.guilds, client.guilds.size)
                        .addField(string.users, client.users.size)
                        .addField(string.channels, client.channels.size)
                        .addField(string.com, client.commands.size)
                        .addField(string.RAM, (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB"));
}
exports.help = {
        name: 'botstats',
        category: "Bot",
        description: `Pokazuje statystyki bota.
    {prefix}botstats`,
    aliases: [],
    permLevel:"Użytkownik"
}