exports.run = async (client, message, args) => {
    const db = require("quick.db")
     const string = message.translate;
     
      if (message.mentions.users.first() || args[0]) {
          user = message.mentions.users.first() || client.users.get(args[0]);
        } else {
          user = message.author;
        }
        if(!user) return message.channel.send("Podany użytkownik nie istnieje!")
  
  
  let status = " ";
  if(user.presence.status === "online") {
  status = "<:online:565501760702119946>";
  }
  if(user.presence.status === "dnd") {
    status = "<:dnd:565501599506759681>";
  }
  if(user.presence.status === "idle") {
    status = "<:idle:565501707501568032>";
  }
  if(user.presence.status === "offline") {
    status = "<:offline:565501658935590922>";
  }
  
  const moment = require("moment");
  moment.locale("pl");
  const { RichEmbed } = require("discord.js")
  const member = message.guild.member(user);
  const embed = new RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL)
    .setTitle(`${string.profilTitle} ${user.username}#${user.discriminator} ` + status)
       embed.addField(string.game, `${user.presence.game ? user.presence.game.name : 'Brak'}`, true)  
    embed.addField('Role:', member.roles.map(r => `${r}`).join(' | '), true)
    .addField(string.accountCreate, `${moment.utc(user.createdAt + "-0100'").format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    if(member) {
      embed.addField(string.serverJoin, `${moment.utc(member.joinedAt + "-0100'").format('dddd, MMMM Do YYYY, HH:mm:ss') || "Użytkownik nie jest na tym serwerze"}`) 
      }
    embed.addField(string.cash, `${db.fetch(user.id + ".kasa") || 0}$`, true)  
    .setFooter(`ID: ${user.id}`)
    .setTimestamp();

    
    
    message.channel.send(embed)
  
  }   
   module.exports.help = {
      name: 'userinfo',
       category: "Użytkownik",
        description: `Pokazuje informacje o podanym użytkowniku.
{prefix}userinfo <wzmianka lub ID osoby>`,
  aliases: [],
  permLevel: "Użytkownik"
      
    }
  