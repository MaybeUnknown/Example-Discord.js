module.exports.run = async (client, message, args) => {
   const { RichEmbed } = require('discord.js');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Nie masz permisji do wykasowywania wiadomości!')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('Nie masz permisji do usuwania wiadomości!');
    if (!args[0]) return message.channel.send('Podaj liczbę wiadomośći do wykasowania!');
    if (args[0] < 1) return message.channel.send('Podaj  liczbę większą niż 1');
    if (args[0] > 100) return message.channel.send('Podaj liczbę mniejszą niż 100').then(message => message.delete(5000));
    if (isNaN(args[0])) return message.channel.send('Podaj poprawną liczbę!').then(message => message.delete(5000));

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`:white_check_mark:  Usunięto  **${args[0]}** wiadomości`).then(message => message.delete(5000));
    }).catch().catch((e) => message.channel.send('Nie można wykasować wiadomości starszych niż 14 dni'));
}

module.exports.help = {
    name: "kasuj"
}