/* My Info
* New Base Multi Device By Zero YT7
* Please Follow Me On All Sosial Media
* Instagram : https://instagram.com/Zero_YT7
* Tiktok : https://tiktok.com/@_zeroyt7
* Github : https://github.com/Zero-YT7
* Youtube : https://youtube.com/ZeroYT7
* Contact Me on wa.me/6285157740529
*/

/* My Web
* Rest Api : https://zeroyt7-api.xyz
* Olshop : https://zeroyt7.xyz
*/

/* Thanks To
* Zero TT7
* Dhika Ardiant
* Mhankbarbar
* Chaliph
* Allah S.W.T
* Ortu
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
ZeroYT7: 'https://api-lolhuman.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://api-lolhuman.xyz': 'RINTISTOD',
}

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
