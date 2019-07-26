const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const db = require('quick.db');

// require("./moduly/translate.js")(client);

const { TOKEN, GOOGLE_API_KEY } = require('./configxd.js');
const Util = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const { RichEmbed } = require("discord.js")
const queue = new Map();
const DBL = require("dblapi.js");
    var cleverbot = require("cleverbot.io");
var bot = new cleverbot('hnIFbFEXH1KXXSDz','yQNQ5BWdKibE3m7svXBwZ5KMIkt20grL');

// bot.create(function (err, session) {
// console.log(session);
//   });

client.devs = ["494017032283619329", "566521151459819530"]; 
client.prog = ["305060312971870208"]; 
client.head = ["402552765370597376", "425689994061938708", "476415433340354561"]; 
client.support = ["493063414671998989", "540242757340626944", "344179692783403018"];
client.supp = ["457815071259623427", "524984339231014923", "324985979352121365"] 
client.tlumacze = ["546374340711546893", "429585324826558464", "527445019548844075"]
client.tlu = ["304952853804613633", "320471581547560964", "550751055433039872"];


const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0MDk1MTg2NzIzMzAwOTY2NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTU1NjgyMjIzfQ.OsBGJtCRU5kYSY_GYa8xnrSH_7bn2TmYJu7-agcj2o8', client);

// Optional events
dbl.on('posted', () => {
  console.log('DBL: Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})




client.on('ready', () => {
  console.log("ON")
  
  
  })

const fs = require('fs');
fs.readdir('./commands/', (err, files) => {  // This line of code reads all files from our "commands" folder
  if(err) console.error(err); // If there is an error, send it to console.

  let cmds = files.filter(f => f.split('.').pop() === 'js'); // This array will contain all files with 'js' extension
  
  if(cmds.lenght <= 0) { // If array contains less than, or exactly 0 objects, send message that there is no commands to load
    return console.log('No command files found...');
  }

  console.log(`Loading ${files.lenght} commands...`); // Optional, prints how many commands we are loading

  cmds.forEach((f, i) => { // Execute this code for every file from our array, f is files, and i stands for number
    const command = require(`./commands/${f}`); // Require file with command
    console.log(`${i + 1}: ${f} została załadowana!`); // When command is loaded, log it into console
    client.commands.set(command.help.name, command); // Push command name and file with it's code to our Collection
  }); 
}); 
setInterval(async () => {
  let date = new Date();
  let bans = await client.guilds.get("528909777183571979").fetchBans();
      client.channels.get("569191481399705600").setName(`🌎 Serwerów: ${client.guilds.size}`);
   client.channels.get("569191507165184000").setName(`🔶 Kanałów: ${client.channels.size}`);
   client.channels.get("569191532230606858").setName(`🌀 Liczba komend: ${client.commands.size}`);
    client.channels.get("569191561372499979").setName(`🌟 Użytkowników: ${client.users.size}`);
  
},15000);
client.on("ready",async () => {
console.log(client.user.username+' jest już aktywny! ');
  client.user.setGame("Dzień dobry!") 
setInterval(function(){
  const los = Math.floor(Math.random() * 5 + 1)
if (los === 1)  {
  client.user.setGame("Serwery: " + client.guilds.size) 
}
if (los === 2)  {
  client.user.setGame("Miłego dnia !") 
}
if (los === 3)  {
  client.user.setGame("Nowa aktualizacja V2!") 
}
if (los === 4)  {
  client.user.setGame("Zaproś bota na swój serwer!") 
}
  if (los === 5)  {
    client.user.setGame(`Mój domyślny prefix to c!`) 
  }
}, 7000)
}); 

client.on("guildCreate", guild => {
    client.channels.get("546285096018247700").send(new RichEmbed()
            .setTitle("Dołączyłem na  serwer!")
            .setColor("#2ecc71")
            .setDescription(`Nazwa serwera: ${guild.name}`)
            .addField("Id serwera: ", `${guild.id} `)
            .addField("Liczba członków :", `${guild.memberCount} członków`)
            .addField("Właścicielem serwera jest", `${guild.owner}`)
            .addField("ID właściciela:", `${guild.owner.id}`))
});
client.on("guildDelete", async guild => {
  client.channels.get("546285096018247700").send(new RichEmbed()
            .setTitle("Odszedłem z serwera")
            .setDescription(`Nazwa serwera: ${guild.name}`)
            .setColor("#e74c3c")
            .addField("Id serwera: ", `${guild.id} `)
            .addField("Liczba członków :", `${guild.memberCount} członków`)
            .addField("Właścicielem serwera:", `${guild.owner}`)
            .addField("ID właściciela:", `${guild.owner.id}`));
});
client.on("guildCreate", guild =>{
  let bicon = client.user.displayAvatarURL;
  client.users.get(guild.owner.user.id).send(new RichEmbed()
              .setColor("RANDOM")
              .setThumbnail(bicon)
              .addField("Witaj cieszę się, że dodałeś mnie na swój serwer. Mój prefix to c!.", 
                        "Jeśli potrzebujesz pomocy lub chcesz wiedzieć o nowych aktualizacjach wejdź na mój serwer https://discord.gg/7sYKqet "));
});
client.on('message', async message => {
    if(message.author.bot) return;

    if(message.channel.name === (db.fetch(message.guild.id + "cbot") || null)) {
    //   if(message.channel.id === "569595003949678602") {
      bot.setNick("jacobbot");
message.channel.startTyping();
const wiad = await message.channel.send(":thinking: Działam za pomocą **http://cleverbot.io/**");
    bot.ask(message.content, function (err, response) {
      if(err) return;
        wiad.edit(new Discord.RichEmbed().setColor("RANDOM").setDescription(response).setAuthor(message.author.username, message.author.avatarURL).setFooter("Administracja i właściciele bota nie odpowiadają za cleverbota").setTimestamp()); 
      });
    
    return   message.channel.stopTyping();
}

  
    

//     const lang = "eng";
//     const jezyki = message.jezyki;
// message.languages = client.languages;

// if(lang == "eng" || lang == "pl") {
//   message.jezyki === client.translate.find(o => o.language === lang)
// }

if(message.content.includes("discord.gg") && db.fetch(message.guild.id + ".blokada") === "true" && !message.member.hasPermission("MANAGE_GUILD")) {
  message.delete();
  message.channel.send("Wysyłanie zaproszeń zostało wyłaczone na tym serwerze")
}

const jezyk = db.fetch(message.guild.id + ".language") || "eng";

if(jezyk === "pl") {
  message.translate  = require('./Tlumaczenia/polish.json');
}
if(jezyk === "eng") {
  message.translate  = require('./Tlumaczenia/english.json');
}




 const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
const prefix = message.content.match(prefixMention) && message.content.match(prefixMention)[0] || db.fetch(message.guild.id + ".prefix") || "c!"
const messageArray = message.content.split(/\s+/g); 
const command = messageArray[0]; // Command with prefix
const args = messageArray.slice(1); // Arguments given to command
let cmd = client.commands.get(command.slice(prefix.length)); // We need to get command from our collection

if(message.channel.id === "558298163618906128") {
  client.db.set("ogl", message.content);
  client.db.set("ogl.autorid", message.author.id);
  }
  
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
      const embed = (new RichEmbed()
      .setColor("#40FF00")
      .setThumbnail("https://cdn.discordapp.com/avatars/540951867233009666/2348132c3ed4bdcf2526682d982edd60.png?size=2048")
      .setTitle("***O mnie:***")
      .setDescription("Jestem Polskim botem. Posiadam wiele rozmaitych komend: administracyjnych, rozrywkowych,  ekonomicznych")
      .addField("**Komendy:**", "Jest możliwość zmiany mojego prefixu na twoim serwerze!\nWszystkie komendy zobaczysz pod komendą "+prefix+"help")
      .addField("**Prefix:**", prefix)
      .setFooter("Jeśli chcesz dodać bota na serwer wpisz komedę " +prefix+"invite"));
       message.channel.send(embed);
  }
  
if(command.startsWith(prefix)){ // If command object starts with prefix
if (db.fetch(message.author.id + ".black") === true) {
  return message.channel.send("Zostałeś zblacklistowany!")
}
  try {
  if(cmd) cmd.run(client, message, args); // If cmd object isn't null, execute command code
  } catch(e) {
    message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setTitle("Wystapil blad.").setDescription(e));
  }
  console.log(`Logi: ${message.author.username}#${message.author.discriminator} użył komendy '${command}' on ${message.guild.name}`); // We can log it to console
  



}


});
client.on("guildMemberAdd", user => {
console.log("AAAA")

let rola = user.guild.roles.find(role => role.name === db.fetch(user.guild.id + ".role") );
if(rola) {
user.addRole(rola);
}
if(db.fetch(user.guild.id + ".wiadon") === 'true') {
let powChannel = user.guild.channels.find("name", db.fetch(user.guild.id + ".powKanal") || null);
if(!powChannel) return;
const tekst = db.fetch(user.guild.id + ".powTekst").replace("{user}", `<@${user.user.id}>`);
powChannel.send(tekst);
}
if(db.fetch(user.guild.id + ".embon") === 'true' && db.fetch(user.guild.id + ".embTekst")) {
let powChannel = user.guild.channels.find("name", db.fetch(user.guild.id + ".powKanal") || null);
if(!powChannel) return;
let kolor = "";
if(db.fetch(user.guild.id + ".kolor") === "Czerwony") kolor = "#DC143C";
if(db.fetch(user.guild.id + ".kolor") === "Cyan") kolor = "#00FFFF";
if(db.fetch(user.guild.id + ".kolor") === "Jasny zielony") kolor = "#7FFF00";
const embed = new RichEmbed();
if(db.fetch(user.guild.id + ".embNag") !== "null" &&  db.fetch(user.guild.id + ".embNag")) {
    embed.setTitle(db.fetch(user.guild.id + ".embNag").replace("{user}", `${user.user.tag}`));
}
if(db.fetch(user.guild.id + ".embFoot") !== "null" &&  db.fetch(user.guild.id + ".embFoot")) {
    embed.setFooter(db.fetch(user.guild.id + ".embFoot").replace("{user}", `${user.user.tag}`));
}
embed.setDescription(db.fetch(user.guild.id + ".embTekst").replace("{user}", `<@${user.user.id}>`));
embed.setColor(kolor || "#F0F8FF")
powChannel.send(embed);
}
if(db.fetch(user.guild.id + ".pwon") === 'true' && db.fetch(user.guild.id + ".pwTekst")) {
client.users.get(user.id).send(db.fetch(user.guild.id + ".pwTekst").replace("{user}", `<@${user.user.id}>`))
}
});

client.on("guildMemberRemove", user => {
  console.log("AAAA")
  let byeChannel = user.guild.channels.find("name", db.fetch(user.guild.id + ".byeKanal") || null)
  if(!byeChannel) return;
  let tekst = db.fetch(user.guild.id + ".byeTekst")
  if(tekst && tekst !== 'null') tekst = tekst.replace("{user}", `<@${user.user.id}>`);
  console.log(tekst)
  byeChannel.send(tekst);
  });


client.on('messageDelete', message =>{
    if(message.channel.type === "dm") return;
    const { RichEmbed } = require('discord.js');
    const jezyk = db.fetch(message.guild.id + ".language") || "eng";
let translate
if(jezyk === "pl") {
  translate  = require('./Tlumaczenia/polish.json');
}
if(jezyk === "eng") {
  translate  = require('./Tlumaczenia/english.json');
}
    
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let logChannel = message.guild.channels.find("name", db.fetch(message.guild.id + ".logMessage") || "fdsdsffdsdsfdsffdsdsf");
  if(!logChannel) return;
  
  logChannel.send(new RichEmbed().setColor("#BDB76B").setAuthor(message.author.tag, message.author.avatarURL).addField(translate.messageValue, message).setFooter(translate.messageDeleted).setTimestamp())

});

client.on('messageUpdate', (oldMessage, newMessage) =>{
    if(oldMessage.channel.type === "dm") return;
        const { RichEmbed } = require('discord.js');
         const jezyk = db.fetch(newMessage.guild.id + ".language") || "eng";
let translate
if(jezyk === "pl") {
  translate  = require('./Tlumaczenia/polish.json');
}
if(jezyk === "eng") {
  translate  = require('./Tlumaczenia/english.json');
}
    
  if(oldMessage.author.bot) return;
  if(oldMessage.channel.type === "dm") return;
  let logChannel = newMessage.guild.channels.find("name", db.fetch(newMessage.guild.id + ".logMessage") || "fdsdsffdsdsfdsffdsdsf");
  if(!logChannel) return;
  logChannel.send(new RichEmbed().setColor("#FF7F50").setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL).addField(translate.oldMessage, oldMessage).addField(translate.newMessage, newMessage).setFooter(translate.messageEdited).setTimestamp())

});





// client.on('message', async msg => { 
//  var glosy = 0;
//   // eslint-disable-line
//   // const u = this.client.getSettings(message.guild.id);
//   const PREFIX = db.fetch(msg.guild.id + ".prefix") || "!"
//   if (msg.author.bot) return undefined;
//   if (!msg.content.startsWith(PREFIX)) return undefined;

//   const args = msg.content.split(' ');
//   const searchString = args.slice(1).join(' ');
//   const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
//   const serverQueue = queue.get(msg.guild.id);

//   let command = msg.content.toLowerCase().split(' ')[0];
//   command = command.slice(PREFIX.length)

//   if (command === 'play') {
//     const voiceChannel = msg.member.voiceChannel;
//     if (!voiceChannel) return msg.channel.send('Musisz być na kanale głosowym!');
//     const permissions = voiceChannel.permissionsFor(msg.client.user);
//     if (!permissions.has('CONNECT')) {
//       return msg.channel.send(':x: Nie mogę dołaczyć na kanał głosowy!');
//     }
//     if (!permissions.has('SPEAK')) {
//       return msg.channel.send(':microphone: Nie moge rozmawiać na kanale głosowym!');
//     }

//     if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
//       const playlist = await youtube.getPlaylist(url);
//       const videos = await playlist.getVideos();
//       for (const video of Object.values(videos)) {
//         const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
//         await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
//       }
//       return msg.channel.send(new RichEmbed().setTitle(`Playlista `).setDescription(`**${playlist.title}** została dodana do playlisty!`).setFooter("Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//     } else {
//       try {
//         var video = await youtube.getVideo(url);
//       } catch (error) {
//         try {
//           var videos = await youtube.searchVideos(searchString, 10);
//           let index = 0;
//           msg.channel.send(new RichEmbed().setTitle(`Wybierz piosenke wybierajac numer od 1 do 10:`)
//           .setDescription(videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n'))
//           .setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//           // eslint-disable-next-line max-depth
//           try {
//             var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
//               maxMatches: 1,
//               time: 10000,
//               errors: ['time']
//             });
//           } catch (err) {
//             console.error(err);
//             return msg.channel.send('Brak lub nieprawidłowa odpowiedź.');
//           }
//           const videoIndex = parseInt(response.first().content);
//           var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
//         } catch (err) {
//           console.error(err);
//           return msg.channel.send('🆘 Nie mogłem uzyskać wyników.');
//         }
//       }
//       return handleVideo(video, msg, voiceChannel);
//     }
//   } else if (command === 'skip') {
//     if (!msg.member.voiceChannel) return msg.channel.send(':x: Nie jesteś na kanale głosowym!');
//     if (!serverQueue) return msg.channel.send('Nie ma niczego co moge pominąć.');
//     msg.channel.send(new RichEmbed().setDescription(":arrow_right: Pominięto!").setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'))
//     serverQueue.connection.dispatcher.end();
//     return undefined;
//   } 
//   else if (command === 'voteskip') {
//     if (!msg.member.voiceChannel) return msg.channel.send(':x: Nie jesteś na kanale głosowym!');
//     if (!serverQueue) return msg.channel.send('Nie ma niczego co moge pominąć.');
//     const voiceChannel = msg.member.voiceChannel;
//     if (glosy === 0) {
//       glosy = voiceChannel.members.size/2;
//     }
    
    
    
//     const osoby = voiceChannel.members.size/2;
    
//     msg.channel.send(new RichEmbed().setDescription(":arrow_right: Pominięto!").setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'))
//     serverQueue.connection.dispatcher.end();
//     return undefined;
//   }
//    else if (command === 'stop') {
//     if (!msg.member.voiceChannel) return msg.channel.send(':x: Nie jesteś na kanale głosowym!');
//     if (!serverQueue) return msg.channel.send('Nie ma niczego co moge zatrzymać');
//     serverQueue.songs = [];
//     serverQueue.connection.dispatcher.end();
//     return undefined;
//   } else if (command === 'volume') {
//     if(args[1] > 10) {
//       return msg.channel.send("MAXIMUM 10")
//     }
//     if (!msg.member.voiceChannel) return msg.channel.send(':x: Nie jesteś na kanale głosowym!');
//     if (!serverQueue) return msg.channel.send('Nic nie otwarzam.');
//     if (!args[1]) return msg.channel.send(new RichEmbed().setDescription(`:loud_sound: Aktualna głośność to: **${serverQueue.volume}**`).setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//     serverQueue.volume = args[1];
//     serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
//     return msg.channel.send(new RichEmbed().setDescription(`:loud_sound: Ustawiłem głośność na: **${args[1]}**`).setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//   } else if (command === 'np') {
//     if (!serverQueue) return msg.channel.send('Nic nie odtwarzam.');
//     return msg.channel.send(new RichEmbed().setDescription(`🎶 Aktualnie gram: **${serverQueue.songs[0].title}**`).setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//   } else if (command === 'queue') {
//     if (!serverQueue) return msg.channel.send('Nic nie gram.');
//     return msg.channel.send(new RichEmbed().setTitle(`Kolejka piosenek:`)
// .setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')} + \n\nAktualnie gram: ${serverQueue.songs[0].title}`)
// .setFooter("Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//   } else if (command === 'pause') {
//     if (serverQueue && serverQueue.playing) {
//       serverQueue.playing = false;
//       serverQueue.connection.dispatcher.pause();
//       return msg.channel.send(new RichEmbed().setDescription('⏸ Zatrzymałem muzyke').setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//     }
//     return msg.channel.send('Nic nie odtwarzam.');
//   } else if (command === 'resume') {
//     if (serverQueue && !serverQueue.playing) {
//       serverQueue.playing = true;
//       serverQueue.connection.dispatcher.resume();
//       return msg.channel.send(new RichEmbed().setDescription('▶ Właczyłem muzyke!').setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//     }
//     return msg.channel.send('Nic nie odtwarzam.');
//   }

//   return undefined;
// });

// async function handleVideo(video, msg, voiceChannel, playlist = false) {
//   const serverQueue = queue.get(msg.guild.id);
//   console.log(video);
//   const song = {
//     id: video.id,
//     title: Util.escapeMarkdown(video.title),
//     url: `https://www.youtube.com/watch?v=${video.id}`
//   };
//   if (!serverQueue) {
//     const queueConstruct = {
//       textChannel: msg.channel,
//       voiceChannel: voiceChannel,
//       connection: null,
//       songs: [],
//       volume: 5,
//       playing: true
//     };
//     queue.set(msg.guild.id, queueConstruct);

//     queueConstruct.songs.push(song);

//     try {
//       var connection = await voiceChannel.join();
//       queueConstruct.connection = connection;
//       play(msg.guild, queueConstruct.songs[0]);
//     } catch (error) {
//       console.error(`I could not join the voice channel: ${error}`);
//       queue.delete(msg.guild.id);
//       return msg.channel.send(`Nie mogę dołaczyć do kanału: ${error}`);
//     }
//   } else {
//     serverQueue.songs.push(song);
//     console.log(serverQueue.songs);
//     if (playlist) return undefined;
//     else return msg.channel.send(new RichEmbed().setDescription(`✅ **${song.title}** została dodana do kolejki!`).setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
//   }
//   return undefined;
// }

// function play(guild, song) {
//   const serverQueue = queue.get(guild.id);

//   if (!song) {
//     serverQueue.voiceChannel.leave();
//     queue.delete(guild.id);
//     return;
//   }
//   console.log(serverQueue.songs);

//   const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
//     .on('end', reason => {
//       if (reason === 'Strumień nie generuje wystarczająco szybko.') console.log('Song ended.');
//       else console.log(reason);
//       serverQueue.songs.shift();
//       play(guild, serverQueue.songs[0]);
//     })
//     .on('error', error => console.error(error));
//   dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

//   serverQueue.textChannel.send(new RichEmbed().setDescription(`🎶 Rozpoczynam odtwarzać: **${song.title}**`).setFooter("MIT LICENCE Copyright (c) 2017 iCrawl").setColor('#00CED1'));
// }



//const express = require("express");
//const app = express();

//app.get("/info", (req, res) => {
//res.send({
 // "xd": "xd"
//})

//});
//app.listen(7777)
client.login("NTQwOTUxODY3MjMzMDA5NjY2.XL27wg.lNuVZ22HlVquu6gZVZtlZEfxQYQ")



var express  = require('express')
  , session  = require('express-session')
  , passport = require('passport')
  , path = require('path')
var Strategy = require('./bib/strategy');
var app = express();
const sesja = require("express-session");
const Zapisywanie = require("level-session-store")(sesja);

  app.use(express.static('public')) 
const dataDir = path.resolve(`${process.cwd()}${path.sep}dashboard`);
app.engine("html", require("ejs").renderFile);
const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      db: db,
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
  };
  app.set('view engine', 'ejs');  
app.use("/public", express.static(path.resolve(`${dataDir}${path.sep}public`)));
  var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//  app.use(sesja({
//    store: new Zapisywanie("./data/sesje/"),
//    secret: "NIE-PODAWAC-TEGO-SEKRET-TO-JEST-XDD",
//  }));


var scopes = ['identify', 'email', /* 'connections', (it is currently broken) */ 'guilds', 'guilds.join'];

passport.use(new Strategy({
    clientID: '540951867233009666',
    clientSecret: 'EXNZiycQZS-kdSuJMFsQComiOgZwp-nn',
    callbackURL: 'http://rkubapl.malopolska.pl:8888/callback',
    scope: scopes
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));

app.use(session({
    secret: 'keyboardgfgfdgfdgdfgdfgdfcat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/cal', passport.authenticate('discord', { scope: scopes }), function(req, res) {});
app.get('/callback',
    passport.authenticate('discord', { failureRedirect: '/callback' }), function(req, res) { res.redirect('/dashboard') } // auth success
);
app.get('/', (req, res) => {
res.render('index', {client: client, user: req.user});
});
app.get('/upload', checkAuth, (req, res) => {
  if(req.user.id === "494017032283619329") {
res.render('uploader', {client: client, user: req.user});
  }
});
var http = require('http');
var formidable = require('formidable');
var randomstring = require("randomstring");

app.post('/wyslij', checkAuth, (req, res) => {
  if(req.user.id === "494017032283619329") {
    const xd = randomstring.generate(7);
 var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = './public/cdn/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
       res.render('zdj', {zdjecie: files.filetoupload.name})
      });
    });
  }
});
app.get('/zdjecie/:zdj', (req, res) => {
res.render("zdj", {zdjecie: req.params.zdj})

});

// app.get('/informacje&id=KubaComm', (req, res) => {
// res.json({server: client.guilds.size})

// });
// app.get('/serwery', (req, res) => {
// res.render('serwer')

// });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
app.get('/dashboard', checkAuth, function(req, res) {
 const perms = Discord.EvaluatedPermissions;
res.render('dash', {user: req.user, client: client, perms})
console.log(req.user)
});
app.get("/dashboard/:gid", checkAuth, function(req, res) {
    const guild = client.guilds.get(req.params.gid);
    if (!guild) return res.redirect("/info")
    if(!guild.member(req.user.id)) return res.redirect("/info");
    if(!guild.member(req.user.id).permissions.has("MANAGE_GUILD")) return res.redirect("/info"); 
  res.render("manage", {client: client, user: req.user, guild: guild, db: db})
});
app.get("/profil", checkAuth, function(req, res) {
  res.render("profil", {client: client, user: req.user, db: db})
});
app.post("/dashboard/:gid/ustaw", checkAuth, function(req, res) {
    const guild = client.guilds.get(req.params.gid);
    if (!guild) return res.redirect("/info")
    if(!guild.member(req.user.id)) return res.redirect("/info");
    if(!guild.member(req.user.id).permissions.has("MANAGE_GUILD")) return res.redirect("/info"); 

    console.log(req.body);
    if(req.body.jezyk) {
      db.set(req.params.gid + ".language", req.body.jezyk)
    }
    if(req.body.prefix) {
      db.set(req.params.gid + ".prefix", req.body.prefix)
    }
  if(req.body.role) {
      db.set(req.params.gid + ".role", req.body.role)
    }
    if(req.body.powKanal) {
      db.set(req.params.gid + ".powKanal", req.body.powKanal)
    }
    if(req.body.byeKanal) {
      db.set(req.params.gid + ".byeKanal", req.body.byeKanal)
    }
    if(req.body.powTekst) {
      db.set(req.params.gid + ".powTekst", req.body.powTekst)
    }
    if(req.body.byeTekst) {
      db.set(req.params.gid + ".byeTekst", req.body.byeTekst)
    }
    if(req.body.modlog) {
      db.set(req.params.gid + ".mod-log", req.body.modlog)
    }
    if(req.body.logMessage) {
      db.set(req.params.gid + ".logMessage", req.body.logMessage)
    }
    if(req.body.blokada) {
      db.set(req.params.gid + ".blokada", req.body.blokada)
    }
    if(req.body.wiadon) {
      db.set(req.params.gid + ".wiadon", 'true')
   console.log("tak")
        } else {
          console.log("nie")
    db.set(req.params.gid + ".wiadon", 'false')  
        }
        if(req.body.embon) {
      db.set(req.params.gid + ".embon", 'true')
   console.log("tak")
        } else {
          console.log("nie")
    db.set(req.params.gid + ".embon", 'false')  
        }
        if(req.body.pwon) {
      db.set(req.params.gid + ".pwon", 'true')
   console.log("tak")
        } else {
          console.log("nie")
    db.set(req.params.gid + ".pwon", 'false')  
        }
    if(req.body.kolor) {
      db.set(req.params.gid + ".kolor", req.body.kolor);
    }
    if(req.body.embTekst) {
      db.set(req.params.gid + ".embTekst", req.body.embTekst)
    }
    if(req.body.embNag) {
      db.set(req.params.gid + ".embNag", req.body.embNag)
    }
    if(req.body.embFoot) {
      db.set(req.params.gid + ".embFoot", req.body.embFoot)
    }
    if(req.body.pwTekst) {
      db.set(req.params.gid + ".pwTekst", req.body.pwTekst)
    }
    
  res.render("manage", {client: client, user: req.user, guild: guild, db: db})
});
app.get("/support", (req, res) =>{
res.render("support", {client: client, user: req.user})

});
app.get("/wykres", (req, res) =>{
res.render("wykres", {client: client, user: req.user})

});
app.post("/profil/ustaw", checkAuth, function(req, res) {
   
    console.log(req.body);
    if(req.body.imie) {
      db.set(req.user.id + "imie", req.body.imie)
    }
     else {
      db.set(req.user.id + "imie", "-")
    }
    if(req.body.facebook) {
      db.set(req.user.id + "facebook", req.body.facebook)
    } 
    else {
      db.set(req.user.id + "facebook", "-")
    }
  if(req.body.tiktok) {
      db.set(req.user.id + "tiktok", req.body.tiktok)
    } 
    else {
      db.set(req.user.id + "tiktok", "-")
    }
    if(req.body.spotify) {
      db.set(req.user.id + "spotify", req.body.spotify)
    }
     else {
      db.set(req.user.id + "spotify", "-")
    }
    if(req.body.snapchat) {
      db.set(req.user.id + "snapchat", req.body.snapchat)
    } 
    else {
      db.set(req.user.id + "snapchat", "-")
    }
    if(req.body.instagram) {
      db.set(req.user.id + "instagram", req.body.instagram)
    }
     else {
      db.set(req.user.id + "instagram", "-")
    }
    if(req.body.pupil) {
      db.set(req.user.id + "pupil", req.body.pupil)
    } 
    else {
      db.set(req.user.id + "pupil", "-")
    }
    if(req.body.nation) {
      db.set(req.user.id + "nation", req.body.nation)
    } 
    else {
      db.set(req.user.id + "nation", "-")
    }
    

    res.render("profil", {client: client, user: req.user, db: db})

  
});


function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/callback')
}


app.listen(8888, function (err) {
    if (err) return console.log(err)
    console.log('Listening at http://localhost:8888/')
})
