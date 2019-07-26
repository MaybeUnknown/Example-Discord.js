const Discord = require('discord.js');
const client = new Discord.Client();
var ogs = require('open-graph-scraper');
const sa = module.require('superagent');

exports.run = async (client, message, args) => {  
      var uwaga = ["https://www.instagram.com/p/BynXfGNIp5_/",
    "https://www.instagram.com/p/BynCmHZIXrr/",
    "https://www.instagram.com/p/Byk7n9YIBkI/",
    "https://www.instagram.com/p/BykdQ4pIJRd/",
    "https://www.instagram.com/p/Byiaxc1Ijyu/",
    "https://www.instagram.com/p/ByiNcB8oNim/",
    "https://www.instagram.com/p/Byh3jPMoG30/",
    "https://www.instagram.com/p/Byfu14LoFJm/",
    "https://www.instagram.com/p/Bye-B7BoTSt/",
    "https://www.instagram.com/p/BycVfSroEkH/",
    "https://www.instagram.com/p/ByXlx5FIjIE/",
    "https://www.instagram.com/p/BySxc1uoCkL/",
    "https://www.instagram.com/p/ByQUpX1ImuZ/",
    "https://www.instagram.com/p/ByP-fs-IPg_/",
    "https://www.instagram.com/p/ByNrHLkIFzS/",
    "https://www.instagram.com/p/ByM02SxoIP6/",
    "https://www.instagram.com/p/ByKrheCoHBe/",
    "https://www.instagram.com/p/ByKRKzFIMJj/",
    "https://www.instagram.com/p/ByILvTyoQUa/",
    "https://www.instagram.com/p/ByF2ospoSZA/",
    "https://www.instagram.com/p/ByDUXeOojoA/",
    "https://www.instagram.com/p/ByAdi4lIHA_/",
    "https://www.instagram.com/p/Bx-UsBTo5lB/",
    "https://www.instagram.com/p/Bx6uYSzIOjj/",
    "https://www.instagram.com/p/Bx4pH8tIyIZ/",
    "https://www.instagram.com/p/Bx4NdOSI3bZ/",
    "https://www.instagram.com/p/BxxIL8NIlFV/",
    "https://www.instagram.com/p/BxsLHbRodgJ/",
    "https://www.instagram.com/p/Bxh_zjuIG_O/",
    "https://www.instagram.com/p/BxfDS_aoZbh/",
    "https://www.instagram.com/p/BxZ-LOgASru/",
    "https://www.instagram.com/p/BxW75LngxwG/",
    "https://www.instagram.com/p/BxUoWTSgT6j/",
    "https://www.instagram.com/p/BxNm74LACsp/",
    "https://www.instagram.com/p/Bw9D9Bcg9W8/",
    "https://www.instagram.com/p/Bwy0Qw8g_LX/",
    "https://www.instagram.com/p/BwrCvgGg10h/",
    "https://www.instagram.com/p/BwbkwOEgIZm/",
    "https://www.instagram.com/p/BwZlbsOgHnC/",
    "https://www.instagram.com/p/Bwep-sPA9xM/"]
    const uwag = uwaga[Math.floor(Math.random() * uwaga.length + 1)];
    console.log(uwag);
    let {body} = await sa.get('https://api.instagram.com/oembed/?url=' + uwag);
    const string = message.translate;
        var embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setImage(body.thumbnail_url)
                    .addField(`${string.zr}`, `${string.profl} [${body.author_url}](${body.author_url})\n ${string.post} [${uwag}](${uwag})`)
                    .setTimestamp();
        message.channel.send(embed);
  
}
            


exports.help = {
  name: "uwagi",
  category: "4FUN",
    description: `
  Pokazuje śmieszne uwagi uczniów 
  {prefix}uwagi
  `,
  aliases: [],
    permLevel:"Użytkownik"
};