exports.run = async (client, message, args) => {
    const string = message.translate;
const db = require('quick.db');
    const { RichEmbed } = require('discord.js')
    let strona;
    
    
if(!args.join(' ')) {
    const embed = new RichEmbed().setColor("#00FFFF").setTitle(string.setInfo).setDescription(`:bust_in_silhouette: **Name**: ${db.fetch(message.author.id + "imie") || string.profilError}\n<:Facebook:564739173005787156> **Facebook**: ${db.fetch(message.author.id + "facebook") || string.profilError}\n<:tiktok:564739156975026186> **Tiktok**: ${db.fetch(message.author.id + "tiktok") || string.profilError}\n<:Spotify:564739629379616778> **Spotify**: ${db.fetch(message.author.id + "spotify") || string.profilError}\n<:snapchat:564739139765796874> **Snapchat**: ${db.fetch(message.author.id + "snapchat") || string.profilError}\n<:instagram:564739148284559361> **Instagram**: ${db.fetch(message.author.id + "instagram") || string.profilError}\n**:dog: ${string.pupilProfil}**: ${db.fetch(message.author.id + "pupil") || string.notPupil}\n**:flags: Country**: ${db.fetch(message.author.id + "nation") || string.profilError}`).setFooter(`${string.setInfoUse} ` + (db.fetch(message.guild.id + ".prefix") || "!")  + `setInfo set <${string.value}>`)
 message.channel.send(embed) 
}
 
 if(args[0] === "set") {
 if(args[1] === "Facebook") {
    const nazwa = args.slice(2);
     if(!args[2]) return message.channel.send(new RichEmbed().setTitle(`${string.setInfoBlank} <:Facebook:564739173005787156> Facebook`).setColor('#00008B'));
     db.set(message.author.id  + "facebook", nazwa.join(' '))
     message.channel.send(new RichEmbed().setTitle("<:Facebook:564739173005787156> Facebook: " + db.fetch(message.author.id + 'facebook')).setColor('#00008B'))
 }
 if(args[1] === "Tiktok") {
     const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(`${string.setInfoBlank} <:tiktok:564739156975026186> Tiktok`).setColor('#000000'));
    db.set(message.author.id  + "tiktok", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle("<:tiktok:564739156975026186> Tiktok: " + db.fetch(message.author.id + 'tiktok')).setColor('#000000'))
}
if(args[1] === "Spotify") {
    const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(`${string.setInfoBlank} <:Spotify:564739629379616778> Spotify`).setColor('#7FFF00'));
    db.set(message.author.id  + "spotify", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle("<:Spotify:564739629379616778> Spotify: " + db.fetch(message.author.id + 'spotify')).setColor('#7FFF00'))
}
if(args[1] === "Snapchat") {
    const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(`${string.setInfoBlank} <:snapchat:564739139765796874> Snapchat`).setColor('	#FFD700'));
    db.set(message.author.id  + "snapchat", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle("<:snapchat:564739139765796874> Snapchat: " + db.fetch(message.author.id + 'snapchat')).setColor('	#FFD700'))
}
if(args[1] === "Instagram") {
    const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(`${string.setInfoBlank} <:instagram:564739148284559361> Instagram`).setColor('#4B0082'));
    db.set(message.author.id  + "instagram", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle("<:instagram:564739148284559361> Instagram: " + db.fetch(message.author.id + 'instagram')).setColor('#4B0082'))
}
if(args[1] === "Name") {
    const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(string.blankName).setColor('#B22222'));
    db.set(message.author.id  + "imie", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle(`${string.name} ` + db.fetch(message.author.id + 'imie')).setColor('#B22222'))
}
if(args[1] === "Animal") {
    const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(string.setInfoBlankTwo).setColor('#B22222'));
    db.set(message.author.id  + "pupil", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle(`${string.pupilProfil} ` + db.fetch(message.author.id + 'pupil')).setColor('#B22222'))
}
if(args[1] === "Country") {
    const nazwa = args.slice(2);
    if(!args[2]) return message.channel.send(new RichEmbed().setTitle(string.setInfoBlankThree).setColor('#B22222'));
    db.set(message.author.id  + "nation", nazwa.join(' '))
    message.channel.send(new RichEmbed().setTitle(`${string.name} ` + db.fetch(message.author.id + 'nation')).setColor('#B22222'))
}

 }

}
exports.help = {
    name: 'setInfo',
    category: "Użytkownik",
     description: `Pozwala na ustawienie profilu.
    {prefix}setInfo`,
    aliases: [],
    permLevel:"Użytkownik"
  }