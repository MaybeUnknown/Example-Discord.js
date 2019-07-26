exports.run = (client, message, args) => {
     const db = require("quick.db");
     const { RichEmbed } = require("discord.js");
     const moment = require("moment");
     
     if(db.get(message.author.id + ".permlvl") < 7 || !db.has(message.author.id + ".permlvl")) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Nie masz uprawnień do użycia tej komendy.\n**Wymagany poziom uprawnień to `7` (`Programista`).**"));
     if(!args[0]) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Łoo panie(i), gdzie argumenty??\n**Poprawne użycie:** `blacklist <add/remove/info> <id użytkownika>`."));
     if(args[0] !== "add" && args[0] !== "remove" && args[0] !== "info") return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Pierwszy argument nie jest poprawny, musisz podać któryś z tych: `add`, `remove`, `info`.\n**Poprawne użycie:** `blacklist <add/remove/info> <id użytkownika>`."));
     if(args[0] === "add"){
        const bmember = args[1];
        const breason = args.slice(2).join(" ");
        if(db.get(bmember + ".black") !== false) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Ten użytkownik jest już zablokowany.\n**Musisz podać poprawnego użytkownika, który nie jest zablokowany."));
        if(!args[1] && !bmember) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Musisz uzupełnić komendę w argument 2: `id użytkownika`.\n**Poprawne użycie:** `blacklist add <id użytkownika>`."));
        if(!client.fetchUser(bmember)) {
            return message.channel.send("Nie odnaleziono użytkownika");
        } else {
            const addedrEmb = new RichEmbed()
            .setColor("7c9aea")
            .setAuthor(`Blacklista`)
            .setDescription("Nowy użytkownik otrzymał blokadę na bota **CommunityBot**.")
            .addField("Zablokowany(-a):", `${client.users.get(bmember).tag} (**${client.users.get(bmember).id}**)`||"Brak informacji")
            .addField("Admin blokujący:", `${message.author.tag} (${message.author.id})`||"Brak informacji")
            .addField("Powód:", breason||"Brak informacji")
            .setFooter("CommunityBot 2019")
            const addedEmb = new RichEmbed()
            .setColor("7c9aea")
            .setAuthor(`Blacklista`)
            .setDescription("Nowy użytkownik otrzymał blokadę na bota **CommunityBot**.")
            .addField("Zablokowany(-a):", `${client.users.get(bmember).tag} (**${client.users.get(bmember).id}**)`||"Brak informacji")
            .addField("Admin blokujący:", `${message.author.tag} (${message.author.id})`||"Nwm")
            .addField("Powód:", "Brak powodu"||"Brak informacji")
            .setFooter("CommunityBot 2019")
            if(!args[2]){
                //if(db.has(bmember + ".blhistory.numer") !== true){
                    //db.set(bmember + ".blhistory", { numer: 0, data: [`${moment().format('MMMM Do YYYY, h:mm:ss a')}`], reason: `${breason}` });
                //} else {
                db.set(bmember + ".black", true)
                db.set(bmember + ".blackd", `${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
                //db.push("blmembers", bmember)
                //db.push(bmember + ".blhistory", "")
                message.channel.send(new RichEmbed().setColor("6bd166").setAuthor("Blokada aktywowana").setDescription(`Użytkownik **${client.users.get(bmember).tag}** otrzymał blokadę na bota **CommunityBot** i nie może już korzystać z jego funkcji.\n**Wszelkie informacje o blokadzie wysłano na kanał <#594874647044948008>.**`));
                //db.push(bmember + ".blhistory.data", moment().format('MMMM Do YYYY, h:mm:ss a'));
                //db.push(bmember + ".blhistory.reason", breason);
                //db.add(bmember + ".blhistory.numer", 1);
                //db.add("blnumb", 1);
                client.channels.get("594874647044948008").send(addedEmb);
            } else {
                //if(db.has(bmember + ".blhistory.numer") !== true){
                   // db.set(bmember + ".blhistory", { numer: 0, data: [`${moment().format('MMMM Do YYYY, h:mm:ss a')}`], reason: `${breason}` });
                //} else {
                db.set(bmember + ".black", true)
                db.set(bmember + ".blackd", `${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
                //db.push("blmembers", bmember)
                //db.push(bmember + ".blhistory", "")
                //message.channel.send(new RichEmbed().setColor(red).setAuthor("Blokada aktywowana").setDescription(`Użytkownik **${client.users.get(bmember).tag}** otrzymał blokadę na bota **CommunityBot** i nie może już korzystać z jego funkcji.\n**Wszelkie informacje o blokadzie wysłano na kanał <#594874647044948008>.**`));
                //db.push(bmember + ".blhistory.data", moment().format('MMMM Do YYYY, h:mm:ss a'));
                //db.push(bmember + ".blhistory.reason", breason);
                //db.add(bmember + ".blhistory.numer", 1);
                db.set(bmember + ".blreason", breason)
                message.channel.send(new RichEmbed().setColor("6bd166").setAuthor("Blokada aktywowana").setDescription(`Użytkownik **${client.users.get(bmember).tag}** otrzymał blokadę na bota **CommunityBot** i nie może już korzystać z jego funkcji.\n**Wszelkie informacje o blokadzie wysłano na kanał <#594874647044948008>.**`));
                //db.add(bmember + ".blhistory.numer", 1);
                //db.add("blnumb", 1)
                client.channels.get("594874647044948008").send(addedrEmb);
            }
        }
    }
    if(args[0] === "remove"){
        const bmember = args[1];
        if(db.get(bmember + ".black") !== true) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Ten użytkownik nie jest zablokowany.\n**Musisz podać poprawnego, na którego nadano blokadę, użytkownika."));
        if(!args[1] && !bmember) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Musisz uzupełnić komendę w argument 2: `id użytkownika`.\n**Poprawne użycie:** `blacklist remove <id użytkownika>`."));
        if(!client.fetchUser(bmember)) {
            return message.channel.send("Nie odnaleziono użytkownika");
        } else {
            db.set(bmember + ".black", false);
            db.delete(bmember + ".blreason");
            //db.subtract("blmembers", bmember)
            message.channel.send(new RichEmbed().setColor("a3fa3d").setAuthor("Blokada usunięta").setDescription(`Użytkownik **${client.users.get(bmember).tag}** został odblokowany w bocie **CommunityBot** i znów może korzystać z jego funkcji.`));
        }
    }
    
    if(args[0] === "info"){
        const binfmemb = args[1];
        if(!args[1] && !binfmemb) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Musisz uzupełnić komendę w argument 2: `id użytkownika`.\n**Poprawne użycie:** `blacklist info <id użytkownika>`."));
        if(db.get(binfmemb + ".black") !== true){
            return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Wystąpił Błąd").setDescription("Ten użytkownik nie jest zablokowany.\n**Musisz podać poprawnego, na którego nadano blokadę, użytkownika."));
        } else {
            const infEmb = new RichEmbed()
            .setColor("64c4ec")
            .setAuthor("Informacje o blackliście")
            .setDescription("Szczegółowe informacje o blokadzie na korzystanie bota CommunityBot dla użytkownika.")
            .addField("Zablokowany użytkownik:", "Nazwa: `" + `${client.users.get(binfmemb).username}` + "`\nDyskryminator: " + "#`" + `${client.users.get(binfmemb).discriminator}` + "`\nID: `" + `${client.users.get(binfmemb).id}` + "`\nTag: `" + `${client.users.get(binfmemb).tag}` + "`"||"Brak informacji")
            .addField("Data blokady:", db.get(binfmemb + ".blackd")||"Brak informacji")
            .addField("Powód blokady:", db.get(binfmemb + ".blreason")||"Brak powodu")
            .setFooter("CommunityBot 2019")
            message.channel.send(infEmb);
        }
    }
    
    //if(args[0] === "history"){
        //const bmember = args[1];
        //if(!args[1] && !binfmemb) return message.channel.send("Musisz podac id użytkownika, aby uzyskać historie kar.");
        //if(db.has(bmember + ".blhistory.numer") !== true){
            //return message.channel.send("Historia kar tego użytkownika jest czysta.");
       // } else {
            //message.channel.send(`Data: ${db.get(bmember + ".blhistory.data")}\nPowód: ${db.get(bmember + ".history.reason")}\nLiczba blokowań: ${db.get(bmember + ".history.numer")}`);
        //}
    //}
};

exports.help = {
  name: "blacklist",
  category: "Bot owners",
       description: `
 Pozwala zblacklistować użytkownika
  {prefix}blacklist <add/remove/info> <id>
  `,
    aliases: [],
    permLevel:"Developer Bota"

}