exports.run = async (client, message, args) => {
 const string = message.translate;
    const wartosc = args.slice(2);
    const db = require('quick.db')
    //if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(string.configError)
    if (args[0] === "set") {
        if (!args[1]) return message.channel.send(string.ustawError)
        if (args[1] === "prefix")  {
            if (!args[2]) return message.channel.send(string.prefixError)
           
            db.set(message.guild.id + ".prefix", wartosc.join(' '))
           return message.channel.send(string.prefixSet + db.fetch(message.guild.id + ".prefix") + "`")
        }
        if (args[1] === "mod-log")  {
            if (!args[2]) return message.channel.send(string.modlogError)
            db.set(message.guild.id + ".mod-log", wartosc.join(' '))
           return message.channel.send(string.modlogSet + db.fetch(message.guild.id + ".mod-log") + "`")
        } if (args[1] === "role")  {
            if (!args[2]) return message.channel.send(string.roleError)
            db.set(message.guild.id + ".role", wartosc.join(' '))
           return message.channel.send(string.roleSet + db.fetch(message.guild.id + ".role") + "`")
        }
        if (args[1] === "logMessage")  {
            if (!args[2]) return message.channel.send(string.logError)
            db.set(message.guild.id + ".logMessage", wartosc.join(' '))
           return message.channel.send(string.logSet + db.fetch(message.guild.id + ".logMessage") + "`")
        }
        if (args[1] === "hiChannel")  {
            if (!args[2]) return message.channel.send(string.hiChannelError)
            db.set(message.guild.id + ".powKanal", wartosc.join(' '))
           return message.channel.send(string.hiChannelSet + db.fetch(message.guild.id + ".powKanal") + "`")
        }
        if (args[1] === "hiText")  {
            if (!args[2]) return message.channel.send(string.hiTextError)
            db.set(message.guild.id + ".powTekst", wartosc.join(' '))
           return message.channel.send(string.hiTextSet + db.fetch(message.guild.id + ".powTekst") + "`")
        }
        if (args[1] === "byeChannel")  {
            if (!args[2]) return message.channel.send(string.byeChannelError)
            db.set(message.guild.id + ".byeKanal", wartosc.join(' '))
           return message.channel.send(string.byeChannelSet + db.fetch(message.guild.id + ".byeKanal") + "`")
        }
        if (args[1] === "byeText")  {
            if (!args[2]) return message.channel.send(string.byeTextError)
            db.set(message.guild.id + ".byeTekst", wartosc.join(' '))
           return message.channel.send(string.byeChannelSet + db.fetch(message.guild.id + ".byeTekst") + "`")
        }
         if (args[1] === "language")  {
            if (!args[2] || args[2] !== "pl" && args[2] !== "eng") return message.channel.send(string.languageError)
            db.set(message.guild.id + ".language", wartosc.join(' '))
           return message.channel.send(string.languageSet + db.fetch(message.guild.id + ".language") + "`")
        }
        
        if(args[1] === "dailyMoney"){
            if(!args[2]) return message.channel.send("Musisz podać wartość.");
            if(!args[0] < 1 && args[0] > 12000) return message.channel.send("Wartość nie może być mniejsza od 1 i większa od 12000 oraz musi być cyfrą/liczbą.")
            db.set(message.guild.id + ".dailyMoney", wartosc.join(" "))
        }
          }
   
    // const kasa = "NIE"
    // db.fetch(messsage.author.id + ".kasa")
    const { RichEmbed } = require('discord.js');
    const embed = new RichEmbed().setTitle(string.configTitle)
    .setDescription(
    "**Prefix (prefix)**: `" +  (db.fetch(message.guild.id + ".prefix") || "c!") + "`\n" +    
    string.languageConfig +  (db.fetch(message.guild.id + ".language") || "eng") + "`\n" +    
    //string.blokConfig + (db.fetch(message.guild.id + ".blokada") || "false") + "`\n" +  
    string.channelsTitleConfig + 
    string.modlogConfig +  (db.fetch(message.guild.id + ".mod-log") || string.configNotSelected) + "`\n" +
    string.logConfig + (db.fetch(message.guild.id + ".logMessage") || string.configNotSelected) + "`\n" +
    string.hiConfig +
    string.roleConfig + (db.fetch(message.guild.id + ".role") || string.configNotSelected) + "`\n" + 
    string.hiChannelConfig + (db.fetch(message.guild.id + ".powKanal") || string.configNotSelected) + "`\n" +
    string.hiTextConfig + (db.fetch(message.guild.id + ".powTekst") || string.configNotSelected) + "`\n" +
   string.byeConfig +
    string.byeChannelConfig + (db.fetch(message.guild.id + ".byeKanal") || string.configNotSelected) + "`\n" +
    string.byeTextConfig + (db.fetch(message.guild.id + ".byeTekst") || string.configNotSelected) + "`\n")
    .setColor("#00FFFF").setFooter(string.footerConfig + (db.fetch(message.guild.di + ".prefix") || "c!") + string.footerConfigTwo)
    message.channel.send(embed)
}

exports.help = {
    name: 'config',
    category: "Administracyjne",
        description: `
    Poznawala ustawienie bota na serwerze
{prefix}config set <klucz> <wartość>
    `,
    aliases: [],
    permLevel:"Administrator"
  }