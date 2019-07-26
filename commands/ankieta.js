const Discord = require('discord.js');
exports.run = async (client, message, args, ops) => {
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
    
    let pollEmbed = new RichEmbed()
    .setColor("ece757")
    .setAuthor("Zagłosuj koniecznie!")
    .setDescription(args.join(' '))
    .setFooter(`Ankieta stworzona przez ${message.author.tag}.`)
    
    let errEmb = new RichEmbed()
    .setColor("bc3b3b")
    .setAuthor("Wystąpił Błąd")
    .setDescription(string.questionnaire + "\n**Poprawne użycie:** `!ankieta <treść>`.")
    .setFooter(`Jeśli błąd nie ustąpi napisz do programisty bota.`);

    if(!args[0]){
        return message.channel.send(errEmb).then(message => message.delete(15000));
    } else {
        let msg = await message.channel.send(pollEmbed).then(function (msg) {
        msg.react(client.emojis.get("594872306904334336"));
        msg.react(client.emojis.get("594872355872964608"));
        msg.react(client.emojis.get("594872127266488322")); 
        message.delete({timeout: 10000});
        }).catch(function(error) {});
    }
    //if (!args[0]) return   message.channel.send(string.questionnaire).then(message => message.delete(15000));    
    //let msg = await message.channel.send(pollEmbed).then(function (msg) {
        //msg.react("✅");
        //msg.react("➖");
        //msg.react("❌"); 
        //message.delete({timeout: 10000});
        //}).catch(function(error) {});
};
module.exports.help = {
    name: "ankieta",
    category: "Administracyjne",
        description: `
Bot tworzy ankietę. 
{prefix}ankieta <treść>
    `,
    aliases: ["poll"],
    permLevel:"Użytkownik"
}
