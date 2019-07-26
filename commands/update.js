exports.run = async (client, message, args) =>  {
    const { RichEmbed } = require('discord.js');
    if (!client.developers.includes(message.author.id)) return message.channel.send(new RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"))
    let msgwait = await message.channel.send("Oczekiwanie na odpowiedź od gitlab.com...");
    const cmd = require("node-cmd");
    cmd.get(`
       git pull origin v3
       `,
       async function(err, data, stderr){
           if (!err) {
              const { RichEmbed } = require("discord.js")
              msgwait.edit(new RichEmbed()
                .setColor(3447003)
                .setTitle(`UPDEJTY BOTA`)
                .addField("Aktualizacje:", `\`\`\`bash\n${data}\n\`\`\``))
              .then(async () => {
                console.log('UPDEJTY :\n\n',data);
              })
           } else {
             const { RichEmbed } = require("discord.js")
             message.channel.send(new RichEmbed()
              .setColor(3447003)
              .setTitle(`UPDEJTY BOTA`)
              .addField("Błąd:", `\`\`\`bash\n${err}\n\`\`\``));
               console.log('error', err);
            }
        }
    );
 }

 
   exports.help = {
     name: 'update',
     category: "Bot owners",
     aliases: ["u"]
   }