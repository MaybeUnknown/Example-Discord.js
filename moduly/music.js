module.exports = async (client) => {
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
};