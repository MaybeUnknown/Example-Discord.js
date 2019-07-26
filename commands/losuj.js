module.exports.run = async (client, message, args) => {
   const string = message.translate;
    if(!args[0]||!args[1]) return message.channel.send(string.losuj)
    let min = parseInt(args[0]);
    let max = parseInt(args[1]);
    let out = Math.floor(Math.random()*(max-min))+min;
    message.channel.send(`${string.wylosowana}` +out);
  }
  
  module.exports.help = {
    name: "losuj",
    category: "4FUN",
   description: `Bot losuje liczbę 
  {prefix}losuj <np 1 5>`,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
