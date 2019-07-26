const Client1 = require('fortnite');
module.exports.run = async (client, message) => {
    const { RichEmbed } = require('discord.js');
    let username = args[0];
    let platform = args[1] || "pc";
    if (!username) return message.channel.send("Podaj poprawną nazwę użytkownika!")
    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime
        let score = lifetime[6]["Score"]
        let mplayed = lifetime[7]["Matches Played"]
        let wins = lifetime[8]["Wins"]
        let winper = lifetime[9]["Win%"]
        let kills = lifetime[10]["Kills"]
        let kd = lifetime[11]["K/d"]
        let fortine = new RichEmbed()
            .setTitle("Statystyki Fortnite")
            .setAuthor(data.username)
            .setColor("RANDOM")
            .addField("Punkty:", score, true)
            .addField("Wygrane:", wins, true)
            .addField("Zabójstwa/śmierci:", kd, true)
            .addField("Zagrane mecze:", mplayed, true)
            .addField("Zabójstwa:", kills, true)
            .addField("Procent wygranych:", winper, true);
        message.channel.send(fortine);
    }).catch(e => {
        console.log(e);
        message.channel.send("Nie znaleziono podanego użytkownika!")

    })
}
module.exports.help = {
    name: "fortnite",
    category: "Gry",
    description: `Pokazuje statystyki użytkownika z gry fortnife.
    {prefix}fortnife <nazwa gracza>`,
    aliases: ["Fortnite"],
    permLevel:"Użytkownik"
  }