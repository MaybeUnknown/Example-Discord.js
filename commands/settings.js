module.exports.run = async (client, message, args) => {
  const string = message.translate;
  const { RichEmbed } = require('discord.js'); 
  const db = require('quick.db');
  
  if(args[0] === "edit"){
    const wartosc = args.slice(2);
    if(args[1] === "language"){
    }
  }
    
}

module.exports.help = {
    name: "settings",
    category: "Administracyjne",
    description: `
Pozwala wypowiedziec napisane zdanie przez bota.
{prefix}settings <edit> <klucz> <wartość>
    `,
    aliases: ["setting","confi"],
    permLevel: "Zarządzanie serwerem"
}