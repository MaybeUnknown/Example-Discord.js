const Discord = require("discord.js");


module.exports.run = async (bot, message) => {
    const los = Math.floor(Math.random() *9 + 1)
    if (los === 1) return message.channel.send(`Remis! Ty i bot wybraliście tą samą rzecz - <:ROCK2:557301211204943892>`)
     if (los === 2) return message.channel.send(`Remis! Ty i bot wybraliście tą samą rzecz - :newspaper:`)
    if (los === 3) return message.channel.send(`Remis! Ty i bot wybraliście tą samą rzecz - :scissors:`)
     if (los === 4) return message.channel.send(`Wygrałeś! :newspaper: (ty) owbinął <:ROCK2:557301211204943892> (bot)`)
     if (los === 5) return message.channel.send(`Przegrałeś! :newspaper: (bot) obwinął <:ROCK2:557301211204943892> (ty)`)
     if (los === 6) return message.channel.send(`Przegrałeś! :scissors: (bot) pociął :newspaper: (ty) `)
     if (los === 7) return message.channel.send(`Wygrałeś! :scissors: (ty) pociął :newspaper: (bot)`)
     if (los === 8) return message.channel.send(`Wygrałeś! :scissors: (bot) stępiły się od <:ROCK2:557301211204943892> (ty)`)
     if (los === 9) return message.channel.send(`Przegrałeś! :scissors: (ty) stępiły się od <:ROCK2:557301211204943892> (bot)`);
}
module.exports.help = {
    name: "pkn" , 

    description: `
Bot razem z tobą gra w "zabawę papier kamień nożyce"
{prefix}pkn
`,
  aliases: [],
  permLevel: "Użytkownik"
}
