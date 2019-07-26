const Discord = require('discord.js');
const client = new Discord.Client();
client.developers = require('./configxd.js').DEVELOPERS;
client.gdevs = require('./configxd.js').GDEVS;
client.prog = require('./configxd.js').PROG;
client.head = require('./configxd.js').HEAD;
client.support = require('./configxd.js').SUPPORT;
client.commands = new Discord.Collection();
client.cerrors = [];
client.aliases = new Discord.Collection();
client.queue = new Map();

const log4js = require('log4js');
log4js.configure({
  appenders: { logs: { type: 'file', filename: 'logs.log' } },
  categories: { default: { appenders: ['logs'], level: 'all' } }
});
client.log = log4js.getLogger("logs");

process.on('uncaughtException', function(err) {
  client.log.fatal(err);
})
process.on('unhandledRejection', (reason, promise) => {
  client.log.error('Promise:', promise, 'wypluł error z powodem:', reason);
});
process.on('warning', (warning) => {
  client.log.warn(warning.name, "\n", warning.message, "\n", warning.stack);
});
process.on('multipleResolves', (type, promise, reason) => {
  client.log.warn(type, promise, reason);
});

const db = require('quick.db');
const { TOKEN, GOOGLE_API_KEY } = require('./configxd.js');
const Util = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const { RichEmbed } = require("discord.js")
const queue = new Map();
const DBL = require("dblapi.js");

const { Pool, Client } = require('pg')
const sql = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pt5sx6hkWm8LBbNs',
    port: 5432,
  })
sql.connect().then("Połaczono z bazą danych!")

client.sql = sql;

// Tak ściągnięte z guidebota
// ale mega przydatne
client.awaitReply = async (msg, question, limit = 60000) => {
  const filter = m => m.author.id === msg.author.id;
  await msg.channel.send(question);
  try {
    const collected = await msg.channel.awaitMessages({ max: 1, time: limit, errors: ["time"] });
    return collected.first().content;
  } catch (e) {
    return false;
  }
};


//Using to website
client.devs = ["494017032283619329", "566521151459819530"]; 
client.prog = ["305060312971870208"]; 
client.head = ["402552765370597376", "425689994061938708", "476415433340354561"]; 
client.support = ["493063414671998989", "540242757340626944", "344179692783403018"];
client.supp = ["457815071259623427", "524984339231014923", "324985979352121365"] 
client.tlumacze = ["546374340711546893", "429585324826558464", "527445019548844075"]
client.tlu = ["304952853804613633", "320471581547560964", "550751055433039872"];

// //DBL
// const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0MDk1MTg2NzIzMzAwOTY2NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTU1NjgyMjIzfQ.OsBGJtCRU5kYSY_GYa8xnrSH_7bn2TmYJu7-agcj2o8', client);

// dbl.on('posted', () => {
//   console.log('DBL: Server count posted!');
// });

// dbl.on('error', e => {-
//  console.log(`Oops! ${e}`);
// });

//Token bota
client.login("NTk3MDMxOTg2Njk0OTc5NTk0.XShgjg.qksDXIM2VhV0R848N3mULrThE-8");


// Command handler
require("./moduly/commands.js")(client);

//Bot statistics and event ready
require("./moduly/ready.js")(client);

//Events guildCreate and guildRemove
require("./moduly/guild.js")(client);

//event message 
require("./moduly/message.js")(client);

//events guildMemberAdd and guildMemberRemove
require("./moduly/member.js")(client);

//Bot logs (messageRemove and messageUpdate)
require("./moduly/messageLogs.js")(client);

//Music 
//require("moduly/music.js")(client);

//Dashboard
require("./moduly/dashboard.js")(client);