var miesiace = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];
  
  module.exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send("Musisz napisać kogo chcesz uśmiercić");
    var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return  message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Oznacz poprawnego użytkownika!")
    .setFooter("Wiadomość zostanie usunięta po 30 sekundach!")
    .setTimestamp()).then(message => message.delete(30000));
    let date = new Date();
    message.channel.send("Generuję obrazek...").then(async (mesg) => {
      let image = new RichEmbed.Attachment(`http://www.tombstonebuilder.com/generate.php?top1=RIP&top2=${encodeURIComponent("Spoczywaj w pokoju")}&top3=${encodeURIComponent(member.user.username)}&top4=${encodeURIComponent(`${date.getDate()} ${miesiace[date.getMonth()]} ${date.getFullYear()}`)}`, "grob.jpg");
      await message.channel.send("😢", image);
      mesg.delete();
    });
  }
  
  module.exports.help = {
    name: "rip",
    category: "FUN"
  }
  