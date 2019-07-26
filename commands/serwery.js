exports.run = async (client, message) => {
  const { RichEmbed } = require('discord.js');
  if (!client.developers.includes(message.author.id)) return message.channel.send("Nie masz permisji do używania tej komendy!")
 const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse().slice(0,10);
 message.channel.send(new RichEmbed().setColor("RANDOM").setThumbnail(top[0].iconURL)
                      .setTitle(`Top ${top.length} serwerów`)
                      .setDescription(top.map((t, i) => `${i+1}. ${t.name} (${t.memberCount} członków, w tym ${t.members.filter(m => m.user.bot).size} botów)\n`)));
}

exports.help = {      
 name: "serwery",
 category: "Bot owners",
  description: `Pokazuje top10 największych serwerów na, których bot jest. uwaga ta komenda jest wyłącznie dla deweloperów bota. 
 {prefix}serwery`,
 aliases: [],
 permLevel:"Deweloper bota"
}