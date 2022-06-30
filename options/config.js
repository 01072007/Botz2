const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'rintiscc',
	}
//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

global.owner = ['6281578301106']
global.premium = ['6281578301106']
global.botname = 'FARA BOT'
global.packname = 'Rintis ID'
global.lolkey = 'DyahAyuCangtip'
global.instagram = 'https://instagram.com/rintiswpameling'
global.email = 'rintisid@gmail.com'
global.author = 'Faraa'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//Mess
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
premium: 'Khusus User Premium',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
