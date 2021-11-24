global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/GfNO7PL6rsS4iSGEXSELzN', 'https://chat.whatsapp.com/FyeK866EprW9KQQGuhb50b']
global.owner = ['6285780589674'] // Owner
global.mods = ['6285780589674'] // moderator
global.prems = ['6285780589674']  //premium
global.APIs = { // API Prefix
  // name: 'https://website'
  rns: 'https://api-reysekha.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  lolhuman: 'https://api.lolhuman.xyz',
  chipa: 'https://api.chipa.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-reysekha.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'fe63715981b9aa98',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://api.lolhuman.xyz': 'a09437f1c51d60f974f4e8bc',
  'https://api.chipa.xyz': '70K62AZFY8EGFUDDCNL4ZOVW'
}

// Sticker WM
global.packname = 'Create By Tommy\nOwner : Muhammad Tommy'
global.author = ''

global.multiplier = 39 // The higher, The harder levelup

global.botwm = "©TommyBot" // Wm

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
