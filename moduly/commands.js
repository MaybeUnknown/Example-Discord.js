module.exports = async (client) => {
  const fs = require('fs');
  
  fs.readdir('./commands/', (err, files) => {  
  
    let cmds = files.filter(f => f.split('.').pop() === 'js');
    
    if(cmds.lenght <= 0) { 
      client.log.log("Nie znalazłem komend:(");
      return console.log('Nie znalazłem komend:(');
    }
    cmds.forEach((f, i) => { 
      try {
        const command = require(`../commands/${f}`); 
        console.log(`${i + 1}: ${f} została załadowana!`); 
        client.log.log(`${i + 1}: ${f} została załadowana!`);
        client.commands.set(command.help.name, command); 
        if(command.help.aliases) command.help.aliases.forEach(a => {
          client.aliases.set(a, command.help.name);
        });
      } catch (e) {
        client.cerrors.push({
          cmd: f,
          error: e
        });
        console.log(`Komenda ${f} ma błąd i nie została załadowana - ${e}`);
        client.log.error(`Komenda ${f} ma błąd i nie została załadowana - ${e}`)
      }
    }); 
  }); 
};