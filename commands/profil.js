exports.run = async (client, message, args) => {
  const db = require("quick.db")
  const string = message.translate;
   
  if (message.mentions.users.first() || args[0]) {
    user = message.mentions.users.first() || client.users.get(args[0]);
  } else {
    user = message.author;
  }

  if(!user) return message.channel.send(string.profilNotUser)
  let odznaki = db.fetch(user.id + "odznaki")                                                      
  if(odznaki==="null") odznaki = "";

  let status = " ";
  if(user.presence.status === "online") status = "<:online:565501760702119946>";
  if(user.presence.status === "dnd") status = "<:dnd:565501599506759681>";
  if(user.presence.status === "idle") status = "<:idle:565501707501568032>";
  if(user.presence.status === "offline") status = "<:offline:565501658935590922>";

  const moment = require("moment");
  if(string.language === "pl") {
    moment.locale("pl");
  } else {
    moment.locale("eng")
  }
  const { RichEmbed } = require("discord.js")
  const member = message.guild.member(user);
  const embed = new RichEmbed()
    .setColor(db.fetch(user.id + ".kolorProfil") || "#36393f")
    .setThumbnail(user.displayAvatarURL)
    .setDescription(`:bust_in_silhouette: **${string.name}**: ${!db.fetch(user.id + "imie")||db.fetch(user.id + "imie")==="null" ? string.profilError : db.fetch(user.id + "imie")}
<:Spotify:564739629379616778> **Spotify**: ${!db.fetch(user.id + "spotify")||db.fetch(user.id + "spotify")==="null" ? string.profilError : db.fetch(user.id + "spotify")}
<:instagram:564739148284559361> **Instagram**: ${!db.fetch(user.id + "instagram")||db.fetch(user.id + "instagram")==="null" ? string.profilError : db.fetch(user.id + "instagram")}
:dog:**${string.pupilProfil}**: ${!db.fetch(user.id + "pupil")||db.fetch(user.id + "pupil")==="null" ? string.notPupil : db.fetch(user.id + "pupil")}
:flags:**${string.nationProfil}**: ${!db.fetch(user.id + "nation")||db.fetch(user.id + "nation")==="null" ? string.profilError : db.fetch(user.id + "nation")}`)
    .addField(string.profilOpis, !db.fetch(user.id + ".opis")||db.fetch(user.id + ".opis")==="null" ? string.profilError : db.fetch(user.id + ".opis"))
    .setTitle(`${string.profilTitle} ${user.username}#${user.discriminator} ` + status)
    .addField(string.badges, odznaki || string.badgesError)
    .setFooter("Profil możesz sobie ustawić w panelu bota http://rkubapl.malopolska.pl:8888/profil")
  message.channel.send(embed)
}   
 exports.help = {
    name: 'profil',
    category: "Użytkownik",
        description: `Pokazuje twój lub podanej osoby profil. Swój profil możesz ustawić w panelu bota. 
    {prefix}profil <wzmianka lub ID >`,
    aliases: ["Profil"],
    permLevel:"Użytkownik"
  }

    