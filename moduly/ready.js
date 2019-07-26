module.exports = async (client) => {
    client.on("ready",async () => {
      client.log.log(client.user.username+' jest już aktywny! ');
      console.log(client.user.username+' jest już aktywny! ');
      client.user.setActivity("Dzień dobry!") 
      setInterval(function(){
        if(require('quick.db').fetch("status") === false) return;
        const statusy = ["Serwery " + client.guilds.size, "Miłego dnia!", "Zaproś bota na swój serwer!", "Moj domyślny prefix to c!"];
        const los = Math.floor(Math.random() * statusy.length + 1);
        client.user.setActivity(statusy[los])
      }, 7000)
      }); 
    };
    