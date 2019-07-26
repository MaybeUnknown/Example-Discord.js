exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    if (!client.developers.includes(message.author.id)) return message.channel.send(new Discord.RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"))
    var cmd = require('node-cmd');
    client.user.setGame("Bot jest restartowany...");
    await message.channel.send("Bot jest restartowany!");
    cmd.get(
        'pm2 restart index.js',
        function(err, data, stderr){}
    );
}
exports.help = {
    name: 'restart',
    category: "Bot owners",
     description: `Rsetuje bota. Uwaga ta koemdna jest wyłącznie dla deweloperów bota. 
        {prefix}restart`,
        aliases: ["r"],
        permLevel:"Deweloper bota"
}