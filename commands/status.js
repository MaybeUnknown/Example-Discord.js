var db = require('quick.db');
var { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
    if (!client.developers.includes(message.author.id)) return message.channel.send(new RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"));
    if(!args[0]) {
        return message.channel.send("Opcje do wyboru: `wylacz` (wylacza zmienianie statusu) `wlacz` (wlacza zmiane statusu) `watching` `listening` `game`");
    }
    if(args[0] === "wylacz") {
        db.set("status", false);
        return message.channel.send("Wyłaczono automatyczną zmiane statusu!");
    }   
    if(args[0] === "wlacz") {
        db.set("status", true);
        return message.channel.send("Właczono automatyczną zmiane statusu!");
    }   
    if(args[0] === "game") {
        client.user.setActivity(args.slice(1).join(" "));
        return message.channel.send("Ustawiono status `W grze " + args.slice(1).join(" ")+"`");
    }
    if(args[0] === "watching") {
        client.user.setActivity(args.slice(1).join(" "), {type: "WATCHING"});
        return message.channel.send("Ustawiono status `Ogląda " + args.slice(1).join(" ")+"`");
    }
    if(args[0] === "listening") {
        client.user.setActivity(args.slice(1).join(" "), {type: "LISTENING"});
        return message.channel.send("Ustawiono status `Słucha " + args.slice(1).join(" ")+"`");
    }
}
module.exports.help = {
  name: 'status',
  category: 'Bot owners',

}