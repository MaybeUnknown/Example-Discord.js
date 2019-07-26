exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const { RichEmbed } = require('discord.js');
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(string.banPerError)

    const member = message.mentions.members.first();
     if(!member)
      return message.channel.send(string.banMentionError);
    if(!member.bannable) 
      return message.channel.send(string.banError);
    const uzytkownik = message.mentions.users.first().id;
    let reason = args.slice(1).join(' ');
    if(!reason) reason = string.withoutReasonBan;
   
    client.users.get(uzytkownik).send(new RichEmbed()
                                      .setColor("#FFD700")
                                      .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                      .setDescription(`**${string.banModerator}**: ${message.author.tag}\n**${string.banReason}**: ${reason}`).setFooter("BAN").setTimestamp()).catch(console.error);  
    setTimeout(async function(){
        await member.ban(reason)
        .catch(error => message.reply(string.banErrorTwo + error));
        message.channel.send(string.banBanned)
    }, 3000);

    message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
                                                                                      .setColor("#FFD700")
                                                                                      .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                                                                      .setDescription(`**${string.banModerator}**: ${message.author.tag}\n**${string.banReason}**: ${reason}`).setFooter("BAN").setTimestamp()).catch(console.error);  

    
   
}
exports.help = {
        name: 'ban',
        category: 'Administracyjne',
             description: `
  Banuje wzmiankowaną osobę 
  {prefix}ban  <wzmianka> <powód>
  `,
    aliases: ["Ban"],
    permLevel:"Modernizator"

      }