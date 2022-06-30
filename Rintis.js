require('../options/config')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var toHur = require('@develoka/angka-terbilang-js')
var path = require('path')
var os = require('os')
var jimp = require('jimp')
var ra = require('ra-api')
var mathjs = require('mathjs')
var ig = require('insta-fetcher')
var hikki = require('hikki-me') 
var xfarr = require('xfarr-api')
var yts = require('yt-search')
var google = require('google-it')
var hxz = require('hxz-api')
var caliph = require('caliph-api')
var brainly = require('brainly-scraper');
var moment = require('moment-timezone')
var ms = require('parse-ms')
var toMs = require('ms')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var nou = require("node-os-utils");
var maker = require('mumaker')
var { performance } = require('perf_hooks')
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../message/myfunc')
var IkyyClient = require("ikyy");
var Ikyy = new IkyyClient();
var { Primbon } = require('scrape-primbon')
var primbon = new Primbon() 
var { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat} = require ('@bochilteam/scraper') 
var { FajarNews, 
BBCNews, 
metroNews, 
CNNNews, 
iNews, 
KumparanNews, 
TribunNews, 
DailyNews, 
DetikNews, 
OkezoneNews, 
CNBCNews, 
KompasNews, 
SindoNews, 
TempoNews, 
IndozoneNews, 
AntaraNews, 
RepublikaNews, 
VivaNews, 
KontanNews, 
MerdekaNews, 
KomikuSearch, 
AniPlanetSearch, 
KomikFoxSearch, 
KomikStationSearch, 
MangakuSearch, 
KiryuuSearch, 
KissMangaSearch, 
KlikMangaSearch, 
PalingMurah, 
LayarKaca21, 
AminoApps, 
Mangatoon, 
WAModsSearch, 
Emojis, 
CoronaInfo, 
JalanTikusMeme, 
Cerpen, 
Quotes, 
Couples, 
Darkjokes } = require('dhn-api')

//SCARPING
const { getPosiMenu, getPosiCmd, getAnswerCmd, getPosiRows } = require("../lib/respon-list");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { aiovideodl } = require('../lib/scraper.js')
const { cerpen } = require('../lib/cerpen')
const _sewa = require('../lib/sewa')
const { TiktokDownloader } = require('../lib/tiktokdl') 
const { TelegraPh } = require ('../lib/uploader')
const { hentai } = require('../lib/scraper2.js')
const { mediafireDl, igstalk } = require('../lib/function')
const { wikiSearch } = require('../scrape/wiki.js');
const { Gempa } = require("../scrape/gempa.js");

//━━━━━━━━━━━━━━━[ THUMBNAIL ]━━━━━━━━━━━━━━━━━//

var image = fs.readFileSync('./image/zeroyt7.jpg')
var thumbnail = fs.readFileSync('./image/thumbnail.jpg')

let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
let { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/respon-list.js')
var _prem = require("../lib/premium");

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
var pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
var _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
var _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
var limit = JSON.parse(fs.readFileSync('./database/limit.json'))
var sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let listStore = JSON.parse(fs.readFileSync('./database/list.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let bad = JSON.parse(fs.readFileSync('./database/bad.json'));

var tebaklagu = db.data.game.tebaklagu = []
var _family100 = db.data.game.family100 = []
var kuismath = db.data.game.math = []
var tebakgambar = db.data.game.tebakgambar = []
var tebakkata = db.data.game.tebakkata = []
var caklontong = db.data.game.lontong = []
var caklontong_desk = db.data.game.lontong_desk = []
var tebakkalimat = db.data.game.kalimat = []
var tebaklirik = db.data.game.lirik = []
var tebaktebakan = db.data.game.tebakan = []
var vote = db.data.others.vote = []

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = Fara = async (Fara, m, setting, chatUpdate, db_respon_list, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
 var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var sender = m.isGroup ? m.participant : m.key.remoteJid
var from = m.key.remoteJid
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
var pushname = m.pushName || "No Name"
var botNumber = await Fara.decodeJid(Fara.user.id)
var isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await Fara.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isUser = pendaftar.includes(sender)
var isSewa = _sewa.checkSewaGroup(from, sewa)
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
var isPremium = isCreator ? true : _prem.checkPremiumUser(sender, premium)
autoreadsw = true
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}

var creator = '© Regards : Rintis ID'
var miyako = 'Contact\nEmail: rintisid@gmail.com\nContact: 62 815-7830-1106\nInstagram: https://instagram.com/rintiswpameling\nGithub: https://github.com/Xbotz01\nRegion: Indonesia, Sukoharjo, Jawa Tengah, Jl. Rawitmerah • 57557'
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
}
	    
} catch (err) {
console.error(err)
}
	    //Expired Sewa
_sewa.expiredCheck(Fara, sewa)

//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		Fara.chatRead(from)
	}
	}
// Push Message To Console && Auto Read
        if (command) {
await Fara.sendPresenceUpdate('composing', m.chat)
Fara.sendReadReceipt(from, m.sender, [m.key.id])
}
// Store
        if (!isCmd && isGroup && isAlreadyResponList(from, body, db_respon_list)) {
            var get_data_respon = getDataResponList(from, body, db_respon_list)
            if (get_data_respon.isImage === false) {
                Fara.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
                    quoted: m
                })
            } else {
                Fara.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
 function mentions(teks, mems = [], id) {
        	if (id == null || id == undefined || id == false) {
        	    let res = Fara.sendMessage(from, { text: teks, mentions: mems })
        	    return res
        	} else {
                let res = Fara.sendMessage(from, { text: teks, mentions: mems }, { quoted: m})
                return res
            }
        }
        const reply = async(teks) => {
		try {
        ppuser = await Fara.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        userpp = await getBuffer(ppuser)
        Fara.sendMessage(m.chat, { text: teks, contextInfo:{ 
        "forwardingScore":999,
        "isForwarded":true, 
        "mentionedJid": [m.sender], 
        "externalAdReply" : { 
        "title" : `Hallo Kak`, 
        "body" : `Mampir Website Di Bawah Yaa`, 
        "previewType" : "PHOTO", 
        "thumbnailUrl" : ``, 
        "thumbnail" : userpp, 
        "sourceUrl": `https://chat.whatsapp.com/BABvK9nnhhJLImFXJaoLg9`}}}, 
        { quoted: m })
        }
//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!Fara.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ AUTO READ ]━━━━━━━━━━━━━━━━━//

if (m.message) {
Fara.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
	
//━━━━━━━━━━━━━━━[ RESET LIMIT ]━━━━━━━━━━━━━━━━━//

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO ]━━━━━━━━━━━━━━━━━//

if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await Fara.setStatus(`${Fara.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
	    
//━━━━━━━━━━━━━━━[ FUNCTION GROUP ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await Fara.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Fara.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Antiwame by xeon
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  Fara.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words by xeon
if (antiToxic)
if (budy.includes("njing")) 
if (budy.includes("anjg")) 
if (budy.includes("ajg")) 
if (budy.includes("anj")) 
if (budy.includes("bangsat")) 
if (budy.includes("bngsd")) 
if (budy.includes("tod")) 
if (budy.includes("asw")) 
if (budy.includes("bajingan")) 
if (budy.includes("kunyuk")) 
if (budy.includes("kntol")) 
if (budy.includes("kontol")) 
if (budy.includes("kntl")) 
if (budy.includes("kontl")) 
if (budy.includes("blok")) 
if (budy.includes("memek")) 
if (budy.includes("mmk")) 
if (budy.includes("memk")) 
if (budy.includes("mmek")) 
if (budy.includes("gentod")) 
if (budy.includes("gentot")) 
if (budy.includes("ento")) 
if (budy.includes("jablay")) 
if (budy.includes("banci")) 
if (budy.includes("pencong")) 
if (budy.includes("pecun")) 
if (budy.includes("perek")) 
if (budy.includes("ytem")) 
if (budy.includes("yatim")) 
if (budy.includes("brengsek")) 
if (budy.includes("bejad")) 
if (budy.includes("keparat")) 
if (budy.includes("setan")) 
if (budy.includes("budek")) 
if (budy.includes("sarap")) 
if (budy.includes("tolol")) 
if (budy.includes("lol")) 
if (budy.includes("sinting")) 
if (budy.includes("geblek")) 
if (budy.includes("idiot")) 
if (budy.includes("goblok")) 
if (budy.includes("blok")) 
if (budy.includes("gblok")) 
if (budy.includes("gblk")) 
if (budy.includes("bgo")) 
if (budy.includes("bego")) 
if (budy.includes("meki")) 
if (budy.includes("telaso")) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}

//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Fara.groupParticipantsUpdate(m.chat, [kice], 'remove')
Fara.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

//━━━━━━━━━━━━━━━[ ALL CHT ]━━━━━━━━━━━━━━━━━//
//anti viewonce by xeon
if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
❖ Name : ${m.pushName}
❖ User : @${m.sender.split("@")[0]}
❖ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} 
❖ Date : ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}
❖ MessageType : ${m.mtype}`
Fara.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Fara.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Fara.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Fara.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Fara.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `© Rintis ID`, orderTitle: 'Please Follow Instagtam @rintiswpameling', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

// Auto Registrasi
        if (isCmd && !isUser) {
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//Waktu
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tanggal = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
var wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
var wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

let d = new Date(new Date + 3600000)
let locale= 'id'
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: Fara.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Fara.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Fara.ev.emit('messages.upsert', msg)
}
	    
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
Fara.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Fara.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await Fara.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Fara.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Fara.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Fara.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Fara.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Fara.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Fara.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Fara.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Fara.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Fara.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Fara.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
luser.afkReason = ''
}

const buttonsDefault = [
        	{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/Farawpameling` } },
        	{ urlButton: { displayText: `Group Bot`, url : `https://chat.whatsapp.com/BABvK9nnhhJLImFXJaoLg9` } },
        	{ quickReplyButton: { displayText: `Menu Bot`, id: `${prefix}help` } },
        	{ quickReplyButton: { displayText: `Status Bot`, id: `${prefix}ping` } },
        	{ quickReplyButton: { displayText: `Dashboard`, id: `${prefix}dashboard` } }
        ]
        
var buttonFitur = [
        	{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/rintiswpameling` } },
        	{ quickReplyButton: { displayText: `Back to menu`, id: `${prefix}help` } }
        ]
 
 async function sendBut5nya(teks) {
var button = [
{"urlButton": {"displayText": "MyOwner","url": `https://wa.me/6281578301106`}},
{"urlButton": {"displayText": "Instagram","url": `https://instagram.com/rintiswpameling`}},
{"quickReplyButton": {"displayText": "Sewabot","id": 'sewabot'}},
{"quickReplyButton": {"displayText": "Status Bot","id": 'ping'}}
		]
Fara.sendMessage(from, { caption: teks, location: { jpegThumbnail: thumbnail }, templateButtons: button, footer: miyako, mentions: [sender] })
        .catch ((err) => reply(err))
        }
 
 async function addCountCmdUser(nama, sender, u) {
            var posi = null
            var pos = null
            Object.keys(u).forEach((i) => {
                if (u[i].jid === sender) {
                    posi = i
                }
            })
            if (posi === null) {
                u.push({jid: sender, db: [{nama: nama, count: 0}]})
                fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                Object.keys(u).forEach((i) => {
                    if (u[i].jid === sender) {
                        posi = i
                    }
                })
            }
            if (posi !== null) {
                Object.keys(u[posi].db).forEach((i) => {
                    if (u[posi].db[i].nama === nama) {
                        pos = i
                    }
                })
                if (pos === null) {
                    u[posi].db.push({nama: nama, count: 1})
                    fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                } else {
                    u[posi].db[pos].count += 1
                    fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                }
            }
        }
 
     async function getPosiCmdUser(sender, _db) {
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].jid === sender) {
                    posi = i
                }
            })
            return posi
        }

async function addCountCmd(nama, sender, _db) {
            addCountCmdUser(nama, sender, _cmdUser)
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].nama === nama) {
                   posi = i
                }
            })
            if (posi === null) {
                _db.push({nama: nama, count: 1})
                fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
                _db[posi].count += 1
                fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            }
        }

const hariRaya = new Date('1 7, 2023 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
function hitungmundur(bulan, tanggal) {
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
        
// Auto Block +212
        if (sender.startsWith('212')) {
            return Fara.updateBlockStatus(sender, 'block')
        }
        
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}
// Quoted
const content = JSON.stringify(m.message)
const isImage = (m.mtype == 'imageMessage')
const isVideo = (m.mtype == 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isQuotedMsg = m.isQuotedMsg
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch(command) {

case 'menu':{
	addCountCmd('#menu', sender, _cmd)
menuwh =`Hii ${pushname} 👋
Pilih fitur button sesuai kebutuhan kamu yaa

*STATUS USER*
*Nama* : ${pushname}
*Nomor* : wa.me/${sender.split('@')[0]}
*Status* : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
*Limit* : ${isCreator ? '∞' : isPremium ? 'Unlimited' : getLimit(sender, limitawal.free, limit)}\n\n*STATUS BOT*\n*Owner* : ${packname}\n*Name Bot* : ${botname}\n*Jam* : ${jam}\n*Libray* : Baileys MD\n*User* : ${pendaftar.length}\n*Hijriah* : ${dateIslamic}\n`
}
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonsDefault, footer: miyako, mentions: [sender] })
break
case 'help':{
	let mundur = hitungmundur(7, 9)
	let timestamp = speed()
let latensi = speed() - timestamp
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `Hi ${pushname}`,
description: `*HITUNG MUNDUR IDUL ADHA*\n${mundur}\n\n_*INFO USER*_\n*Nama* : ${pushname}\n*Link* : wa.me/${sender.split('@')[0]}\n*Limit* : ${isCreator ? 'Infinity' : isPremium ? 'Unlimited' : getLimit(sender, limitawal.free, limit)}\n\n_*INFO BOT*_\n*Owner* : ${isCreator ? 'Yes' : 'No'}\n*Hit Harian* : ${jumlahharian}\n*WIB* : ${jam}\n*WITA* : ${wita}\n*WIT* : ${wit}\n*Runtime* : ${runtime(process.uptime())}\n*Speed* : ${latensi.toFixed(4)}\n*Libray* : Baileys Multi-Device\n*User* : ${pendaftar.length}`,
buttonText: "Click Here",
footerText: `XynosBOT - MD`,
listType: "SINGLE_SELECT",
sections: [{
"title": "List Menu",
"rows": [
                                                                        {
                                                                            "title": "Group Fitur",
                                                                            "description": "Menampilkan Fitur Grup",
                                                                            "rowId": `${prefix}menugroup`
                                                                        },
                                                                        
                                                                        {
                                                                            
                                                                            "title": "Owner Fitur",
                                                                            "description": "Menampilakan Owner Fitur ( khusus owner)",
                                                                            "rowId": `${prefix}menuowner`
                                                                        },
                                                                        {
                                                                        
                                                                            "title": "Fun Fitur",
                                                                            "description": "Menampilkan Fun Fitur",
                                                                            "rowId": `${prefix}menufun`
                                                                        },
                                                                        {
                                                                            
                                                                            "title": "Converter Fitur",
                                                                            "description": "Menampilkan Converter Fitur",
                                                                            "rowId": `${prefix}menuconvert`
                                                                        },
                                                                        {
                                                                        	"title": "Sistem Fitur",
                                                                            "description": "Menampilkan Fitur Sistem",
                                                                            "rowId": `${prefix}sistemmenu`
                                                                        },
                                                                        {
                                                                        	"title": "Sticker Fitur",
                                                                            "description": "Menampilkan Fitur Sticker",
                                                                            "rowId": `${prefix}menusticker`
                                                                        },
                                                                        {
                                                                        	"title": "Sticker Anime Fitur",
                                                                            "description": "Menampilan Fitur Sticker Anime",
                                                                            "rowId": `${prefix}stickeranime`
                                                                        },
                                                                        {
                                                                        	"title": "Random Text Fitur",
                                                                            "description": "Menampilan Fitur Random Text",
                                                                            "rowId": `${prefix}randomtext`
                                                                        },
                                                                        {
                                                                        	"title": "Random Cerpen Fitur",
                                                                            "description": "Menampilan Fitur Random Cerpen",
                                                                            "rowId": `${prefix}cerpenmenu`
                                                                        },
                                                                        {
                                                                        	"title": "Download Fitur",
                                                                            "description": "Menampilkan Fitur Download",
                                                                            "rowId": `${prefix}menudownload`
                                                                        },
                                                                        {
                                                                        	"title": "Other Fitur",
                                                                            "description": "Menampilkan Fitur Other",
                                                                            "rowId": `${prefix}other`
                                                                        },
                                                                        {
                                                                        	"title": "Stalking Fitur",
                                                                            "description": "Menampilkan Fitur Stalking",
                                                                            "rowId": `${prefix}menustalk`
                                                                        },
                                                                        {
                                                                        	"title": "Database Fitur",
                                                                            "description": "Menampilkan Fitur Database",
                                                                            "rowId": `${prefix}database`
                                                                        },
                                                                        {
                                                                        	"title": "Search Fitur",
                                                                            "description": "Menampilkan Fitur Search",
                                                                            "rowId": `${prefix}menusearch`
                                                                        },
                                                                        {
                                                                        	"title": "Information Fitur",
                                                                            "description": "Menampilkan Fitur Information",
                                                                            "rowId": `${prefix}menuinformation`
                                                                        },
                                                                        {
                                                                        	"title": "Islami Fitur",
                                                                            "description": "Menampilkan Fitur Islam",
                                                                            "rowId": `${prefix}menuislam`
                                                                        },
                                                                        {
                                                                        	"title": "Textprome Fitur",
                                                                            "description": "Menampilkan Fitur Texpro",
                                                                            "rowId": `${prefix}textpromenu`
                                                                        },
                                                                        {
                                                                        	"title": "Sound Fitur",
                                                                            "description": "Menampilkan Fitur Sound",
                                                                            "rowId": `${prefix}menusound`
                                                                        },
                                                                        {
                                                                        	"title": "Sound TikTok Fitur",
                                                                            "description": "Menampilan Fitur Sound TikTok",
                                                                            "rowId": `${prefix}soundtt`
                                                                        },
                                                                        {
                                                                        	"title": "Anime Fitur",
                                                                            "description": "Menampilkan Fitur Anime Image",
                                                                            "rowId": `${prefix}menuanime`
                                                                        },
                                                                        {
                                                                        	"title": "Nsfw Fitur",
                                                                            "description": "Menampilkan Fitur Nsfw (Khusus Premium)",
                                                                            "rowId": `${prefix}menunsfw`
                                                                        },
                                                                        {
                                                                        	"title": "Anonymous Fitur",
                                                                            "description": "Mencari Patner Untuk Anda",
                                                                            "rowId": `${prefix}menuanony`
                                                                        },
                                                                        {
                                                                        	"title": "Store Fitur",
                                                                            "description": "Menampilkan Fitur Store",
                                                                            "rowId": `${prefix}store`
                                                                        },
                                                                        {
                                                                        	"title": "RULES",
                                                                            "description": "PERATURAN DALAM MENGGUNAKAN BOT",
                                                                            "rowId": `${prefix}rules`
                                                                        }
                                                                    ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
Fara.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'menugroup':
menuwh =`*GROUP MENU*

• ${prefix}kick
• ${prefix}add
• ${prefix}promote
• ${prefix}demote
• ${prefix}setname
• ${prefix}setdesc
• ${prefix}setppgrup
• ${prefix}tagall
• ${prefix}hidetag
• ${prefix}vote
• ${prefix}upvote
• ${prefix}devote
• ${prefix}cekvote
• ${prefix}delvote
• ${prefix}group
• ${prefix}editinfo
• ${prefix}antilink`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menusticker':
menuwh =`*STICKER MENU*

• ${prefix}sticker
• ${prefix}emoji
• ${prefix}takestick
• ${prefix}smeme
• ${prefix}emojimix
• ${prefix}patrick
• ${prefix}gura
• ${prefix}doge
• ${prefix}sbucin
• ${prefix}ttp
• ${prefix}attp
• ${prefix}attp2`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menuowner':
menuwh =`*OWNER MENU*

• ${prefix}join
• ${prefix}leave
• ${prefix}setppbot
• ${prefix}setbiobot
• ${prefix}cowner *add/del*
• ${prefix}sewa *add/del*
• ${prefix}sendsession
• ${prefix}public
• ${prefix}self
• ${prefix}addprem
• ${prefix}delprem
• ${prefix}block
• ${prefix}unblock
• ${prefix}getcase
• ${prefix}bc
• ${prefix}bcgc`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menufun':
menuwh =`*FUN MENU*

• ${prefix}jadian
• ${prefix}jodohku
• ${prefix}tictactoe
• ${prefix}delttt
• ${prefix}family100
• ${prefix}tebak
• ${prefix}math
• ${prefix}suitpvp
• ${prefix}halah
• ${prefix}hilih
• ${prefix}huluh
• ${prefix}heleh
• ${prefix}holoh`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menuconvert':
menuwh =`*CONVERTER MENU*

• ${prefix}tts
• ${prefix}tourl
• ${prefix}toimage
• ${prefix}style
• ${prefix}tovideo
• ${prefix}togif
• ${prefix}tovn
• ${prefix}tohuruf
• ${prefix}tomp3
• ${prefix}aksaratolatin
• ${prefix}latintoaksara`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menudownload':
menuwh =`*DOWNLOAD MENU*

• ${prefix}tiktok
• ${prefix}tiktokwm
• ${prefix}tiktokaudio
• ${prefix}play
• ${prefix}ytmp4
• ${prefix}ytmp3
• ${prefix}igdl
• ${prefix}facebook
• ${prefix}pinterestdl
• ${prefix}jooxplay
• ${prefix}spotify
• ${prefix}spotifysearch
• ${prefix}mediafire
• ${prefix}twitter`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'other':
menuwh =`*OTHER MENU*

• ${prefix}dashboard
• ${prefix}listpremium
• ${prefix}listsewa
• ${prefix}ceksewa
• ${prefix}speed
• ${prefix}speedtest
• ${prefix}runtime
• ${prefix}hapus *reply cht*
• ${prefix}ssweb
• ${prefix}autosticker
• ${prefix}autostickerpc
• ${prefix}ringtone
• ${prefix}shortlink
• ${prefix}kalkulator
• ${prefix}translate`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menustalk':
menuwh =`*STALKER MENU*

• ${prefix}tiktokstalk
• ${prefix}igstalk
• ${prefix}githubstalk
• ${prefix}ytstalk
• ${prefix}ffstalk
• ${prefix}mlstalk
• ${prefix}supersusstalk
• ${prefix}nickdomino
• ${prefix}nickpubg`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menusearch':
menuwh =`*SEARCH MENU*

• ${prefix}lirik
• ${prefix}pinterest
• ${prefix}wikipedia
• ${prefix}google
• ${prefix}gimage
• ${prefix}sinonim
• ${prefix}rangkum
• ${prefix}fakeuseragent
• ${prefix}brainly
• ${prefix}telesticker
• ${prefix}ytsearch
• ${prefix}stikersearch
• ${prefix}groupwa`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menuinformation':
menuwh =`*INFORMATION MENU*

• ${prefix}cuaca
• ${prefix}cekapikey *Lolhuman*
• ${prefix}merdeka-news 
• ${prefix}kontan-news 
• ${prefix}cnbc-news 
• ${prefix}tribun-news 
• ${prefix}indozone-news 
• ${prefix}kompas-news 
• ${prefix}detik-news 
• ${prefix}daily-news 
• ${prefix}inews-news 
• ${prefix}okezone-news 
• ${prefix}sindo-news 
• ${prefix}tempo-news 
• ${prefix}antara-news 
• ${prefix}cnn-news 
• ${prefix}fajar-news `
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'store':
menuwh =`*STORE MENU*

• ${prefix}proses
• ${prefix}done`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'database':
menuwh =`*DATABASE MENU*

• ${prefix}addmsg
• ${prefix}listmsg
• ${prefix}getmsg
• ${prefix}delmsg`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'textpromenu':
menuwh =`*TEXTPROME MENU*

• ${prefix}candy 
• ${prefix}christmas 
• ${prefix}3dchristmas 
• ${prefix}sparklechristmas
• ${prefix}deepsea 
• ${prefix}scifi 
• ${prefix}rainbow 
• ${prefix}waterpipe 
• ${prefix}spooky 
• ${prefix}pencil 
• ${prefix}circuit 
• ${prefix}discovery 
• ${prefix}metalic 
• ${prefix}fiction 
• ${prefix}demon 
• ${prefix}transformer 
• ${prefix}berry 
• ${prefix}thunder 
• ${prefix}magma 
• ${prefix}3dstone 
• ${prefix}Faranlight 
• ${prefix}glitch 
• ${prefix}harrypotter 
• ${prefix}brokenglass
• ${prefix}papercut 
• ${prefix}watercolor
• ${prefix}multicolor 
• ${prefix}Farandevil 
• ${prefix}underwater 
• ${prefix}graffitibike
• ${prefix}snow 
• ${prefix}cloud 
• ${prefix}honey 
• ${prefix}ice 
• ${prefix}fruitjuice 
• ${prefix}biscuit 
• ${prefix}wood 
• ${prefix}chocolate 
• ${prefix}strawberry 
• ${prefix}matrix 
• ${prefix}blood 
• ${prefix}dropwater 
• ${prefix}toxic 
• ${prefix}lava 
• ${prefix}rock 
• ${prefix}bloodglas 
• ${prefix}hallowen 
• ${prefix}darkgold 
• ${prefix}joker 
• ${prefix}wicker
• ${prefix}firework 
• ${prefix}skeleton 
• ${prefix}blackpink 
• ${prefix}sand 
• ${prefix}glue 
• ${prefix}1917 
• ${prefix}leaves`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menusound':
menuwh =`*SOUND MENU*

• ${prefix}bass
• ${prefix}blown
• ${prefix}deep
• ${prefix}earrape
• ${prefix}fast
• ${prefix}fat
• ${prefix}nightcore
• ${prefix}reverse
• ${prefix}robot
• ${prefix}slow
• ${prefix}tupai
• ${prefix}sound1
• ${prefix}sound2
• ${prefix}sound3
• ${prefix}sound4
• ${prefix}sound5
• ${prefix}sound6
• ${prefix}sound7
• ${prefix}sound8
• ${prefix}sound9
• ${prefix}sound10
• ${prefix}sound11
• ${prefix}sound12
• ${prefix}sound13
• ${prefix}sound14
• ${prefix}sound15
• ${prefix}sound16
• ${prefix}sound17
• ${prefix}sound18
• ${prefix}sound19
• ${prefix}sound20
• ${prefix}sound21
• ${prefix}sound22
• ${prefix}sound23
• ${prefix}sound24
• ${prefix}sound25
• ${prefix}sound26
• ${prefix}sound27
• ${prefix}sound28
• ${prefix}sound29
• ${prefix}sound30
• ${prefix}sound31
• ${prefix}sound32
• ${prefix}sound33
• ${prefix}sound34
• ${prefix}sound35
• ${prefix}sound36
• ${prefix}sound37
• ${prefix}sound38
• ${prefix}sound39
• ${prefix}sound40
• ${prefix}sound41
• ${prefix}sound42
• ${prefix}sound43
• ${prefix}sound44
• ${prefix}sound45
• ${prefix}sound46
• ${prefix}sound47
• ${prefix}sound48
• ${prefix}sound49
• ${prefix}sound50
• ${prefix}sound51
• ${prefix}sound52
• ${prefix}sound53
• ${prefix}sound54
• ${prefix}sound55
• ${prefix}sound56
• ${prefix}sound57
• ${prefix}sound58
• ${prefix}sound59
• ${prefix}sound60
• ${prefix}sound61
• ${prefix}sound62
• ${prefix}sound63
• ${prefix}sound64
• ${prefix}sound65
• ${prefix}sound66
• ${prefix}sound67
• ${prefix}sound68
• ${prefix}sound69
• ${prefix}sound70
• ${prefix}sound71
• ${prefix}sound72
• ${prefix}sound73
• ${prefix}sound74`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'soundtt':
menuwh =`*SOUND TIKTOK MENU*

• ${prefix}sound1
• ${prefix}sound2
• ${prefix}sound3
• ${prefix}sound4
• ${prefix}sound5
• ${prefix}sound6
• ${prefix}sound7
• ${prefix}sound8
• ${prefix}sound9
• ${prefix}sound10
• ${prefix}sound11
• ${prefix}sound12
• ${prefix}sound13
• ${prefix}sound14
• ${prefix}sound15
• ${prefix}sound16
• ${prefix}sound17
• ${prefix}sound18
• ${prefix}sound19
• ${prefix}sound20
• ${prefix}sound21
• ${prefix}sound22
• ${prefix}sound23
• ${prefix}sound24
• ${prefix}sound25
• ${prefix}sound26
• ${prefix}sound27
• ${prefix}sound28
• ${prefix}sound29
• ${prefix}sound30
• ${prefix}sound31
• ${prefix}sound32
• ${prefix}sound33
• ${prefix}sound34
• ${prefix}sound35
• ${prefix}sound36
• ${prefix}sound37
• ${prefix}sound38
• ${prefix}sound39
• ${prefix}sound40
• ${prefix}sound41
• ${prefix}sound42
• ${prefix}sound43
• ${prefix}sound44
• ${prefix}sound45
• ${prefix}sound46
• ${prefix}sound47
• ${prefix}sound48
• ${prefix}sound49
• ${prefix}sound50
• ${prefix}sound51
• ${prefix}sound52
• ${prefix}sound53
• ${prefix}sound54
• ${prefix}sound55
• ${prefix}sound56
• ${prefix}sound57
• ${prefix}sound58
• ${prefix}sound59
• ${prefix}sound60
• ${prefix}sound61
• ${prefix}sound62
• ${prefix}sound63
• ${prefix}sound64
• ${prefix}sound65
• ${prefix}sound66
• ${prefix}sound67
• ${prefix}sound68
• ${prefix}sound69
• ${prefix}sound70
• ${prefix}sound71
• ${prefix}sound72
• ${prefix}sound73
• ${prefix}sound74
• ${prefix}sound75
• ${prefix}sound76
• ${prefix}sound77
• ${prefix}sound78
• ${prefix}sound79
• ${prefix}sound80
• ${prefix}sound81
• ${prefix}sound82
• ${prefix}sound83
• ${prefix}sound84
• ${prefix}sound85
• ${prefix}sound86
• ${prefix}sound87
• ${prefix}sound88
• ${prefix}sound89
• ${prefix}sound90
• ${prefix}sound91
• ${prefix}sound92
• ${prefix}sound93
• ${prefix}sound94
• ${prefix}sound95
• ${prefix}sound96
• ${prefix}sound97
• ${prefix}sound98
• ${prefix}sound99
• ${prefix}sound100
• ${prefix}sound101
• ${prefix}sound102
• ${prefix}sound103
• ${prefix}sound104
• ${prefix}sound105
• ${prefix}sound106
• ${prefix}sound107
• ${prefix}sound108
• ${prefix}sound109
• ${prefix}sound110
• ${prefix}sound111
• ${prefix}sound112
• ${prefix}sound113
• ${prefix}sound114
• ${prefix}sound115
• ${prefix}sound116
• ${prefix}sound117
• ${prefix}sound118
• ${prefix}sound119
• ${prefix}sound120
• ${prefix}sound121
• ${prefix}sound122
• ${prefix}sound123
• ${prefix}sound124
• ${prefix}sound125
• ${prefix}sound126
• ${prefix}sound127
• ${prefix}sound128
• ${prefix}sound129
• ${prefix}sound130
• ${prefix}sound131
• ${prefix}sound132
• ${prefix}sound133
• ${prefix}sound134
• ${prefix}sound135
• ${prefix}sound136
• ${prefix}sound137
• ${prefix}sound138
• ${prefix}sound139
• ${prefix}sound140
• ${prefix}sound141
• ${prefix}sound142
• ${prefix}sound143
• ${prefix}sound144
• ${prefix}sound145
• ${prefix}sound146
• ${prefix}sound147
• ${prefix}sound148
• ${prefix}sound149
• ${prefix}sound150
• ${prefix}sound151
• ${prefix}sound152
• ${prefix}sound153
• ${prefix}sound154
• ${prefix}sound155
• ${prefix}sound156
• ${prefix}sound157
• ${prefix}sound158
• ${prefix}sound159
• ${prefix}sound160
• ${prefix}sound161`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'stickeranime':
menuwh =`*STICKER ANIME MENU*

• ${prefix}cry
• ${prefix}kill
• ${prefix}hug
• ${prefix}pat
• ${prefix}lick
• ${prefix}kiss
• ${prefix}bite
• ${prefix}yeet
• ${prefix}neko
• ${prefix}bully
• ${prefix}bonk
• ${prefix}wink
• ${prefix}poke
• ${prefix}nom
• ${prefix}slap
• ${prefix}smile
• ${prefix}wave
• ${prefix}awoo
• ${prefix}blush
• ${prefix}smug
• ${prefix}glomp
• ${prefix}happy
• ${prefix}dance
• ${prefix}cringe
• ${prefix}highfive
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}handhold`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menuanime':
menuwh =`*WIBU MENU*

• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}neko
• ${prefix}shota
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menunsfw':
menuwh =`*NSFW MENU*

• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}cuckold
• ${prefix}cum
• ${prefix}ero
• ${prefix}femdom
• ${prefix}foot
• ${prefix}gangbang
• ${prefix}glasses
• ${prefix}jahy
• ${prefix}masturbation
• ${prefix}orgy
• ${prefix}panties
• ${prefix}pussy
• ${prefix}thighs
• ${prefix}yuri
• ${prefix}waifu
• ${prefix}loli
• ${prefix}husbu
• ${prefix}milf
• ${prefix}cosplay
• ${prefix}wallml`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menuanony':
menuwh =`*ANONYMOUS MENU*

• ${prefix}anonymous
• ${prefix}start
• ${prefix}next
• ${prefix}stop
• ${prefix}keluar`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'menuislam':
menuwh =`*ISLAM MENU*

• ${prefix}alquran
• ${prefix}alquranaudio
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}kisahnabi
• ${prefix}jadwalsholat
• ${prefix}iqro
• ${prefix}juzamma
• ${prefix}tafsirsurah`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'randomtext':
menuwh =`*RANDOM TEXT MENU*

• ${prefix}cerpen
• ${prefix}faktaunik
• ${prefix}wattpad
• ${prefix}wattpadsearch
• ${prefix}lk21
• ${prefix}quotes
• ${prefix}quotesdilan
• ${prefix}quotesanime
• ${prefix}bucin
• ${prefix}pantun
• ${prefix}katabijak
• ${prefix}ceritahoror`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'cerpenmenu':
menuwh =`*RANDOM CERPEN*

• ${prefix}ceritahoror
• ${prefix}cerpen-sejarah
• ${prefix}cerpen-sedih
• ${prefix}cerpen-sastra
• ${prefix}cerpen-romantis
• ${prefix}cerpen-rohani
• ${prefix}cerpen-rindu
• ${prefix}cerpen-remaja
• ${prefix}cerpen-ramadhan
• ${prefix}cerpen-petualangan
• ${prefix}cerpen-persahabatan
• ${prefix}cerpen-perpisahan
• ${prefix}cerpen-perjuangan
• ${prefix}cerpen-penyesalan
• ${prefix}cerpen-pengorbanan
• ${prefix}cerpen-pengalaman
• ${prefix}cerpen-pendidikan
• ${prefix}cerpen-penantian
• ${prefix}cerpen-patahhati
• ${prefix}cerpen-olahraga
• ${prefix}cerpen-nasionalisme
• ${prefix}cerpen-nasihat
• ${prefix}cerpen-motivasi
• ${prefix}cerpen-misteri
• ${prefix}cerpen-mengharukan
• ${prefix}cerpen-malaysia
• ${prefix}cerpen-liburan
• ${prefix}cerpen-kristen
• ${prefix}cerpen-korea
• ${prefix}cerpen-kisahnyata
• ${prefix}cerpen-keluarga
• ${prefix}cerpen-kehidupan
• ${prefix}cerpen-jepang
• ${prefix}cerpen-inspiratif
• ${prefix}cerpen-gokil
• ${prefix}cerpen-galau
• ${prefix}cerpen-cintasejati
• ${prefix}cerpen-cintasegitiga
• ${prefix}cerpen-cintasedih
• ${prefix}cerpen-cintaromantis
• ${prefix}cerpen-cintapertama
• ${prefix}cerpen-cintaislami
• ${prefix}cerpen-cinta
• ${prefix}cerpen-budaya
• ${prefix}cerpen-bahasasunda
• ${prefix}cerpen-bahasajawa
• ${prefix}cerpen-bahasainggris
• ${prefix}cerpen-bahasadaerah
• ${prefix}cerpen-anak`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'sistemmenu':
menuwh =`*SISTEM MENU*

• ${prefix}antilinktg [on/off]
• ${prefix}antilinktt [on/off]
• ${prefix}antilinkytch [on/off]
• ${prefix}antilinkytvid [on/off]
• ${prefix}antilinkig [on/off]
• ${prefix}antilinkfb [on/off]
• ${prefix}antilinktwit [on/off]
• ${prefix}antilinkall [on/off]
• ${prefix}antiviewonce [on/off]
• ${prefix}autosticker [on/off]

• ${prefix}antivirus [on/off]`
Fara.sendMessage(from, { caption: menuwh, location: { jpegThumbnail: thumbnail }, templateButtons: buttonFitur, footer: miyako, mentions: [sender] })
break
case 'rules': case 'snk':
throw (`*RULES*
• Mohon untuk tidak spam bot karena bot ini sudah memiliki otomatis blokir bagi pengguna bot yang spam
• Mohon maaf jika ada yang memakai meny nsfw maka akan di block oleh owner, jika di gc tolong admin untuk menghubungi owner!!
• mohon untuk tidak menelepon bot karena bot ini sudah memiliki system blokir otomatis bagi orang yang sudah menelepon bot
• Kami tidak bertanggung jawab atas penyalahgunaan bot
• Users dilarang mengirimkan berbagai bug, virtes, dan sejenisnya ke nomor bot.
• Users dilarang menambahkan nomor bot secara ilegal, untuk menambahkan silahkan hubungi owner.

*KEBIJAKAN PRIVASI*
1. Bot tidak akan menyebarkan nomor users.
2. Bot tidak akan menyimpan media yang dikirimkan oleh users.
3. Bot tidak akan menyalahgunakan data data users.
4. Owner bot berhak melihat data riwayat chat users.
5. Owner bot berhak melihat status users.
6. Owner bot dapat melihat riwayat chat, dan media yang dikirimkan users.`)
break

case 'sc': case 'script': case 'sourcecode': {
teks =`*SC PRIVAT GES*`
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/rintiswpameling'
}
}, {
urlButton: {
displayText: 'My Group',
phoneNumber: 'https://chat.whatsapp.com/BABvK9nnhhJLImFXJaoLg9'
}
}, {
quickReplyButton: {
displayText: 'BACK MENU',
id: 'menu'
}
}]
Fara.send5ButImg(m.chat, teks, creator, image, btn)
}
break


//DOWNLOAD MENU
case 'tiktoknowm': case 'tiktok': case 'ttdl':{
	addCountCmd('#tiktok', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
  if (!q) return m.reply('Linknya?')
  m.reply(mess.wait)
  if (!q.includes('tiktok')) return m.reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(mess.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    Fara.sendMessage(from, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
   limitAdd(sender, limit)
  break
case 'ttad': case 'tiktokaudio':{
addCountCmd('#tiktokaudio', sender, _cmd)
	if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
	if (!isUrl(args[0])) return m.reply(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdDo97dC/`)
let res = await aiovideodl(args[0])
Fara.sendMessage(from, {audio:{url:res.medias[2].url}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"By Xynos-Bot  - Tiktok Downloader",
body:res.title,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
limitAdd(sender, limit)
break
case 'ttvd': case 'tiktokwm':{
	addCountCmd('#${command}', sender, _cmd)
	if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return reply(mess.endLimit)
	if (!isUrl(args[0])) return m.reply(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdDo97dC/`)
	m.reply(mess.wait)
let res = await aiovideodl(args[0])
texttk = `*| TIKTOK DOWNLOADER |*

Caption : ${res.title}
Size : ${res.medias[0].formattedSize}
Type : ${res.medias[0].extension ? "video/" + res.medias[0].extension : "undefined"}

_untuk melihat list menu pencet tombol dibawah atau ketik menu_`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[0].url},
caption: texttk,
footer: "© Regards : Rintis ID",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"By Xynos-Bot - Tiktok Downloader",
body:res.title,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Fara.sendMessage(from, buttonMessage, {quoted:m})
}
limitAdd(sender, limit)
break
case 'play': {
	addCountCmd('#play', sender, _cmd)
	if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
m.reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
🌺 Duration : ${anu.timestamp}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍ Channel : ${anu.author.url}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   Fara.waUploadToServer })
template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ngen,
hydratedFooterText: `© Bot WhatsApp 2022`,
hydratedButtons: [{
urlButton: {
displayText: 'Link Video',
url: `${anu.url}`
}
}, {
quickReplyButton: {
displayText: 'Audio 128kbps',
id: `ytmp3 ${anu.url} 128kbps`
}
},{quickReplyButton: {
displayText: 'Video 360p',
id: `ytmp4 ${anu.url} 360p`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
limitAdd(sender, limit)
Fara.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ytmp4': case 'ytvideo': {
	addCountCmd('#ytmp4', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
                let { ytv } = require('../lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=RNa4thokVJ4 360p`)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid!`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
                var capti = `*YOUTUBE VIDEO*\n\n*❖ Title* : ${media.title}\n*❖ File size* : ${media.filesizeF}\n*❖ Url* : ${isUrl(text)}\n*❖ Ext* : Mp4\n*❖ Resoultion* : ${args[1] || '360p'}`
                var buf = await getBuffer(media.thumb)
               Fara.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
               Fara.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Here you go!` }, { quoted: m }).catch((err) => reply(mess.error))
       limitAdd(sender, limit)         
       }
            break
case 'ytmp3':{
addCountCmd('#ytmp3', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
                let { yta } = require('../lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Fara.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                Fara.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'mediafire':
addCountCmd('#mediafire', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (args.length < 1) return m.reply('Link nya? ')
if (!args[0].includes('mediafire')) return reply(`Link is not valid`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
Judul : ${baby1[0].nama}
 Link : ${baby1[0].link}
 Size : ${baby1[0].size}				
_Mengirim file..._`
reply(result4)
limitAdd(sender, limit)
Fara.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
break
case 'spotify':
addCountCmd('#spotify', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
            axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                var caption = `Title : ${data.result.title}\n`
                caption += `Artists : ${data.result.artists}\n`
                caption += `Duration : ${data.result.duration}\n`
                caption += `Popularity : ${data.result.popularity}\n`
                caption += `Preview : ${data.result.preview_url}\n`
                Fara.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
                    Fara.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            limitAdd(sender, limit)
            break
case 'spotifysearch':
addCountCmd('#spotifysearch', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
            axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${q}`).then(({ data }) => {
                var text = ''
                for (var x of data.result) {
                    text += `Title : ${x.title}\n`
                    text += `Artists : ${x.artists}\n`
                    text += `Duration : ${x.duration}\n`
                    text += `Link : ${x.link}\n`
                    text += `Preview : ${x.preview_url}\n\n\n`
                }
                reply(text)
            })
            limitAdd(sender, limit)
            break
            case 'pinterestdl':
            addCountCmd('#pinterestdl', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
            axios.get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                Fara.sendMessage(from, { image: { url: data.result[0] } })
            })
            limitAdd(sender, limit)
            break
        case 'jooxplay':
        addCountCmd('#jooxplay', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
            axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${q}`).then(({ data }) => {
                var caption = `Title : ${data.result.info.song}\n`
                caption += `Artists : ${data.result.info.singer}\n`
                caption += `Duration : ${data.result.info.duration}\n`
                caption += `Album : ${data.result.info.album}\n`
                caption += `Uploaded : ${data.result.info.date}\n`
                caption += `Lirik :\n ${data.result.lirik}\n`
                Fara.sendMessage(from, { image: { url: data.result.image }, caption }).then(() => {
                    Fara.sendMessage(from, { audio: { url: data.result.audio[0].link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            limitAdd(sender, limit)
            break
case 'igdl': case 'instagram': case 'ig':
addCountCmd('#${command}', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
            axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                var url = data.result
                if (url.includes('.mp4')) {
                    Fara.sendMessage(from, { video: { url }, caption: `Login • Instagram`, mimetype: 'video/mp4' })
                } else {
                    Fara.sendMessage(from, { image: { url }, caption: `Login • Instagram` })
                }
            })
            limitAdd(sender, limit)
            break
case 'twitter': case 'twdl': case 'twmp4': {
	addCountCmd('#twitter', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: "© Regards : Rintis ID",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"By Xynos-Bot - Twitter Downloader",
body:lotwit.title ? lotwit.title : "Twitter Downloader",
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Fara.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply(" Link Error!")
}
}
limitAdd(sender, limit)
break
case 'twddl': {
	addCountCmd('#twddl', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Regards : Rintis ID",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"By Xynos-Bot - Twitter Downloader",
body: "Twitter Downloader",
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Fara.sendMessage(from, buttonMessage, {quoted:m})
}
limitAdd(sender, limit)
break
        case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
        	addCountCmd('#${command}', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_Untuk kualitas hd anda bisa klik tombol dibawah_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: "© Regards : Rintis ID",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"By Xynos-Bot - Facebook Downloader",
body:"facebook downloader",
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Fara.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply("Link invalid!")
}
}
limitAdd(sender, limit)
break
case 'fbddl': {
	addCountCmd('#fbddl', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (isBan) return m.reply(mess.ban)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Regards : Rintis ID",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"By Xynos-Bot - Facebook Downloader",
body: " Facebook Downloader",
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Fara.sendMessage(from, buttonMessage, {quoted:m})
}
limitAdd(sender, limit)
break

//Group menu
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Fara.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Fara.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Fara.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Fara.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await Fara.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await Fara.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await Fara.downloadAndSaveMediaMessage(quoted)
await Fara.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `──── ⌜ Tag All ⌟ ────
 
 ❗ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Fara.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
Fara.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
}

break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: creator,
buttons: buttonsVote,
headerType: 1
}
Fara.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: creator,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
Fara.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: creator,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
Fara.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${Fara.user.id}
`
Fara.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await Fara.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Fara.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await Fara.sendButtonText(m.chat, buttons, `Mode Group`, creator, m)
}
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await Fara.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await Fara.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await Fara.sendButtonText(m.chat, buttons, `Mode Edit Info`, creator, m)
}
}
break
case 'autoreadsw': case 'autoreadstatus':
	if (!isCreator) return reply(mess.owner)
	if (args[0] == 'on') {
		if (autoreadsw) return reply('*Already activated!*')
		autoreadsw = true
		reply('*Successfully activate auto read status*')
	} else if (args[0] == 'off') {
		if (!autoreadsw) return reply('*Already deactivated!*')
		autoreadsw = false
		reply('*Successfully turn off auto read status*')
	} else {
		reply('Choose on or off!')
	}
	break
case 'antiviewonce': case 'antionce':
        if (!m.key.fromMe && !isCreator) return reply(mess.owner)
        if (args[0] === "on") {
      	if (global.db.data.chats[m.chat].antionce) return reply(`Already activated`)
        global.db.data.chats[m.chat].antionce = true
        reply(`${command} Successfully Activated !`)
        } else if (args[0] === "off") {
        	if (!global.db.data.chats[m.chat].antionce) return reply(`Already deactivated`)
        global.db.data.chats[m.chat].antionce = false
        reply(`${command} Successfully Deactivated !`)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Fara.sendButtonText(m.chat, buttons, `Mode Antilink`, creator, m)
}
}
break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('Already activated')
ntilinkytvid.push(from)
reply('Success in turning on youtube video antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('Already activated')
ntilinkytch.push(from)
reply('Success in turning on youtube channel antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return reply('Already activated')
ntilinkig.push(from)
reply('Success in turning on instagram antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('Already activated')
ntilinkfb.push(from)
reply('Success in turning on facebook antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('Already activated')
ntilinktg.push(from)
reply('Success in turning on telegram antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('Already activated')
ntilinktt.push(from)
reply('Success in turning on tiktok antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinktwt.push(from)
reply('Success in turning on twitter antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinkall.push(from)
reply('Success in turning on all antilink in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
reply('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antivirus': case 'antivirtex': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return reply('Already activated')
ntvirtex.push(from)
reply('Success in turning on antivirus in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {

if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return reply('Already activated')
nttoxic.push(from)
reply('Success in turning on antitoxic in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxci = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsnttoxci, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (antiWame) return reply('Already activated')
ntwame.push(from)
reply('Success in turning on antiwame in this group')
var groupe = await Fara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Fara.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Fara.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${Fara.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${Fara.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Fara.sendButtonText(m.chat, buttons, `Mute Bot`, creator, m)
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await Fara.groupInviteCode(m.chat)
Fara.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await Fara.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await Fara.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break

//FUN MENU
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await Fara.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: menst})
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await Fara.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: ments})
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
Fara.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("../message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Fara.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Fara.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await Fara.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await Fara.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
Fara.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Fara.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Fara.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Fara.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Fara.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Fara.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Fara.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Fara.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Fara.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Fara.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Fara.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Fara.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Fara.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Fara.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Fara.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Fara.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Fara.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Fara.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('../json/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
Fara.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await Fara.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) Fara.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'xnone': case 'rintis': case 'simi': case 'x':
            const cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
            Fara.sendMessage(from, { text: cimcimi.success })
            break
///////

case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${packname}.;;;`
+ `FN:${packname}.\n` // full name
+ `ORG:${packname};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await Fara.sendMessage(m.chat, { contacts: { displayName: `${owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
let buttons3 = [
{buttonId: `menu`, buttonText: {displayText: 'BACK MENU'}, type: 1},
]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
Fara.sendMessage(m.chat, buttonMessage3, { quoted: ftroli })                        
}
break
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
let media = await Fara.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'tts':
if (!q) return m.reply(`Teks Nya???`)
m.reply(mess.wait)
inimmk = await fetchJson(`https://api.dapuhy.xyz/api/maker/tts?text=${q}&lang=id&apikey=Fara123`)
Fara.sendMessage(m.chat, {audio: { url: inimmk.result }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('../lib/converter')
            let audio = await toPTT(media, 'mp4')
            Fara.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
case 'togif': {
                if (!quoted) throw 'Reply Sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('../lib/uploader')
                let media = await Fara.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Fara.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await Fara.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Fara.sendMessage(m.chat, { image: buffer }, { quoted: ftroli })
fs.unlinkSync(ran)
})
}
break
case 'style': case 'styletext': {
		let { styletext } = require('../lib/scraper')
		if (!text) throw 'Example :\n#style Fara'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
case 'tohuruf': {
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case 'latintoaksara':{
if (!q) return m.reply(`Example : ${command} Makan bang`) 
uios = await latinToAksara(q) 
m.reply(uios) 
}
break
case 'aksaratolatin':{
if (!q) return m.reply(`Example : ${command} ꦪꦺꦴꦲꦺꦴ`) 
uios = await aksaraToLatin(q) 
m.reply(uios) 
}
break
//STICKER MENU

case 'emoji':{
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} 🗿`)
m.reply(mess.wait)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await Fara.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await Fara.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Fara.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'take': case 'colong': case 'swm': case 'stickerwm': case 'wm': case 'exif': case 'takestik': case 'takestick':{
if (!quoted) return m.reply(`Kirim/Reply media dengan caption ${prefix + command} *Nama*`)
let { writeExif } = require('../lib/exif')
let media = {}
media.mimetype = mime
media.data = await quoted.download()
let encmedia = await writeExif(media, { packname: text.split("|")[0] ? text.split("|")[0] : global.packname, author: text.split("|")[1] ? text.split("|")[1] : global.author })
Fara.sendMessage(m.chat, { sticker: { url: encmedia } }, { quoted: m })
}
break
case 'emojimix': {
if (!text) return m.reply(`Example : ${prefix + command} 😅+🤔`)
m.reply(mess.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Fara.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Fara.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Fara.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :
case 'sbucin':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Fara.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Fara.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp':
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} Hai`)
m.reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
Fara.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
break
case 'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
Fara.sendMessage(from, { sticker : buff}) 
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker':{
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Fara.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Fara.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('../message/converter')
let audio = await toAudio(media, 'mp4')
Fara.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Fara.user.name}.mp3`}, { quoted : m })
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let media = await Fara.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Fara.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Fara.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await Fara.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Fara.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Fara.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.body.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/rintiswpameling'
}
}, {
urlButton: {
displayText: 'My Group',
url: 'https://chat.whatsapp.com/BABvK9nnhhJLImFXJaoLg9'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
Fara.send5ButImg(yoi, txt, creator, image, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await Fara.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/rintiswpameling'
}
}, {
urlButton: {
displayText: 'My Group',
url: 'https://chat.whatsapp.com/BABvK9nnhhJLImFXJaoLg9'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
Fara.send5ButImg(i, txt, creator, image, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'setbiobot':{
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`Mau Di Ganti Apa\nContoh ${prefix + command} Rintis ID`)
Fara.setStatus(q)
.then((res) => reply('Bio diupdate.'))
.catch((err) => reply('Gagal'))
}
break
case 'setppbot': {
	addCountCmd('#setppbot', sender, _cmd)
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await Fara.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await Fara.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var memeg = await Fara.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
case 'cowner': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case 'getcase':
if (!isCreator) return m.reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("command/Rintis.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
case 'public': {
                if (!isCreator) throw mess.owner
                Fara.public = true
                m.reply('Sukses Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                Fara.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
case 'addprem':
if (!m.isGroup) return reply(mess.group)
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
premium.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.isGroup) return reply(mess.group)
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'listpremium':
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
teks = '*List Premium*\n\n'
for (let Fara of premium) {
teks += `- ${Fara}\n`
}
teks += `\n*Total : ${premium.length}*`
Fara.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'sewa':
addCountCmd('#sewa', sender, _cmd)
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(mess.success)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'listsewa':
addCountCmd('#listsewa', sender, _cmd)
if (!m.isGroup) return m.reply(mess.group)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
m.reply(txtnyee)
break
case 'ceksewa': 
addCountCmd('#ceksewa', sender, _cmd)
if (!m.isGroup) return m.reply(mess.group)
if (!isSewa) return m.reply(`Group Ini Tidak Terdaftar Dalam List Sewabot. Ketik ${prefix}sewabot Untuk Info Lebih Lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s) ${cekvipsewa.seconds} second(s)`
m.reply(sewanya)
break
case 'dashboard': case 'dash':
	        addCountCmd('#dashboard', sender, _cmd)
            var posi = await getPosiCmdUser(sender, _cmdUser)
            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
            var posi = await getPosiCmdUser(sender, _cmdUser)
            var jumlahCmd = _cmd.length
            if (jumlahCmd > 10) jumlahCmd = 10
            var jumlah = _cmdUser[posi].db.length
            if (jumlah > 5) jumlah = 5
            var totalUser = 0
            for (let x of _cmdUser[posi].db) {
                totalUser = totalUser + x.count
            }
            var total = 0
            for (let o of _cmd) {
                total = total + o.count
            }
            var teks = `*${botname} DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${pendaftar.length}\n\n`
            teks += `*Most Command Global*\n`
            for (let u = 0; u < jumlahCmd; u ++) {
                teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
            }
            teks += `\n*Most Command User*\n`
            for (let i = 0; i < jumlah; i ++) {
                teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
            }
            m.reply(teks)
            break

//OTHER
case 'speed':{
let timestamp = speed()
let latensi = speed() - timestamp
await sendBut5nya(`*${latensi.toFixed(4)}* Detik`)
}
break
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'ringtone': {
		if (!args.join(" ")) return reply(`Example:\n${prefix + command} black over`)
        let { ringtone } = require('../lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Fara.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'kalkulator': case 'kal': {
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'sewabot': case 'donasi':
addCountCmd('#sewabot', sender, _cmd)
await sendBut5nya(`*LIST SEWA BOT*

Rp 10.000 (10k)  (1 Bulan)

✅ ANTILINK
✅ HIDETAG
✅ WELCOME LEFT
✅ SPEED FAST
✅ ON 24 JAM

Noted:
1 x sewa = 1 Group
Dilarang kick bot setelah sewa
Bot tidak bisa pindah group

Minat?
Hubungi : wa.me/6281578301106

Donate For Me : 
Gopay : https://bit.ly/38MEpIG
Dana : https://bit.ly/3wACArF
Ovo : https://bit.ly/3MC70iR `)
break
case 'hapus': case 'delete': case 'del': case 'd':{
      if (!m.quoted) return  m.reply(from, 'Reply pesanya!', { quoted : m })
       if (!m.quoted.isBaileys) return  m.reply(from, 'Fitur ini hanya berlaku menghapus pesan bot yang di kirim oleh saya!', { quoted : m })
          Fara.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         }
      break
case 'ssweb':
                if (!q) return m.reply(`Kirim Perintah ${command} link\nContoh ${command} https://xdlyy404.github.io`)
  m.reply(mess.wait)
                Fara.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${q}`}})
                break
                case 'shortlink':
            if (args.length == 0) return m.reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
            axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                m.reply(data.result)
            })
            break
            case 'autosticker':
            case 'autostiker':
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
case 'autostickerpc':
            case 'autostikerpc':
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return reply(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc deactivated')
}
break
case 'translate':
addCountCmd('#translate', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (args.length < 1) return reply(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
m.reply(mess.wait)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`> Translate : ${Detek}\n> Hasil : ${Infoo}`)
limitAdd(sender, limit)
break
//STALKER
case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hxz.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Fara.sendMessage(from,link,video,{quoted: m,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Fara.sendMessage(from,link,image,{quoted: m,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'igstalk':{
if (args.length == 0) return replyNya(`Example: ${prefix + command} namaig`)
reply(mess.wait)
igk = args.join(" ")
deshd = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
buffer = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: Fara.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By Fara',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Fara'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6281578301106'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Fara.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'supersusstalk': { 
	addCountCmd('#supersusstalk', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (!q) return m.reply ('Mana Id nya') 
try {
sus = await hikki.game.superSusChecker(q) 
textt = `Name : ${sus.name}\nAkun: ${sus.account}\nUserId: ${sus.userId}\nSpaceId: ${sus.spaceId}\nsex: ${sus.sex}\nCupNum : ${sus.cupNum}\nBindType: ${sus.bindType}\nHeadId: ${sus.headId}\nHeadUrl: ${sus.headUrl}\nDevice: ${sus.device}`
m.reply(textt) 
} catch (e) { m.reply('Id tak ditemukan') }
}
limitAdd(sender, limit)
break
 case 'mlstalk': { 
 	addCountCmd('#mlstalk', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (!q) return m.reply(`Example :${command} id|server`) 
try {
id = q.split('|')[0]
server = q.split('|')[1]
ml = await hikki.game.nickNameMobileLegends(id, server)
m.reply(`NickName : ${ml.userName}`) 
} catch (e) { m.reply('Id tak ditemukan') }
}
limitAdd(sender, limit)
break
case 'ffstalk': {
	if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
	addCountCmd('#ffstalk', sender, _cmd)
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return reply("Hanya angka")
let dede = await caliph.search.freefireid(args.join(" "))
teks = `Message : ${dede.message}\nId : ${encodeURI(q)}\nResult : ${dede.result}`
m.reply(teks)
}
limitAdd(sender, limit)
break
case 'nickdomino':
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
addCountCmd('#nickdomino', sender, _cmd)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} 291756557`)
            data = await fetchJson(`https://api.lolhuman.xyz/api/higghdomino/${args[0]}?apikey=${lolkey}`)
            m.reply(data.result)
limitAdd(sender, limit)
            break
case 'nickpubg':
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
addCountCmd('#nickdomino', sender, _cmd)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} 5217933016`)
            data = await fetchJson(`https://api.lolhuman.xyz/api/pubg/${args[0]}?apikey=${lolkey}`)
            m.reply(data.result)
limitAdd(sender, limit)
            break
 case 'githubstalk':{
addCountCmd('#githubstalk', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (args.length == 0) return m.reply(`Example: ${prefix + command} namagh`)
git = await Ikyy.stalk.githubStalk(q)
txttt = `Id : ${git.id}\nName : ${git.name}\nNode Id : ${git.node_id}\nUrl : ${git.html_url}\nType : ${git.type || 'Kosong'}\nCompany : ${git.company || 'Kosong'}\nokasi :${git.location || 'Kosong'}\nBio : ${git.bio || 'Kosong'}/nEmail : ${git.email || 'Kosong'}\nRepositiory ${git.publics_repo || 'Kosong'}\nFollowers : ${git.followers}\nFollowing : ${git.following}\n Dibuat pada : ${git.created_at}\nTerakhir update : ${git.updated_at}`
m.reply(txttt)
limitAdd(sender, limit)
}
break
case 'tiktokstalk':{
	addCountCmd('#tiktokstalk', sender, _cmd)
	if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (args.length == 0) return m.reply(`Example: ${prefix + command} namatt`)
m.reply(mess.wait)
ttk = args.join(" ")
csksyb = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: Fara.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Regards : Rintis ID',
hydratedButtons: [{
urlButton: {
displayText: 'MyGroup',
url: 'https://chat.whatsapp.com/BABvK9nnhhJLImFXJaoLg9'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6281578301106'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Fara.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
limitAdd(sender, limit)
break
case 'ytstalk':
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (args.length == 0) return m.reply(`Example: ${prefix + command} namachannel`)
m.reply(mess.wait)
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n\n`
}
m.reply(cari.trim())
limitAdd(sender, limit)
break

//SEARCH MENU
case 'lyrics': case 'lirik':{
	    if (!text) return m.reply(`Use example ${prefix}lyrics Despacito`)
	m.reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
> Title : *${result.title}*
> Author : ${result.author}
> Lyrics : ${result.lyrics}
> Url : ${result.link}
`.trim())
}
break
case 'gsmarena': {
            if (!text) return reply(`Example : ${prefix + command} realme`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/gsmarena?query=${text}&apikey=rintiscc`)
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `> Title: ${judul}
> Realease: ${rilis}
> Size: ${ukuran}
> Type: ${type}
> Storage: ${storage}
> Display: ${display}
> Inchi: ${inchi}
> Pixel: ${pixel}
> Video Pixel: ${videoPixel}
> Ram: ${ram}
> Chipset: ${chipset}
> Battery: ${batrai}
> Battery Brand: ${merek_batre}
> Detail: ${detail}`
            Fara.sendImage(m.chat, thumb, capt, m)
            }
            break
case 'pinterest': {
	addCountCmd('#pinterest', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
                m.reply(mess.wait)
		let { pinterest } = require('../lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Fara.sendMessage(m.chat, { image: { url: result }, caption: '> Media Url : '+result }, { quoted: m })
            }
            limitAdd(sender, limit)
            break
case 'wikipedia':
addCountCmd('#wikipedia', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} Tahu`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${q}`)
            m.reply(data.result)
            limitAdd(sender, limit)
            break
case 'google': {
	addCountCmd('#google', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (!q) reply(`*Example : ${prefix + order} Cara buat bakso*`) 
google({'query': q}).then(res => {
let teks = `Google Search From : ${q}\n\n`
for (let g of res) {
teks += `〽️ *Title* : ${g.title}\n`
teks += `🪙 *Description* : ${g.snippet}\n`
teks += `🪃 *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
Fara.sendMessage(from, { image : { url : 'https://telegra.ph/file/75ffe3024a0ff8d563da5.jpg' }, caption : teks }) 
})
}
limitAdd(sender, limit)
break
case 'gimage': {
	addCountCmd('#gimage', sender, _cmd)
	if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `entah`, buttonText: {displayText: 'Thank You Bot'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: 'XYNOS BOT - MD',
                    buttons: buttons,
                    headerType: 4
                }
                Fara.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        limitAdd(sender, limit)
        break
case 'stickersearch': case 'ssearch': {
	addCountCmd('#stikerseach', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} loli`
                let anu = await xfarr.StickerSearch(text)
                for (let i = 0; i < (anu.sticker_url.length < 5 ? anu.sticker_url.length : 5); i++) {
                    let encmedia = await Fara.sendImageAsSticker(m.chat, anu.sticker_url[i], m, { packname: packname, author: author })
                    await fs.unlinkSync(encmedia)
                }
            }
            limitAdd(sender, limit)
            break
case 'yts': case 'ytsearch': {
	addCountCmd('#ytsearch', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `› No : ${no++}\n› Type : ${i.type}\n› Video ID : ${i.videoId}\n› Title : ${i.title}\n› Views : ${i.views}\n› Duration : ${i.timestamp}\n› Upload At : ${i.ago}\n› Url : ${i.url}\n\n─────────────────\n\n`
                }
                Fara.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            limitAdd(sender, limit)
            break
case 'telesticker':
addCountCmd('#telesticker', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
            axios.get(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                Fara.sendMessage(from, { sticker: { url: data.result.sticker.random() } })
            })
            limitAdd(sender, limit)
            break
case 'brainly':
addCountCmd('#brainly', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
if (q.includes('--help')) return m.reply(`Mau cari apa?`) 
const anj = await brainly(q)
  var hmm2 = '────────────────💟\n'
  for (let Y of anj.data) {
  hmm2 += `*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n──────────────────💖\n`
  }
  Fara.sendMessage(from, {image : { url : 'https://telegra.ph/file/ba004c72b2222f4913e99.jpg' }, caption : hmm2}) 
  limitAdd(sender, limit)
break
case 'groupwa': case 'searchgc':
addCountCmd('#groupwa', sender, _cmd)
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
				if (args.length < 1) return m.reply(`Kirim perintah ${command} nama grup`)
				m.reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return m.reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  m.reply(teks)
				}).catch(() => reply(mess.error.api))
				limitAdd(sender, limit)
			    break
case 'sendsession':
if (!isCreator) return m.reply(mess.owner)
anuu = fs.readFileSync('./session/qrmd.json')
Fara.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `qrmd.json`}, {quoted:m})  
break
case 'topup':{ //Create By Daffa (Walau liat readme aowkwowk) 
if (!q) return m.reply(`Example : ${command} id|jumlah`) 
try {
id = q.split('|')[0]
jumlah = q.split('|')[1]
ff = await hikki.game.nickNameFreefire(id) 
const topup = async function topupFreeFire() {
const makeSession = await hikki.game.topupFreeFire(id, jumlah) 
return await hikki.game.payDiamond(makeSession, '089501060783')
}
const top = await topup() 
Fara.sendMessage(from, { image : { url : top.qrCode}, caption : `Payment : ${top.paymentMethod}\nId : ${id}\nJumlah : ${jumlah} Diamond\nScan & Bayar Maksimal 30 detik setelah qr ini keluar`}) 
} catch (e) { return m.reply(`Sistem Error atau Nominal Diamond/Id\nUser Tidak ada\nList Nominal Diamond\n5 Dm\n12 Dm\n70 Dm\n140 Dm\n355 Dm\n720 Dm`) }
}
break

//INFORMATION
case 'cuaca':{
if(!q) return mmreply('Example : #cuaca jakarta') 
cuc = await caliph.search.cuaca(q) 
await Fara.sendMessage(from, { location: { degreesLatitude: cuc.data.Latitude, degreesLongitude: cuc.data.Longitude } })
joks = `Nama : ${q}\nLongtitude : ${cuc.data.Longitude}\nLatitude : ${cuc.data.Latitude}\nSuhu : ${cuc.data.Suhu}\nAngin : ${cuc.data.Angin}\nCuaca ${cuc.data.Cuaca}\nUdara :${cuc.data.Udara}\nKeterangan : ${cuc.data.Keterangan}`
m.reply(joks) 
}
break
case 'cekapikey':
if (args.length == 0) return m.reply(`Apikey Nya Mana?\nContoh : ${prefix + command} Apikeymu`)
m.reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
m.reply(`*Username* : ${anu.result.username}\n*Requests All* : ${anu.result.requests}\n*Requests Today* : ${anu.result.today}\n*Status Akun* : ${anu.result.account_type}\n*Expered* : ${anu.result.expired}`)
break 
case 'gempa': case 'infogempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
Fara.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'fajar-news':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
})
break
case 'cnn-news':
CNNNews().then(res => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
})
break
case 'cnbc-news':
CNBCNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'tribun-news':
TribunNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
IndozoneNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
KompasNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'detik-news':
DetikNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'daily-news':
DailyNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'inews-news':
iNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
break
case 'okezone-news':
OkezoneNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'sindo-news':
SindoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
break
case 'tempo-news':
TempoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'antara-news':
AntaraNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case "kontan-news":
  KontanNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
break
case "merdeka-news":
  MerdekaNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    Fara.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
  })
break

case "jalantikus-meme":
  var res = await JalanTikusMeme()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
Fara.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'react': { Fara.sendMessage(m.chat, reactionMessage)}
break

case 'persamaankata': case 'sinonim':{
if (!q) return m.reply(`Example ${command} Teks `) 
sino = await caliph.search.persamaankata(q) 
m.reply(`${sino.result || 'Gaada'}`) 
} break
case 'rangkum': {
if (!q) return m.reply(`Example ${command} Teks `) 
rang = await caliph.other.rangkum(q) 
m.reply(rang) 
} break
case 'fakeuseragent':{
fke = await caliph.random.fakeua()
m.reply(fke) 
} break

//STORE
case 'p': case 'proses':
if (!m.isGroup) return m.reply('Khusus Grup')
if (!isAdmins && !isCreator) return m.reply(mess.admin)
proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\n🛒 PRODUK : ${(args[1])}\`\`\`\n\nPesanan ${(args[0])}\n\nSedang di proses!`
m.reply(proses)
            break
case 'd': case 'done':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\n🛒 PRODUK : ${(args[1])}\`\`\`\n\nTerimakasih ${(args[0])}\n\nDi Tunggu Next Order Nya🙏`
            m.reply(sukses)
            break
//DATABASE MENU
case 'addmsg': {
                if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return m.reply(`Example : ${prefix + command} nama file`)
                let msgs = JSON.parse(fs.readFileSync('./database/mdata.json'))
                if (text.toLowerCase() in msgs) return reply(`'${text}' telah terdaftar di list pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./database/mdata.json', JSON.stringify(msgs))
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
          case 'getmsg': {
                if (!text) m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
                let msgs = JSON.parse(fs.readFileSync('./database/mdata.json'))
                if (!(text.toLowerCase() in msgs)) reply(`'${text}' tidak terdaftar di list pesan`)
                Fara.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/mdata.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
		case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./database/mdata.json'))
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./database/mdata.json', JSON.stringify(msgs))
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	
//TEXTPRO MENU
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'Faranlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'Farandevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
             if (!q) return m.reply(`Contoh : ${prefix + command} ${global.botname}`) 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/Faranlight/.test(command)) link = 'https://textpro.me/create-3d-Faran-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/Farandevil/.test(command)) link = 'https://textpro.me/create-Faran-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
               Fara.sendMessage(m.chat, { image: { url: anu }, caption: `*© Created By ${global.botname}*` }, { quoted: m })
             }
break

//PRIMBONM MENU
case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Zeeone,12, 1, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break 
            case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 887435047326`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
			case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Zeeone`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Zeeone|Clara`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Fara.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
///SOUND MENU
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await Fara.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Fara.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${command}*`)
                } catch (e) {
                m.reply(e)
                }

break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (isLimit(sender, isPremium, isCreator, limitawal.free, limit)) return m.reply(mess.endLimit)
inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
Fara.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
limitAdd(sender, limit)
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
reply(mess.wait)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Fara.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//NSFW MENU
case 'hentai':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{
if (!m.isPremium && !isCreator) return m.reply(mess.premium)
m.reply(mess.wait)
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
Fara.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
if (!m.isPremium) return m.reply(mess.premium)
m.reply(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Fara.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break

/// Sticker Anime
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
			Fara.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })


					})
					break

//IMAGE ANIME
        case 'art':
        case 'bts':
        case 'exo':
        case 'elf':
        case 'neko':
        case 'shota':
        case 'sagiri':
        case 'shinobu':
        case 'megumin':
        case 'wallnime':
        case 'quotesimage':
            Fara.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}` } })
            break

        case 'chiisaihentai':
        case 'trap':
        case 'blowjob':
        case 'yaoi':
        case 'ecchi':
        case 'hololewd':
        case 'sideoppai':
        case 'animefeets':
        case 'animebooty':
        case 'animethighss':
        case 'hentaiparadise':
        case 'animearmpits':
        case 'hentaifemdom':
        case 'lewdanimegirls':
        case 'biganimetiddies':
        case 'animebellybutton':
        case 'hentai4everyone':
        if (!isPremium && isCreator) return m.reply(mess.premium)
            Fara.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}` } })
            break

        case 'bj':
        case 'feet':
        case 'yuri':
        case 'trap':
        case 'lewd':
        case 'feed':
        case 'eron':
        case 'solo':
        case 'gasm':
        case 'poke':
        case 'anal':
        case 'holo':
        case 'tits':
        case 'kuni':
        case 'kiss':
        case 'erok':
        case 'smug':
        case 'baka':
        case 'solog':
        case 'feetg':
        case 'lewdk':
        case 'femdom':
        case 'cuddle':
        case 'eroyuri':
        case 'cum_jpg':
        case 'blowjob':
        case 'erofeet':
        case 'holoero':
        case 'classic':
        case 'erokemo':
        case 'fox_girl':
        case 'futanari':
        case 'lewdkemo':
        case 'wallpaper':
        case 'pussy_jpg':
        case 'kemonomimi':
        case 'nsfw_avatar':
            Fara.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}` } })
            break

//ANONYMOUS MENU
case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                Fara.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Fara.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, Fara.user.name, m)
            }
			break
case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Fara.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, Fara.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Fara.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Fara.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Fara.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Fara.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Fara.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, Fara.user.name, m)
                }
                break
            }
case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Fara.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Fara.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Fara.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Fara.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Fara.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Fara.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Fara.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, Fara.user.name, m)
                }
                break
                }
case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Fara.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await Fara.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            
//ISLAM MENU
case 'kisahnabi':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
m.reply(ini_txt)
break
case 'niatsolat':
case 'niatsholat':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Subuh`)
jadwal = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${jadwal}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt += `Name : ${get_result.name}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Latin : ${get_result.latin}\n`
ini_txt += `Arti : ${get_result.id}\n`
m.reply(ini_txt)
break
case 'jadwalsholat':
case 'jadwalsolat':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
m.reply(ini_txt)
break
case 'alquran':
            if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
            axios
                .get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`)
                .then(({ data }) => {
                    var ayat = data.result.ayat
                    var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
                    }
                    text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
                    text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
                    m.reply(text)
                })
                .catch(console.error)
            break
        case 'alquranaudio':
            if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
            Fara.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${lolkey}` }, mimetype: 'audio/mp4' })
            break
        case 'asmaulhusna':
            axios
                .get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                .then(({ data }) => {
                    var text = `No : ${data.result.index}\n`
                    text += `Latin: ${data.result.latin}\n`
                    text += `Arab : ${data.result.ar}\n`
                    text += `Indonesia : ${data.result.id}\n`
                    text += `English : ${data.result.en}`
                    m.reply(text)
                })
                .catch(console.error)
            break
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
m.reply(ini_txt)
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
m.reply(mess.wait)
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
Fara.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
m.reply(mess.wait)
Fara.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:fakeFara})
} else if (args[0] === 'docx') {
m.reply(mess.wait)
Fara.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply(mess.wait)
Fara.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply(mess.wait)
Fara.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'tafsirsurah': {
if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `ã€Œ *Tafsir Surah* ã€

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
case 'bugkatalog':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
itsmevall.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = itsmevall.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             itsmevall.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
        case 'list':
            if (!isGroup) return m.reply(mess.group)
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: `${ucapanWaktu} @${sender.split("@")[0]}`,
                buttonText: 'Click Here!',
                footer: `*List ${groupName}*\n\n⏳ ${jam}\n📆 ${tanggal}`,
                mentions: [sender],
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            Fara.sendMessage(from, listMsg)
            break
        case 'addlist':
            if (!m.isGroup) return m.reply(mess.group)
            if (!isAdmins && !isCreator) return m.reply(mess.GrupAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage('image', `./sticker/${sender}`)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        m.reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
   //RANDOM TEXT
case 'ceritahoror':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
            var caption = `Title : ${data.result.title}\n`
            caption += `Desc : ${data.result.desc}\n`
            caption += `Story :\n${data.result.story}\n`
            Fara.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
            break        
case 'cerpen':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
            var text = `Title : ${data.result.title}\n`
            text += `Creator : ${data.result.creator}\n`
            text += `Story :\n${data.result.cerpen}`
            m.reply(text)
            break 
case 'quotes':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
            m.reply(`_${data.result.quote}_\n\n*― ${data.result.by}*`)
            break
        case 'quotesanime':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
            m.reply(`_${data.result.quote}_\n\n*― ${data.result.character}*\n*― ${data.result.anime} ${data.result.episode}*`)
            break
        case 'quotesdilan':
            quotedilan = await axios.get(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
            m.reply(quotedilan.result)
            break
        case 'faktaunik':
        case 'katabijak':
        case 'pantun':
        case 'bucin':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
            m.reply(data.result)
            break
        case 'randomnama':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
            m.reply(data.result)
            break
case 'lk21':
            if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${q}`)
            var caption = `Title : ${data.result.title}\n`
            caption += `Link : ${data.result.link}\n`
            caption += `Genre : ${data.result.genre}\n`
            caption += `Views : ${data.result.views}\n`
            caption += `Duration : ${data.result.duration}\n`
            caption += `Tahun : ${data.result.tahun}\n`
            caption += `Rating : ${data.result.rating}\n`
            caption += `Desc : ${data.result.desc}\n`
            caption += `Actors : ${data.result.actors.join(', ')}\n`
            caption += `Location : ${data.result.location}\n`
            caption += `Date Release : ${data.result.date_release}\n`
            caption += `Language : ${data.result.language}\n`
            caption += `Link Download : ${data.result.link_dl}`
            Fara.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
            break
        case 'drakorongoing':
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
            var text = 'Ongoing Drakor\n\n'
            for (var x of data.result) {
                text += `Title : ${x.title}\n`
                text += `Link : ${x.link}\n`
                text += `Thumbnail : ${x.thumbnail}\n`
                text += `Year : ${x.category}\n`
                text += `Total Episode : ${x.total_episode}\n`
                text += `Genre : ${x.genre.join(', ')}\n\n`
            }
            reply(text)
            break
        case 'wattpad':
            if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${args[0]}`)
            var caption = `Title : ${data.result.title}\n`
            caption += `Rating : ${data.result.rating}\n`
            caption += `Motify date : ${data.result.modifyDate}\n`
            caption += `Create date: ${data.result.createDate}\n`
            caption += `Word : ${data.result.word}\n`
            caption += `Comment : ${data.result.comment}\n`
            caption += `Vote : ${data.result.vote}\n`
            caption += `Reader : ${data.result.reader}\n`
            caption += `Pages : ${data.result.pages}\n`
            caption += `Description : ${data.result.desc}\n\n`
            caption += `Story : \n${data.result.story}`
            Fara.sendMessage(from, { image: { url: data.result.photo }, caption })
            break
        case 'wattpadsearch':
            if (args.length == 0) return m.reply(`Example: ${prefix + command} Tere Liye`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${q}`)
            var text = 'Wattpad Seach : \n'
            for (var x of data.result) {
                text += `Title : ${x.title}\n`
                text += `Url : ${x.url}\n`
                text += `Part : ${x.parts}\n`
                text += `Motify date : ${x.modifyDate}\n`
                text += `Create date: ${x.createDate}\n`
                text += `Coment count: ${x.commentCount}\n\n`
            }
            m.reply(text)
            break
        
        ///CERPEN MENU
case 'cerpen-anak':{

let cerpe = await cerpen(`anak`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{

let cerpe = await cerpen(`bahasa daerah`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{

let cerpe = await cerpen(`bahasa Inggris`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{

let cerpe = await cerpen(`bahasa jawa`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{

let cerpe = await cerpen(`bahasa sunda`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{

let cerpe = await cerpen(`budaya`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{

let cerpe = await cerpen(`cinta`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{

let cerpe = await cerpen(`cinta islami`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{

let cerpe = await cerpen(`cinta pertama`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{

let cerpe = await cerpen(`cinta romantis`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{

let cerpe = await cerpen(`cinta sedih`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{

let cerpe = await cerpen(`Cinta segitiga`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{

let cerpe = await cerpen(`cinta sejati`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{

let cerpe = await cerpen(`galau`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{

let cerpe = await cerpen(`gokil`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{

let cerpe = await cerpen(`inspiratif`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{

let cerpe = await cerpen(`jepang`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{

let cerpe = await cerpen(`kehidupan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{

let cerpe = await cerpen(`keluarga`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{

let cerpe = await cerpen(`kisah nyata`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{

let cerpe = await cerpen(`korea`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{

let cerpe = await cerpen(`kristen`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
reply(`â­” _*Title :*_ ${cerpe.title}\nâ­” _*Author :*_ ${cerpe.author}\nâ­” _*Category :*_ ${cerpe.kategori}\nâ­” _*Pass Moderation :*_ ${cerpe.lolos}\nâ­” _*Story :*_\n${cerpe.cerita}`)
}
break

//VID MENU

case 'hentaivid': case 'hentaivideo': {
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                Fara.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${dogeemoji} Title : ${result912.title}\n${dogeemoji} Category : ${result912.category}\n${dogeemoji} Mimetype : ${result912.type}\n${dogeemoji} Views : ${result912.views_count}\n${dogeemoji} Shares : ${result912.share_count}\n${dogeemoji} Source : ${result912.link}\n${dogeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
lm.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Fara.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})