module.exports.run = (client, message, args, discord) => {
    const db = require("quick.db");
  const string = message.translate;
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nie masz permisji do używania tej komendy!")
  let mid = args.join(' ');
  client.fetchUser(mid).then(id => {
    message.guild.ban(id).catch(err => {
      message.channel.send(`${string.user_id}` + id)
      console.log(err)
    })
      client.users.get(uzytkownik).send(new RichEmbed()
                                      .setColor("#FFD700")
                                      .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                      .setDescription(`**${string.banModerator}**: ${message.author.tag}\n**${string.banReason}**: ${reason}`).setFooter("BAN").setTimestamp()).catch(console.error);  
    setTimeout(3000);
    message.channel.send(`${string.banned} ${id}!`)
     
  

    message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
                                                                                      .setColor("#FFD700")
                                                                                      .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                                                                      .setDescription(`**${string.banModerator}**: ${message.author.tag}\n**${string.banReason}**: ${reason}`).setFooter("BAN").setTimestamp()).catch(console.error);  

  }).catch(() => {
    message.channel.send(`${string.banned_un} ${mid}!`)
  })
}
module.exports.help = {
  name: "banid",
  category: "Administracyjne",
  description: `
Banuje podanego użytkownika poprzez ID. Można też dodać powód banu.
{prefix}banid <ID użytkownika> <powód>
`,
aliases: [],
permLevel:"Modernizator"
}