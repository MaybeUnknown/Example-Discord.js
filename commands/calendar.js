function leapyear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function dokoncaroku(date) {
  let koniecRoku = new Date(date.getFullYear()+1, 0, 1);
  if (date.getMonth()==11 && date.getDate()>25) koniecRoku.setFullYear(koniecRoku.getFullYear()+1); 
  let oneday = 1000*60*60*24;
  return Math.ceil((koniecRoku.getTime()-date.getTime())/(oneday));
}

function doswiat(date) {
  let koniecRoku = new Date(date.getFullYear(), 11, 24);
  if (date.getMonth()==11 && date.getDate()>25) koniecRoku.setFullYear(koniecRoku.getFullYear()+1); 
  let oneday = 1000*60*60*24;
  return Math.ceil((koniecRoku.getTime()-date.getTime())/(oneday));
}

function dokoncaszkoly(date) {
  let koniecRoku = new Date(date.getFullYear(), 6, 19);
  if (date.getMonth()==11 && date.getDate()>25) koniecRoku.setFullYear(koniecRoku.getFullYear()+1); 
  let oneday = 1000*60*60*24;
  return Math.ceil((koniecRoku.getTime()-date.getTime())/(oneday));
}

exports.run = (client, message, args) => {
    const string = message.translate;
    var miesiace = [
  string.January,
  string.February,
  string.March,
  string.April,
  string.May,
  string.June,
  string.July,
  string.August,
  string.September,
  string.October,
  string.November,
  string.December
];

    const { RichEmbed } = require('discord.js');
  let date = new Date();
  message.channel.send(new RichEmbed().setColor("RANDOM")
                       .setTitle(string.cal)
                       .addField(string.hour, `${date.getHours()}:${date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()}`)
                       .addField(string.date, `${date.getDate()} ${miesiace[date.getMonth()]} ${date.getFullYear()}`)
                       .addField(string.endYear, dokoncaroku(date)+ ` ${string.dayMore}`)
                       .addField(string.eveTime, doswiat(date)+ ` ${string.dayMore}`)
                       .addField(string.endSchoolYear, dokoncaszkoly(date)+ ` ${string.dayMore}`));
                       
}

exports.help = {
  name: "kalendarz",
  category: "Użytkownik",
      description: `
    Pokazuje ile dni zostało do bardzo ważnych wydarzeń
{prefix}kalendarz
    `,
    aliases: [],
    permLevel:"Użytkownik"
}