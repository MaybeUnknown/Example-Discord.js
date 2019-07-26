var cleverbot = require("cleverbot.io");
var bot = new cleverbot('hnIFbFEXH1KXXSDz', 'yQNQ5BWdKibE3m7svXBwZ5KMIkt20grL');
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
//.
module.exports = async (client) => {
  const db = require('quick.db');

  client.on('message', async message => {
    if (message.author.bot) return;
    
    if (message.channel.id === '495169245345480707') {
    if (message.content.startsWith('wer')) {
    if (message.author.id === '494017032283619329' || message.author.id === '219067402174988290') {
    //let role = message.guild.roles.find("Zweryfikowany/a", "");
    let role = message.guild.roles.get("495218312121286676");
    let role2 = message.guild.roles.get("495280844542443543");
     
    let member = message.mentions.members.first();
    message.delete();
    member.addRole(role)
    member.addRole(role2);
message.channel.send("OK zweryfikowano " + member).then(m => setInterval(function(){ m.delete() }, 5000));
    }}}

    // if (db.fetch(message.channel.id) === "on") {
    //   if(message.content == "end") {
    //     message.channel.send(new RichEmbed().setTitle("Zakończono gre!").setDescription("Wygrał " + db.fetch(message.channel.id + "autor") || "nikt" + " z " + db.set(message.channel.id + "result") || "?" + " stopniami celcjusza!"))
    //     db.set(message.channel.id + "result", 0);
    //     db.set(message.channel.id + "aut", "nikt");
    //     db.set(message.channel.id, "off");
    //     return db.set(message.channel.id + "czas", 0);
        
    //   }
    //   if(message.content === db.fetch(message.guild.id + "prefix") + "pgra") return;
    //   var weather = require('weather-js');
    //   weather.find({ search: message.content, degreeType: 'C' }, function (err, result) {  
    //   const temp = db.fetch(message.channel.id + "result") || 0;

    //   if (err) {
    //     return message.channel.send(new RichEmbed().setTitle("Podane miejsce nie istnieje!"))
    //   }
    //   console.log(result[0]);
    //   const embed = new RichEmbed().setTitle(result[0].location.name).setColor("RANDOM").setDescription("Pogooda w tym miejscu: " + result[0].current.temperature + " stopni Celcjusza");
    //   if (result[0].current.temperature > temp) {
    //     embed.addField("Nowe najcieplejsze miejsce!")
    //     db.set(message.channel.id + "result", result[0].current.temperature);
    //     db.set(message.channel.id + "aut", message.author.id);
    //     db.set(message.channel.id + "czas", Date.now());
    //   }
    // });
    // }

    if (message.channel.id === "588044203871961088") {
      message.delete();
      let logi = client.channels.get('588046793216884777');
      logi.send(new Discord.RichEmbed().setColor("#006400").setAuthor(message.author.tag, message.author.avatarURL).setDescription(message.content).setFooter("Weryfikacja").setTimestamp());
      let role = message.guild.roles.get("588042601857548299");
      if (message.member.roles.has(role.id)) {
        const embed2 = new Discord.RichEmbed().setColor("#008000").setTitle(message.author.tag + " już jest zweryfikowany!");
        const w = await message.channel.send(embed2);
        logi.send(embed2);
        setTimeout(function () {
          w.delete()
        }, 20000);
        return message.author.send(embed2)
      }

      if (message.content.includes("discord.gg") || message.content.includes("http://") || message.content.includes("https://")) {
        if (db.fetch(message.author.id + ".weryf") == 2) {
          db.subtract(message.author.id + ".weryf", 2);
        }

        db.add(message.author.id + ".weryf", 1);
        const embed = new Discord.RichEmbed().setColor("#00FFFF").setTitle(message.author.tag + ", na kanale weryfikacyjnym nie można wysyłać linków ani wysyłać zaproszeń do serwerów Discord!");
        logi.send(embed);
        const w = await message.channel.send(embed.addField("ID", message.author.id));
        setTimeout(function () {
          w.delete()
        }, 20000);
        if (db.fetch(message.author.id + ".weryf") === 1) {
          message.author.send(embed.setDescription("Zaproszenie na serwer: https://discord.gg/Xjy66WP").setFooter("Liczba weryfikacyjnych warnów: 1. 2 weryfikacyjne warny = ban."));
          return message.member.kick();
        }
        if (db.fetch(message.author.id + ".weryf") === 2) {
          message.author.send(embed.setFooter("Liczba weryfikacyjnych warnów: 2. Zostaniesz zbanowany!"));
          return message.member.ban();
        }
      }

      if (message.author.createdAt > new Date(new Date().setDate(new Date().getDate() - 7))) {
        const embed = new Discord.RichEmbed().setColor("#9ACD32").setTitle(message.author.tag + " posiada konto, które nie posiada 7 dni od jego stworzenia!");
        logi.send(embed);
        const w = await message.channel.send(embed);
        setTimeout(function () {
          w.delete()
        }, 20000);
        return message.author.send(embed)
      }

      const embed2 = new Discord.RichEmbed().setColor("#008000").setTitle(message.author.tag + " został pomyślnie zweryfikowany!");
      const w = await message.channel.send(embed2);
      setTimeout(function () {
        w.delete()
      }, 20000);
      message.member.addRole(role);
      logi.send(embed2);
      client.channels.get("588044203871961088").setTopic("Zweryfikowano " + message.guild.roles.get('588042601857548299').members.count || "?" + " osób.\nOstatnia zweryfikowana osoba: " + message.author.tag || "?");
      return message.author.send(embed2)
    }

    if (message.channel.id === (db.fetch(message.guild.id + "cbot") || null)) {
      bot.setNick("jacobbot"); //Ustawianie nicku żeby działało
      message.channel.startTyping(); //Bot zaczyna pisac
      const wiad = await message.channel.send(":thinking: Działam za pomocą **http://cleverbot.io/**"); //Oczekiwanie na odpowiedź API
      bot.ask(message.content, function (err, response) { //Prośba do API
        if (err) return;
        //Edytowanie wiadomości
        wiad.edit(new Discord.RichEmbed().setColor("RANDOM").setDescription(response).setAuthor(message.author.username, message.author.avatarURL).setFooter("Administracja i właściciele bota nie odpowiadają za cleverbota").setTimestamp());
      });
      return message.channel.stopTyping(); //Bot przestaje pisać
    }
    if (message.channel.id === (db.fetch(message.guild.id + "ping") || null)) {
            if(message.content !== "ping" && message.content !== "pong")  return message.delete();
            if(!db.fetch(db.fetch(message.guild.id + "ping") + ".lastuser")) {
                message.delete();
                message.channel.send("Ok więc ja zacznę. Kolejna osoba musi napisać pong. Moje wiadomości możecie usunąć.");
                message.channel.send("ping");
                db.set(db.fetch(message.guild.id + "ping") + ".lastuser", message.author.id);
                db.set(db.fetch(message.guild.id + "ping") + ".lastvalue", message.content);
            }
            if(message.content === db.fetch(db.fetch(message.guild.id + "ping") + ".lastvalue")) return message.delete();
            if(message.author.id === db.fetch(db.fetch(message.guild.id + "ping") + ".lastuser")) return message.delete();
            db.set(db.fetch(message.guild.id + "ping") + ".lastuser", message.author.id);
            db.set(db.fetch(message.guild.id + "ping") + ".lastvalue", message.content);
            if(message.content === "ping") return message.channel.setTopic("Następne jest pong");
            if(message.content === "pong") return message.channel.setTopic("Następne jest ping");
            
        }
        // if (message.channel.id === (db.fetch(message.guild.id + "licz") || null)) {
        //     if(!db.fetch(message.guild.id + "licz" + ".liczba")) {
        //         message.delete();
        //         db.set(message.guild.id + ".lastuser", message.author.id);
        //         db.add(message.guild.id + "licz" + "liczba", 1);
        //         return;
        //     }
        // if(db.fetch(message.guild.id + "liczTyp") === "kolejka" && db.fetch(message.guild.id = ".lastuser") === message.author.id) return;
        // const liczba = db.fetch(message.guild.id + "licz" + "liczba") + 1;
        // const messageArray = message.content.split(/\s+/g);
        // if(messageArray[0] === liczba) {
        //     db.add(message.guild.id + "licz" + "liczba", 1);
        //     db.set(message.guild.id + ".lastuser", message.author.id);
        //     message.channel.setTopic("Następna liczba = " + (liczba + 1));
        // }
        // }
        
    //Antyreklama
    if (message.content.includes("discord.gg") && db.fetch(message.guild.id + ".antyinvite") === "true" && !message.member.hasPermission("MANAGE_GUILD")) {
      message.delete();
      message.channel.send("Wysyłanie zaproszeń zostało wyłaczone na tym serwerze")
    }

    // Antyprzekleństwa
    // Trzeba to dodać do configa 
    // (włączenie/wyłączenie a później możliwość wpisania dodatkowych przekleństw do flitra)
    
    let przeklenstwa = [
      "kurwa",
      "pizda",
      "chuj",
      "jebać",
      "jebane",
      "wkurw"
    ];

    if(db.fetch(message.guild.id + ".antyprzeklenstwa") && db.fetch(message.guild.id + ".antyprzeklenstwa") === "true" && !message.member.hasPermission("MANAGE_GUILD") && !message.channel.nsfw) {
      if(db.fetch(message.guild.id + ".customprzeklenstwa") && db.fetch(message.guild.id + ".customprzeklenstwa") !== "null") {
        let customprzeklenstwa = db.fetch(message.guild.id + ".customprzeklenstwa").split(",");
        if(customprzeklenstwa.length>0) {
          przeklenstwa = przeklenstwa.concat(customprzeklenstwa);
        }
      }
      przeklenstwa.forEach(p=>{
        if(message.content.toLowerCase().includes(p)) {
          message.delete();
          message.reply("Nie przeklinaj.");
          //trzeba jescze funkcje zrobic funkcje ze sprawdza czy uzytkownik ma iles warnow na wyrzucenie badz banowanie
        }
      })
    }
    

    // Antycaps [WIP, może nie działać]
    // Trzeba dodać do panelu
    if(db.fetch(message.guild.id + ".antycaps") && db.fetch(message.guild.id + ".antycaps") === "true" && !message.member.hasPermission("MANAGE_GUILD") && !message.channel.nsfw) {
      let iloscZnakow = 15;
      const min = !db.fetch(message.guild.id + ".procentcaps")||db.fetch(message.guild.id + ".procentcaps")==="null" ? 70 : db.fetch(message.guild.id + ".procentcaps")
      if(message.content.length >= iloscZnakow) {
        let high = "QWERTYUIOPASDFGHJKLZXCVBNM";
        let amount = 0;
        message.content.split("").forEach(letter => {
          if(high.includes(letter)) amount++;
        });
        let precent = (amount / message.content.length) * 100;
        if(precent >= min) {
          message.delete();
          message.reply("Proszę nie pisać dużymi literami.");
          //trzeba jeszcze funkcje zrobic funkcje ze sprawdza czy uzytkownik ma iles warnow na wyrzucenie badz banowanie
        }
      }
    }

    //Ustawianie jezyku
    const jezyk = db.fetch(message.guild.id + ".language") || "eng";

    if (jezyk === "pl") {
      message.translate = require('../Tlumaczenia/polish.json');
    }
    if (jezyk === "eng") {
      message.translate = require('../Tlumaczenia/english.json');
    }


    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) && message.content.match(prefixMention)[0] || db.fetch(message.guild.id + ".prefix") || "c!"
    const messageArray = message.content.split(/\s+/g);
    const command = messageArray[0]; // Command with prefix
    const args = messageArray.slice(1); // Arguments given to command
    let cmd = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length))); // We need to get command from our collection

    //Ogłoszenia w bocie
    if (message.channel.id === "558298163618906128") {
      client.db.set("ogl", message.content);
      client.db.set("ogl.autorid", message.author.id);
    }

    //Odpowiedź przy pingu
    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
      message.channel.send("Witam. Tu CommunityBot. Mój prefix to jest `" + prefix + "`")
    }
    function sekundy(czas) {
        if(czas == 0) {
            return "sekund"
        }
        if(czas == 1) {
            return "sekundę"
        }
        if(czas > 1 && czas < 5) {
            return "sekundy";
        }
        if(czas >= 5) {
            return "sekund"
        }
    }
    if (command.startsWith(prefix)) { //Jeśli wiadomość jest z prefixem
      if (db.fetch(message.author.id + ".black") === true) { //Blacklista
        return message.channel.send("Zostałeś zblacklistowany!")
      } try {
        if (cmd) {
            const czas = Math.round((db.fetch(message.author.id + "k" + cmd) - Date.now())/1000);
            if(Date.now() < db.fetch(message.author.id + "k" + cmd)) {
                try {
                    const embed2 = new RichEmbed().setTitle("Niedawno użyłeś komendy!").setDescription("Hola, hola! Nie tak szybko!\nTej komendy możesz używać co " +  client.commands.get(cmd).timeout + ` ${sekundy(client.commands.get(cmd).timeout)}\nNastepny raz możesz jej użyć za ok. ` + czas + ` ${sekundy(czas)}`).setColor("#00FFFF")
                    await message.channel.send(embed2);
                    return;
                } catch(e) {
                    console.log(e);
                   const embed2 = new RichEmbed().setTitle("Niedawno użyłeś komendy!").setDescription("Hola, hola! Nie tak szybko!\nTej komendy możesz używać co " +  3 + " sekundy\nNastepny raz możesz jej użyć za ok. " + czas + ` ${sekundy(czas)}`).setColor("#00FFFF")
                   message.channel.send(embed2);
                   return; 
                }
            }
            try {
                await db.set(message.author.id  + "k" + cmd,  Date.now() + client.commands.get(cmd).timeout * 1000);
            } catch(e) {
                console.log(e);
                db.set(message.author.id  + "k" + cmd,  Date.now() + 3 * 1000);
            }
            await cmd.run(client, message, args); // If cmd object isn't null, execute command code
        }
      } catch (e) {
        client.log.error("--------\nWystąpił bład przy komendzie ", e);
        console.log("--------\nWystąpił bład przy komendzie ", e);
        message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setTitle("Wystapil blad.").setDescription(e));
      }
      client.log.log(`Logi: ${message.author.username}#${message.author.discriminator} użył komendy '${command}' on ${message.guild.name}`);
      console.log(`Logi: ${message.author.username}#${message.author.discriminator} użył komendy '${command}' on ${message.guild.name}`); // We can log it to console
    }
     // client.channels.get("598164537694486528").send(new Discord.RichEmbed().setColor("RANDOM")
       //                                              .setAuthor(message.author.username, message.author.avatarURL)
         //                                            .setTitle(`Logi komend CommunityBot`)
           //                                          .addField(`Komenda:`, cmd.help.name, true)
             //                                        .addField(`Serwer: `, message.guild.name, true)
               //                                      .addField(`Kanał:`, message.channel.name, true)
                 //                                    .addField(`Argument:`, args.join(" ")||'_Brak_', true)
                   //                                  .setFooter(`Logi komend Communitybota`)
                     //                                .setTimestamp())
     
  });
};