module.exports.run = async (client, message) => {
       const { RichEmbed } = require('discord.js');
    let los = Math.floor(Math.random() *6 + 1);
    message.channel.send(los===1 ? `Wyrzuciłaś/eś ${los} oczko` : (los<5 ? `Wyrzuciłaś/eś ${los} oczka` : `Wyrzuciłaś/eś ${los} oczek`));
}
module.exports.help = {
    name: "kostka"
}