exports.run = async (client, message, args) => {
    const string = message.translate;
   const uzytkownik = message.mentions.users.first().id;
    const db = require('quick.db')
    const { RichEmbed } = require('discord.js');
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(string.kickPerError)
     
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(string.kickError);
    if(!member.kickable) return message.channel.send(string.kickNot);

    let reason = args.slice(1).join(' ');
    if(!reason) reason = string.withoutReasonBan;
   
    client.users.get(uzytkownik).send(new RichEmbed()
                                      .setColor('#00CED1')
                                      .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                      .setDescription(`**${string.banModerator}**: ${message.author.tag}\n**${string.banReason}**: ${reason}`).setFooter("KICK").setTimestamp()).catch(console.error);  
  setTimeout(async function(){
    await member.kick(reason)
      .catch(error => message.reply(`${string.errorKick}` + error));
      message.channel.send(string.kickEd)
    }, 1500);

  message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
                                                                                    .setColor('#00CED1')
                                                                                    .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                                                                    .setDescription(`**${string.banModerator}**: ${message.author.tag}\n**${string.banReason}**: ${string.banReason}`).setFooter("KICK").setTimestamp()).catch(console.error);  
}
exports.help = {
        name: 'kick',
        category: "Administracyjne"
}