module.exports = async (client) => {
    const db = require('quick.db');

    client.on("guildMemberAdd", user => {
        let typ = db.fetch(user.guild.id + ".powTyp");
        if(!typ) return;
        let tekst = db.fetch(user.guild.id + ".powTekst");
        let kanal = user.guild.channels.get(db.fetch(user.guild.id + ".powKanal"));
        if(!kanal) return;
        if(typ==="message") {
            kanal.send(tekst.replace(/{user}/gi, `<@${user.id}>`)
                            .replace(/{tag}/gi, user.user.tag)
                            .replace(/{server}/gi, user.guild.name));
        } else if(typ==="embed") {
            const { RichEmbed } = require("discord.js");
            kanal.send(new RichEmbed().setDescription(tekst.replace(/{user}/gi, `<@${user.id}>`)
                                                      .replace(/{tag}/gi, user.user.tag)
                                                      .replace(/{server}/gi, user.guild.name))
                                      .setThumbnail(user.user.displayAvatarURL)
                                      .setColor("RANDOM"));
        }
    });
    client.on("guildMemberRemove", user => {
        let typ = db.fetch(user.guild.id + ".pozTyp");
        if(!typ) return;
        let tekst = db.fetch(user.guild.id + ".pozTekst");
        let kanal = user.guild.channels.get(db.fetch(user.guild.id + ".pozKanal"));
        if(!kanal) return;
        if(typ==="message") {
            kanal.send(tekst.replace(/{user}/gi, `<@${user.id}>`)
                            .replace(/{tag}/gi, user.user.tag)
                            .replace(/{server}/gi, user.guild.name));
        } else if(typ==="embed") {
            const { RichEmbed } = require("discord.js");
            kanal.send(new RichEmbed().setDescription(tekst.replace(/{user}/gi, `<@${user.id}>`)
                                                      .replace(/{tag}/gi, user.user.tag)
                                                      .replace(/{server}/gi, user.guild.name))
                                      .setThumbnail(user.user.displayAvatarURL)
                                      .setColor("RANDOM"));
        }
    });
};