module.exports.run = async (client, message) => {
    const { RichEmbed } = require('discord.js');
    const string = message.translate;
    let los = Math.floor(Math.random() *6 + 1);
    message.channel.send(los===1 ? `${string.kostka}  ${los} ${string.oczka}` : (los<5 ? `${string.kostka} ${los} ${string.oczka}` : `${string.kostka} ${los} ${string.oczka}`));
}
module.exports.help = {
    name: "kostka",
    category: '4FUN',
    description: `
    Bot rzuca kostką.
{prefix}kostka
    `,
    aliases: [],
    permLevel:"Użytkownik"
}