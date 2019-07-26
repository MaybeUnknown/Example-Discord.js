var { RichEmbed } = require("discord.js");
const symbols = {
    numbers: [
      ':zero:',
      ':one:',
      ':two:',
      ':three:',
      ':four:',
      ':five:',
      ':six:',
      ':seven:',
      ':eight:',
      ':nine:'
    ],
    bomb: ':bomb:',
    spoiler: '||'
};

exports.run = (client, message, args) => {
const string = message.translate;
  if(args[0]) {
      if(parseInt(args[0])>14) return message.channel.send(string.mmx);
      if(parseInt(args[1])>14) return message.channel.send(string.mmr);
      if(parseInt(args[2])>8) return message.channel.send(string.mmm);
  }
  let rzedy = parseInt(args[1]) || Math.floor(Math.random()*12)+3;
  let kolumny = parseInt(args[0]) || Math.floor(Math.random()*12)+3;
 
  let plansza = new Array(rzedy);
  let obraz = new Array(rzedy);
  let pole = new Array(rzedy);
  for (let i = 0; i < plansza.length; i++) {
    plansza[i] = new Array(kolumny);
    obraz[i] = new Array(kolumny);
    pole[i] = new Array(kolumny)
  }
  
  function sprawdz(rzad, kolumna) {
    if (kolumna >= 0 && rzad >= 0 && kolumna < kolumny && rzad < rzedy)
      return plansza[rzad][kolumna];
  }
  
  let miny = args[2] || Math.floor(Math.random()*5)+2;
  let pozostalo = miny;
  let output = '';
 
  let ustawione = 0;
  while (ustawione < miny){
    let kolumna = Math.floor(Math.random() * kolumny);
    let rzad = Math.floor(Math.random() * rzedy);
 
    if (plansza[rzad][kolumna] != 'm') {
      plansza[rzad][kolumna] = 'm';
      ustawione++;
    }
  } 
 
  for (let kolumna = 0; kolumna < kolumny; kolumna++)
    for (let rzad = 0; rzad < rzedy; rzad++) {
      if (sprawdz(rzad, kolumna) != 'm') {
        plansza[rzad][kolumna] =
          ((sprawdz(rzad + 1, kolumna) == 'm') | 0) +
          ((sprawdz(rzad + 1, kolumna - 1) == 'm') | 0) +
          ((sprawdz(rzad + 1, kolumna + 1) == 'm') | 0) +
          ((sprawdz(rzad - 1, kolumna) == 'm') | 0) +
          ((sprawdz(rzad - 1, kolumna - 1) == 'm') | 0) +
          ((sprawdz(rzad - 1, kolumna + 1) == 'm') | 0) +
          ((sprawdz(rzad, kolumna - 1) == 'm') | 0) +
          ((sprawdz(rzad, kolumna + 1) == 'm') | 0);
      }
    }
  
  for (let kolumna = 0; kolumna < kolumny; kolumna++) {
    for (let rzad = 0; rzad < rzedy; rzad++) {
      console.log(plansza[rzad][kolumna])
      if(plansza[rzad][kolumna] === 'm') {
        output += symbols.spoiler + symbols.bomb + symbols.spoiler;
      } else {
        output += symbols.spoiler + symbols.numbers[plansza[rzad][kolumna]] + symbols.spoiler;
      }
      output += '';
    }
    output += '\n';
  }

  message.channel.send(new RichEmbed().setColor("RANDOM")
                           .setTitle(`Saper\n\nRzędów: ${rzedy}\nKolumn: ${kolumny}\nMin: ${miny}`)
                           .setDescription(output))
}
exports.help = {
  name: 'saper',
  category: '4FUN',
  description: `
Saper ze spoilerów
{prefix}saper [ilosc_kolumn] [ilosc_rzędów] [ilosc_min]`,
     aliases: [],
  permLevel:"Użytkownik"
}