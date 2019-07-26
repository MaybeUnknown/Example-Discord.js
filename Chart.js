if(db.fetch(guild.id + "cbot") !== "null") { 

  }  
  if(db.fetch(guild.id + "cbot") === "null" || !db.fetch(guild.id + "cbot")) { 
                                         
} 
 client.guilds.get(guild.id).channels.forEach(kanal => {
    if(kanal.type !== "text") return;
    if(kanal.name === db.fetch(guild.id + "cbot") || null) return; 
if(kanal.permissionsFor(guild.client.user).has("SEND_MESSAGES")) { 
} else { 
}});