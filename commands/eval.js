// Nie tykac tego bo wywale z projektu
exports.run = async (client, message, args) => {
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    const { RichEmbed } = require('discord.js')
    let ids = [
      '305060312971870208',
      '494017032283619329'
    ]
    if(!ids.includes(message.author.id)) return message.channel.send(new RichEmbed().setColor("ec3f32").setAuthor("Error 404").setDescription("Gdzie ty patrzysz>?\n**Wymagany poziom uprawnień to `none` (`undefined`). cmd for śrubson** ( ͡° ͜ʖ ͡°)"));
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}
  exports.help = {
    name: 'eval',
    category: "Bot owners",
       description: "Ta komenda wyłącznie dla programistów bota.",
         aliases: [],
    permLevel:"Deweloper bota"
  }
