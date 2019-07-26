exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db');
    const { RichEmbed } = require('discord.js');
if (db.fetch(message.author.id + message.guild.id + ".kasa") < 200) {
    return message.channel.send("Nie stać cie!")
}
db.subtract(message.author.id + message.guild.id + ".kasa", 200)

const losowanie = Math.floor(Math.random() * 6 + 1)
if (losowanie === 1) {
message.channel.send(string.lotteryLost)
}
if (losowanie === 2) {

const ilosckasy = 100 + Math.floor(Math.random() * 200 + 1)  

  const hajsy = ilosckasy - 200;
  if (hajsy > 0) {
     return message.channel.send(new RichEmbed().setTitle(string.lottery).addField(string.profitLottery, hajsy).addField(string.winLottery, `${string.winTextLottery} ${ilosckasy}` + `$ ${string.winLotteryTwo} ${client.user.username}`).setFooter(message.author.tag))
  }
  if (hajsy < 0) {
   return   message.channel.send(new RichEmbed().setTitle(string.lottery).addField(string.lossLottery, Math.abs(hajsy)).addField(string.winLottery, `${string.winTextLottery} ${ilosckasy}` + `$ ${string.winLotteryTwo} ${client.user.username}`).setFooter(message.author.tag))
  }
  

db.add(message.author.id + message.guild.id + ".kasa", ilosckasy)


}
if (losowanie === 3) {
  const ilosckasy = 50 + Math.floor(Math.random() * 350 + 1)  

      const hajsy = ilosckasy - 200;
      if (hajsy > 0) {
         return message.channel.send(new RichEmbed().setTitle(string.lottery).addField(string.profitLottery, hajsy).addField(string.winLottery, `${string.winTextLottery} ${ilosckasy}` + `$ ${string.winLotteryTwo} ${client.user.username}`).setFooter(message.author.tag))
      }
      if (hajsy < 0) {
         return message.channel.send(new RichEmbed().setTitle(string.lottery).addField(string.lossLottery, Math.abs(hajsy)).addField(string.winLottery, `${string.winTextLottery} ${ilosckasy}` + `$ ${string.winLotteryTwo} ${client.user.username}`).setFooter(message.author.tag))
      }
      
  

 db.add(message.author.id + message.guild.id + ".kasa", ilosckasy)
 
   }
   if (losowanie === 4) {
    message.channel.send("Przegrałeś/aś!")
          
      }





if (losowanie === 5) {
 return message.channel.send("Przegrałeś/aś!")
}
if (losowanie === 6) {
    const ilosckasy = 50 + Math.floor(Math.random() * 300 + 1)  

    const hajsy = ilosckasy - 200;
    if (hajsy > 0) {
       return message.channel.send(new RichEmbed().setTitle(string.lottery).addField(string.profitLottery, hajsy).addField(string.winLottery, `${string.winTextLottery} ${ilosckasy}` + `$ ${string.winLotteryTwo} ${client.user.username}`).setFooter(message.author.tag))
    }
    if (hajsy < 0) {
       return message.channel.send(new RichEmbed().setTitle(string.lottery).addField(string.lossLottery, Math.abs(hajsy)).addField(string.winLottery, `${string.winTextLottery} ${ilosckasy}` + `$ ${string.winLotteryTwo} ${client.user.username}`).setFooter(message.author.tag))
    }
    


db.add(message.author.id + message.guild.id + ".kasa", ilosckasy)
      
  
}

}

exports.help = {
    name: 'loteria' ,
    category: "Economy",
       description: `Grasz w loterie 
    {prefix}loteria`,
    aliases: [],
    permLevel:"Użytkownik"
    timeout: 10
  }