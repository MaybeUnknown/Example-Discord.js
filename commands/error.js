const superagent = require("superagent");
const { RichEmbed, Attachment } = require('discord.js');


module.exports.run = async (client, message, args) => {
    const string = message.translate;
    if(!args.join(' ')) return message.channel.send(`${string.status} np. 404, 100, 503`);
    try { 
        await message.channel.send(`${string.status_t} ${args[0]}`, new Attachment("http://http.cat/" + args[0], args[0] + ".jpg"));
    } catch(e) {
        message.channel.send(string.not_found, new Attachment("http://http.cat/404", "404.jpg"));
    }
    
}
  
  module.exports.help = {
    name: "error",
    category: "4FUN",
    description: `Pokazuje errory np.error 404 ,100, 503
    {prefix}error <np. 404>`,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
