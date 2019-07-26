const { Pool, Client } = require('pg')
const sql = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pt5sx6hkWm8LBbNs',
    port: 5433,
  })
sql.connect().then("Połaczono z bazą danych!")



//FOR TEST

sql.query("INSERT INTO kasa VALUES($1, $2, $3)", [`494017032283619329`, `śrubson#0556`, 0], (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        dane = res.rows[0];
    }
    })

    // var uwaga = ["https://www.instagram.com/p/BynXfGNIp5_/",
    // "https://www.instagram.com/p/BynCmHZIXrr/",
    // "https://www.instagram.com/p/Byk7n9YIBkI/",
    // "https://www.instagram.com/p/BykdQ4pIJRd/",
    // "https://www.instagram.com/p/Byiaxc1Ijyu/",
    // "https://www.instagram.com/p/ByiNcB8oNim/",
    // "https://www.instagram.com/p/Byh3jPMoG30/",
    // "https://www.instagram.com/p/Byfu14LoFJm/",
    // "https://www.instagram.com/p/Bye-B7BoTSt/",
    // "https://www.instagram.com/p/BycVfSroEkH/",
    // "https://www.instagram.com/p/ByXlx5FIjIE/",
    // "https://www.instagram.com/p/BySxc1uoCkL/",
    // "https://www.instagram.com/p/ByQUpX1ImuZ/",
    // "https://www.instagram.com/p/ByP-fs-IPg_/",
    // "https://www.instagram.com/p/ByNrHLkIFzS/",
    // "https://www.instagram.com/p/ByM02SxoIP6/",
    // "https://www.instagram.com/p/ByKrheCoHBe/",
    // "https://www.instagram.com/p/ByKRKzFIMJj/",
    // "https://www.instagram.com/p/ByILvTyoQUa/",
    // "https://www.instagram.com/p/ByF2ospoSZA/",
    // "https://www.instagram.com/p/ByDUXeOojoA/",
    // "https://www.instagram.com/p/ByAdi4lIHA_/",
    // "https://www.instagram.com/p/Bx-UsBTo5lB/",
    // "https://www.instagram.com/p/Bx6uYSzIOjj/",
    // "https://www.instagram.com/p/Bx4pH8tIyIZ/",
    // "https://www.instagram.com/p/Bx4NdOSI3bZ/",
    // "https://www.instagram.com/p/BxxIL8NIlFV/",
    // "https://www.instagram.com/p/BxsLHbRodgJ/",
    // "https://www.instagram.com/p/Bxh_zjuIG_O/",
    // "https://www.instagram.com/p/BxfDS_aoZbh/",
    // "https://www.instagram.com/p/BxZ-LOgASru/",
    // "https://www.instagram.com/p/BxW75LngxwG/",
    // "https://www.instagram.com/p/BxUoWTSgT6j/",
    // "https://www.instagram.com/p/BxNm74LACsp/",
    // "https://www.instagram.com/p/Bw9D9Bcg9W8/",
    // "https://www.instagram.com/p/Bwy0Qw8g_LX/",
    // "https://www.instagram.com/p/BwrCvgGg10h/",
    // "https://www.instagram.com/p/BwbkwOEgIZm/",
    // "https://www.instagram.com/p/BwZlbsOgHnC/",
    // "https://www.instagram.com/p/Bwep-sPA9xM/"]
    // var options = {'url': `${uwaga[Math.floor(Math.random() * uwaga.length + 1)]}`};
    // ogs(options, function (error, results) {
    //     console.log(results);
    //     console.log(error);
    //     var embed = new Discord.RichEmbed()
    //                 .setColor("RANDOM")
    //                 .setImage(results.data.ogImage.url)
    //                 .setFooter("Źródło: https://www.instagram.com/dziennikuwag/") 
    //     message.channel.send(embed);
    // });