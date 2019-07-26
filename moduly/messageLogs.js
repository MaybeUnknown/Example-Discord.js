module.exports = async (client) => {
  const db = require("quick.db");
  client.on('messageDelete', message =>{
  if(message.channel.type === "dm") return;
  const { RichEmbed } = require('discord.js');
  const jezyk = db.fetch(message.guild.id + ".language") || "eng";
  let translate
  if(jezyk === "pl") {
    translate  = require('../Tlumaczenia/polish.json');
  }
  if(jezyk === "eng") {
    translate  = require('../Tlumaczenia/english.json');
  }
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let logChannel = message.guild.channels.get(db.fetch(message.guild.id + ".logMessage")); //Definiowanie kanału
  if(!logChannel) return;
  logChannel.send(new RichEmbed().setColor("#BDB76B").setAuthor(message.author.tag, message.author.avatarURL).addField(translate.messageValue, message || " ").addField(translate.channame,`<#${message.channel.id}>`).setFooter(translate.messageDeleted).setTimestamp())
  });
  client.on('messageUpdate', (oldMessage, newMessage) =>{
  if(oldMessage.channel.type === "dm") return;
  if(oldMessage === newMessage) return;
    const { RichEmbed } = require('discord.js');
    const jezyk = db.fetch(newMessage.guild.id + ".language") || "eng";
    let translate
    if(jezyk === "pl") {
      translate  = require('../Tlumaczenia/polish.json');
    }
    if(jezyk === "eng") {
      translate  = require('../Tlumaczenia/english.json');
  }
  if(oldMessage.author.bot) return;
    if(oldMessage.channel.type === "dm") return;
    let logChannel = newMessage.guild.channels.get(db.fetch(newMessage.guild.id + ".logMessage")); //Definiowanie kanału
    if(!logChannel) return;
    logChannel.send(new RichEmbed().setColor("#FF7F50").setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL).addField(translate.oldMessage, oldMessage).addField(translate.newMessage, newMessage).addField(translate.channame, `<#${oldMessage.channel.id}>`).setFooter(translate.messageEdited).setTimestamp());
  });
};