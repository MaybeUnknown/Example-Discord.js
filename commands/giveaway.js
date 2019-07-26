exports.run = async (client, message, args, level) => {
    const { RichEmbed } = require('discord.js')
    var time = args[0]; 
    if (isNaN(time)) return message.reply(`Podaj odpowiedni czas trwania!`);
    var text = args.slice(1).join(" "); 
    message.channel.send(new RichEmbed().setColor("RANDOM")
        .setTitle("GIVEAWAY!")
        .setDescription(`na ${text}`))
        .then((mesg) => {
            mesg.react("🎉");
            setTimeout(async () => {
                let users = await mesg.reactions.get("🎉").fetchUsers();
                users = users.array().filter(u => u.id != client.user.id);
                if (!users.length) return mesg.channel.send(`Error`)
                var total = await mesg.reactions.get("🎉").users;
                var randomUser = client.user.id;
                while (randomUser === client.user.id) {
                    var randomUser = await total.randomKey();
                }
                console.log(randomUser);
                mesg.edit(new RichEmbed()
                    .setTitle(`Giveaway`).setColor("RANDOM")
                    .setDescription(`<@${randomUser}> wygrał Gwiveaway na ${text}!`));
                mesg.channel.send(`<@${randomUser}>`);
            }, time * 1000);
        });
  };
  exports.help = {
    name: "giveaway",
    category: "Użytkownik",
    description: `Tworzy giveaway
    {prefix}giveaway <czas> <treść>`,
    permLevele:"Modernizator"
  };