 const db = require('quick.db');


module.exports.run = async (client, message, args) => { 
     const string = message.translate;
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(string.nope);
    if(!message.mentions.members.first() && !args[0]) return message.channel.send(string.npu);
    let id
    if(message.mentions.members.first()) {
        id = message.mentions.members.first().id;
    } else {
        if(client.users.get(args[0])) {
            id = args[0];   
        } else {
            return message.channel.send(string.idp)
        }        
    }
    if(!args[1]) return message.channel.send(string.nokas);
    if(isNaN(args[1])) return message.channel.send(string.lipbl);
    db.add(id + message.guild.id + ".kasa", args[1]);
    return message.channel.send(`${string.uzytkown}`  + client.users.get(id).tag + "`${string.dodano}` " + args[1] + `${string.waluty}`);
}
  
  module.exports.help = {
      name: "dodajkasy",
      category: "Economy",
          description: `
    DEMOTYWATORY
    {prefix}dodajkasy <wzmianka> <ilość>
    `,
      aliases: [],
      permLevel:"Administrator"
  }