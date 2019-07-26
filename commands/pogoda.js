exports.run = async (client, message, args) => {
  const string = message.translate;
  const { RichEmbed }  = require("discord.js")
  if(!args[0])   return  message.channel.send(new RichEmbed()
  .setColor("RANDOM")
  .setDescription("Wpisz odpowiednią lokalizacje!"))
  var weather = require('weather-js');
  weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {
      if(err)    return  message.channel.send(new RichEmbed()
      .setColor("RANDOM")
      .setDescription("Nie znaleziono podanej lokalizaji!"))
      console.log(JSON.stringify(result, null, 2));
      message.channel.send(new RichEmbed()
.setTitle(`${string.weather} ` + result[0].location.name)
.setDescription(`☀**${string.weatherC}**: `+  result[0].current.temperature + "°C\n" + `🌀**${string.weatherO}**: ` + result[0].current.feelslike + "°C\n" + `:cloud_tornado:**${string.weatherW}**: ` +result[0].current.windspeed +"\n"+ `:droplet:**${string.weatherWW}**: `+ result[0].current.humidity+"mm")
.setColor("RANDOM")
.setThumbnail(result[0].current.imageUrl)
.setFooter(`Wywołane przez ${message.author.tag} `)
.setTimestamp())
    });

}   
module.exports.help = {
 name: 'pogoda',
 category: "4FUN",
 description: `Pokazuje pogodę na wybranej lokalizacji.
 {prefix}pogoda <lokalizacja>`,
 permLevel: "Użytkownik"
}
