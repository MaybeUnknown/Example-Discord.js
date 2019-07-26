const ciek = [
    "Ogórki bardzo dobrze oczyszczają nerki",
    "Koty są jednym z najpopularniejszych, jeśli nie najbardziej popularnymi zwierzętami na świecie",
    "Koty i ludzie są związani od prawie 10000 lat",
    "Na świecie jest ponad 500 milionów kotów domowych.",
    "Lamparty są szybkie i mogą biec z prędkością 58 km/h. Są również bardzo sprężyste i mogą przeskoczyć o 6 metrów do\n przodu przez powietrze – to długość trzech dorosłych osób, które leżą na ziemi.",
    "Czekolada jest dobrym źródłem energii.  Jedna jej kostka dostarcza  organizmowi wystarczająco dużo energii, aby przejść ok. 45 metrów.",
    "Czekolada zawiera fenyloetyloaminę, naturalny aminokwas, który działa jak afrodyzjak, a nawet leczy kaca.",
    "Gorzka czekolada jest w stanie poprawić nasze zdolności widzenia w słabych warunkach, na przykład w czasie brzydkiej pogody.",
    "Czekolada zawiera tryptofan, który pomaga wytwarzać w naszym ciele serotoninę, czyli neuroprzekaźnik odpowiedzialny za odczuwanie przyjemności oraz  endorfiny zwane hormonami szczęścia.",
    "Czekolada rozszerza naczynia krwionośne i wspomaga przepływ krwi przez mózg, co bardzo przydaje się podczas wysiłku mentalnego, takiego jak nauka czy zdawanie egzaminu",
    "Najnowsze badania naukowe wykazały, że te same flawonoidy pomagają chronić skórę przed poparzeniami słonecznymi.",
    "Gorzka czekolada pomaga w przywracaniu tętnicom giętkości i zapobiega odkładaniu się krwinek na ścianach żył, co znacznie obniża ryzyko zatoru.",
    "Koty domowe zazwyczaj ważą od około 4 kilogramów do 5 kilogramów.",
    "Najcięższy kot domowy ważył 21,297 kilogramów.",
    "Ogółem mówi się, że na świecie jest około 400 milionów psów.",
    "Koty mają elastyczne ciała i zęby przystosowane do polowania na małe zwierzęta, takie jak myszy i szczury.",
    "Udomowienie psów mogło mieć miejsce ponad 15 000 lat temu.",
    "Rozpoznawany przez swoją białą głowę, brązowy korpus i haczykowaty żółty dziób, orzeł jest od 1782 roku godłem narodowym Stanów Zjednoczonych Ameryki.",
    "Koty oszczędzają energię śpiąc średnio od 13 do 14 godzin dziennie.",
    "Firma Apple została założona w Prima Aprilis",
    "Tokio jest największym miastem na świecie!",
    "Najmniejsze miastona świecie Hum.Liczy zaledwie 8 mieszkańców.",
    "Najmniejsze państwo na świecie to Watykan.",
    "Internet powstał na świecie 29 października 1969!",
    "Firma Google powstała 4 września 1998 w Kaliforni.",
    "Youtube powstało 14 lutego 2005 roku.",
    "Gra Minecraft postała po raz pierwszy wydana 17 maja 2009 roku.",
    "Pierwsza wersja systemu operacyjnego Windows została wydana w 1985 roku",
    "Hymn Polski powstał w 1797 roku.",
    "Rakiety do tenisa kiedys były wykonywane z krowych i owczych jelit.",
    "W Chinach zakazuje sie przytulania drzew.",
    "Ziema w Układzie Słonecznym jest jedyną planetą która nazwa nie pochodzi od Boga.",
    "Woda kokosowa może być stosowana jako osocze krwi.",
    "Człowiek wchłania 5% wdychanego tlenu.",
    "CommunityBot powstał 30 stycznia 2019 roku.",
    "10 najbardziej niebezpiecznych węży świata 10 wyśtępuje w Australi.",
    "Z powodów związanych ze spożywaniem alkoholu umiera w Rosji rocznie pół miliona osób.",
    "W 1916 roku Niemcy jako pierwsi wprowadzili czas letni.",
    "W 1997 roku w meksykańskim  miasteczku zamiast deszczu spadły żaby.",
    "W niemieckich szkołach stosuje się oceny odwtrotnie niż w Polsce - najniższa ocenia to 6 a najwyższa to 1. ",
    "Ptaki wyczuwają zbliżające się tornado.",
    "Najdłużej żyjący koń swiąta miał 62 lata.",
    "Najmniejszy koń świata mierzył 35,5 cm wzrostu i ważył 9 kg. ",
    "Najwyższy koń świata mierzył 215 cm i ważył 1524 kg.",
    "Rekord świata skoku przez przeszkodę konia wynosił 2, 47 m",
    "Rekord w zwyciężonych gonitw wynosi 350 zwycięstw.",
    "Najwyższa wygrania za konistwe konną wynosi 2,4 miliona dolarów."
  ];
  module.exports.run = async (client, message, args) => {
        const { RichEmbed } = require('discord.js');
    message.channel.send(new RichEmbed().setColor("RANDOM")
                        .addField("Oto losowa ciekawostka:", ciek[Math.floor(Math.random()*ciek.length)])
                        .setFooter(`Wywołane przez ${message.author.tag}`))
  }
  
  module.exports.help = {
      name: "ciekawostka",
        category: 'Użytkownik',
            description: `
    Pokazuje jedną z miliona ciekawostek o świecie.
{prefix}ciekawostka
    `,
    aliases: [],
    permLevel:"Użytkownik"
  }
  