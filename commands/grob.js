  module.exports.run = async (client, message, args) => {
    const { RichEmbed, Attachment } = require('discord.js');
     const string = message.translate;
var miesiace = [
    `${string.styczen}`,
    `${string.luty}`,
    `${string.marzec}`,
    `${string.kw}`,
    `${string.maj}`,
    `${string.czerwiec}`,
    `${string.lp}`,
    `${string.sr}`,
    `${string.wrzes}`,
    `${string.paz}`,
    `${string.lpt}`,
    `${string.grudz}`
  ];
  

    if(!args[0]) return message.channel.send(string.grob);
    var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return  message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription(string.ozn)
    .setFooter(`${string.cmd} ${message.author.tag}`)
    .setTimestamp())
    let date = new Date();
    message.channel.send(string.gb).then(async (mesg) => {
      let image = new Attachment(`http://www.tombstonebuilder.com/generate.php?top1=RIP&top2=${encodeURIComponent("Spoczywaj w pokoju")}&top3=${encodeURIComponent(member.user.username)}&top4=${encodeURIComponent(`${date.getDate()} ${miesiace[date.getMonth()]} ${date.getFullYear()}`)}`, "grob.jpg");
      await message.channel.send("😢", image);
      mesg.delete();
    });
  }
  
  module.exports.help = {
    name: "grob",
    category: "4FUN",
    description: `Tworzy nagrobek z pdoanym nickiem.Ta koemnda jest wyłącznie do zabawy
    {prefix} <wzmianka>`,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
