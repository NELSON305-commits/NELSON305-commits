//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const fs = require('fs')
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const symbol = ['👸', '👑']
const RandomSymbol = pickRandom(symbol)

global.allmenu = (prefix, hituet) => {
return`「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」
❍──────────◙
┏❐
┃☼• _Mode :_ *${PrexzyVilla.public ? 'Public' : `Self`}*
┃☼• _Name :_ *${pushname}*
┃☼• _Speed :_ *${latensie.toFixed(4)}*
┃☼• _Prefix : [ ${xprefix} ]
┗❐
❍──────────◙
│ ☼ 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ ☼ 𝗗𝗮𝘀𝗯𝗼𝗮𝗿𝗱
❍──────────◙
❍──────────◙
│ *Version :2.0*
❍──────────◙
🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *O W N E R - M E N U*
│• *[ ${RandomSymbol} ]* autoread 🄾
│• *[ ${RandomSymbol} ]* autobio 🄾
│• *[ ${RandomSymbol} ]* autotype 🄾
│• *[ ${RandomSymbol} ]* unavailable 🄾
│• *[ ${RandomSymbol} ]* autorecord 🄾
│• *[ ${RandomSymbol} ]* autorecordtype 🄾
│• *[ ${RandomSymbol} ]* autoswview 🄾
│• *[ ${RandomSymbol} ]* setautoblock 🄾
│• *[ ${RandomSymbol} ]* setantiforeign 🄾
│• *[ ${RandomSymbol} ]* autoblock 🄾
│• *[ ${RandomSymbol} ]* onlygc 🄾
│• *[ ${RandomSymbol} ]* onlypc 🄾
│• *[ ${RandomSymbol} ]* onlyindia 🄾
│• *[ ${RandomSymbol} ]* onlyindo 🄾
│• *[ ${RandomSymbol} ]* anticall 🄾
│• *[ ${RandomSymbol} ]* self 🄾
│• *[ ${RandomSymbol} ]* public 🄾
│• *[ ${RandomSymbol} ]* join 🄾
│• *[ ${RandomSymbol} ]* poll 🄾
│• *[ ${RandomSymbol} ]* spam 🄾
│• *[ ${RandomSymbol} ]* bc 🄾
│• *[ ${RandomSymbol} ]* bcgroup 🄾
│• *[ ${RandomSymbol} ]* setmenu 🄾
│• *[ ${RandomSymbol} ]* setimgmenu 🄾
│• *[ ${RandomSymbol} ]* setvidmenu 🄾
│• *[ ${RandomSymbol} ]* setgifmenu 🄾
│• *[ ${RandomSymbol} ]* setreply 🄾
│• *[ ${RandomSymbol} ]* setprefix 🄾
│• *[ ${RandomSymbol} ]* addlimit 🄾
│• *[ ${RandomSymbol} ]* dellimit 🄾
│• *[ ${RandomSymbol} ]* resethit 🄾
│• *[ ${RandomSymbol} ]* resetuser 🄾
│• *[ ${RandomSymbol} ]* creategc 🄾
│• *[ ${RandomSymbol} ]* setexif 🄾
│• *[ ${RandomSymbol} ]* userjid 🄾
│• *[ ${RandomSymbol} ]* setbotbio 🄾
│• *[ ${RandomSymbol} ]* delppbot 🄾
│• *[ ${RandomSymbol} ]* shutdown 🄾
│• *[ ${RandomSymbol} ]* setppbot 🄾
│• *[ ${RandomSymbol} ]* addprem 🄾
│• *[ ${RandomSymbol} ]* delprem 🄾
│• *[ ${RandomSymbol} ]* addowner 🄾
│• *[ ${RandomSymbol} ]* delowner 🄾
│• *[ ${RandomSymbol} ]* addvn 🄾
│• *[ ${RandomSymbol} ]* addapk 🄾
│• *[ ${RandomSymbol} ]* addzip 🄾
│• *[ ${RandomSymbol} ]* addpdf 🄾
│• *[ ${RandomSymbol} ]* delapk 🄾
│• *[ ${RandomSymbol} ]* delzip 🄾
│• *[ ${RandomSymbol} ]* delpdf 🄾
│• *[ ${RandomSymbol} ]* delvn 🄾
│• *[ ${RandomSymbol} ]* addsticker 🄾
│• *[ ${RandomSymbol} ]* delsticker 🄾
│• *[ ${RandomSymbol} ]* addimage 🄾
│• *[ ${RandomSymbol} ]* delimage 🄾
│• *[ ${RandomSymbol} ]* addvideo 🄾
│• *[ ${RandomSymbol} ]* delvideo 🄾
│• *[ ${RandomSymbol} ]* addtitle 🄾
│• *[ ${RandomSymbol} ]* deltitle 🄾
│• *[ ${RandomSymbol} ]* upswtext 🄾
│• *[ ${RandomSymbol} ]* upswvideo 🄾
│• *[ ${RandomSymbol} ]* upswimage 🄾
│• *[ ${RandomSymbol} ]* upswaudio 🄾
│• *[ ${RandomSymbol} ]* autosticker 🄾
│• *[ ${RandomSymbol} ]* block 🄾
│• *[ ${RandomSymbol} ]* unblock 🄾
│• *[ ${RandomSymbol} ]* leavegc 🄾
│• *[ ${RandomSymbol} ]* pushcontact 🄾
│• *[ ${RandomSymbol} ]* pushcontactv2 🄾
│• *[ ${RandomSymbol} ]* pushcontactv3 🄾
│• *[ ${RandomSymbol} ]* jpm 🄾
│• *[ ${RandomSymbol} ]* post 🄾
│• *[ ${RandomSymbol} ]* clearall 🄾
│• *[ ${RandomSymbol} ]* pinchat 🄾
│• *[ ${RandomSymbol} ]* unpinchat 🄾
│• *[ ${RandomSymbol} ]* addcase 🄾
│• *[ ${RandomSymbol} ]* delcase 🄾
│• *[ ${RandomSymbol} ]* listcase 🄾
└┈─────────────────⏣

❐ *G R O U P - M E N U*
│• *[ ${RandomSymbol} ]* antibot 🄶
│• *[ ${RandomSymbol} ]* antiviewonce 🄶
│• *[ ${RandomSymbol} ]* readviewonce 🄶
│• *[ ${RandomSymbol} ]* welcome 🄶
│• *[ ${RandomSymbol} ]* adminevent 🄶
│• *[ ${RandomSymbol} ]* groupevent 🄶
│• *[ ${RandomSymbol} ]* antiforeign 🄶
│• *[ ${RandomSymbol} ]* antimedia 🄶
│• *[ ${RandomSymbol} ]* antiaudio 🄶
│• *[ ${RandomSymbol} ]* antivideo 🄶
│• *[ ${RandomSymbol} ]* antiimage 🄶
│• *[ ${RandomSymbol} ]* antidocument 🄶
│• *[ ${RandomSymbol} ]* antilocation 🄶
│• *[ ${RandomSymbol} ]* anticontact 🄶
│• *[ ${RandomSymbol} ]* antisticker 🄶
│• *[ ${RandomSymbol} ]* antipoll 🄶
│• *[ ${RandomSymbol} ]* antilink 🄶
│• *[ ${RandomSymbol} ]* antilinkgc 🄶
│• *[ ${RandomSymbol} ]* antipromotion 🄶
│• *[ ${RandomSymbol} ]* antivirtex 🄶
│• *[ ${RandomSymbol} ]* grouplink 🄶
│• *[ ${RandomSymbol} ]* listadmin 🄶
│• *[ ${RandomSymbol} ]* invite 🄶
│• *[ ${RandomSymbol} ]* ephemeral 🄶
│• *[ ${RandomSymbol} ]* delete 🄶
│• *[ ${RandomSymbol} ]* setppgroup 🄶
│• *[ ${RandomSymbol} ]* delppgroup 🄶
│• *[ ${RandomSymbol} ]* setnamegc 🄶
│• *[ ${RandomSymbol} ]* setdesc 🄶
│• *[ ${RandomSymbol} ]* add 🄶
│• *[ ${RandomSymbol} ]* kick 🄶
│• *[ ${RandomSymbol} ]* promote 🄶
│• *[ ${RandomSymbol} ]* demote 🄶
│• *[ ${RandomSymbol} ]* kickall 🄶
│• *[ ${RandomSymbol} ]* promoteall 🄶
│• *[ ${RandomSymbol} ]* demoteall 🄶
│• *[ ${RandomSymbol} ]* getcontact 🄾
│• *[ ${RandomSymbol} ]* savecontact 🄾
│• *[ ${RandomSymbol} ]* sendcontact 🄾
│• *[ ${RandomSymbol} ]* contactag 🄾
│• *[ ${RandomSymbol} ]* hidetag 🄶
│• *[ ${RandomSymbol} ]* totag 🄶
│• *[ ${RandomSymbol} ]* tagall 🄶
│• *[ ${RandomSymbol} ]* editinfo 🄶
│• *[ ${RandomSymbol} ]* opentime 🄶
│• *[ ${RandomSymbol} ]* closetime 🄶
│• *[ ${RandomSymbol} ]* resetlink 🄶
│• *[ ${RandomSymbol} ]* getbio 🄶
│• *[ ${RandomSymbol} ]* vote 🄶
│• *[ ${RandomSymbol} ]* upvote 🄶
│• *[ ${RandomSymbol} ]* downvote 🄶
│• *[ ${RandomSymbol} ]* checkvote 🄶
│• *[ ${RandomSymbol} ]* delvote 🄶
│• *[ ${RandomSymbol} ]* antivirus 🄶
│• *[ ${RandomSymbol} ]* antitoxic 🄶
│• *[ ${RandomSymbol} ]* nsfw 🄶
│• *[ ${RandomSymbol} ]* react 🄶
│• *[ ${RandomSymbol} ]* getjoinrequest 🄶
└┈─────────────────⏣

❐ *S E A R C H* 
│• *[ ${RandomSymbol} ]* google 🄵
│• *[ ${RandomSymbol} ]* wikipedia 🄵
│• *[ ${RandomSymbol} ]* ytsearch 🄵
│• *[ ${RandomSymbol} ]* xnxxsearch 🄵
│• *[ ${RandomSymbol} ]* xvideosearch 🄵
│• *[ ${RandomSymbol} ]* apksearch 🄵
│• *[ ${RandomSymbol} ]* stickersearch 🄵
│• *[ ${RandomSymbol} ]* imdb 🄵
│• *[ ${RandomSymbol} ]* drakor 🄵
│• *[ ${RandomSymbol} ]* detaildrakor 🄵
│• *[ ${RandomSymbol} ]* streamingdrakor 🄵
│• *[ ${RandomSymbol} ]* film 🄵
│• *[ ${RandomSymbol} ]* detailfilm 🄵
│• *[ ${RandomSymbol} ]* streamingfilm 🄵
│• *[ ${RandomSymbol} ]* anime 🄵
│• *[ ${RandomSymbol} ]* detailanime 🄵
│• *[ ${RandomSymbol} ]* streaminganime 🄵
│• *[ ${RandomSymbol} ]* donghua 🄵
│• *[ ${RandomSymbol} ]* detaildonghua 🄵
│• *[ ${RandomSymbol} ]* streamingdonghua 🄵
│• *[ ${RandomSymbol} ]* wanumber 🄵
│• *[ ${RandomSymbol} ]* friend 🄵
│• *[ ${RandomSymbol} ]* lyrics 🄵
│• *[ ${RandomSymbol} ]* steamsearch 🄵
│• *[ ${RandomSymbol} ]* goresearch 🄵
│• *[ ${RandomSymbol} ]* freetogame 🄵
│• *[ ${RandomSymbol} ]* fdroid 🄵
│• *[ ${RandomSymbol} ]* gsmarena 🄵
│• *[ ${RandomSymbol} ]* fdroid 🄵
│• *[ ${RandomSymbol} ]* bukalapak 🄵
└┈─────────────────⏣

❐ *D D O S*
│• *[ ${RandomSymbol} ]* attack 🄿
│• *[ ${RandomSymbol} ]* methods 🄿
│• *[ ${RandomSymbol} ]* ddos [mix, tls, ninja] 🄿
│• *[ ${RandomSymbol} ]* ddos-lol 🄿
│• *[ ${RandomSymbol} ]* ddos-mix 🄿
│• *[ ${RandomSymbol} ]* ddos-brow 🄿
│• *[ ${RandomSymbol} ]* ddos-tls 🄿
│• *[ ${RandomSymbol} ]* ddos-tls-v2 🄿
│• *[ ${RandomSymbol} ]* ddos-kilua 🄿
│• *[ ${RandomSymbol} ]* ddos-tls-bypass 🄿
│• *[ ${RandomSymbol} ]* ddos-bypass-cf 🄿
│• *[ ${RandomSymbol} ]* ddos-tls-vip 🄿
│• *[ ${RandomSymbol} ]* ddos-floods 🄿
│• *[ ${RandomSymbol} ]* ddos-egao 🄿
│• *[ ${RandomSymbol} ]* ddos-xchrome 🄿
│• *[ ${RandomSymbol} ]* ddos-fetch 🄿
└┈─────────────────⏣

❐ *G E N E R A T O R*
│• *[ ${RandomSymbol} ]* proxy 🄿
│• *[ ${RandomSymbol} ]* ua 🄿
└┈─────────────────⏣

❐ *B O T N E T*
│• *[ ${RandomSymbol} ]* botnet 🄿
│• *[ ${RandomSymbol} ]* botnet-add 🄿
│• *[ ${RandomSymbol} ]* botnet-del 🄿
│• *[ ${RandomSymbol} ]* botnet-list 🄿
│• *[ ${RandomSymbol} ]* botnet-test 🄿
└┈─────────────────⏣

❐ *C C T V*
│• *[ ${RandomSymbol} ]* cctv-hijack 🄿
└┈─────────────────⏣

❐ *T R A C K E R*
│• *[ ${RandomSymbol} ]* traffix-inject 🄿
│• *[ ${RandomSymbol} ]* subdo-finder 🄿
└┈─────────────────⏣

❐ *R O L E P L A Y I N G - G A M E S*
│• *[ ${RandomSymbol} ]* clan 🄵
│• *[ ${RandomSymbol} ]* clan create 🄵
│• *[ ${RandomSymbol} ]* clan join 🄵
│• *[ ${RandomSymbol} ]* clan approve 🄵
│• *[ ${RandomSymbol} ]* clan war 🄵
│• *[ ${RandomSymbol} ]* clan list 🄵
│• *[ ${RandomSymbol} ]* clan leave 🄵
│• *[ ${RandomSymbol} ]* clan delete 🄵
│• *[ ${RandomSymbol} ]* clan member 🄵
│• *[ ${RandomSymbol} ]* clan missions 🄵
│• *[ ${RandomSymbol} ]* clan task 🄵
│• *[ ${RandomSymbol} ]* clan upgrade 🄵
│• *[ ${RandomSymbol} ]* clan tournament 🄵
└┈─────────────────⏣

❐ *D O W N L O A D - M E N U*
│• *[ ${RandomSymbol} ]* xnxxdl 🄵
│• *[ ${RandomSymbol} ]* xvideodl 🄵
│• *[ ${RandomSymbol} ]* itunes 🄵
│• *[ ${RandomSymbol} ]* play 🄵
│• *[ ${RandomSymbol} ]* ytmp3 🄵
│• *[ ${RandomSymbol} ]* ytmp4 🄵
│• *[ ${RandomSymbol} ]* tiktok 🄵
│• *[ ${RandomSymbol} ]* tiktokaudio 🄵
│• *[ ${RandomSymbol} ]* tiktokvideo 🄵
│• *[ ${RandomSymbol} ]* tiktokslide 🄵
│• *[ ${RandomSymbol} ]* igvideo 🄵
│• *[ ${RandomSymbol} ]* igimage 🄵
│• *[ ${RandomSymbol} ]* facebook 🄵
│• *[ ${RandomSymbol} ]* twitter 🄵
│• *[ ${RandomSymbol} ]* capcut 🄵
│• *[ ${RandomSymbol} ]* apk 🄵
│• *[ ${RandomSymbol} ]* mega 🄵
│• *[ ${RandomSymbol} ]* mediafire 🄵
│• *[ ${RandomSymbol} ]* google 🄵
│• *[ ${RandomSymbol} ]* gimage 🄵
│• *[ ${RandomSymbol} ]* weather 🄵
│• *[ ${RandomSymbol} ]* spotify 🄿
│• *[ ${RandomSymbol} ]* gitclone 🄵
│• *[ ${RandomSymbol} ]* happymod 🄵
│• *[ ${RandomSymbol} ]* gdrive 🄵
│• *[ ${RandomSymbol} ]* pinterest 🄵
│• *[ ${RandomSymbol} ]* ringtone 🄵
│• *[ ${RandomSymbol} ]* autodownload 🄾
│• *[ ${RandomSymbol} ]* goredl 🄵
└┈─────────────────⏣

❐ *C O N V E R T* 
│• *[ ${RandomSymbol} ]* obfuscate 🄵
│• *[ ${RandomSymbol} ]* styletext 🄵
│• *[ ${RandomSymbol} ]* fliptext 🄵
│• *[ ${RandomSymbol} ]* tts 🄵
│• *[ ${RandomSymbol} ]* say 🄵
│• *[ ${RandomSymbol} ]* togif 🄵
│• *[ ${RandomSymbol} ]* toqr 🄵
│• *[ ${RandomSymbol} ]* bass 🄵
│• *[ ${RandomSymbol} ]* blown 🄵
│• *[ ${RandomSymbol} ]* deep 🄵
│• *[ ${RandomSymbol} ]* earrape 🄵
│• *[ ${RandomSymbol} ]* fast 🄵
│• *[ ${RandomSymbol} ]* fat 🄵
│• *[ ${RandomSymbol} ]* nightcore 🄵
│• *[ ${RandomSymbol} ]* reverse 🄵
│• *[ ${RandomSymbol} ]* robot 🄵
│• *[ ${RandomSymbol} ]* slow 🄵
│• *[ ${RandomSymbol} ]* smooth 🄵
│• *[ ${RandomSymbol} ]* squirrel 🄵
│• *[ ${RandomSymbol} ]* tinyurl 🄵
│• *[ ${RandomSymbol} ]* tovn 🄵
│• *[ ${RandomSymbol} ]* toaudio 🄵
│• *[ ${RandomSymbol} ]* tomp3 🄵
│• *[ ${RandomSymbol} ]* tomp4🄵
│• *[ ${RandomSymbol} ]* toimg 🄵
│• *[ ${RandomSymbol} ]* toonce 🄵
│• *[ ${RandomSymbol} ]* sticker 🄵
│• *[ ${RandomSymbol} ]* smeme 🄵
│• *[ ${RandomSymbol} ]* smeta 🄵
│• *[ ${RandomSymbol} ]* take 🄿
│• *[ ${RandomSymbol} ]* emoji 🄵
│• *[ ${RandomSymbol} ]* volaudio 🄵
│• *[ ${RandomSymbol} ]* volvideo 🄵
│• *[ ${RandomSymbol} ]* ebinary 🄵
│• *[ ${RandomSymbol} ]* dbinary 🄵
│• *[ ${RandomSymbol} ]* ssweb 🄵
│• *[ ${RandomSymbol} ]* quoted 🄵
│• *[ ${RandomSymbol} ]* translate 🄵
└┈─────────────────⏣

❐ *L I S T* 
│• *[ ${RandomSymbol} ]* listprem 🄵
│• *[ ${RandomSymbol} ]* listowner 🄵
│• *[ ${RandomSymbol} ]* liststicker 🄵
│• *[ ${RandomSymbol} ]* listimage 🄵
│• *[ ${RandomSymbol} ]* listvideo 🄵
│• *[ ${RandomSymbol} ]* listvn 🄵
│• *[ ${RandomSymbol} ]* listapk 🄵
│• *[ ${RandomSymbol} ]* listzip 🄵
│• *[ ${RandomSymbol} ]* listpdf 🄵
│• *[ ${RandomSymbol} ]* listbadword 🄵
│• *[ ${RandomSymbol} ]* listpc 🄵
│• *[ ${RandomSymbol} ]* listgc 🄵
└┈─────────────────⏣

❐ *R A N D O M - P H O T O*
│• *[ ${RandomSymbol} ]* aesthetic 🄵
│• *[ ${RandomSymbol} ]* coffee 🄵
│• *[ ${RandomSymbol} ]* wikimedia 🄵
│• *[ ${RandomSymbol} ]* wallpaper 🄵
│• *[ ${RandomSymbol} ]* art 🄵
│• *[ ${RandomSymbol} ]* bts 🄵
│• *[ ${RandomSymbol} ]* dogwoof 🄵
│• *[ ${RandomSymbol} ]* catmeow 🄵
│• *[ ${RandomSymbol} ]* lizardpic 🄵
│• *[ ${RandomSymbol} ]* goosebird 🄵
│• *[ ${RandomSymbol} ]* 8ballpool 🄵
│• *[ ${RandomSymbol} ]* cosplay 🄵
│• *[ ${RandomSymbol} ]* hacker 🄵
│• *[ ${RandomSymbol} ]* cyber 🄵
│• *[ ${RandomSymbol} ]* gamewallpaper 🄵
│• *[ ${RandomSymbol} ]* islamic 🄵
│• *[ ${RandomSymbol} ]* jennie 🄵
│• *[ ${RandomSymbol} ]* jiso 🄵
│• *[ ${RandomSymbol} ]* satanic 🄵
│• *[ ${RandomSymbol} ]* justina 🄵
│• *[ ${RandomSymbol} ]* cartoon 🄵
│• *[ ${RandomSymbol} ]* pentol 🄵
│• *[ ${RandomSymbol} ]* cat 🄵
│• *[ ${RandomSymbol} ]* kpop 🄵
│• *[ ${RandomSymbol} ]* exo 🄵
│• *[ ${RandomSymbol} ]* lisa 🄵
│• *[ ${RandomSymbol} ]* space 🄵
│• *[ ${RandomSymbol} ]* car 🄵
│• *[ ${RandomSymbol} ]* technology 🄵
│• *[ ${RandomSymbol} ]* bike 🄵
│• *[ ${RandomSymbol} ]* shortquote 🄵
│• *[ ${RandomSymbol} ]* antiwork 🄵
│• *[ ${RandomSymbol} ]* hacking 🄵
│• *[ ${RandomSymbol} ]* boneka 🄵
│• *[ ${RandomSymbol} ]* rose 🄵
│• *[ ${RandomSymbol} ]* ryujin 🄵
│• *[ ${RandomSymbol} ]* ulzzangboy 🄵
│• *[ ${RandomSymbol} ]* ulzzanggirl 🄵
│• *[ ${RandomSymbol} ]* wallml 🄵
│• *[ ${RandomSymbol} ]* wallphone 🄵
│• *[ ${RandomSymbol} ]* mountain 🄵
│• *[ ${RandomSymbol} ]* goose 🄵
│• *[ ${RandomSymbol} ]* profilepic 🄵
│• *[ ${RandomSymbol} ]* couplepp 🄵
│• *[ ${RandomSymbol} ]* programming 🄵
│• *[ ${RandomSymbol} ]* pubg 🄵
│• *[ ${RandomSymbol} ]* blackpink 🄵
│• *[ ${RandomSymbol} ]* randomboy 🄵  
│• *[ ${RandomSymbol} ]* randomgirl 🄵
│• *[ ${RandomSymbol} ]* hijab 🄵  
│• *[ ${RandomSymbol} ]* chinese 🄵
│• *[ ${RandomSymbol} ]* indo 🄵
│• *[ ${RandomSymbol} ]* japanese 🄵
│• *[ ${RandomSymbol} ]* korean 🄵
│• *[ ${RandomSymbol} ]* malay 🄵
│• *[ ${RandomSymbol} ]* thai 🄵
│• *[ ${RandomSymbol} ]* vietnamese 🄵
└┈─────────────────⏣

❐ *R A N D O M - V I D E O*
│• *[ ${RandomSymbol} ]* tiktokgirl 🄵
│• *[ ${RandomSymbol} ]* tiktoknukthy 🄵
│• *[ ${RandomSymbol} ]* tiktokkayes 🄵
│• *[ ${RandomSymbol} ]* tiktokpanrika 🄵
│• *[ ${RandomSymbol} ]* tiktoknotnot 🄵
│• *[ ${RandomSymbol} ]* tiktokghea 🄵
│• *[ ${RandomSymbol} ]* tiktoksantuy 🄵
│• *[ ${RandomSymbol} ]* tiktokbocil 🄵
│• *[ ${RandomSymbol} ]* randomgore 🄵
└┈─────────────────⏣

❐ *S T A L K E R* 
│• *[ ${RandomSymbol} ]* tiktokstalk 🄵
│• *[ ${RandomSymbol} ]* mlstalk 🄵
│• *[ ${RandomSymbol} ]* npmstalk 🄵
│• *[ ${RandomSymbol} ]* ghstalk 🄵
│• *[ ${RandomSymbol} ]* genshin-stalk 🄵
│• *[ ${RandomSymbol} ]* honkai-stalk 🄵
│• *[ ${RandomSymbol} ]* photo-stalk 🄵
└┈─────────────────⏣

❐ *N E W S* 
│• *[ ${RandomSymbol} ]* cnn-news 🄵
│• *[ ${RandomSymbol} ]* fajar-news 🄵
│• *[ ${RandomSymbol} ]* cnbc-news 🄵
│• *[ ${RandomSymbol} ]* indozone-news 🄵
│• *[ ${RandomSymbol} ]* detik-news 🄵
│• *[ ${RandomSymbol} ]* kontan-news 🄵
│• *[ ${RandomSymbol} ]* jalantikus-meme 🄵
│• *[ ${RandomSymbol} ]* elonmu-news 🄵
│• *[ ${RandomSymbol} ]* merdeka-news 🄵
│• *[ ${RandomSymbol} ]* globalnews 🄵
│• *[ ${RandomSymbol} ]* okezonenews 🄵
│• *[ ${RandomSymbol} ]* thestar 🄵
│• *[ ${RandomSymbol} ]* googlenews 🄵
│• *[ ${RandomSymbol} ]* lk21 🄵
│• *[ ${RandomSymbol} ]* metronews 🄵
│• *[ ${RandomSymbol} ]* temposearch 🄵
│• *[ ${RandomSymbol} ]* liputan6 🄵
│• *[ ${RandomSymbol} ]* turnbackhoax 🄵
└┈─────────────────⏣

❐ *O P E N - A I* 
│• *[ ${RandomSymbol} ]* animate 🄵
│• *[ ${RandomSymbol} ]* diffusion-anime 🄵
│• *[ ${RandomSymbol} ]* bingai 🄵
│• *[ ${RandomSymbol} ]* blackboxai 🄵
│• *[ ${RandomSymbol} ]* travel-assistant 🄵
│• *[ ${RandomSymbol} ]* guru-ai 🄵
│• *[ ${RandomSymbol} ]* emi-ai 🄵
│• *[ ${RandomSymbol} ]* claude-ai 🄵
│• *[ ${RandomSymbol} ]* costume-ai 🄵
│• *[ ${RandomSymbol} ]* herc-ai 🄵
│• *[ ${RandomSymbol} ]* hercaiv1 🄵
│• *[ ${RandomSymbol} ]* hercai-cartoon 🄵
│• *[ ${RandomSymbol} ]* hercai-animefy 🄵
│• *[ ${RandomSymbol} ]* hercai-lexica 🄵
│• *[ ${RandomSymbol} ]* hercai-prodia 🄵
│• *[ ${RandomSymbol} ]* hercai-simurg 🄵
│• *[ ${RandomSymbol} ]* hercai-raava 🄵
│• *[ ${RandomSymbol} ]* hercai-shonin 🄵
│• *[ ${RandomSymbol} ]* realistic 🄵
│• *[ ${RandomSymbol} ]* 3dmodel 🄵
│• *[ ${RandomSymbol} ]* openai-indo 🄵
│• *[ ${RandomSymbol} ]* indo-ai 🄵
│• *[ ${RandomSymbol} ]* diffusion 🄵
│• *[ ${RandomSymbol} ]* photoleap 🄵
│• *[ ${RandomSymbol} ]* openai 🄵
│• *[ ${RandomSymbol} ]* dalle 🄵
│• *[ ${RandomSymbol} ]* ai 🄵
│• *[ ${RandomSymbol} ]* remini 🄵
│• *[ ${RandomSymbol} ]* simi 🄵
│• *[ ${RandomSymbol} ]* removebg 🄵
│• *[ ${RandomSymbol} ]* tozombie 🄵
│• *[ ${RandomSymbol} ]* toanime 🄵
│• *[ ${RandomSymbol} ]* lora 🄵
│• *[ ${RandomSymbol} ]* lorasearch 🄵
│• *[ ${RandomSymbol} ]* loracheckpoint 🄵
│• *[ ${RandomSymbol} ]* text2speech 🄵
└┈─────────────────⏣

❐ *G A M E* 
│• *[ ${RandomSymbol} ]* truth 🄵
│• *[ ${RandomSymbol} ]* dare 🄵
│• *[ ${RandomSymbol} ]* suit 🄵
│• *[ ${RandomSymbol} ]* tictactoe 🄵
│• *[ ${RandomSymbol} ]* werewolf 🄵
│• *[ ${RandomSymbol} ]* math 🄵
│• *[ ${RandomSymbol} ]* mc 🄵
│• *[ ${RandomSymbol} ]* giveaway 🄵
│• *[ ${RandomSymbol} ]* uno 🄵
│• *[ ${RandomSymbol} ]* freefire_pet 🄵
│• *[ ${RandomSymbol} ]* freefire_character 🄵
│• *[ ${RandomSymbol} ]* freefire_news 🄵
│• *[ ${RandomSymbol} ]* genshin-sheets 🄵
│• *[ ${RandomSymbol} ]* honkai-sheets 🄵
│• *[ ${RandomSymbol} ]* wuwa-sheets 🄵
│• *[ ${RandomSymbol} ]* zzz-sheets 🄵
│• *[ ${RandomSymbol} ]* wuwa-cards 🄵
│• *[ ${RandomSymbol} ]* samp-info 🄵
│• *[ ${RandomSymbol} ]* valorant-maps 🄵
│• *[ ${RandomSymbol} ]* valorant-weapons 🄵
│• *[ ${RandomSymbol} ]* osu-profile 🄵
│• *[ ${RandomSymbol} ]* bluearchive 🄵
│• *[ ${RandomSymbol} ]* bluearchive-search 🄵
└┈─────────────────⏣

❐ *S A M P*
│• *[ ${RandomSymbol} ]* myprofil 🄵
│• *[ ${RandomSymbol} ]* reg 🄵
│• *[ ${RandomSymbol} ]* listplayers  🄾
│• *[ ${RandomSymbol} ]* listucp  🄾
│• *[ ${RandomSymbol} ]* addcs  🄾
│• *[ ${RandomSymbol} ]* delcs  🄾
│• *[ ${RandomSymbol} ]* setadmin  🄾
│• *[ ${RandomSymbol} ]* unsetadmin  🄾
│• *[ ${RandomSymbol} ]* setadminname  🄾
│• *[ ${RandomSymbol} ]* changename  🄾
│• *[ ${RandomSymbol} ]* changeucp  🄾
│• *[ ${RandomSymbol} ]* addwl  🄾
│• *[ ${RandomSymbol} ]* delwl  🄾
│• *[ ${RandomSymbol} ]* cekucp  🄾
│• *[ ${RandomSymbol} ]* getplayerip  🄾
│• *[ ${RandomSymbol} ]* ban  🄾
│• *[ ${RandomSymbol} ]* banip  🄾
└┈─────────────────⏣

❐ *F U N - M E N U*
│• *[ ${RandomSymbol} ]* define 🄵
│• *[ ${RandomSymbol} ]* readmore 🄵
│• *[ ${RandomSymbol} ]* fact 🄵
│• *[ ${RandomSymbol} ]* couple 🄵
│• *[ ${RandomSymbol} ]* soulmate 🄵
│• *[ ${RandomSymbol} ]* stupidcheck 🄵
│• *[ ${RandomSymbol} ]* handsomecheck 🄵
│• *[ ${RandomSymbol} ]* uncleancheck 🄵
│• *[ ${RandomSymbol} ]* hotcheck 🄵
│• *[ ${RandomSymbol} ]* smartcheck 🄵
│• *[ ${RandomSymbol} ]* greatcheck 🄵
│• *[ ${RandomSymbol} ]* evilcheck 🄵
│• *[ ${RandomSymbol} ]* dogcheck 🄵
│• *[ ${RandomSymbol} ]* coolcheck 🄵
│• *[ ${RandomSymbol} ]* waifucheck 🄵
│• *[ ${RandomSymbol} ]* awesomecheck 🄵
│• *[ ${RandomSymbol} ]* gaycheck 🄵
│• *[ ${RandomSymbol} ]* cutecheck 🄵
│• *[ ${RandomSymbol} ]* lesbiancheck 🄵
│• *[ ${RandomSymbol} ]* hornycheck 🄵
│• *[ ${RandomSymbol} ]* prettycheck 🄵
│• *[ ${RandomSymbol} ]* lovelycheck 🄵
│• *[ ${RandomSymbol} ]* uglycheck 🄵
│• *[ ${RandomSymbol} ]* pick 🄵
│• *[ ${RandomSymbol} ]* pickupline 🄵
│• *[ ${RandomSymbol} ]* quotes 🄵
│• *[ ${RandomSymbol} ]* can 🄵
│• *[ ${RandomSymbol} ]* is 🄵
│• *[ ${RandomSymbol} ]* when 🄵
│• *[ ${RandomSymbol} ]* where 🄵
│• *[ ${RandomSymbol} ]* what 🄵
│• *[ ${RandomSymbol} ]* how 🄵
│• *[ ${RandomSymbol} ]* rate 🄵
│• *[ ${RandomSymbol} ]* cry 🄵
│• *[ ${RandomSymbol} ]* kill 🄵
│• *[ ${RandomSymbol} ]* hug 🄵
│• *[ ${RandomSymbol} ]* pat 🄵
│• *[ ${RandomSymbol} ]* lick 🄵 
│• *[ ${RandomSymbol} ]* kiss 🄵
│• *[ ${RandomSymbol} ]* bite 🄵
│• *[ ${RandomSymbol} ]* yeet 🄵
│• *[ ${RandomSymbol} ]* bully 🄵
│• *[ ${RandomSymbol} ]* bonk 🄵
│• *[ ${RandomSymbol} ]* wink 🄵
│• *[ ${RandomSymbol} ]* poke 🄵
│• *[ ${RandomSymbol} ]* nom 🄵
│• *[ ${RandomSymbol} ]* slap 🄵
│• *[ ${RandomSymbol} ]* smile 🄵 
│• *[ ${RandomSymbol} ]* wave 🄵
│• *[ ${RandomSymbol} ]* awoo 🄵
│• *[ ${RandomSymbol} ]* blush 🄵
│• *[ ${RandomSymbol} ]* smug 🄵
│• *[ ${RandomSymbol} ]* glomp 🄵 
│• *[ ${RandomSymbol} ]* happy 🄵
│• *[ ${RandomSymbol} ]* dance 🄵
│• *[ ${RandomSymbol} ]* cringe 🄵
│• *[ ${RandomSymbol} ]* cuddle 🄵
│• *[ ${RandomSymbol} ]* highfive 🄵 
│• *[ ${RandomSymbol} ]* handhold 🄵
│• *[ ${RandomSymbol} ]* spank 🄵
│• *[ ${RandomSymbol} ]* tickle 🄵
│• *[ ${RandomSymbol} ]* feed 🄵
│• *[ ${RandomSymbol} ]* checkme 🄵
│• *[ ${RandomSymbol} ]* sound1 - sound161 🄵
└┈─────────────────⏣

❐ *S T I C K E R* 
│• *[ ${RandomSymbol} ]* goose 🄵
│• *[ ${RandomSymbol} ]* woof 🄵
│• *[ ${RandomSymbol} ]* 8ball 🄵
│• *[ ${RandomSymbol} ]* lizard 🄵
│• *[ ${RandomSymbol} ]* meow 🄵
│• *[ ${RandomSymbol} ]* gura 🄵
│• *[ ${RandomSymbol} ]* telestick 🄵
│• *[ ${RandomSymbol} ]* ttp 🄵
└┈─────────────────⏣

❐ *A N I M E* 
│• *[ ${RandomSymbol} ]* stickhandhold 🄵
│• *[ ${RandomSymbol} ]* stickshinobu 🄵
│• *[ ${RandomSymbol} ]* stickcuddle 🄵
│• *[ ${RandomSymbol} ]* stickhighfive 🄵
│• *[ ${RandomSymbol} ]* stickdance 🄵
│• *[ ${RandomSymbol} ]* stickcringe 🄵
│• *[ ${RandomSymbol} ]* stickhappy 🄵
│• *[ ${RandomSymbol} ]* stickglomp 🄵
│• *[ ${RandomSymbol} ]* sticksmug 🄵
│• *[ ${RandomSymbol} ]* stickblush 🄵
│• *[ ${RandomSymbol} ]* stickawoo 🄵
│• *[ ${RandomSymbol} ]* stickwave 🄵
│• *[ ${RandomSymbol} ]* sticksmile 🄵
│• *[ ${RandomSymbol} ]* stickslap 🄵
│• *[ ${RandomSymbol} ]* stickpoke 🄵
│• *[ ${RandomSymbol} ]* stickwink 🄵
│• *[ ${RandomSymbol} ]* stickbonk 🄵
│• *[ ${RandomSymbol} ]* stickbully 🄵
│• *[ ${RandomSymbol} ]* stickyeet 🄵
│• *[ ${RandomSymbol} ]* stickbike 🄵
│• *[ ${RandomSymbol} ]* stickkiss 🄵
│• *[ ${RandomSymbol} ]* sticklick 🄵
│• *[ ${RandomSymbol} ]* stickpat 🄵
│• *[ ${RandomSymbol} ]* stickhug 🄵
│• *[ ${RandomSymbol} ]* stickkill 🄵
│• *[ ${RandomSymbol} ]* stickcry 🄵
│• *[ ${RandomSymbol} ]* stickspank 🄵
│• *[ ${RandomSymbol} ]* sticktickle 🄵
│• *[ ${RandomSymbol} ]* traceanime 🄵
│• *[ ${RandomSymbol} ]* animesearch 🄵
│• *[ ${RandomSymbol} ]* akira 🄵
│• *[ ${RandomSymbol} ]* akiyama 🄵
│• *[ ${RandomSymbol} ]* ana 🄵
│• *[ ${RandomSymbol} ]* asuna 🄵
│• *[ ${RandomSymbol} ]* ayuzawa 🄵
│• *[ ${RandomSymbol} ]* boruto 🄵
│• *[ ${RandomSymbol} ]* chiho 🄵
│• *[ ${RandomSymbol} ]* chitoge 🄵
│• *[ ${RandomSymbol} ]* cosplayloli 🄵
│• *[ ${RandomSymbol} ]* cosplaysagiri 🄵
│• *[ ${RandomSymbol} ]* deidara 🄵
│• *[ ${RandomSymbol} ]* doraemon 🄵
│• *[ ${RandomSymbol} ]* elaina 🄵
│• *[ ${RandomSymbol} ]* emilia 🄵
│• *[ ${RandomSymbol} ]* erza 🄵
│• *[ ${RandomSymbol} ]* gremory 🄵
│• *[ ${RandomSymbol} ]* hestia 🄵
│• *[ ${RandomSymbol} ]* husbu 🄵
│• *[ ${RandomSymbol} ]* inori 🄵
│• *[ ${RandomSymbol} ]* isuzu 🄵
│• *[ ${RandomSymbol} ]* itachi 🄵
│• *[ ${RandomSymbol} ]* itori 🄵
│• *[ ${RandomSymbol} ]* kaga 🄵
│• *[ ${RandomSymbol} ]* kagura 🄵
│• *[ ${RandomSymbol} ]* kakasih 🄵
│• *[ ${RandomSymbol} ]* kaori 🄵
│• *[ ${RandomSymbol} ]* keneki 🄵
│• *[ ${RandomSymbol} ]* kotori 🄵
│• *[ ${RandomSymbol} ]* kurumi 🄵
│• *[ ${RandomSymbol} ]* loli 🄵
│• *[ ${RandomSymbol} ]* loli2 🄵
│• *[ ${RandomSymbol} ]* madara 🄵
│• *[ ${RandomSymbol} ]* megumin 🄵
│• *[ ${RandomSymbol} ]* mikasa 🄵
│• *[ ${RandomSymbol} ]* mikey 🄵
│• *[ ${RandomSymbol} ]* miku 🄵
│• *[ ${RandomSymbol} ]* minato 🄵
│• *[ ${RandomSymbol} ]* naruto 🄵
│• *[ ${RandomSymbol} ]* neko 🄵
│• *[ ${RandomSymbol} ]* nekonime 🄵
│• *[ ${RandomSymbol} ]* nezuko 🄵
│• *[ ${RandomSymbol} ]* onepiece 🄵
│• *[ ${RandomSymbol} ]* pokemon 🄵
│• *[ ${RandomSymbol} ]* randomnime 🄵
│• *[ ${RandomSymbol} ]* randomnime2 🄵
│• *[ ${RandomSymbol} ]* rize 🄵
│• *[ ${RandomSymbol} ]* sagiri 🄵
│• *[ ${RandomSymbol} ]* sakura 🄵
│• *[ ${RandomSymbol} ]* sasuke 🄵
│• *[ ${RandomSymbol} ]* shina 🄵
│• *[ ${RandomSymbol} ]* shinka 🄵
│• *[ ${RandomSymbol} ]* shinomiya 🄵
│• *[ ${RandomSymbol} ]* shizuka 🄵
│• *[ ${RandomSymbol} ]* shota 🄵
│• *[ ${RandomSymbol} ]* tejina 🄵
│• *[ ${RandomSymbol} ]* toukachan 🄵
│• *[ ${RandomSymbol} ]* tsunade 🄵
│• *[ ${RandomSymbol} ]* waifu 🄵
│• *[ ${RandomSymbol} ]* waifu2 🄵
│• *[ ${RandomSymbol} ]* animewall 🄵
│• *[ ${RandomSymbol} ]* yotsuba 🄵
│• *[ ${RandomSymbol} ]* yuki 🄵
│• *[ ${RandomSymbol} ]* yulibocil 🄵
│• *[ ${RandomSymbol} ]* yumeko 🄵
│• *[ ${RandomSymbol} ]* 8ball 🄵
│• *[ ${RandomSymbol} ]* animeawoo 🄵
│• *[ ${RandomSymbol} ]* animemegumin 🄵
│• *[ ${RandomSymbol} ]* animeshinobu 🄵
│• *[ ${RandomSymbol} ]* animehandhold 🄵
│• *[ ${RandomSymbol} ]* animehighfive 🄵
│• *[ ${RandomSymbol} ]* animecringe 🄵
│• *[ ${RandomSymbol} ]* animedance 🄵
│• *[ ${RandomSymbol} ]* animehappy 🄵
│• *[ ${RandomSymbol} ]* animeglomp 🄵
│• *[ ${RandomSymbol} ]* animeblush 🄵
│• *[ ${RandomSymbol} ]* animesmug 🄵
│• *[ ${RandomSymbol} ]* animewave 🄵
│• *[ ${RandomSymbol} ]* animesmille 🄵
│• *[ ${RandomSymbol} ]* animepoke 🄵
│• *[ ${RandomSymbol} ]* animewink 🄵
│• *[ ${RandomSymbol} ]* animebonk 🄵
│• *[ ${RandomSymbol} ]* animebully 🄵
│• *[ ${RandomSymbol} ]* animeyeet 🄵
│• *[ ${RandomSymbol} ]* animebite 🄵
│• *[ ${RandomSymbol} ]* animelick 🄵
│• *[ ${RandomSymbol} ]* animekill 🄵
│• *[ ${RandomSymbol} ]* animecry 🄵
│• *[ ${RandomSymbol} ]* animewlp 🄵
│• *[ ${RandomSymbol} ]* animekiss 🄵
│• *[ ${RandomSymbol} ]* animehug 🄵
│• *[ ${RandomSymbol} ]* animeneko 🄵
│• *[ ${RandomSymbol} ]* animepat 🄵
│• *[ ${RandomSymbol} ]* animeslap 🄵
│• *[ ${RandomSymbol} ]* animecuddle 🄵
│• *[ ${RandomSymbol} ]* animewaifu 🄵
│• *[ ${RandomSymbol} ]* animenom 🄵
│• *[ ${RandomSymbol} ]* animefoxgirl 🄵
│• *[ ${RandomSymbol} ]* animegecg 🄵
│• *[ ${RandomSymbol} ]* animetickle 🄵
│• *[ ${RandomSymbol} ]* animefeed 🄵
│• *[ ${RandomSymbol} ]* animeavatar 🄵
│• *[ ${RandomSymbol} ]* animesearch 🄵
│• *[ ${RandomSymbol} ]* anime-tierlist 🄵
│• *[ ${RandomSymbol} ]* animeorder 🄵
│• *[ ${RandomSymbol} ]* avatar 🄵
│• *[ ${RandomSymbol} ]* husbando 🄵
│• *[ ${RandomSymbol} ]* kitsune 🄵
│• *[ ${RandomSymbol} ]* shinobu 🄵
│• *[ ${RandomSymbol} ]* fox_girl 🄵
│• *[ ${RandomSymbol} ]* gecg 🄵
│• *[ ${RandomSymbol} ]* vtuber 🄵
│• *[ ${RandomSymbol} ]* animasu-search 🄵
│• *[ ${RandomSymbol} ]* animasu-ongoing 🄵
│• *[ ${RandomSymbol} ]* animasu-top 🄵
│• *[ ${RandomSymbol} ]* animasu-popular 🄵
│• *[ ${RandomSymbol} ]* animasu-donghua 🄵
│• *[ ${RandomSymbol} ]* topanime 🄵
│• *[ ${RandomSymbol} ]* mangasearch 🄵
│• *[ ${RandomSymbol} ]* charactersearch 🄵
│• *[ ${RandomSymbol} ]* 9anime 🄵
└┈─────────────────⏣

❐ *N S F W*
│• *[ ${RandomSymbol} ]* nhentai 🄵
│• *[ ${RandomSymbol} ]* hentaisearch 🄵
│• *[ ${RandomSymbol} ]* pornhubsearch 🄵
│• *[ ${RandomSymbol} ]* pornhubgif 🄵
│• *[ ${RandomSymbol} ]* yandere 🄵
│• *[ ${RandomSymbol} ]* danbooru 🄵
│• *[ ${RandomSymbol} ]* hentai 🄵
│• *[ ${RandomSymbol} ]* gifblowjob 🄵
│• *[ ${RandomSymbol} ]* hentaivid 🄵
│• *[ ${RandomSymbol} ]* hneko 🄵
│• *[ ${RandomSymbol} ]* nwaifu 🄵
│• *[ ${RandomSymbol} ]* animespank 🄵
│• *[ ${RandomSymbol} ]* trap 🄵
│• *[ ${RandomSymbol} ]* blowjob 🄵
│• *[ ${RandomSymbol} ]* cuckold 🄵
│• *[ ${RandomSymbol} ]* milf 🄵
│• *[ ${RandomSymbol} ]* eba 🄵
│• *[ ${RandomSymbol} ]* pussy 🄵
│• *[ ${RandomSymbol} ]* yuri 🄵
│• *[ ${RandomSymbol} ]* zettai 🄵
│• *[ ${RandomSymbol} ]* genshin 🄵
│• *[ ${RandomSymbol} ]* swimsuit 🄵
│• *[ ${RandomSymbol} ]* ero 🄵
│• *[ ${RandomSymbol} ]* schoolswimsuit 🄵
│• *[ ${RandomSymbol} ]* white 🄵
│• *[ ${RandomSymbol} ]* barefoot 🄵
│• *[ ${RandomSymbol} ]* touhou 🄵
│• *[ ${RandomSymbol} ]* gamecg 🄵
│• *[ ${RandomSymbol} ]* hololive 🄵
│• *[ ${RandomSymbol} ]* uncensored 🄵
│• *[ ${RandomSymbol} ]* sunglasses 🄵
│• *[ ${RandomSymbol} ]* glasses 🄵
│• *[ ${RandomSymbol} ]* weapon 🄵
│• *[ ${RandomSymbol} ]* shirtlift 🄵
│• *[ ${RandomSymbol} ]* chain 🄵
│• *[ ${RandomSymbol} ]* fingering 🄵
│• *[ ${RandomSymbol} ]* flatchest 🄵
│• *[ ${RandomSymbol} ]* torncloth 🄵
│• *[ ${RandomSymbol} ]* bondage 🄵
│• *[ ${RandomSymbol} ]* demon 🄵
│• *[ ${RandomSymbol} ]* pantypull 🄵
│• *[ ${RandomSymbol} ]* headdress 🄵
│• *[ ${RandomSymbol} ]* headphone 🄵
│• *[ ${RandomSymbol} ]* anusview 🄵
│• *[ ${RandomSymbol} ]* shorts 🄵
│• *[ ${RandomSymbol} ]* stokings 🄵
│• *[ ${RandomSymbol} ]* topless 🄵
│• *[ ${RandomSymbol} ]* beach 🄵
│• *[ ${RandomSymbol} ]* bunnygirl 🄵
│• *[ ${RandomSymbol} ]* bunnyear 🄵
│• *[ ${RandomSymbol} ]* vampire 🄵
│• *[ ${RandomSymbol} ]* nobra 🄵
│• *[ ${RandomSymbol} ]* bikini 🄵
│• *[ ${RandomSymbol} ]* whitehair 🄵
│• *[ ${RandomSymbol} ]* blonde 🄵
│• *[ ${RandomSymbol} ]* pinkhair 🄵
│• *[ ${RandomSymbol} ]* bed 🄵
│• *[ ${RandomSymbol} ]* oppai 🄵
│• *[ ${RandomSymbol} ]* ponytail 🄵
│• *[ ${RandomSymbol} ]* nude 🄵
│• *[ ${RandomSymbol} ]* dress 🄵
│• *[ ${RandomSymbol} ]* underwear 🄵
│• *[ ${RandomSymbol} ]* foxgirl 🄵
│• *[ ${RandomSymbol} ]* uniform 🄵
│• *[ ${RandomSymbol} ]* skirt 🄵
│• *[ ${RandomSymbol} ]* breast 🄵
│• *[ ${RandomSymbol} ]* twintail 🄵 
│• *[ ${RandomSymbol} ]* spreadpussy  🄵
│• *[ ${RandomSymbol} ]* seethrough 🄵
│• *[ ${RandomSymbol} ]* breasthold 🄵
│• *[ ${RandomSymbol} ]* fateseries 🄵
│• *[ ${RandomSymbol} ]* spreadlegs 🄵
│• *[ ${RandomSymbol} ]* openshirt 🄵
│• *[ ${RandomSymbol} ]* headband 🄵
│• *[ ${RandomSymbol} ]* nipples 🄵
│• *[ ${RandomSymbol} ]* erectnipples 🄵
│• *[ ${RandomSymbol} ]* greenhair 🄵
│• *[ ${RandomSymbol} ]* wolfgirl 🄵
│• *[ ${RandomSymbol} ]* catgirl 🄵
│• *[ ${RandomSymbol} ]* rule34 🄵
│• *[ ${RandomSymbol} ]* kcrandom 🄵
└┈─────────────────⏣

❐ *D A T A B A S E* 
│• *[ ${RandomSymbol} ]* setcmd 🄾
│• *[ ${RandomSymbol} ]* delcmd 🄾
│• *[ ${RandomSymbol} ]* listcmd 🄵
│• *[ ${RandomSymbol} ]* lockcmd 🄾
│• *[ ${RandomSymbol} ]* addmsg 🄾
│• *[ ${RandomSymbol} ]* delmsg 🄾
│• *[ ${RandomSymbol} ]* getmsg 🄵
│• *[ ${RandomSymbol} ]* listmsg 🄵
└┈─────────────────⏣

❐ *P T E R O D A C T Y L* 
│• *[ ${RandomSymbol} ]* 1gb 🄾
│• *[ ${RandomSymbol} ]* 2gb 🄾
│• *[ ${RandomSymbol} ]* 3gb 🄾
│• *[ ${RandomSymbol} ]* 4gb 🄾
│• *[ ${RandomSymbol} ]* 5gb 🄾
│• *[ ${RandomSymbol} ]* 6gb 🄾
│• *[ ${RandomSymbol} ]* 7gb 🄾
│• *[ ${RandomSymbol} ]* 8gb 🄾
│• *[ ${RandomSymbol} ]* 9gb 🄾
│• *[ ${RandomSymbol} ]* 10gb 🄾
│• *[ ${RandomSymbol} ]* 11gb 🄾
│• *[ ${RandomSymbol} ]* 12gb 🄾
│• *[ ${RandomSymbol} ]* 13gb 🄾
│• *[ ${RandomSymbol} ]* 14gb 🄾
│• *[ ${RandomSymbol} ]* 15gb 🄾
│• *[ ${RandomSymbol} ]* panel 🄾
│• *[ ${RandomSymbol} ]* cpanel 🄾
│• *[ ${RandomSymbol} ]* reinstall 🄾
│• *[ ${RandomSymbol} ]* delusr 🄾
│• *[ ${RandomSymbol} ]* detusr 🄾
│• *[ ${RandomSymbol} ]* listsrv 🄾
│• *[ ${RandomSymbol} ]* listusr 🄾
│• *[ ${RandomSymbol} ]* delsrv 🄾
│• *[ ${RandomSymbol} ]* delusr 🄾
│• *[ ${RandomSymbol} ]* updatesrv 🄾
│• *[ ${RandomSymbol} ]* addusr 🄾
│• *[ ${RandomSymbol} ]* addsrv 🄾
│• *[ ${RandomSymbol} ]* listadmin 🄾
│• *[ ${RandomSymbol} ]* suspend 🄾
│• *[ ${RandomSymbol} ]* unsuspend 🄾
│• *[ ${RandomSymbol} ]* startsrv 🄾
│• *[ ${RandomSymbol} ]* restartsrv 🄾
│• *[ ${RandomSymbol} ]* stopsrv 🄾
└┈─────────────────⏣

❐ *P T E R O D A C T Y L - I N S T A L L* 
│• *[ ${RandomSymbol} ]* installthema 🄾
│• *[ ${RandomSymbol} ]* installpanel 🄾
│• *[ ${RandomSymbol} ]* uninstallthema 🄾
│• *[ ${RandomSymbol} ]* uninstallpanel 🄾
│• *[ ${RandomSymbol} ]* startwings 🄾
│• *[ ${RandomSymbol} ]* createnode 🄾
└┈─────────────────⏣

❐ *S T O R E* 
│• *[ ${RandomSymbol} ]* list 🄵
│• *[ ${RandomSymbol} ]* store 🄵
│• *[ ${RandomSymbol} ]* shop 🄵
│• *[ ${RandomSymbol} ]* addlist 🄾
│• *[ ${RandomSymbol} ]* dellist 🄾
└┈─────────────────⏣

❐ *D I G I T A L - O C E A N* 
│• *[ ${RandomSymbol} ]* sisadroplet 🄾
│• *[ ${RandomSymbol} ]* restartvps 🄾
│• *[ ${RandomSymbol} ]* turnoff 🄾
│• *[ ${RandomSymbol} ]* turnon 🄾
│• *[ ${RandomSymbol} ]* rebuild 🄾
│• *[ ${RandomSymbol} ]* deldroplet 🄾
│• *[ ${RandomSymbol} ]* listdroplet 🄾
│• *[ ${RandomSymbol} ]* cekdroplet 🄾
│• *[ ${RandomSymbol} ]* vps1g1c 🄾
│• *[ ${RandomSymbol} ]* vps2g1c 🄾
│• *[ ${RandomSymbol} ]* vps2g2c 🄾
│• *[ ${RandomSymbol} ]* vps4g2c 🄾
│• *[ ${RandomSymbol} ]* vps8g4c 🄾
│• *[ ${RandomSymbol} ]* sendvps 🄾
└┈─────────────────⏣

❐ *L I N O D E*
│• *[ ${RandomSymbol} ]* linode2gb 🄾
│• *[ ${RandomSymbol} ]* linode4gb 🄾
│• *[ ${RandomSymbol} ]* linode8gb 🄾
│• *[ ${RandomSymbol} ]* linode16gb 🄾
│• *[ ${RandomSymbol} ]* deletelinode🄾
│• *[ ${RandomSymbol} ]* sisalinode 🄾
│• *[ ${RandomSymbol} ]* rebuildlinode 🄾
│• *[ ${RandomSymbol} ]* cekvpslinode 🄾
│• *[ ${RandomSymbol} ]* saldolinode 🄾
│• *[ ${RandomSymbol} ]* resetpassword 🄾
│• *[ ${RandomSymbol} ]* listlinode 🄾
│• *[ ${RandomSymbol} ]* offlinode 🄾
│• *[ ${RandomSymbol} ]* onlinode 🄾
│• *[ ${RandomSymbol} ]* rebootlinode 🄾
└┈─────────────────⏣

❐ *R E L I G I O N* 
│• *[ ${RandomSymbol} ]* bible 🄵
│• *[ ${RandomSymbol} ]* quran 🄵
│• *[ ${RandomSymbol} ]* hadist 🄵
│• *[ ${RandomSymbol} ]* gita 🄵
└┈─────────────────⏣

❐ *L I B R A R Y* 
│• *[ ${RandomSymbol} ]* cerpen-anak 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasadaerah 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasainggris 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasajawa 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasasunda🄵
│• *[ ${RandomSymbol} ]* cerpen-budaya 🄵
│• *[ ${RandomSymbol} ]* cerpen-cinta 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintaislami 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintapertama 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintaromantis 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintasedih 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintasegitiga 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintasejati 🄵
│• *[ ${RandomSymbol} ]* cerpen-galau 🄵
│• *[ ${RandomSymbol} ]* cerpen-gokil 🄵
│• *[ ${RandomSymbol} ]* cerpen-inspiratif 🄵
│• *[ ${RandomSymbol} ]* cerpen-jepang 🄵
│• *[ ${RandomSymbol} ]* cerpen-kehidupan
│• *[ ${RandomSymbol} ]* cerpen-keluarga 🄵
│• *[ ${RandomSymbol} ]* cerpen-kisahnyata 🄵
│• *[ ${RandomSymbol} ]* cerpen-korea 🄵
│• *[ ${RandomSymbol} ]* cerpen-kristen 🄵
│• *[ ${RandomSymbol} ]* cerpen-liburan 🄵
│• *[ ${RandomSymbol} ]* cerpen-malaysia 🄵
│• *[ ${RandomSymbol} ]* cerpen-mengharukan 🄵
│• *[ ${RandomSymbol} ]* cerpen-misteri 🄵
│• *[ ${RandomSymbol} ]* cerpen-motivasi 🄵
│• *[ ${RandomSymbol} ]* cerpen-nasihat 🄵
│• *[ ${RandomSymbol} ]* cerpen-nasionalisme 🄵
│• *[ ${RandomSymbol} ]* cerpen-olahraga 🄵
│• *[ ${RandomSymbol} ]* cerpen-patahhati
│• *[ ${RandomSymbol} ]* cerpen-penantian 🄵
│• *[ ${RandomSymbol} ]* cerpen-pendidikan 🄵
│• *[ ${RandomSymbol} ]* cerpen-pengalaman 🄵
│• *[ ${RandomSymbol} ]* cerpen-pengorbanan 🄵
│• *[ ${RandomSymbol} ]* cerpen-penyesalan 🄵
│• *[ ${RandomSymbol} ]* cerpen-perjuangan 🄵
│• *[ ${RandomSymbol} ]* cerpen-perpisahan 🄵
│• *[ ${RandomSymbol} ]* cerpen-persahabatan 🄵
│• *[ ${RandomSymbol} ]* cerpen-petualangan 🄵
│• *[ ${RandomSymbol} ]* cerpen-ramadhan 🄵
│• *[ ${RandomSymbol} ]* cerpen-remaja 🄵
│• *[ ${RandomSymbol} ]* cerpen-rindu 🄵
│• *[ ${RandomSymbol} ]* cerpen-rohani 🄵
│• *[ ${RandomSymbol} ]* cerpen-romantis 🄵
│• *[ ${RandomSymbol} ]* cerpen-sastra 🄵
│• *[ ${RandomSymbol} ]* cerpen-sedih 🄵
│• *[ ${RandomSymbol} ]* cerpen-sejarah 🄵
└┈─────────────────⏣

❐ *C R Y P T O* 
│• *[ ${RandomSymbol} ]* crypto 🄵
│• *[ ${RandomSymbol} ]* crypto-historical 🄵
│• *[ ${RandomSymbol} ]* market-pairs 🄵
│• *[ ${RandomSymbol} ]* ohlcv-historical 🄵
│• *[ ${RandomSymbol} ]* ohlcv-latest 🄵
│• *[ ${RandomSymbol} ]* airdrop-list🄵
│• *[ ${RandomSymbol} ]* airdrop-details 🄵
│• *[ ${RandomSymbol} ]* crypto-categories 🄵
│• *[ ${RandomSymbol} ]* crypto-category 🄵
└┈─────────────────⏣

❐ *B U G & W A R*
│• *[ ${RandomSymbol} ]* xreact 🄿
│• *[ ${RandomSymbol} ]* x 🄿
│• *[ ${RandomSymbol} ]* x2 🄿
│• *[ ${RandomSymbol} ]* iosbug 🄿
│• *[ ${RandomSymbol} ]* iosbug2 🄿
│• *[ ${RandomSymbol} ]* xaudio 🄿
│• *[ ${RandomSymbol} ]* xaudio2 🄿
│• *[ ${RandomSymbol} ]* xsticker 🄿
│• *[ ${RandomSymbol} ]* xsticker2 🄿
│• *[ ${RandomSymbol} ]* xloc 🄿
│• *[ ${RandomSymbol} ]* xloc2 🄿
│• *[ ${RandomSymbol} ]* xlist 🄿
│• *[ ${RandomSymbol} ]* xlist2 🄿
│• *[ ${RandomSymbol} ]* xkill 🄿
│• *[ ${RandomSymbol} ]* xkill2 🄿
│• *[ ${RandomSymbol} ]* xkillgc 🄿
│• *[ ${RandomSymbol} ]* tempban 🄿
│• *[ ${RandomSymbol} ]* xcrash 🄿
│• *[ ${RandomSymbol} ]* xcrash2 🄿
│• *[ ${RandomSymbol} ]* xioscrash 🄿
│• *[ ${RandomSymbol} ]* xioscrash2 🄿
│• *[ ${RandomSymbol} ]* iosgoogle 🄿
│• *[ ${RandomSymbol} ]* iosgoogle2 🄿
│• *[ ${RandomSymbol} ]* iosq 🄿
│• *[ ${RandomSymbol} ]* amountbug 🄿
│• *[ ${RandomSymbol} ]* pmbug 🄿
│• *[ ${RandomSymbol} ]* delaybug 🄿
│• *[ ${RandomSymbol} ]* docubug 🄿
│• *[ ${RandomSymbol} ]* unlimitedbug 🄿
│• *[ ${RandomSymbol} ]* bombug 🄿
│• *[ ${RandomSymbol} ]* lagbug 🄿
│• *[ ${RandomSymbol} ]* trollybug 🄿
│• *[ ${RandomSymbol} ]* gcbug 🄿
│• *[ ${RandomSymbol} ]* delaygcbug 🄿
│• *[ ${RandomSymbol} ]* laggcbug 🄿
│• *[ ${RandomSymbol} ]* bomgcbug 🄿
│• *[ ${RandomSymbol} ]* unlimitedgcbug 🄿
│• *[ ${RandomSymbol} ]* trollygcbug 🄿
│• *[ ${RandomSymbol} ]* docugcbug 🄿
│• *[ ${RandomSymbol} ]* verif 🄿
│• *[ ${RandomSymbol} ]* banv1 🄿
│• *[ ${RandomSymbol} ]* banv2 🄿
│• *[ ${RandomSymbol} ]* banv3 🄿
│• *[ ${RandomSymbol} ]* banv4 🄿
│• *[ ${RandomSymbol} ]* banv5 🄿
│• *[ ${RandomSymbol} ]* banv6 🄿
│• *[ ${RandomSymbol} ]* unbanv1 🄿
│• *[ ${RandomSymbol} ]* unbanv2 🄿
│• *[ ${RandomSymbol} ]* unbanv3 🄿
│• *[ ${RandomSymbol} ]* unbanv4 🄿
│• *[ ${RandomSymbol} ]* unbanv5 🄿
│• *[ ${RandomSymbol} ]* bgtes 🄿
│• *[ ${RandomSymbol} ]* bugpenis 🄿
│• *[ ${RandomSymbol} ]* bugpepek 🄿
│• *[ ${RandomSymbol} ]* bijiloe 🄿
│• *[ ${RandomSymbol} ]* null-chace 🄿
│• *[ ${RandomSymbol} ]* prikitiw 🄿
│• *[ ${RandomSymbol} ]* bgstes2 🄿
│• *[ ${RandomSymbol} ]* zero-bug 🄿
│• *[ ${RandomSymbol} ]* bug-s 🄿
│• *[ ${RandomSymbol} ]* fatal-notif 🄿
│• *[ ${RandomSymbol} ]* fatal-ui 🄿
│• *[ ${RandomSymbol} ]* crash-total 🄿
│• *[ ${RandomSymbol} ]* forces-sql 🄿
│• *[ ${RandomSymbol} ]* samsung-chace 🄿
│• *[ ${RandomSymbol} ]* bug-rom 🄿
│• *[ ${RandomSymbol} ]* restart-ui 🄿
│• *[ ${RandomSymbol} ]* virg4m 🄿
│• *[ ${RandomSymbol} ]* sipilist 🄿
│• *[ ${RandomSymbol} ]* 1hit 🄿
│• *[ ${RandomSymbol} ]* mimir 🄿
│• *[ ${RandomSymbol} ]* 1shoot 🄿
│• *[ ${RandomSymbol} ]* bug-24j 🄿
│• *[ ${RandomSymbol} ]* samsung-24j 🄿
│• *[ ${RandomSymbol} ]* ios-24j 🄿
│• *[ ${RandomSymbol} ]* vios-unli 🄿
│• *[ ${RandomSymbol} ]* bug-ios 🄿
│• *[ ${RandomSymbol} ]* bug-ipong 🄿
│• *[ ${RandomSymbol} ]* bug-button 🄿
│• *[ ${RandomSymbol} ]* bug-browser 🄿
│• *[ ${RandomSymbol} ]* bug-gc 🄿
│• *[ ${RandomSymbol} ]* penghitaman 🄿
└┈─────────────────⏣

❐ *O T H E R - M E N U*
│• *[ ${RandomSymbol} ]* update 🄵
│• *[ ${RandomSymbol} ]* ping 🄵
│• *[ ${RandomSymbol} ]* menu 🄵
│• *[ ${RandomSymbol} ]* myip 🄵
│• *[ ${RandomSymbol} ]* repo 🄵
│• *[ ${RandomSymbol} ]* reportbug 🄵
│• *[ ${RandomSymbol} ]* idgroup 🄵
│• *[ ${RandomSymbol} ]* owner 🄵
│• *[ ${RandomSymbol} ]* rentbot 🄵
│• *[ ${RandomSymbol} ]* donate 🄵
│• *[ ${RandomSymbol} ]* runtime 🄵
│• *[ ${RandomSymbol} ]* checkaccount 🄵
└┈─────────────────⏣

❐ *U P L O A D E R* 
│• *[ ${RandomSymbol} ]* tourl 🄵
│• *[ ${RandomSymbol} ]* nekohime 🄵
│• *[ ${RandomSymbol} ]* top4top 🄵
└┈─────────────────⏣
`}

global.animemenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *A N I M E* 
│• *[ ${RandomSymbol} ]* stickhandhold 🄵
│• *[ ${RandomSymbol} ]* stickshinobu 🄵
│• *[ ${RandomSymbol} ]* stickcuddle 🄵
│• *[ ${RandomSymbol} ]* stickhighfive 🄵
│• *[ ${RandomSymbol} ]* stickdance 🄵
│• *[ ${RandomSymbol} ]* stickcringe 🄵
│• *[ ${RandomSymbol} ]* stickhappy 🄵
│• *[ ${RandomSymbol} ]* stickglomp 🄵
│• *[ ${RandomSymbol} ]* sticksmug 🄵
│• *[ ${RandomSymbol} ]* stickblush 🄵
│• *[ ${RandomSymbol} ]* stickawoo 🄵
│• *[ ${RandomSymbol} ]* stickwave 🄵
│• *[ ${RandomSymbol} ]* sticksmile 🄵
│• *[ ${RandomSymbol} ]* stickslap 🄵
│• *[ ${RandomSymbol} ]* stickpoke 🄵
│• *[ ${RandomSymbol} ]* stickwink 🄵
│• *[ ${RandomSymbol} ]* stickbonk 🄵
│• *[ ${RandomSymbol} ]* stickbully 🄵
│• *[ ${RandomSymbol} ]* stickyeet 🄵
│• *[ ${RandomSymbol} ]* stickbike 🄵
│• *[ ${RandomSymbol} ]* stickkiss 🄵
│• *[ ${RandomSymbol} ]* sticklick 🄵
│• *[ ${RandomSymbol} ]* stickpat 🄵
│• *[ ${RandomSymbol} ]* stickhug 🄵
│• *[ ${RandomSymbol} ]* stickkill 🄵
│• *[ ${RandomSymbol} ]* stickcry 🄵
│• *[ ${RandomSymbol} ]* stickspank 🄵
│• *[ ${RandomSymbol} ]* sticktickle 🄵
│• *[ ${RandomSymbol} ]* traceanime 
│• *[ ${RandomSymbol} ]* animesearch 🄵
│• *[ ${RandomSymbol} ]* akira 🄵
│• *[ ${RandomSymbol} ]* akiyama 🄵
│• *[ ${RandomSymbol} ]* ana 🄵
│• *[ ${RandomSymbol} ]* asuna 🄵
│• *[ ${RandomSymbol} ]* ayuzawa 🄵
│• *[ ${RandomSymbol} ]* boruto 🄵
│• *[ ${RandomSymbol} ]* chiho 🄵
│• *[ ${RandomSymbol} ]* chitoge 🄵
│• *[ ${RandomSymbol} ]* cosplayloli 🄵
│• *[ ${RandomSymbol} ]* cosplaysagiri 🄵
│• *[ ${RandomSymbol} ]* deidara 🄵
│• *[ ${RandomSymbol} ]* doraemon 🄵
│• *[ ${RandomSymbol} ]* elaina 🄵
│• *[ ${RandomSymbol} ]* emilia 🄵
│• *[ ${RandomSymbol} ]* erza 🄵
│• *[ ${RandomSymbol} ]* gremory 🄵
│• *[ ${RandomSymbol} ]* hestia 🄵
│• *[ ${RandomSymbol} ]* husbu 🄵
│• *[ ${RandomSymbol} ]* inori 🄵
│• *[ ${RandomSymbol} ]* isuzu 🄵
│• *[ ${RandomSymbol} ]* itachi 🄵
│• *[ ${RandomSymbol} ]* itori 🄵
│• *[ ${RandomSymbol} ]* kaga 🄵
│• *[ ${RandomSymbol} ]* kagura 🄵
│• *[ ${RandomSymbol} ]* kakasih 🄵
│• *[ ${RandomSymbol} ]* kaori 🄵
│• *[ ${RandomSymbol} ]* keneki 🄵
│• *[ ${RandomSymbol} ]* kotori 🄵
│• *[ ${RandomSymbol} ]* kurumi 🄵
│• *[ ${RandomSymbol} ]* loli 🄵
│• *[ ${RandomSymbol} ]* loli2 🄵
│• *[ ${RandomSymbol} ]* madara 🄵
│• *[ ${RandomSymbol} ]* megumin 🄵
│• *[ ${RandomSymbol} ]* mikasa 🄵
│• *[ ${RandomSymbol} ]* mikey 🄵
│• *[ ${RandomSymbol} ]* miku 🄵
│• *[ ${RandomSymbol} ]* minato 🄵
│• *[ ${RandomSymbol} ]* naruto 🄵
│• *[ ${RandomSymbol} ]* neko 🄵
│• *[ ${RandomSymbol} ]* nekonime 🄵
│• *[ ${RandomSymbol} ]* nezuko 🄵
│• *[ ${RandomSymbol} ]* onepiece 🄵
│• *[ ${RandomSymbol} ]* pokemon 🄵
│• *[ ${RandomSymbol} ]* randomnime 🄵
│• *[ ${RandomSymbol} ]* randomnime2 🄵
│• *[ ${RandomSymbol} ]* rize 🄵
│• *[ ${RandomSymbol} ]* sagiri 🄵
│• *[ ${RandomSymbol} ]* sakura 🄵
│• *[ ${RandomSymbol} ]* sasuke 🄵
│• *[ ${RandomSymbol} ]* shina 🄵
│• *[ ${RandomSymbol} ]* shinka 🄵
│• *[ ${RandomSymbol} ]* shinomiya 🄵
│• *[ ${RandomSymbol} ]* shizuka 🄵
│• *[ ${RandomSymbol} ]* shota 🄵
│• *[ ${RandomSymbol} ]* tejina 🄵
│• *[ ${RandomSymbol} ]* toukachan 🄵
│• *[ ${RandomSymbol} ]* tsunade 🄵
│• *[ ${RandomSymbol} ]* waifu 🄵
│• *[ ${RandomSymbol} ]* waifu2 🄵
│• *[ ${RandomSymbol} ]* animewall 🄵
│• *[ ${RandomSymbol} ]* yotsuba 🄵
│• *[ ${RandomSymbol} ]* yuki 🄵
│• *[ ${RandomSymbol} ]* yulibocil 🄵
│• *[ ${RandomSymbol} ]* yumeko 🄵
│• *[ ${RandomSymbol} ]* 8ball 🄵
│• *[ ${RandomSymbol} ]* feed 🄵
│• *[ ${RandomSymbol} ]* animeawoo 🄵
│• *[ ${RandomSymbol} ]* animemegumin 🄵
│• *[ ${RandomSymbol} ]* animeshinobu 🄵
│• *[ ${RandomSymbol} ]* animehandhold 🄵
│• *[ ${RandomSymbol} ]* animehighfive 🄵
│• *[ ${RandomSymbol} ]* animecringe 🄵
│• *[ ${RandomSymbol} ]* animedance 🄵
│• *[ ${RandomSymbol} ]* animehappy 🄵
│• *[ ${RandomSymbol} ]* animeglomp 🄵
│• *[ ${RandomSymbol} ]* animeblush 🄵
│• *[ ${RandomSymbol} ]* animesmug 🄵
│• *[ ${RandomSymbol} ]* animewave 🄵
│• *[ ${RandomSymbol} ]* animesmille 🄵
│• *[ ${RandomSymbol} ]* animepoke 🄵
│• *[ ${RandomSymbol} ]* animewink 🄵
│• *[ ${RandomSymbol} ]* animebonk 🄵
│• *[ ${RandomSymbol} ]* animebully 🄵
│• *[ ${RandomSymbol} ]* animeyeet 🄵
│• *[ ${RandomSymbol} ]* animebite 🄵
│• *[ ${RandomSymbol} ]* animelick 🄵
│• *[ ${RandomSymbol} ]* animekill 🄵
│• *[ ${RandomSymbol} ]* animecry 🄵
│• *[ ${RandomSymbol} ]* animewlp 🄵
│• *[ ${RandomSymbol} ]* animekiss 🄵
│• *[ ${RandomSymbol} ]* animehug 🄵
│• *[ ${RandomSymbol} ]* animeneko 🄵
│• *[ ${RandomSymbol} ]* animepat 🄵
│• *[ ${RandomSymbol} ]* animeslap 🄵
│• *[ ${RandomSymbol} ]* animecuddle 🄵
│• *[ ${RandomSymbol} ]* animewaifu 🄵
│• *[ ${RandomSymbol} ]* animenom 🄵
│• *[ ${RandomSymbol} ]* animefoxgirl 🄵
│• *[ ${RandomSymbol} ]* animegecg 🄵
│• *[ ${RandomSymbol} ]* animetickle 🄵
│• *[ ${RandomSymbol} ]* animefeed 🄵
│• *[ ${RandomSymbol} ]* animeavatar 🄵
│• *[ ${RandomSymbol} ]* animesearch 🄵
│• *[ ${RandomSymbol} ]* anime-tierlist 🄵
│• *[ ${RandomSymbol} ]* animeorder 🄵
│• *[ ${RandomSymbol} ]* animequote 🄵
│• *[ ${RandomSymbol} ]* avatar 🄵
│• *[ ${RandomSymbol} ]* husbando 🄵
│• *[ ${RandomSymbol} ]* kitsune 🄵
│• *[ ${RandomSymbol} ]* shinobu 🄵
│• *[ ${RandomSymbol} ]* fox_girl 🄵
│• *[ ${RandomSymbol} ]* gecg 🄵
│• *[ ${RandomSymbol} ]* vtuber 🄵
│• *[ ${RandomSymbol} ]* animasu-search 🄵
│• *[ ${RandomSymbol} ]* animasu-ongoing 🄵
│• *[ ${RandomSymbol} ]* animasu-top 🄵
│• *[ ${RandomSymbol} ]* animasu-popular 🄵
│• *[ ${RandomSymbol} ]* animasu-donghua 🄵
│• *[ ${RandomSymbol} ]* topanime 🄵
│• *[ ${RandomSymbol} ]* mangasearch 🄵
│• *[ ${RandomSymbol} ]* charactersearch 🄵
│• *[ ${RandomSymbol} ]* 9anime 🄵
└┈─────────────────⏣
`}

global.ownermenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *O W N E R - M E N U*
│• *[ ${RandomSymbol} ]* autoread 🄾
│• *[ ${RandomSymbol} ]* autobio 🄾
│• *[ ${RandomSymbol} ]* autotype 🄾
│• *[ ${RandomSymbol} ]* unavailable 🄾
│• *[ ${RandomSymbol} ]* autorecord 🄾
│• *[ ${RandomSymbol} ]* autorecordtype 🄾
│• *[ ${RandomSymbol} ]* autoswview 🄾
│• *[ ${RandomSymbol} ]* setautoblock 🄾
│• *[ ${RandomSymbol} ]* setantiforeign 🄾
│• *[ ${RandomSymbol} ]* autoblock 🄾
│• *[ ${RandomSymbol} ]* onlygc 🄾
│• *[ ${RandomSymbol} ]* onlypc 🄾
│• *[ ${RandomSymbol} ]* onlyindia 🄾
│• *[ ${RandomSymbol} ]* onlyindo 🄾
│• *[ ${RandomSymbol} ]* anticall 🄾
│• *[ ${RandomSymbol} ]* self 🄾
│• *[ ${RandomSymbol} ]* public 🄾
│• *[ ${RandomSymbol} ]* join 🄾
│• *[ ${RandomSymbol} ]* poll 
│• *[ ${RandomSymbol} ]* spam 🄾
│• *[ ${RandomSymbol} ]* bc 🄾
│• *[ ${RandomSymbol} ]* bcgroup 🄾
│• *[ ${RandomSymbol} ]* setmenu 🄾
│• *[ ${RandomSymbol} ]* setimgmenu 🄾
│• *[ ${RandomSymbol} ]* setvidmenu 🄾
│• *[ ${RandomSymbol} ]* setgifmenu 🄾
│• *[ ${RandomSymbol} ]* setreply 🄾
│• *[ ${RandomSymbol} ]* setprefix 🄾
│• *[ ${RandomSymbol} ]* addlimit 🄾
│• *[ ${RandomSymbol} ]* dellimit 🄾
│• *[ ${RandomSymbol} ]* resethit 🄾
│• *[ ${RandomSymbol} ]* resetuser 🄾
│• *[ ${RandomSymbol} ]* creategc 🄾
│• *[ ${RandomSymbol} ]* userjid 🄾
│• *[ ${RandomSymbol} ]* setexif 🄾
│• *[ ${RandomSymbol} ]* setbotbio 🄾
│• *[ ${RandomSymbol} ]* delppbot 🄾
│• *[ ${RandomSymbol} ]* shutdown 🄾
│• *[ ${RandomSymbol} ]* setppbot 🄾
│• *[ ${RandomSymbol} ]* addprem 🄾
│• *[ ${RandomSymbol} ]* delprem 🄾
│• *[ ${RandomSymbol} ]* addowner 🄾
│• *[ ${RandomSymbol} ]* delowner 🄾
│• *[ ${RandomSymbol} ]* addvn 🄾
│• *[ ${RandomSymbol} ]* addapk 🄾
│• *[ ${RandomSymbol} ]* addzip 🄾
│• *[ ${RandomSymbol} ]* addpdf 🄾
│• *[ ${RandomSymbol} ]* delapk 🄾
│• *[ ${RandomSymbol} ]* delzip 🄾
│• *[ ${RandomSymbol} ]* delpdf 🄾
│• *[ ${RandomSymbol} ]* delvn 🄾
│• *[ ${RandomSymbol} ]* addsticker 🄾
│• *[ ${RandomSymbol} ]* delsticker 🄾
│• *[ ${RandomSymbol} ]* addimage 🄾
│• *[ ${RandomSymbol} ]* delimage 🄾
│• *[ ${RandomSymbol} ]* addvideo 🄾
│• *[ ${RandomSymbol} ]* delvideo 🄾
│• *[ ${RandomSymbol} ]* addtitle 🄾
│• *[ ${RandomSymbol} ]* deltitle 🄾
│• *[ ${RandomSymbol} ]* upswtext 🄾
│• *[ ${RandomSymbol} ]* upswvideo 🄾
│• *[ ${RandomSymbol} ]* upswimage 🄾
│• *[ ${RandomSymbol} ]* upswaudio 🄾
│• *[ ${RandomSymbol} ]* autosticker 🄾
│• *[ ${RandomSymbol} ]* block 🄾
│• *[ ${RandomSymbol} ]* unblock 🄾
│• *[ ${RandomSymbol} ]* leavegc 🄾
│• *[ ${RandomSymbol} ]* pushcontact 🄾
│• *[ ${RandomSymbol} ]* pushcontactv2 🄾
│• *[ ${RandomSymbol} ]* pushcontactv3 🄾
│• *[ ${RandomSymbol} ]* jpm 🄾
│• *[ ${RandomSymbol} ]* post 🄾
│• *[ ${RandomSymbol} ]* clearall 🄾
│• *[ ${RandomSymbol} ]* pinchat 🄾
│• *[ ${RandomSymbol} ]* unpinchat 🄾
│• *[ ${RandomSymbol} ]* addcase 🄾
│• *[ ${RandomSymbol} ]* getcase 🄾
│• *[ ${RandomSymbol} ]* delcase 🄾
│• *[ ${RandomSymbol} ]* listcase 🄾
└┈─────────────────⏣
`}

global.othermenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *O T H E R - M E N U*
│• *[ ${RandomSymbol} ]* update 🄵
│• *[ ${RandomSymbol} ]* ping 🄵
│• *[ ${RandomSymbol} ]* menu 🄵
│• *[ ${RandomSymbol} ]* myip 🄵
│• *[ ${RandomSymbol} ]* repo 🄵
│• *[ ${RandomSymbol} ]* reportbug 🄵
│• *[ ${RandomSymbol} ]* idgroup 🄵
│• *[ ${RandomSymbol} ]* owner 🄵
│• *[ ${RandomSymbol} ]* rentbot 🄵
│• *[ ${RandomSymbol} ]* donate 🄵
│• *[ ${RandomSymbol} ]* checkaccount 🄵
│• *[ ${RandomSymbol} ]* runtime 🄵
└┈─────────────────⏣
`}

global.downloadmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *D O W N L O A D - M E N U*
│• *[ ${RandomSymbol} ]* xnxxdl 🄵
│• *[ ${RandomSymbol} ]* xvideodl 🄵
│• *[ ${RandomSymbol} ]* itunes 🄵
│• *[ ${RandomSymbol} ]* play 🄵
│• *[ ${RandomSymbol} ]* ytmp3 🄵
│• *[ ${RandomSymbol} ]* ytmp4 🄵
│• *[ ${RandomSymbol} ]* tiktok 🄵
│• *[ ${RandomSymbol} ]* tiktokaudio 🄵
│• *[ ${RandomSymbol} ]* tiktokvideo 🄵
│• *[ ${RandomSymbol} ]* tiktokslide 🄵
│• *[ ${RandomSymbol} ]* igvideo 🄵
│• *[ ${RandomSymbol} ]* igimage 🄵
│• *[ ${RandomSymbol} ]* facebook 🄵
│• *[ ${RandomSymbol} ]* twitter 🄵
│• *[ ${RandomSymbol} ]* capcut 🄵
│• *[ ${RandomSymbol} ]* apk 🄵
│• *[ ${RandomSymbol} ]* mega 🄵
│• *[ ${RandomSymbol} ]* mediafire 🄵
│• *[ ${RandomSymbol} ]* google 🄵
│• *[ ${RandomSymbol} ]* gimage 🄵
│• *[ ${RandomSymbol} ]* weather 🄵
│• *[ ${RandomSymbol} ]* spotify 🄿
│• *[ ${RandomSymbol} ]* gitclone 🄵
│• *[ ${RandomSymbol} ]* happymod 🄵
│• *[ ${RandomSymbol} ]* gdrive 🄵
│• *[ ${RandomSymbol} ]* pinterest 🄵
│• *[ ${RandomSymbol} ]* ringtone 🄵
│• *[ ${RandomSymbol} ]* autodownload 🄾
│• *[ ${RandomSymbol} ]* goredl 🄵
└┈─────────────────⏣
`}

global.groupmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *G R O U P - M E N U*
│• *[ ${RandomSymbol} ]* antibot 🄶
│• *[ ${RandomSymbol} ]* readviewonce 🄶
│• *[ ${RandomSymbol} ]* antiviewonce 🄶
│• *[ ${RandomSymbol} ]* welcome 🄶
│• *[ ${RandomSymbol} ]* adminevent 🄶
│• *[ ${RandomSymbol} ]* groupevent 🄶
│• *[ ${RandomSymbol} ]* antiforeign 🄶
│• *[ ${RandomSymbol} ]* antimedia 🄶
│• *[ ${RandomSymbol} ]* antiaudio 🄶
│• *[ ${RandomSymbol} ]* antivideo 🄶
│• *[ ${RandomSymbol} ]* antiimage 🄶
│• *[ ${RandomSymbol} ]* antidocument 🄶
│• *[ ${RandomSymbol} ]* antilocation 🄶
│• *[ ${RandomSymbol} ]* anticontact 🄶
│• *[ ${RandomSymbol} ]* antisticker 🄶
│• *[ ${RandomSymbol} ]* antipoll 🄶
│• *[ ${RandomSymbol} ]* antilink 🄶
│• *[ ${RandomSymbol} ]* antilinkgc 🄶
│• *[ ${RandomSymbol} ]* antipromotion 🄶
│• *[ ${RandomSymbol} ]* antivirtex 🄶
│• *[ ${RandomSymbol} ]* grouplink 🄶
│• *[ ${RandomSymbol} ]* listadmin 🄶
│• *[ ${RandomSymbol} ]* invite 🄶
│• *[ ${RandomSymbol} ]* ephemeral 🄶
│• *[ ${RandomSymbol} ]* delete 🄶
│• *[ ${RandomSymbol} ]* setppgroup 🄶
│• *[ ${RandomSymbol} ]* delppgroup 🄶
│• *[ ${RandomSymbol} ]* setnamegc 🄶
│• *[ ${RandomSymbol} ]* setdesc 🄶
│• *[ ${RandomSymbol} ]* add 🄶
│• *[ ${RandomSymbol} ]* kick 🄶
│• *[ ${RandomSymbol} ]* promote 🄶
│• *[ ${RandomSymbol} ]* demote 🄶
│• *[ ${RandomSymbol} ]* kickall 🄶
│• *[ ${RandomSymbol} ]* promoteall 🄶
│• *[ ${RandomSymbol} ]* demoteall 🄶
│• *[ ${RandomSymbol} ]* getcontact 🄾
│• *[ ${RandomSymbol} ]* savecontact 🄾
│• *[ ${RandomSymbol} ]* sendcontact 🄾
│• *[ ${RandomSymbol} ]* contactag 🄾
│• *[ ${RandomSymbol} ]* hidetag 🄶
│• *[ ${RandomSymbol} ]* totag 🄶
│• *[ ${RandomSymbol} ]* tagall 🄶
│• *[ ${RandomSymbol} ]* editinfo 🄶
│• *[ ${RandomSymbol} ]* opentime 🄶
│• *[ ${RandomSymbol} ]* closetime 🄶
│• *[ ${RandomSymbol} ]* resetlink 🄶
│• *[ ${RandomSymbol} ]* getbio 🄶
│• *[ ${RandomSymbol} ]* vote 🄶
│• *[ ${RandomSymbol} ]* upvote 🄶
│• *[ ${RandomSymbol} ]* downvote 🄶
│• *[ ${RandomSymbol} ]* checkvote 🄶
│• *[ ${RandomSymbol} ]* delvote 🄶
│• *[ ${RandomSymbol} ]* antivirus 🄶
│• *[ ${RandomSymbol} ]* antitoxic 🄶
│• *[ ${RandomSymbol} ]* nsfw 🄶
│• *[ ${RandomSymbol} ]* react 🄶
│• *[ ${RandomSymbol} ]* getjoinrequest 🄶
└┈─────────────────⏣
`}

global.funmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *F U N - M E N U*
│• *[ ${RandomSymbol} ]* define 🄵
│• *[ ${RandomSymbol} ]* readmore 🄵
│• *[ ${RandomSymbol} ]* fact 🄵
│• *[ ${RandomSymbol} ]* couple 🄵
│• *[ ${RandomSymbol} ]* soulmate 🄵
│• *[ ${RandomSymbol} ]* stupidcheck 🄵
│• *[ ${RandomSymbol} ]* handsomecheck 🄵
│• *[ ${RandomSymbol} ]* uncleancheck 🄵
│• *[ ${RandomSymbol} ]* hotcheck 🄵
│• *[ ${RandomSymbol} ]* smartcheck 🄵
│• *[ ${RandomSymbol} ]* greatcheck 🄵
│• *[ ${RandomSymbol} ]* evilcheck 🄵
│• *[ ${RandomSymbol} ]* dogcheck 🄵
│• *[ ${RandomSymbol} ]* coolcheck 🄵
│• *[ ${RandomSymbol} ]* waifucheck 🄵
│• *[ ${RandomSymbol} ]* awesomecheck 🄵
│• *[ ${RandomSymbol} ]* gaycheck 🄵
│• *[ ${RandomSymbol} ]* cutecheck 🄵
│• *[ ${RandomSymbol} ]* lesbiancheck 🄵
│• *[ ${RandomSymbol} ]* hornycheck 🄵
│• *[ ${RandomSymbol} ]* prettycheck 🄵
│• *[ ${RandomSymbol} ]* lovelycheck 🄵
│• *[ ${RandomSymbol} ]* uglycheck 🄵
│• *[ ${RandomSymbol} ]* pick 🄵
│• *[ ${RandomSymbol} ]* pickupline 🄵
│• *[ ${RandomSymbol} ]* quotes 🄵
│• *[ ${RandomSymbol} ]* can 🄵
│• *[ ${RandomSymbol} ]* is 🄵
│• *[ ${RandomSymbol} ]* when 🄵
│• *[ ${RandomSymbol} ]* where 🄵
│• *[ ${RandomSymbol} ]* what 🄵
│• *[ ${RandomSymbol} ]* how 🄵
│• *[ ${RandomSymbol} ]* rate 🄵
│• *[ ${RandomSymbol} ]* cry 🄵
│• *[ ${RandomSymbol} ]* kill 🄵
│• *[ ${RandomSymbol} ]* hug 🄵
│• *[ ${RandomSymbol} ]* pat 🄵
│• *[ ${RandomSymbol} ]* lick 🄵 
│• *[ ${RandomSymbol} ]* kiss 🄵
│• *[ ${RandomSymbol} ]* bite 🄵
│• *[ ${RandomSymbol} ]* yeet 🄵
│• *[ ${RandomSymbol} ]* bully 🄵
│• *[ ${RandomSymbol} ]* bonk 🄵
│• *[ ${RandomSymbol} ]* wink 🄵
│• *[ ${RandomSymbol} ]* poke 🄵
│• *[ ${RandomSymbol} ]* nom 🄵
│• *[ ${RandomSymbol} ]* slap 🄵
│• *[ ${RandomSymbol} ]* smile 🄵 
│• *[ ${RandomSymbol} ]* wave 🄵
│• *[ ${RandomSymbol} ]* awoo 🄵
│• *[ ${RandomSymbol} ]* blush 🄵
│• *[ ${RandomSymbol} ]* smug 🄵
│• *[ ${RandomSymbol} ]* glomp 🄵 
│• *[ ${RandomSymbol} ]* happy 🄵
│• *[ ${RandomSymbol} ]* dance 🄵
│• *[ ${RandomSymbol} ]* cringe ??
│• *[ ${RandomSymbol} ]* cuddle 🄵
│• *[ ${RandomSymbol} ]* highfive 🄵 
│• *[ ${RandomSymbol} ]* handhold 🄵
│• *[ ${RandomSymbol} ]* spank 🄵
│• *[ ${RandomSymbol} ]* tickle 🄵
│• *[ ${RandomSymbol} ]* feed 🄵
│• *[ ${RandomSymbol} ]* checkme 🄵
│• *[ ${RandomSymbol} ]* sound1 - sound161 🄵
└┈─────────────────⏣
`}

global.stalkermenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *S T A L K E R* 
│• *[ ${RandomSymbol} ]* tiktokstalk 🄵
│• *[ ${RandomSymbol} ]* mlstalk 🄵
│• *[ ${RandomSymbol} ]* npmstalk 🄵
│• *[ ${RandomSymbol} ]* ghstalk 🄵
│• *[ ${RandomSymbol} ]* genshin-stalk 🄵
│• *[ ${RandomSymbol} ]* honkai-stalk 🄵
│• *[ ${RandomSymbol} ]* photo-stalk 🄵
└┈─────────────────⏣
`}

global.stickermenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *S T I C K E R* 
│• *[ ${RandomSymbol} ]* goose 🄵
│• *[ ${RandomSymbol} ]* woof 🄵
│• *[ ${RandomSymbol} ]* 8ball 🄵
│• *[ ${RandomSymbol} ]* lizard 🄵
│• *[ ${RandomSymbol} ]* meow 🄵
│• *[ ${RandomSymbol} ]* gura 🄵
│• *[ ${RandomSymbol} ]* telestick 🄵
│• *[ ${RandomSymbol} ]* ttp 🄵
└┈─────────────────⏣
`}

global.databasemenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *D A T A B A S E* 
│• *[ ${RandomSymbol} ]* setcmd 🄾
│• *[ ${RandomSymbol} ]* delcmd 🄾
│• *[ ${RandomSymbol} ]* listcmd 🄵
│• *[ ${RandomSymbol} ]* lockcmd 🄾
│• *[ ${RandomSymbol} ]* addmsg 🄾
│• *[ ${RandomSymbol} ]* delmsg 🄾
│• *[ ${RandomSymbol} ]* getmsg 🄵
│• *[ ${RandomSymbol} ]* listmsg 🄵
└┈─────────────────⏣
`}

global.pterodactylmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *P T E R O D A C T Y L* 
│• *[ ${RandomSymbol} ]* 1gb 🄾
│• *[ ${RandomSymbol} ]* 2gb 🄾
│• *[ ${RandomSymbol} ]* 3gb 🄾
│• *[ ${RandomSymbol} ]* 4gb 🄾
│• *[ ${RandomSymbol} ]* 5gb 🄾
│• *[ ${RandomSymbol} ]* 6gb 🄾
│• *[ ${RandomSymbol} ]* 7gb 🄾
│• *[ ${RandomSymbol} ]* 8gb 🄾
│• *[ ${RandomSymbol} ]* 9gb 🄾
│• *[ ${RandomSymbol} ]* 10gb 🄾
│• *[ ${RandomSymbol} ]* 11gb 🄾
│• *[ ${RandomSymbol} ]* 12gb 🄾
│• *[ ${RandomSymbol} ]* 13gb 🄾
│• *[ ${RandomSymbol} ]* 14gb 🄾
│• *[ ${RandomSymbol} ]* 15gb 🄾
│• *[ ${RandomSymbol} ]* panel 🄾
│• *[ ${RandomSymbol} ]* cpanel 🄾
│• *[ ${RandomSymbol} ]* reinstall 🄾
│• *[ ${RandomSymbol} ]* delusr 🄾
│• *[ ${RandomSymbol} ]* detusr 🄾
│• *[ ${RandomSymbol} ]* listsrv 🄾
│• *[ ${RandomSymbol} ]* listusr 🄾
│• *[ ${RandomSymbol} ]* delsrv 🄾
│• *[ ${RandomSymbol} ]* delusr 🄾
│• *[ ${RandomSymbol} ]* updatesrv 🄾
│• *[ ${RandomSymbol} ]* addusr 🄾
│• *[ ${RandomSymbol} ]* addsrv 🄾
│• *[ ${RandomSymbol} ]* listadmin 🄾
│• *[ ${RandomSymbol} ]* suspend 🄾
│• *[ ${RandomSymbol} ]* unsuspend 🄾
│• *[ ${RandomSymbol} ]* startsrv 🄾
│• *[ ${RandomSymbol} ]* restartsrv 🄾
│• *[ ${RandomSymbol} ]* stopsrv 🄾
└┈─────────────────⏣

❐ *P T E R O D A C T Y L - I N S T A L L* 
│• *[ ${RandomSymbol} ]* installthema 🄾
│• *[ ${RandomSymbol} ]* installpanel 🄾
│• *[ ${RandomSymbol} ]* uninstallthema 🄾
│• *[ ${RandomSymbol} ]* uninstallpanel 🄾
│• *[ ${RandomSymbol} ]* startwings 🄾
│• *[ ${RandomSymbol} ]* createnode 🄾
└┈─────────────────⏣
`}

global.storemenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *S T O R E* 
│• *[ ${RandomSymbol} ]* list 🄵
│• *[ ${RandomSymbol} ]* store 🄵
│• *[ ${RandomSymbol} ]* shop 🄵
│• *[ ${RandomSymbol} ]* addlist 🄾
│• *[ ${RandomSymbol} ]* dellist 🄾
└┈─────────────────⏣
`}

global.aimenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *O P E N - A I* 
│• *[ ${RandomSymbol} ]* animate 🄵
│• *[ ${RandomSymbol} ]* diffusion-anime 🄵
│• *[ ${RandomSymbol} ]* bingai 🄵
│• *[ ${RandomSymbol} ]* blackboxai 🄵
│• *[ ${RandomSymbol} ]* travel-assistant 🄵
│• *[ ${RandomSymbol} ]* guru-ai 🄵
│• *[ ${RandomSymbol} ]* emi-ai 🄵
│• *[ ${RandomSymbol} ]* claude-ai 🄵
│• *[ ${RandomSymbol} ]* costume-ai 🄵
│• *[ ${RandomSymbol} ]* herc-ai 🄵
│• *[ ${RandomSymbol} ]* hercaiv1 🄵
│• *[ ${RandomSymbol} ]* hercai-cartoon 🄵
│• *[ ${RandomSymbol} ]* hercai-animefy 🄵
│• *[ ${RandomSymbol} ]* hercai-lexica 🄵
│• *[ ${RandomSymbol} ]* hercai-prodia 🄵
│• *[ ${RandomSymbol} ]* hercai-simurg 🄵
│• *[ ${RandomSymbol} ]* hercai-raava 🄵
│• *[ ${RandomSymbol} ]* hercai-shonin 🄵
│• *[ ${RandomSymbol} ]* realistic 🄵
│• *[ ${RandomSymbol} ]* 3dmodel 🄵
│• *[ ${RandomSymbol} ]* openai-indo 🄵
│• *[ ${RandomSymbol} ]* indo-ai 🄵
│• *[ ${RandomSymbol} ]* diffusion 🄵
│• *[ ${RandomSymbol} ]* photoleap 🄵
│• *[ ${RandomSymbol} ]* openai 🄵
│• *[ ${RandomSymbol} ]* dalle 🄵
│• *[ ${RandomSymbol} ]* ai 🄵
│• *[ ${RandomSymbol} ]* remini 🄵
│• *[ ${RandomSymbol} ]* simi 🄵
│• *[ ${RandomSymbol} ]* removebg 🄵
│• *[ ${RandomSymbol} ]* tozombie 🄵
│• *[ ${RandomSymbol} ]* toanime 🄵
│• *[ ${RandomSymbol} ]* lora 🄵
│• *[ ${RandomSymbol} ]* lorasearch 🄵
│• *[ ${RandomSymbol} ]* loracheckpoint 🄵
│• *[ ${RandomSymbol} ]* text2speech 🄵
└┈─────────────────⏣
`}

global.bugmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *B U G & W A R*
│• *[ ${RandomSymbol} ]* xreact 🄿
│• *[ ${RandomSymbol} ]* x 🄿
│• *[ ${RandomSymbol} ]* x2 🄿
│• *[ ${RandomSymbol} ]* iosbug 🄿
│• *[ ${RandomSymbol} ]* iosbug2 🄿
│• *[ ${RandomSymbol} ]* xaudio 🄿
│• *[ ${RandomSymbol} ]* xaudio2 🄿
│• *[ ${RandomSymbol} ]* xsticker 🄿
│• *[ ${RandomSymbol} ]* xsticker2 🄿
│• *[ ${RandomSymbol} ]* xloc 🄿
│• *[ ${RandomSymbol} ]* xloc2 🄿
│• *[ ${RandomSymbol} ]* xlist 🄿
│• *[ ${RandomSymbol} ]* xlist2 🄿
│• *[ ${RandomSymbol} ]* xkill 🄿
│• *[ ${RandomSymbol} ]* xkill2 🄿
│• *[ ${RandomSymbol} ]* xkillgc 🄿
│• *[ ${RandomSymbol} ]* tempban 🄿
│• *[ ${RandomSymbol} ]* xcrash 🄿
│• *[ ${RandomSymbol} ]* xcrash2 🄿
│• *[ ${RandomSymbol} ]* xioscrash 🄿
│• *[ ${RandomSymbol} ]* xioscrash2 🄿
│• *[ ${RandomSymbol} ]* iosgoogle 🄿
│• *[ ${RandomSymbol} ]* iosgoogle2 🄿
│• *[ ${RandomSymbol} ]* iosq 🄿
│• *[ ${RandomSymbol} ]* amountbug 🄿
│• *[ ${RandomSymbol} ]* pmbug 🄿
│• *[ ${RandomSymbol} ]* delaybug 🄿
│• *[ ${RandomSymbol} ]* docubug 🄿
│• *[ ${RandomSymbol} ]* unlimitedbug 🄿
│• *[ ${RandomSymbol} ]* bombug 🄿
│• *[ ${RandomSymbol} ]* lagbug 🄿
│• *[ ${RandomSymbol} ]* trollybug 🄿
│• *[ ${RandomSymbol} ]* gcbug 🄿
│• *[ ${RandomSymbol} ]* delaygcbug 🄿
│• *[ ${RandomSymbol} ]* laggcbug 🄿
│• *[ ${RandomSymbol} ]* bomgcbug 🄿
│• *[ ${RandomSymbol} ]* unlimitedgcbug 🄿
│• *[ ${RandomSymbol} ]* trollygcbug 🄿
│• *[ ${RandomSymbol} ]* docugcbug 🄿
│• *[ ${RandomSymbol} ]* verif 🄿
│• *[ ${RandomSymbol} ]* banv1 🄿
│• *[ ${RandomSymbol} ]* banv2 🄿
│• *[ ${RandomSymbol} ]* banv3 🄿
│• *[ ${RandomSymbol} ]* banv4 🄿
│• *[ ${RandomSymbol} ]* banv5 🄿
│• *[ ${RandomSymbol} ]* banv6 🄿
│• *[ ${RandomSymbol} ]* unbanv1 🄿
│• *[ ${RandomSymbol} ]* unbanv2 🄿
│• *[ ${RandomSymbol} ]* unbanv3 🄿
│• *[ ${RandomSymbol} ]* unbanv4 🄿
│• *[ ${RandomSymbol} ]* unbanv5 🄿
│• *[ ${RandomSymbol} ]* bgtes 🄿
│• *[ ${RandomSymbol} ]* bugpenis 🄿
│• *[ ${RandomSymbol} ]* bugpepek 🄿
│• *[ ${RandomSymbol} ]* bijiloe 🄿
│• *[ ${RandomSymbol} ]* null-chace 🄿
│• *[ ${RandomSymbol} ]* prikitiw 🄿
│• *[ ${RandomSymbol} ]* bgstes2 🄿
│• *[ ${RandomSymbol} ]* zero-bug 🄿
│• *[ ${RandomSymbol} ]* bug-s 🄿
│• *[ ${RandomSymbol} ]* fatal-notif 🄿
│• *[ ${RandomSymbol} ]* fatal-ui 🄿
│• *[ ${RandomSymbol} ]* crash-total 🄿
│• *[ ${RandomSymbol} ]* forces-sql 🄿
│• *[ ${RandomSymbol} ]* samsung-chace 🄿
│• *[ ${RandomSymbol} ]* bug-rom 🄿
│• *[ ${RandomSymbol} ]* restart-ui 🄿
│• *[ ${RandomSymbol} ]* virg4m 🄿
│• *[ ${RandomSymbol} ]* sipilist 🄿
│• *[ ${RandomSymbol} ]* 1hit 🄿
│• *[ ${RandomSymbol} ]* mimir 🄿
│• *[ ${RandomSymbol} ]* 1shoot 🄿
│• *[ ${RandomSymbol} ]* bug-24j 🄿
│• *[ ${RandomSymbol} ]* samsung-24j 🄿
│• *[ ${RandomSymbol} ]* ios-24j 🄿
│• *[ ${RandomSymbol} ]* vios-unli 🄿
│• *[ ${RandomSymbol} ]* bug-ios 🄿
│• *[ ${RandomSymbol} ]* bug-ipong 🄿
│• *[ ${RandomSymbol} ]* bug-button 🄿
│• *[ ${RandomSymbol} ]* bug-browser 🄿
│• *[ ${RandomSymbol} ]* bug-gc 🄿
│• *[ ${RandomSymbol} ]* penghitaman 🄿
└┈─────────────────⏣
`}

global.randphotomenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *R A N D O M - P H O T O*
│• *[ ${RandomSymbol} ]* aesthetic 🄵
│• *[ ${RandomSymbol} ]* coffee 🄵
│• *[ ${RandomSymbol} ]* wikimedia 🄵
│• *[ ${RandomSymbol} ]* wallpaper 🄵
│• *[ ${RandomSymbol} ]* art 🄵
│• *[ ${RandomSymbol} ]* bts 🄵
│• *[ ${RandomSymbol} ]* dogwoof 🄵
│• *[ ${RandomSymbol} ]* catmeow 🄵
│• *[ ${RandomSymbol} ]* lizardpic 🄵
│• *[ ${RandomSymbol} ]* goosebird 🄵
│• *[ ${RandomSymbol} ]* 8ballpool 🄵
│• *[ ${RandomSymbol} ]* cosplay 🄵
│• *[ ${RandomSymbol} ]* hacker 🄵
│• *[ ${RandomSymbol} ]* cyber 🄵
│• *[ ${RandomSymbol} ]* gamewallpaper 🄵
│• *[ ${RandomSymbol} ]* islamic 🄵
│• *[ ${RandomSymbol} ]* jennie 🄵
│• *[ ${RandomSymbol} ]* jiso 🄵
│• *[ ${RandomSymbol} ]* satanic 🄵
│• *[ ${RandomSymbol} ]* justina 🄵
│• *[ ${RandomSymbol} ]* cartoon 🄵
│• *[ ${RandomSymbol} ]* pentol 🄵
│• *[ ${RandomSymbol} ]* cat 🄵
│• *[ ${RandomSymbol} ]* kpop 🄵
│• *[ ${RandomSymbol} ]* exo 🄵
│• *[ ${RandomSymbol} ]* lisa 🄵
│• *[ ${RandomSymbol} ]* space 🄵
│• *[ ${RandomSymbol} ]* car 🄵
│• *[ ${RandomSymbol} ]* technology 🄵
│• *[ ${RandomSymbol} ]* bike 🄵
│• *[ ${RandomSymbol} ]* shortquote 🄵
│• *[ ${RandomSymbol} ]* antiwork 🄵
│• *[ ${RandomSymbol} ]* hacking 🄵
│• *[ ${RandomSymbol} ]* boneka 🄵
│• *[ ${RandomSymbol} ]* rose 🄵
│• *[ ${RandomSymbol} ]* ryujin 🄵
│• *[ ${RandomSymbol} ]* ulzzangboy 🄵
│• *[ ${RandomSymbol} ]* ulzzanggirl 🄵
│• *[ ${RandomSymbol} ]* wallml 🄵
│• *[ ${RandomSymbol} ]* wallphone 🄵
│• *[ ${RandomSymbol} ]* mountain 🄵
│• *[ ${RandomSymbol} ]* goose 🄵
│• *[ ${RandomSymbol} ]* profilepic 🄵
│• *[ ${RandomSymbol} ]* couplepp 🄵
│• *[ ${RandomSymbol} ]* programming 🄵
│• *[ ${RandomSymbol} ]* pubg 🄵
│• *[ ${RandomSymbol} ]* blackpink 🄵
│• *[ ${RandomSymbol} ]* randomboy 🄵  
│• *[ ${RandomSymbol} ]* randomgirl 🄵
│• *[ ${RandomSymbol} ]* hijab 🄵  
│• *[ ${RandomSymbol} ]* chinese 🄵
│• *[ ${RandomSymbol} ]* indo 🄵
│• *[ ${RandomSymbol} ]* japanese 🄵
│• *[ ${RandomSymbol} ]* korean 🄵
│• *[ ${RandomSymbol} ]* malay 🄵
│• *[ ${RandomSymbol} ]* thai 🄵
│• *[ ${RandomSymbol} ]* vietnamese 🄵
└┈─────────────────⏣
`}

global.randvideomenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *R A N D O M - V I D E O*
│• *[ ${RandomSymbol} ]* tiktokgirl 🄵
│• *[ ${RandomSymbol} ]* tiktoknukthy 🄵
│• *[ ${RandomSymbol} ]* tiktokkayes 🄵
│• *[ ${RandomSymbol} ]* tiktokpanrika 🄵
│• *[ ${RandomSymbol} ]* tiktoknotnot 🄵
│• *[ ${RandomSymbol} ]* tiktokghea 🄵
│• *[ ${RandomSymbol} ]* tiktoksantuy 🄵
│• *[ ${RandomSymbol} ]* tiktokbocil 🄵
│• *[ ${RandomSymbol} ]* randomgore 🄵
└┈─────────────────⏣
`}

global.nsfwmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *N S F W*
│• *[ ${RandomSymbol} ]* nhentai 🄵
│• *[ ${RandomSymbol} ]* hentaisearch 🄵
│• *[ ${RandomSymbol} ]* pornhubsearch 🄵
│• *[ ${RandomSymbol} ]* pornhubgif 🄵
│• *[ ${RandomSymbol} ]* yandere 🄵
│• *[ ${RandomSymbol} ]* danbooru 🄵
│• *[ ${RandomSymbol} ]* hentai 🄵
│• *[ ${RandomSymbol} ]* gifblowjob 🄵
│• *[ ${RandomSymbol} ]* hentaivid 🄵
│• *[ ${RandomSymbol} ]* hneko 🄵
│• *[ ${RandomSymbol} ]* nwaifu 🄵
│• *[ ${RandomSymbol} ]* animespank 🄵
│• *[ ${RandomSymbol} ]* trap 🄵
│• *[ ${RandomSymbol} ]* blowjob 🄵
│• *[ ${RandomSymbol} ]* cuckold 🄵
│• *[ ${RandomSymbol} ]* milf 🄵
│• *[ ${RandomSymbol} ]* eba 🄵
│• *[ ${RandomSymbol} ]* pussy 🄵
│• *[ ${RandomSymbol} ]* yuri 🄵
│• *[ ${RandomSymbol} ]* zettai 🄵
│• *[ ${RandomSymbol} ]* genshin 🄵
│• *[ ${RandomSymbol} ]* swimsuit 🄵
│• *[ ${RandomSymbol} ]* ero 🄵
│• *[ ${RandomSymbol} ]* schoolswimsuit 🄵
│• *[ ${RandomSymbol} ]* white 🄵
│• *[ ${RandomSymbol} ]* barefoot 🄵
│• *[ ${RandomSymbol} ]* touhou 🄵
│• *[ ${RandomSymbol} ]* gamecg 🄵
│• *[ ${RandomSymbol} ]* hololive 🄵
│• *[ ${RandomSymbol} ]* uncensored 🄵
│• *[ ${RandomSymbol} ]* sunglasses 🄵
│• *[ ${RandomSymbol} ]* glasses 🄵
│• *[ ${RandomSymbol} ]* weapon 🄵
│• *[ ${RandomSymbol} ]* shirtlift 🄵
│• *[ ${RandomSymbol} ]* chain 🄵
│• *[ ${RandomSymbol} ]* fingering 🄵
│• *[ ${RandomSymbol} ]* flatchest 🄵
│• *[ ${RandomSymbol} ]* torncloth 🄵
│• *[ ${RandomSymbol} ]* bondage 🄵
│• *[ ${RandomSymbol} ]* demon 🄵
│• *[ ${RandomSymbol} ]* pantypull 🄵
│• *[ ${RandomSymbol} ]* headdress 🄵
│• *[ ${RandomSymbol} ]* headphone 🄵
│• *[ ${RandomSymbol} ]* anusview 🄵
│• *[ ${RandomSymbol} ]* shorts 🄵
│• *[ ${RandomSymbol} ]* stokings 🄵
│• *[ ${RandomSymbol} ]* topless 🄵
│• *[ ${RandomSymbol} ]* beach 🄵
│• *[ ${RandomSymbol} ]* bunnygirl 🄵
│• *[ ${RandomSymbol} ]* bunnyear 🄵
│• *[ ${RandomSymbol} ]* vampire 🄵
│• *[ ${RandomSymbol} ]* nobra 🄵
│• *[ ${RandomSymbol} ]* bikini 🄵
│• *[ ${RandomSymbol} ]* whitehair 🄵
│• *[ ${RandomSymbol} ]* blonde 🄵
│• *[ ${RandomSymbol} ]* pinkhair 🄵
│• *[ ${RandomSymbol} ]* bed 🄵
│• *[ ${RandomSymbol} ]* oppai 🄵
│• *[ ${RandomSymbol} ]* ponytail 🄵
│• *[ ${RandomSymbol} ]* nude 🄵
│• *[ ${RandomSymbol} ]* dress 🄵
│• *[ ${RandomSymbol} ]* underwear 🄵
│• *[ ${RandomSymbol} ]* foxgirl 🄵
│• *[ ${RandomSymbol} ]* uniform 🄵
│• *[ ${RandomSymbol} ]* skirt 🄵
│• *[ ${RandomSymbol} ]* breast 🄵
│• *[ ${RandomSymbol} ]* twintail 🄵 
│• *[ ${RandomSymbol} ]* spreadpussy  🄵
│• *[ ${RandomSymbol} ]* seethrough 🄵
│• *[ ${RandomSymbol} ]* breasthold 🄵
│• *[ ${RandomSymbol} ]* fateseries 🄵
│• *[ ${RandomSymbol} ]* spreadlegs 🄵
│• *[ ${RandomSymbol} ]* openshirt 🄵
│• *[ ${RandomSymbol} ]* headband 🄵
│• *[ ${RandomSymbol} ]* nipples 🄵
│• *[ ${RandomSymbol} ]* erectnipples 🄵
│• *[ ${RandomSymbol} ]* greenhair 🄵
│• *[ ${RandomSymbol} ]* wolfgirl 🄵
│• *[ ${RandomSymbol} ]* catgirl 🄵
│• *[ ${RandomSymbol} ]* rule34 🄵
│• *[ ${RandomSymbol} ]* kcrandom 🄵
└┈─────────────────⏣
`}

global.gamemenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *G A M E* 
│• *[ ${RandomSymbol} ]* truth 🄵
│• *[ ${RandomSymbol} ]* dare 🄵
│• *[ ${RandomSymbol} ]* suit 🄵
│• *[ ${RandomSymbol} ]* tictactoe 🄵
│• *[ ${RandomSymbol} ]* werewolf 🄵
│• *[ ${RandomSymbol} ]* math 🄵
│• *[ ${RandomSymbol} ]* mc 🄵
│• *[ ${RandomSymbol} ]* giveaway 🄵
│• *[ ${RandomSymbol} ]* uno 🄵
│• *[ ${RandomSymbol} ]* freefire_pet 🄵
│• *[ ${RandomSymbol} ]* freefire_character 🄵
│• *[ ${RandomSymbol} ]* freefire_news 🄵
│• *[ ${RandomSymbol} ]* genshin-sheets 🄵
│• *[ ${RandomSymbol} ]* honkai-sheets 🄵
│• *[ ${RandomSymbol} ]* wuwa-sheets 🄵
│• *[ ${RandomSymbol} ]* zzz-sheets 🄵
│• *[ ${RandomSymbol} ]* wuwa-cards 🄵
│• *[ ${RandomSymbol} ]* samp-info 🄵
│• *[ ${RandomSymbol} ]* valorant-maps 🄵
│• *[ ${RandomSymbol} ]* valorant-weapons 🄵
│• *[ ${RandomSymbol} ]* osu-profile 🄵
│• *[ ${RandomSymbol} ]* bluearchive 🄵
│• *[ ${RandomSymbol} ]* bluearchive-search 🄵
└┈─────────────────⏣

❐ *S A M P*
│• *[ ${RandomSymbol} ]* myprofil 🄵
│• *[ ${RandomSymbol} ]* reg 🄵
│• *[ ${RandomSymbol} ]* listplayers  🄾
│• *[ ${RandomSymbol} ]* listucp  🄾
│• *[ ${RandomSymbol} ]* addcs  🄾
│• *[ ${RandomSymbol} ]* delcs  🄾
│• *[ ${RandomSymbol} ]* setadmin  🄾
│• *[ ${RandomSymbol} ]* unsetadmin  🄾
│• *[ ${RandomSymbol} ]* setadminname  🄾
│• *[ ${RandomSymbol} ]* changename  🄾
│• *[ ${RandomSymbol} ]* changeucp  🄾
│• *[ ${RandomSymbol} ]* addwl  🄾
│• *[ ${RandomSymbol} ]* delwl  🄾
│• *[ ${RandomSymbol} ]* cekucp  🄾
│• *[ ${RandomSymbol} ]* getplayerip  🄾
│• *[ ${RandomSymbol} ]* ban  🄾
│• *[ ${RandomSymbol} ]* banip  🄾
└┈─────────────────⏣
`}

global.religionmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *R E L I G I O N* 
│• *[ ${RandomSymbol} ]* bible 🄵
│• *[ ${RandomSymbol} ]* quran 🄵
│• *[ ${RandomSymbol} ]* hadist 🄵
│• *[ ${RandomSymbol} ]* gita 🄵
└┈─────────────────⏣
`}

global.searchmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *S E A R C H* 
│• *[ ${RandomSymbol} ]* google 🄵
│• *[ ${RandomSymbol} ]* wikipedia 🄵
│• *[ ${RandomSymbol} ]* ytsearch 🄵
│• *[ ${RandomSymbol} ]* xnxxsearch 🄵
│• *[ ${RandomSymbol} ]* xvideosearch 🄵
│• *[ ${RandomSymbol} ]* apksearch 🄵
│• *[ ${RandomSymbol} ]* stickersearch 🄵
│• *[ ${RandomSymbol} ]* imdb 🄵
│• *[ ${RandomSymbol} ]* drakor 🄵
│• *[ ${RandomSymbol} ]* detaildrakor 🄵
│• *[ ${RandomSymbol} ]* streamingdrakor 🄵
│• *[ ${RandomSymbol} ]* film 🄵
│• *[ ${RandomSymbol} ]* detailfilm 🄵
│• *[ ${RandomSymbol} ]* streamingfilm 🄵
│• *[ ${RandomSymbol} ]* anime 🄵
│• *[ ${RandomSymbol} ]* detailanime 🄵
│• *[ ${RandomSymbol} ]* streaminganime 🄵
│• *[ ${RandomSymbol} ]* donghua 🄵
│• *[ ${RandomSymbol} ]* detaildonghua 🄵
│• *[ ${RandomSymbol} ]* streamingdonghua 🄵
│• *[ ${RandomSymbol} ]* wanumber 🄵
│• *[ ${RandomSymbol} ]* friend 🄵
│• *[ ${RandomSymbol} ]* lyrics 🄵
│• *[ ${RandomSymbol} ]* steamsearch 🄵
│• *[ ${RandomSymbol} ]* goresearch 🄵
│• *[ ${RandomSymbol} ]* freetogame 🄵
│• *[ ${RandomSymbol} ]* fdroid 🄵
│• *[ ${RandomSymbol} ]* gsmarena 🄵
│• *[ ${RandomSymbol} ]* bukalapak 🄵
└┈─────────────────⏣
`}

global.hackingmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *D D O S*
│• *[ ${RandomSymbol} ]* attack 🄿
│• *[ ${RandomSymbol} ]* methods 🄿
│• *[ ${RandomSymbol} ]* ddos [mix, tls, ninja] 🄿
│• *[ ${RandomSymbol} ]* ddos-lol 🄿
│• *[ ${RandomSymbol} ]* ddos-mix 🄿
│• *[ ${RandomSymbol} ]* ddos-brow 🄿
│• *[ ${RandomSymbol} ]* ddos-tls 🄿
│• *[ ${RandomSymbol} ]* ddos-tls-v2 🄿
│• *[ ${RandomSymbol} ]* ddos-kilua 🄿
│• *[ ${RandomSymbol} ]* ddos-tls-bypass 🄿
│• *[ ${RandomSymbol} ]* ddos-bypass-cf 🄿
│• *[ ${RandomSymbol} ]* ddos-tls-vip 🄿
│• *[ ${RandomSymbol} ]* ddos-floods 🄿
│• *[ ${RandomSymbol} ]* ddos-egao 🄿
│• *[ ${RandomSymbol} ]* ddos-xchrome 🄿
│• *[ ${RandomSymbol} ]* ddos-fetch 🄿
└┈─────────────────⏣

❐ *G E N E R A T O R*
│• *[ ${RandomSymbol} ]* proxy 🄿
│• *[ ${RandomSymbol} ]* ua 🄿
└┈─────────────────⏣

❐ *B O T N E T*
│• *[ ${RandomSymbol} ]* botnet 🄿
│• *[ ${RandomSymbol} ]* botnet-add 🄿
│• *[ ${RandomSymbol} ]* botnet-del 🄿
│• *[ ${RandomSymbol} ]* botnet-list 🄿
│• *[ ${RandomSymbol} ]* botnet-test 🄿
└┈─────────────────⏣

❐ *C C T V*
│• *[ ${RandomSymbol} ]* cctv-hijack 🄿
└┈─────────────────⏣

❐ *T R A C K E R*
│• *[ ${RandomSymbol} ]* traffix-inject 🄿
│• *[ ${RandomSymbol} ]* subdo-finder 🄿
└┈─────────────────⏣
`}

global.newsmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *N E W S* 
│• *[ ${RandomSymbol} ]* cnn-news 🄵
│• *[ ${RandomSymbol} ]* fajar-news 🄵
│• *[ ${RandomSymbol} ]* cnbc-news 🄵
│• *[ ${RandomSymbol} ]* indozone-news 🄵
│• *[ ${RandomSymbol} ]* detik-news 🄵
│• *[ ${RandomSymbol} ]* kontan-news 🄵
│• *[ ${RandomSymbol} ]* jalantikus-meme 🄵
│• *[ ${RandomSymbol} ]* elonmu-news 🄵
│• *[ ${RandomSymbol} ]* merdeka-news 🄵
│• *[ ${RandomSymbol} ]* globalnews 🄵
│• *[ ${RandomSymbol} ]* okezonenews 🄵
│• *[ ${RandomSymbol} ]* thestar 🄵
│• *[ ${RandomSymbol} ]* googlenews 🄵
│• *[ ${RandomSymbol} ]* lk21 🄵
│• *[ ${RandomSymbol} ]* metronews 🄵
│• *[ ${RandomSymbol} ]* temposearch 🄵
│• *[ ${RandomSymbol} ]* liputan6 🄵
│• *[ ${RandomSymbol} ]* turnbackhoax 🄵
└┈─────────────────⏣
`}

global.convertmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *C O N V E R T* 
│• *[ ${RandomSymbol} ]* obfuscate 🄵
│• *[ ${RandomSymbol} ]* styletext 🄵
│• *[ ${RandomSymbol} ]* fliptext 🄵
│• *[ ${RandomSymbol} ]* tts 🄵
│• *[ ${RandomSymbol} ]* say 🄵
│• *[ ${RandomSymbol} ]* togif 🄵
│• *[ ${RandomSymbol} ]* toqr 🄵
│• *[ ${RandomSymbol} ]* bass 🄵
│• *[ ${RandomSymbol} ]* blown 🄵
│• *[ ${RandomSymbol} ]* deep 🄵
│• *[ ${RandomSymbol} ]* earrape 🄵
│• *[ ${RandomSymbol} ]* fast 🄵
│• *[ ${RandomSymbol} ]* fat 🄵
│• *[ ${RandomSymbol} ]* nightcore 🄵
│• *[ ${RandomSymbol} ]* reverse 🄵
│• *[ ${RandomSymbol} ]* robot 🄵
│• *[ ${RandomSymbol} ]* slow 🄵
│• *[ ${RandomSymbol} ]* smooth 🄵
│• *[ ${RandomSymbol} ]* squirrel 🄵
│• *[ ${RandomSymbol} ]* tinyurl 🄵
│• *[ ${RandomSymbol} ]* tovn 🄵
│• *[ ${RandomSymbol} ]* toaudio 🄵
│• *[ ${RandomSymbol} ]* tomp3 🄵
│• *[ ${RandomSymbol} ]* tomp4🄵
│• *[ ${RandomSymbol} ]* toimg 🄵
│• *[ ${RandomSymbol} ]* toonce 🄵
│• *[ ${RandomSymbol} ]* sticker 🄵
│• *[ ${RandomSymbol} ]* smeme 🄵
│• *[ ${RandomSymbol} ]* smeta 🄵
│• *[ ${RandomSymbol} ]* take 🄿
│• *[ ${RandomSymbol} ]* emoji 🄵
│• *[ ${RandomSymbol} ]* volaudio 🄵
│• *[ ${RandomSymbol} ]* volvideo 🄵
│• *[ ${RandomSymbol} ]* ebinary 🄵
│• *[ ${RandomSymbol} ]* dbinary 🄵
│• *[ ${RandomSymbol} ]* ssweb 🄵
│• *[ ${RandomSymbol} ]* quoted 🄵
│• *[ ${RandomSymbol} ]* translate 🄵
└┈─────────────────⏣
`}

global.listmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *L I S T* 
│• *[ ${RandomSymbol} ]* listprem 🄵
│• *[ ${RandomSymbol} ]* listowner 🄵
│• *[ ${RandomSymbol} ]* liststicker 🄵
│• *[ ${RandomSymbol} ]* listimage 🄵
│• *[ ${RandomSymbol} ]* listvideo 🄵
│• *[ ${RandomSymbol} ]* listvn 🄵
│• *[ ${RandomSymbol} ]* listapk 🄵
│• *[ ${RandomSymbol} ]* listzip 🄵
│• *[ ${RandomSymbol} ]* listpdf 🄵
│• *[ ${RandomSymbol} ]* listbadword 🄵
│• *[ ${RandomSymbol} ]* listpc 🄵
│• *[ ${RandomSymbol} ]* listgc 🄵
└┈─────────────────⏣
`}

global.rpgmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *R O L E P L A Y I N G - G A M E S*
│• *[ ${RandomSymbol} ]* clan 🄵
│• *[ ${RandomSymbol} ]* clan create 🄵
│• *[ ${RandomSymbol} ]* clan join 🄵
│• *[ ${RandomSymbol} ]* clan approve 🄵
│• *[ ${RandomSymbol} ]* clan war 🄵
│• *[ ${RandomSymbol} ]* clan list 🄵
│• *[ ${RandomSymbol} ]* clan leave 🄵
│• *[ ${RandomSymbol} ]* clan delete 🄵
│• *[ ${RandomSymbol} ]* clan member 🄵
│• *[ ${RandomSymbol} ]* clan missions 🄵
│• *[ ${RandomSymbol} ]* clan task 🄵
│• *[ ${RandomSymbol} ]* clan upgrade 🄵
│• *[ ${RandomSymbol} ]* clan tournament 🄵
└┈─────────────────⏣
`}

global.vpsmenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *D I G I T A L - O C E A N* 
│• *[ ${RandomSymbol} ]* sisadroplet 🄾
│• *[ ${RandomSymbol} ]* restartvps 🄾
│• *[ ${RandomSymbol} ]* turnoff 🄾
│• *[ ${RandomSymbol} ]* turnon 🄾
│• *[ ${RandomSymbol} ]* rebuild 🄾
│• *[ ${RandomSymbol} ]* deldroplet 🄾
│• *[ ${RandomSymbol} ]* listdroplet 🄾
│• *[ ${RandomSymbol} ]* cekdroplet 🄾
│• *[ ${RandomSymbol} ]* vps1g1c 🄾
│• *[ ${RandomSymbol} ]* vps2g1c 🄾
│• *[ ${RandomSymbol} ]* vps2g2c 🄾
│• *[ ${RandomSymbol} ]* vps4g2c 🄾
│• *[ ${RandomSymbol} ]* vps8g4c 🄾
│• *[ ${RandomSymbol} ]* sendvps 🄾
└┈─────────────────⏣

❐ *L I N O D E*
│• *[ ${RandomSymbol} ]* linode2gb 🄾
│• *[ ${RandomSymbol} ]* linode4gb 🄾
│• *[ ${RandomSymbol} ]* linode8gb 🄾
│• *[ ${RandomSymbol} ]* linode16gb 🄾
│• *[ ${RandomSymbol} ]* deletelinode🄾
│• *[ ${RandomSymbol} ]* sisalinode 🄾
│• *[ ${RandomSymbol} ]* rebuildlinode 🄾
│• *[ ${RandomSymbol} ]* cekvpslinode 🄾
│• *[ ${RandomSymbol} ]* saldolinode 🄾
│• *[ ${RandomSymbol} ]* resetpassword 🄾
│• *[ ${RandomSymbol} ]* listlinode 🄾
│• *[ ${RandomSymbol} ]* offlinode 🄾
│• *[ ${RandomSymbol} ]* onlinode 🄾
│• *[ ${RandomSymbol} ]* rebootlinode 🄾
└┈─────────────────⏣
`}

global.librarymenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *L I B R A R Y* 
│• *[ ${RandomSymbol} ]* cerpen-anak 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasadaerah 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasainggris 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasajawa 🄵
│• *[ ${RandomSymbol} ]* cerpen-bahasasunda🄵
│• *[ ${RandomSymbol} ]* cerpen-budaya 🄵
│• *[ ${RandomSymbol} ]* cerpen-cinta 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintaislami 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintapertama 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintaromantis 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintasedih 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintasegitiga 🄵
│• *[ ${RandomSymbol} ]* cerpen-cintasejati 🄵
│• *[ ${RandomSymbol} ]* cerpen-galau 🄵
│• *[ ${RandomSymbol} ]* cerpen-gokil 🄵
│• *[ ${RandomSymbol} ]* cerpen-inspiratif 🄵
│• *[ ${RandomSymbol} ]* cerpen-jepang 🄵
│• *[ ${RandomSymbol} ]* cerpen-kehidupan
│• *[ ${RandomSymbol} ]* cerpen-keluarga 🄵
│• *[ ${RandomSymbol} ]* cerpen-kisahnyata 🄵
│• *[ ${RandomSymbol} ]* cerpen-korea 🄵
│• *[ ${RandomSymbol} ]* cerpen-kristen 🄵
│• *[ ${RandomSymbol} ]* cerpen-liburan 🄵
│• *[ ${RandomSymbol} ]* cerpen-malaysia 🄵
│• *[ ${RandomSymbol} ]* cerpen-mengharukan 🄵
│• *[ ${RandomSymbol} ]* cerpen-misteri 🄵
│• *[ ${RandomSymbol} ]* cerpen-motivasi 🄵
│• *[ ${RandomSymbol} ]* cerpen-nasihat 🄵
│• *[ ${RandomSymbol} ]* cerpen-nasionalisme 🄵
│• *[ ${RandomSymbol} ]* cerpen-olahraga 🄵
│• *[ ${RandomSymbol} ]* cerpen-patahhati
│• *[ ${RandomSymbol} ]* cerpen-penantian 🄵
│• *[ ${RandomSymbol} ]* cerpen-pendidikan 🄵
│• *[ ${RandomSymbol} ]* cerpen-pengalaman 🄵
│• *[ ${RandomSymbol} ]* cerpen-pengorbanan 🄵
│• *[ ${RandomSymbol} ]* cerpen-penyesalan 🄵
│• *[ ${RandomSymbol} ]* cerpen-perjuangan 🄵
│• *[ ${RandomSymbol} ]* cerpen-perpisahan 🄵
│• *[ ${RandomSymbol} ]* cerpen-persahabatan 🄵
│• *[ ${RandomSymbol} ]* cerpen-petualangan 🄵
│• *[ ${RandomSymbol} ]* cerpen-ramadhan 🄵
│• *[ ${RandomSymbol} ]* cerpen-remaja 🄵
│• *[ ${RandomSymbol} ]* cerpen-rindu 🄵
│• *[ ${RandomSymbol} ]* cerpen-rohani 🄵
│• *[ ${RandomSymbol} ]* cerpen-romantis 🄵
│• *[ ${RandomSymbol} ]* cerpen-sastra 🄵
│• *[ ${RandomSymbol} ]* cerpen-sedih 🄵
│• *[ ${RandomSymbol} ]* cerpen-sejarah 🄵
└┈─────────────────⏣
`}

global.cryptomenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *C R Y P T O* 
│• *[ ${RandomSymbol} ]* crypto 🄵
│• *[ ${RandomSymbol} ]* crypto-historical 🄵
│• *[ ${RandomSymbol} ]* market-pairs 🄵
│• *[ ${RandomSymbol} ]* ohlcv-historical 🄵
│• *[ ${RandomSymbol} ]* ohlcv-latest 🄵
│• *[ ${RandomSymbol} ]* airdrop-list🄵
│• *[ ${RandomSymbol} ]* airdrop-details 🄵
│• *[ ${RandomSymbol} ]* crypto-categories 🄵
│• *[ ${RandomSymbol} ]* crypto-category 🄵
└┈─────────────────⏣
`}

global.uploadermenu = (prefix) => {
return `🄾 = For Owner
🄶 = For Group
🄵 = For Free User
🄿 = For Premium User

❐ *U P L O A D E R* 
│• *[ ${RandomSymbol} ]* tourl 🄵
│• *[ ${RandomSymbol} ]* nekohime 🄵
│• *[ ${RandomSymbol} ]* top4top 🄵
└┈─────────────────⏣
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})