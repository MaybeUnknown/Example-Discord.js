module.exports = async (client) => {
  const port = 7777;
  var express  = require('express')
    , session  = require('express-session')
    , passport = require('passport')
    , path = require('path')
    , Discord = require('discord.js')
    , db = require('quick.db');
  var Strategy = require('../bib/strategy');
  var fs = require("fs");
  var app = express();
  const sesja = require("express-session");
  const Zapisywanie = require("level-session-store")(sesja);
  const cmd = require("node-cmd");

  app.use(express.static('public')) 
  const dataDir = path.resolve(`${process.cwd()}${path.sep}dashboard`);
  app.engine("html", require("ejs").renderFile);
  const renderTemplate = (res, req, template, data = {}) => {
      const baseData = {
        db: db,
      };
      res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
    };
    app.set('view engine', 'ejs');  
  app.use("/public", express.static(path.resolve(`${dataDir}${path.sep}public`)));
    var bodyParser = require('body-parser')
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 


  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

   app.use(sesja({
     store: new Zapisywanie("./data/sesje/"),
     secret: "dsfbdihfsabdhljsfbdhjsfbhjfdsbdhjsfkbdhjfsbhjfdsbhjdsfhbdjsfbhjdfsbdfhkfbdiouyfhenreiru43y478ohfbdhgjgdukvxhudbuydfbdshkjfbdskjfhdsf",
   }));


  var scopes = ['identify', 'guilds'];

  passport.use(new Strategy({
      clientID: '597031986694979594',
      clientSecret: 'euIO025-3Q-DB9a-EBAHwwbntAKpj_py',
      callbackURL: 'http://rkubapl.malopolska.pl:7777/callback',
      scope: scopes
  }, function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
          return done(null, profile);
      });
  }));

  app.use(session({
      secret: 'keyboardgfgfdgfdgdfgdfgdfcat',
      resave: false,
      saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.get('/cal', passport.authenticate('discord', { scope: scopes }), function(req, res) {});
  app.get('/callback',
      passport.authenticate('discord', { failureRedirect: '/callback' }), function(req, res) { 
       
        if (req.session.back) {
          const link = req.session.back;
          req.session.back = null;
          res.redirect(link);
        } else {
          res.redirect("/dashboard");
        }
      } // auth success
  );
  app.get('/', (req, res) => {
    let cmds = {};
                        let categories = [];
                        client.commands.forEach((c) => {
                           if(c.help.category) {
                             const x = c.help.category.trim();
                             if(!cmds[ c.help.category]) {
                               cmds[c.help.category] = [];
                               categories.push(c.help.category);
                             }
                             cmds[ c.help.category].push(`\`${c.help.name}\``);
                           } else {
                             if(!cmds[`${string.other}`]) {
                               cmds[`${string.other}`] = [];
                               categories.push(`${string.other}`);
                             } 
                             cmds[`${string.other}`].push(`\`${c.help.name}\``);
                           }
                         });
  res.render('index', {bot: client, user: req.user, cmds: cmds, categories: categories});
  });
  app.get('/upload', checkAuth, (req, res) => {
    if(req.user.id === "494017032283619329") {
  res.render('uploader', {client: client, user: req.user});
    }
  });
  var http = require('http');
  var formidable = require('formidable');
  var randomstring = require("randomstring");

  app.post('/wyslij', checkAuth, (req, res) => {
    if(req.user.id === "494017032283619329") {
      const xd = randomstring.generate(7);
  var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = './public/cdn/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
        res.render('zdj', {zdjecie: files.filetoupload.name})
        });
      });
    }
  });
  app.get('/zdjecie/:zdj', (req, res) => {
  res.render("zdj", {zdjecie: req.params.zdj})

  });

  // app.get('/informacje&id=KubaComm', (req, res) => {
  // res.json({server: client.guilds.size})

  // });
  // app.get('/serwery', (req, res) => {
  // res.render('serwer')

  // });

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
  app.get('/dashboard', checkAuth, function(req, res) {
  const perms = Discord.EvaluatedPermissions;
  res.render('dash', {user: req.user, bot: client, perms: perms})
  console.log(req.user)
  });
  app.get("/dashboard/:gid", checkAuth, function(req, res) {
      const guild = client.guilds.get(req.params.gid);
      if (!guild) return res.render('info', {});
      if(!client.developers.includes(req.user.id)) {
        if(!guild.member(req.user.id)) return res.render('info', {});
        if(!guild.member(req.user.id).permissions.has("MANAGE_GUILD")) return res.render('info', {});
      }
      client.log.log(guild.id);
      client.log.log(client.guilds.get(guild.id));
    res.render("manage", {bot: client, user: req.user, guild: guild, db: db, success: null})
  });
  app.get("/profil", checkAuth, function(req, res) {
    res.render("profil", {bot: client, user: req.user, db: db, success: null})
  });
  app.get("/adminpanel", checkAuth, function(req, res) {
    if(!client.developers.includes(req.user.id)) return res.redirect("/dashboard");
    fs.readFile('./logs.log', (err, data) => {
      if (err) {
        client.log.error(err);
        return res.send("Wystąpił niespodziewany błąd: "+err+"\nWszystko zostało zlogowane do pliku logs.log");
      }
      res.render("admin", {bot: client, user: req.user, db: db, logs: data})
    });
  })
  app.post('/admin/checkuser', checkAuth, function(req, res) {
    if(!client.developers.includes(req.user.id)) return res.redirect("/dashboard");
    client.fetchUser(req.body.uid)
    .catch(()=>{
      return res.render('info', {});
    })
    .then(u=>{
      res.render("checkuid", {bot: client, user: req.user, u: u})
    })
  })
  app.post('/admin/checksrv', checkAuth, function(req, res) {
    if(!client.developers.includes(req.user.id)) return res.redirect("/dashboard");
    let srv = client.guilds.get(req.body.sid);
    res.render("checksrv", {bot: client, user: req.user, s: srv})
  })
  app.get("/update", checkAuth, function(req, res) {
    if(!client.developers.includes(req.user.id)) return res.redirect("/dashboard");
    cmd.get(`
       git pull origin v3
       `,
       function(err, data, stderr){
         res.send(data);
         let { RichEmbed } = require("discord.js");
         client.channels.get("540936381485154304").send(new RichEmbed()
                                                            .setColor(3447003)
                                                            .setTitle(`Ktoś zaktualizował bota przez Admin Panel`)
                                                            .addField("Aktualizacje:", `\`\`\`bash\n${data}\n\`\`\``));
       }
    );
  });
  app.get("/restart", checkAuth, async (req, res) => {
    if(!client.developers.includes(req.user.id)) return res.redirect("/dashboard");
    res.send("OK");
    let { RichEmbed } = require("discord.js");
    let channel = client.channels.get("540936381485154304");
    await client.user.setGame("Bot jest restartowany...");
    await channel.send(new RichEmbed()
                           .setColor(3447003)
                           .setTitle(`Restartowanie bota...`));
    cmd.get(`
       pm2 restart index.js
       `,
       function(err, data, stderr){}
    );
  });
  app.post("/dashboard/:gid/ustaw", checkAuth, function(req, res) {
      const guild = client.guilds.get(req.params.gid);
      if (!guild) return res.render('info', {});
      if(!client.developers.includes(req.user.id)) {
        if(!guild.member(req.user.id)) return res.render('info', {});
        if(!guild.member(req.user.id).permissions.has("MANAGE_GUILD")) return res.render('info', {});
      }
      client.log.debug("powKanal " + req.body.powKanal);
      client.log.debug("pozKanal " + req.body.pozKanal);
      client.log.debug("powTekst " + req.body.powTekst);
      client.log.debug("pozTekst " + req.body.pozTekst);
      client.log.debug("powTyp " + req.body.powTyp);
      client.log.debug("pozTyp " + req.body.pozTyp);
      client.log.debug("logMessage " + req.body.logMessage);
      console.log(req.body);
      if(req.body.prefix) {
        db.set(req.params.gid + ".prefix", req.body.prefix);
      }
      if(req.body.jezyk) {
        db.set(req.params.gid + ".language", req.body.jezyk);
      }
      if(req.body.blokada) {
        db.set(req.params.gid + ".blokada", req.body.blokada);
      }
      if(req.body.cbot) {
        db.set(req.params.gid + "cbot", req.body.cbot);
      }
      if(req.body.powKanal) {
        db.set(req.params.gid + ".powKanal", req.body.powKanal);
      }
      if(req.body.pozKanal) {
        db.set(req.params.gid + ".pozKanal", req.body.pozKanal);
      }
      if(req.body.powTekst) {
        db.set(req.params.gid + ".powTekst", req.body.powTekst);
      }
      if(req.body.pozTekst) {
        db.set(req.params.gid + ".pozTekst", req.body.pozTekst);
      }
      if(req.body.powTyp) {
        db.set(req.params.gid + ".powTyp", req.body.powTyp);
      }
      if(req.body.pozTyp) {
        db.set(req.params.gid + ".pozTyp", req.body.pozTyp);
      }
      if(req.body.logMessage) {
        db.set(req.params.gid + ".logMessage", req.body.logMessage);
      }
      if(req.body.antycaps) {
        db.set(req.params.gid + ".antycaps", req.body.antycaps);
      }
      if(req.body.procentcaps) {
        db.set(req.params.gid + ".procentcaps", req.body.procentcaps);
      }
      if(req.body.antyprzeklenstwa) {
        db.set(req.params.gid + ".antyprzeklenstwa", req.body.antyprzeklenstwa);
      }
      if(req.body.cprzeklenstw) {
        db.set(req.params.gid + ".customprzeklenstwa", req.body.cprzeklenstwa);
      }
      if(req.body.antyinvite) {
        db.set(req.params.gid + ".antyinvite", req.body.antyinvite);
      }
      if(req.body.ping) {
        db.set(req.params.gid + "ping", req.body.ping);
      }
      if(req.body.licz) {
        db.set(req.params.gid + "licz", req.body.licz);
      }
      if(req.body.liczTyp) {
        db.set(req.params.gid + "liczTyp", req.body.liczTyp);
      }
    res.render("manage", {bot: client, user: req.user, guild: guild, db: db, success: true})
  });
  app.get("/support", (req, res) =>{
  res.render("support", {bot: client, user: req.user})

  });
  app.get("/wykres", (req, res) =>{
  res.render("wykres", {bot: client, user: req.user})

  });
  app.post("/profil/ustaw", checkAuth, function(req, res) {
    
      console.log(req.body);
      if(req.body.imie) {
        db.set(req.user.id + "imie", req.body.imie)
      }
      else {
        db.set(req.user.id + "imie", "null")
      }
      if(req.body.facebook) {
        db.set(req.user.id + "facebook", req.body.facebook)
      } 
      else {
        db.set(req.user.id + "facebook", "null")
      }
    if(req.body.tiktok) {
        db.set(req.user.id + "tiktok", req.body.tiktok)
      } 
      else {
        db.set(req.user.id + "tiktok", "null")
      }
      if(req.body.spotify) {
        db.set(req.user.id + "spotify", req.body.spotify)
      }
      else {
        db.set(req.user.id + "spotify", "null")
      }
      if(req.body.snapchat) {
        db.set(req.user.id + "snapchat", req.body.snapchat)
      } 
      else {
        db.set(req.user.id + "snapchat", "null")
      }
      if(req.body.instagram) {
        db.set(req.user.id + "instagram", req.body.instagram)
      }
      else {
        db.set(req.user.id + "instagram", "null")
      }
      if(req.body.pupil) {
        db.set(req.user.id + "pupil", req.body.pupil)
      } 
      else {
        db.set(req.user.id + "pupil", "null")
      }
      if(req.body.nation) {
        db.set(req.user.id + "nation", req.body.nation)
      } 
      else {
        db.set(req.user.id + "nation", "null")
      }
      if(req.body.opis) {
        db.set(req.user.id + ".opis", req.body.opis)
      } 
      else {
        db.set(req.user.id + ".opis", "null")
      }
      if(req.body.kolorProfil) {
        db.set(req.user.id + ".kolorProfil", req.body.kolorProfil)
      } 
      else {
        db.set(req.user.id + ".kolorProfil", "#36393f")
      }
      res.render("profil", {bot: client, user: req.user, db: db, success: true})
  });

  app.get('/rekru', checkAuth, function(req,res) {
    res.render('rekrutacja', {bot: client, user: req.user, db: db});
  });

  app.post('/wyslijrekru', checkAuth, async function(req,res) {
    const dane = req.body;
    console.log(dane);
    console.log(req.body)
    db.set(req.user.id + "rekru1", "tak");
    db.add("rekru1", 1);
   client.channels.get('589890111471222793').send(new Discord.RichEmbed()
                                                  .setColor("RANDOM")
                                                  .setAuthor(client.users.get(req.user.id).tag, client.users.get(req.user.id).avatarURL)
                                                  .addField("Jak dobrze znasz Community Bota?", dane.znanie || "Nie podano")
                                                  .addField("Imie", dane.imie || "Nie podano")
                                                  .addField("Informacje o nim/niej", dane.info || "Nie podano")
                                                  .addField("Ile czasu możesz poświęcić na nasz serwer i na naszego bota dziennie od poniedziałku do piątku?", dane.czasT || "Nie podano")
                                                  .addField("Ile czasu możesz poświęcić na nasz serwer i na naszego bota dziennie w weekend?", dane.czasW || "Nie podano")).then(w => {
        w.react("✅");
        w.react("➖");
        w.react("❌"); 
      });
  });


  function checkAuth(req, res, next) {
      if (req.isAuthenticated()) return next();
      req.session.back = req.url;
      res.redirect('/callback');
  }


  app.listen(7777, function (err) {
      if (err) return console.log(err)
      console.log('Listening at http://localhost:7777/')
  })
};