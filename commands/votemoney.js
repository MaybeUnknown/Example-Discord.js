exports.run = async (client, message, args) => {
    const db = require('quick.db');
    const { RichEmbed } = require('discord.js');
    const DBL = require("dblapi.js");
    const string = message.translate;
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0MDk1MTg2NzIzMzAwOTY2NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTU1NjgyMjIzfQ.OsBGJtCRU5kYSY_GYa8xnrSH_7bn2TmYJu7-agcj2o8', client);
  if(Date.now() < db.fetch(message.author.id + ".vm")) {
        const embed2 = new RichEmbed().setTitle(string.vmTitle).setDescription(string.vmNot).setColor("#00FFFF")
    return  message.channel.send(embed2)

    }  
    
dbl.hasVoted(message.author.id).then(voted => {
    if (voted) {
        db.add(message.author.id  + '.kasa', 200);   
        db.set(message.author.id  + ".vm",  Date.now() + 86400000)
        const embed4 = new RichEmbed().setTitle(string.vmTitle).setDescription(string.vm).setColor("#00FFFF")
    return  message.channel.send(embed4)

    } else {
         const embed4 = new RichEmbed().setTitle(string.vmTitle).setDescription(string.vmNotV).setColor("#00FFFF")
    return  message.channel.send(embed4)
    }
});
}
exports.help = {
    name: "nagroda",
    category: "Economy",
        description: `
Daje nagrodę za zagłosowanie na Discord bots list na Communitybota.
{prefix}nagrada
    `,
    aliases: ["Nagroda"],
    permLevel:"Użytkownik"
}