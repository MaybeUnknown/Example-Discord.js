module.exports.run = (client, message, args) => {
  const string = message.translate;
  const { RichEmbed } = require('discord.js')
  if(args[0]==="npm") {
    client.npm(args[1])
    .then((info) => {
      console.log(info);
      return message.channel.send(new RichEmbed().setColor("RANDOM")
                                          .setTitle(info.name)
                                          .setURL(info.homepage)
                                          .setDescription(info.description)
                                          .addField("Wersja", info.version)
                                          .addField("Autor", info.author)
                                          .addField("Licencja", info.license));
      });
      } else if (args[0]) {
        if (client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]))) {
          var helpcmd = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
              return message.channel.send(new RichEmbed().setColor("RANDOM")
                                         .setTitle(`Informacje o komendzie ${helpcmd.help.name}`)
                                         .addField("Kategoria", helpcmd.help.category||"_Brak_")
                                         .addField("Opis", helpcmd.help.description ? helpcmd.help.description.replace(/{prefix}/g, "c!") : "_Brak_")
                                         .addField("Aliasy", helpcmd.help.aliases ? (helpcmd.help.aliases.length<1 ? "_Brak_" : helpcmd.help.aliases.join(", ")) : "_Brak_")
                                         .addField("Uprawnienia:", helpcmd.help.permLevel||"_Brak_")
                                         .addField("Timeout", (helpcmd.help.timeout || "3" + "s")))
          } else {
            return message.channel.send(new RichEmbed().setColor("RANDOM")
                                       .setTitle(`Nie ma komendy/aliasu o nazwie ${args[0]}`));
          }
        } else {
         let bicon = client.user.displayAvatarURL;
         let cmds = {};
         let categories = [];
         client.commands.forEach((c) => {
           if(c.help.category) {
             const x = c.help.category.trim();
             if(!cmds[ c.help.category]) {
               cmds[c.help.category] = [];
               categories.push(c.help.category);
             }
             cmds[ c.help.category].push(`\`${c.help.name}\``);
           } else {
             if(!cmds[`${string.other}`]) {
               cmds[`${string.other}`] = [];
               categories.push(`${string.other}`);
             } 
             cmds[`${string.other}`].push(`\`${c.help.name}\``);
           }
         });
         console.log(cmds);
         var embed = new RichEmbed().setColor("RANDOM")
                    .setAuthor(string.commandshead)
                     .setDescription(string.commands)
                     .setThumbnail(client.user.avatarURL)
                     .setFooter(`${string.cmd} ${message.author.tag}`)
                     .setTimestamp();
         categories.forEach((cat) => {
           embed.addField(`${string.katego} ${cat}`, cmds[cat].join(", ")||"_Brak_");
         });
         message.channel.send(embed);
       }
       }
  
  module.exports.help = {
      name: "help",
      category: "Bot",
      description: `
  Pokazuje pomoc na temat danej komendy lub modułu npm
  {prefix}help
  {prefix}help npm express
  `,
    aliases: ["h","Help"],
    permLevel: "Użytkownik"
  }