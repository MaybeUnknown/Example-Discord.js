const db = require("quick.db");
const { RichEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Nie masz permisji do wykasowywania wiadomości!')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('Nie masz permisji do usuwania wiadomości!');
    if (!args[0]) return message.channel.send('Podaj liczbę wiadomośći do wykasowania!');
    if (args[0] < 1) return message.channel.send('Podaj  liczbę większą niż 1');
    if (args[0] > 100) return message.channel.send('Podaj liczbę mniejszą niż 100')
    if (isNaN(args[0])) return message.channel.send('Podaj poprawną liczbę!')
    let channel = message.channel;

    channel.fetchMessages({ limit: 1 }).then(messages => {
        let lastMessage = messages.first();

        if (!lastMessage.author.bot) {
        // The author of the last message wasn't a bot
        }
        })
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Skasowano **${args[0]}** wiadomości`).then(message => message.delete(3000));
    }).catch().catch((e) => message.channel.send('Nie można wykasować wiadomości starszych niż 14 dni'));
     let logChannel = message.guild.channels.get(db.fetch(message.guild.id + ".logMessage")); //Definiowanie kanału
    if(!logChannel) return;
    logChannel.send(new RichEmbed().setColor("#a30000").setAuthor(client.user.username, client.user.avatarURL).setDescription("Zostało usuniętych " + args[0] + " wiadomości.").setFooter("PURGE").setTimestamp());




}

module.exports.help = {
    name: "kasuj",
    category: "Administracyjne",
    description: `
Kasuje podaną liczbę wiadomości.
{prefix}kasuj
    `,
    aliases: ["purge", "wyczyść"],
    permLevel:"Użytkownik"
}      