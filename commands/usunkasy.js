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
    if(!args[1]) return message.channel.send(string.koi);
    if(isNaN(args[1])) return message.channel.send(string.lipbl);
    if(args[1] > db.fetch(id + message.guild.id + ".kasa")) return message.channel.send(`${string.podpm}` + db.fetch(id + message.guild.id + ".kasa") + `${string.uzytkown}`);
    db.subtract(id + message.guild.id + ".kasa", args[1]);
    return message.channel.send(`${string.uzytkown} ` + client.users.get(id).tag + `${string.odjeto}`  + args[1] + `${string.waluty}`);
}
  
  module.exports.help = {
      name: "usunkasy",
      category: "Economy",
        description: `
    Usuwa pieniądze oznaczonemu użytkownikowi 
    {prefix}usunkasy <wzmianka>
    `,
    aliases: [],
      permLevel:"Administrator"
  }