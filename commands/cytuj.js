const { RichEmbed } = require('discord.js');


exports.run = async (client, message, args) => {
    const string = message.translate;
    if (!args[0]) return message.channel.send(string.quoteErr);
    const kanal = client.channels.get(args[1]) || message.channel;
    try {
        kanal.fetchMessages().then(messages => {
            var wiadomosc = messages.find('id', args[0]);
            console.log(wiadomosc);
            const embed = new RichEmbed().setThumbnail(wiadomosc.author.avatarURL).setTitle(`${wiadomosc.author.username} (${wiadomosc.author.id})`).setDescription(wiadomosc.content).setColor("RANDOM")
            if(wiadomosc.attachments) {
                embed.setImage(wiadomosc.attachments.url);
            }
            message.channel.send(embed)
        })
    } catch (e) {
        message.channel.send("Error:" + e);
    }
}
exports.help = {
    name: "cytuj",
    category: "Użytkownik",
        description: `
    Cytuje podaną wiadomość
{prefix}cytuj <ID wiadomości>
    `,
    aliases: [],
    permLevel:"Użytkownik"
}
