const ascii = require('ascii-art');
const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    const string = message.translate;
    if (!args.join(' ')) return message.channel.send(new RichEmbed()
                                                    .setColor("RANDOM")
                                                    .setDescription(string.asciiError)
                                                    .setFooter(string.asciiDelete)
                                                    .setTimestamp()).then(msg => {
    msg.delete(30000); 
    message.delete();
    });
        
    ascii.font(args.join(' '), 'Doom', async txt =>{
    message.channel.send(txt, {
    code: 'md'
    });
    })
};
  
exports.help = {
  name: "ascii",
  category: "4FUN",
       description: `
  Podaje wpisany przez ciebie tekst w ascii
  {prefix}ascii
  `,
    aliases: [],
    permLevel:"Użytkownik"

}

