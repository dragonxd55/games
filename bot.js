const Discord = require('discord.js');
const client = new Discord.Client();

 
 client.on('ready', () => {

        console.log(`----------------`);
      console.log(`Your Bot in  ${client.guilds.size} Servers `);
              console.log(`----------------`);
      console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
              console.log(`----------------`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
    console.log(`----------------`);

});


   
client.on('message', message => {
    if (message.content == "فكك") {
        var x = ['سمك في كيس طازج', 'اللهم صلي على سيدنا محمد', 'الارانب المشاغبة', 'فابلوس', 'مدرسة', 'سبرايز' , 'عبدلله',
        'كتاب',
        'طاخ طيخ سيرفر فابلوس مطانيخ',
        'القرأن',
        'جميل',
        'مطنوخ',
        'حيوانات',
        'نمر',
        'دولة الشام',
        'الجبل',
        'الخليج',
        'سوريا',
        'صحراء',
        'سارة',
        "المملكة",
        "الرئيس",
        "خليجنا واحد",
        "الرياضيات صعبه",
        "محمد",
        "الكبير وصل يا رجاله",
        "الوضع ريلاكس",
        
        ];
        var x2 = ['س م ك ف ي ك ي س ط ا ز ج', 'ا ل ل ه م ص ل ي ع ل ى س ي د ن ا م ح م د', 'ا ل ا ر ا ن ب ا ل م ش ا غ ب ة', 'ف ا ب ل و س', 'م د ر س ة', 'س ب ر ا ي ز', 'ع ب د ل ل ه',
        'ك ت ا ب',
        'ط ا خ ط ي خ س ي ر ف ر ف ا ب ل و س م ط ا ن ي خ',
        'ا ل ق ر أ ن',
        'ج م ي ل',
        'م ط ن و خ',
        'ح ي و ا ن ا ت',
        'ن م ر',
        'د و ل ة ا ل ش ا م',
        'ا ل ج ب ل',
        'ا ل خ ل ي ج',
        'س و ر ي ا',
        'ص ح ر ا ء',
        'س ا ر ة',
        "ا ل م م ل ك ة",
        "ا ل ر ئ ي س",
        "خ ل ي ج ن ا و ا ح د",
        "ا ل ر ي ا ض ي ا ت ص ع ب ه",
        "م ح م د",
        "ا ل ك ب ي و ص ل ي ا ر ج ا ل ه",
        "ا ل و ض ع ر ي ل ا ك س"
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 15 ثانية لتفكيك هذه الكلمة **${x[x3]}** `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة  **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}**الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})
    
    client.on('message', message => {
    if (message.content == "عواصم") {
        var x = ['**ماهي عاصمة السعودية؟**', 
        '**ماهي عاصمة أفغانستان؟**',
        '**ماهي عاصمة الكويت؟**',
        '**ماهي عاصمة أوزباكستان؟**',
        '**ماهي عاصمة الإمارات؟**',
        '**ماهي عاصمة الأردن؟**',
        '**ماهي عاصمة لبنان؟**',
        '**ماهي عاصمة الصين؟**',
        '**ماهي عاصمة اليمن؟**',
        '**ماهي عاصمة سوريا؟**',
        '**ماهي عاصمة تايلاند؟**',
        '**ماهي عاصمة اليابان؟**',
        '**ماهي عاصمة تونس؟**',
        '**ماهي عاصمة مصر؟**',
        '**ماهي عاصمة الولايات المتحدة الإمريكية؟**',
        "**ماهي عاصمة البحرين؟**",
        "**ماهي عاصمة فلسطين؟**",
        "**ماهي عاصمة ماليزيا؟**",
        "**ماهي عاصمة السودان؟**",
        "**ماهي عاصمة الجزائر؟**",
        "**ماهي عاصمة ليبيا؟**",
        "*ماهي عاصمة موريتانيا؟**",
        "**ماهي عاصمة مالي؟**",
        "**ماهي عاصمة زامبيا؟**",
        "**ماهي عاصمة جيبوتي؟**",
        "**ماهي عاصمة جزر القمر؟**",
        "**ماهي عاصمة روسيا؟**",
        "**ماهي عاصمة تركيا؟**",
        "**ماهي عاصمة بولندا؟**",
        "**ماهي عاصمة النمسا؟**",
        "**ماهي عاصمة المملكة المتحدة؟**",
        "**ماهي عاصمة إيطاليا؟**",
        "**ماهي عاصمة إسبانيا؟**",
        "**ماهي عاصمة سويسرا؟**",
        "**ماهي عاصمة كوبا؟**",
        "**ماهي عاصمة كندا؟**",
        "**ماهي عاصمة أستراليا؟**"
        ];
        var x2 = ['الرياض', 
        'كابول',
        'الكويت',
        'طشقند',
        'أبو ظبي',
        'عمان',
        'بيروت',
        'بكين',
        'صنعاء',
        'دمشق',
        'بانكوك',
        'طوكيو',
        'تونس',
        'القاهره',
        'واشنطن',
        "المنامة",
        "القدس",
        "كوالالمبور",
        "الخرطوم",
        "الجزائر",
        "طرابلس",
        "نواكشوط",
        "باماكو",
        "لوساكا",
        "جيبوتي",
        "موروني",
        "موسكو",
        "أنقرة",
        "وارسو",
        "فيينا",
        "لندن",
        "روما",
        "مدريد",
        "برن",
        "هافانا",
        "أوتاوا",
        "كانبرا"
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ${x[x3]}
 لديك من الوقت 20 ثانية للأجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})
    
        client.on('message', message => {
    if (message.content == "اعلام") {
        var x = ['الإمارات',
        'أفغانستان',
        'الأرجنتين',
        'ألبانيا',
        'أستراليا',
        'البحرين',
        'كندا',
        'الصين',
        'ألمانيا',
        'السعودية',
'السويد',
'تونس',
    'تركيا',
    "إنجلترا",
    "مصر",
    "إسبانيا",
    "فرنسا",
    "غانا",
    "اليونان",
    "العراق",
    "إيطاليا",
    "الأردن",
    "اليابان",
    "النيجر",
    "هولندا",
    "عمان",
    "بولندا",
    "فلسطين",
    "البرتغال",
    "تونس",
"اوزباكستان",
"سوريا",
"الأردن",
"لبنان",
"ويلز",
        ];
        var x2 = ['🇦🇪', 
        '🇦🇫',
        '🇦🇷',
        '🇦🇱',
        '🇦🇺',
        '🇧🇭',
        '🇨🇦',
        '🇨🇳',
        '🇩🇪',
        '🇸🇦',
'🇸🇪',
'🇹🇳',
    '🇹🇷',
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "🇪🇬",
    "🇪🇸",
    "🇫🇷",
    "🇬🇭",
    "🇬🇷",
    "🇮🇶",
    "🇮🇹",
    "🇯🇴",
    "🇯🇵",
    "🇳🇪",
    "🇳🇱",
    "🇴🇲",
    "🇵🇱",
    "🇵🇸",
    "🇵🇹",
    "🇹🇳",
    "🇺🇿",
    "🇸🇾",
    "🇯🇴",
    "🇱🇧",
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    
    
    
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ماهو علم  **${x[x3]}** ؟
  لديك من الوقت 20 ثانيه للأجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})


        client.on('message', message => {
    if (message.content == "سؤال") {
        var x = ["ما هي لغة النمسا ؟",
        "أين توجد أطول سكة حديد في العالم ؟",
        "من هو اول شهيد في غزوه احد ؟",
        "ماأسم آخر سوره نزلت في مكه ؟",
        "ماهو النهر الوحيد في العالم ينبع من الجنوب إلى الشمال ؟",
        "من هي المراه التي تزوجها الرسول(ص) بأمر من الله ؟",
        "ما هي أكبر مدينة من المدن الأوروبية ؟",
        "سورة سمعها النجاشي ملك الحبشة فاضت لها دموعه فما هي ؟",
        "ما هي الدولة التي تتكون من عدة جزر تشبه شكل الهلال ؟",
        "ماهي أصغر دوله عربيه مساحه ؟",
        "ما هو الحيوان الذي يصاب بالحصبة كالإنسان ؟",
        "ما هو أول ما يقضي فيه بين الناس يوم القيامة ؟",
        "ماهو العنصر الذي لو وجد في الحليب لأصبح الحليب‎ ‎غذاء كامل ؟",
        "من الذي أسس المملكة العربية السعودية؟",
        "في أي معركة كان الرسول صلى الله عليه وسلم أول من رمى بالمنجنيق؟",
        "ماهي أكبر دوله عربيه مساحه ؟",
        "في أي قارة تقع دولة فلسطين؟",
        "كم دولة عربية عملتها الريال؟",
        "ما هي اللغة الرسمية للبرازيل؟",
];
        var x2 = ["الألمانية",
        "كندا",
        "عبد الله بن عمرو",
        "الروم",
        "النيل",
                "لندن",
                "زينب بنت جحش",
        "سورة مريم",
        "جزر القمر",
        "الكويت",
        "القرد",
        "الدماء",
        "الحديد",
        "عبدالعزيز بن سعود",
        "الطائف",
        "السودان",
        "اسيا",
        "4",
        "البرتغالية",

        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  **${x[x3]}** 
    لديك 20 ثانية للأجابة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})

        client.on('message', message => {
    if (message.content == "لغز") {
        var x = ["ماهو الشيء الذي يكتب و لا يقرأ ؟",
        "ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟",
        "ماهو الشيء الذي كلما زاد نقص ؟",
        "ما هو الشيء الذي لا يمشي إلا بالضرب ؟",
        "ما هو الشيء الذي إذا أخذنا منه إزداد وكبر ؟ ",
        "له أسنان ولا يعض، ما هو ؟",
        "يتحرك دائماً حواليك لكنك لاتراه فما هو ؟ ",
        "ما هو البيت الذي ليس فيه ابواب ولا نوافذ ؟",
        "ما هو الشيء الذي إذا غليته جمد ؟",
        "ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟",
        "ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟",
        "ما هو الشيء الذي اسمه على لونه ؟",
        "له أوراق وما هو بنبات، له جلد وما هو بحيوان، وعلم وما هو بإنسان. من هو ؟",
        "ما هو الشيء الذي يقرصك ولا تراه ؟",
        "ما هو الشيء الذى ليس له بداية ولا نهاية ؟",
        "ما هو الشّيء الذي يستطيع المشي بدون أرجل والبكاء بدون أعين؟",
        " ما هو الشّيء الذي يتكلّم بدون لسان ويسمع بدون أذن؟",
        " ما هو الشّيء الذي يتبع الكلب أينما حلّ وآرتحل؟",

];
        var x2 = ["القلم",
        "الشاي",
        "العمر",
        "المسمار",
        "الحفرة",
        "المشط",
        "الهواء",
        "بيت الشعر",
        "البيض",
        "البحر",
        "الساعة",
        "البيضه",
        "الكتاب",
        "الجوع",
        "الدائرة",
        "السحاب",
        "الهاتف",
        "ذيله",
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  **${x[x3]}** 
    لديك 20 ثانية للأجابة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: انتهى الوقت ولم يتم الأجابة عن السؤال
            الأجابة الصحيحة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} **الأجابة الصحيحة في الوقت الصحيح :white_check_mark:**`);
        })
        })
    }
})


client.on('message', message => {
    var prefix = "#";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 434054716029403176) return;
    
    
    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/Fabulous");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'watching')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });

client.login(process.env.BOT_TOKEN);
