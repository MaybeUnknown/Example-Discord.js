module.exports.run = async (client, message, args) => {
    const { RichEmbed }  = require("discord.js")
    if(!args[0]) return message.channel.send(new RichEmbed().setColor("RANDOM")
                                          .setTitle("Musisz podać pytanie do wysłania"));
    let invites = await message.guild.fetchInvites();
    let invite = invites.filter(i => i.temporary === false).first();
    client.channels.get("558905759950307328").send(new RichEmbed().setColor("RANDOM")
                                                .setTitle("Nowe zgłoszenie")
                                                .setDescription(`\`\`\`\n${args.join(" ")}\n\`\`\``)
                                                .addField("Od", "`"+message.author.tag+"`")
                                                .addField("ID zgłaszającego", message.author.id)
                                                .addField("Nazwa serwera",`${message.guild.name}`)
                                                .addField("Link do serwera", invite
                                                                             ? invite.url 
                                                                             : invites.first().url))
    .then(() => {
      message.channel.send(new RichEmbed().setColor("RANDOM")
                           .setTitle("Wysłano zgłoszenie do supportu CommunityBot"))
    });
  } 
  
  module.exports.help = {
    name: "pomoc",
    category: 'BOT'
  }