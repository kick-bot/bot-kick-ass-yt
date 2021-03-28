



//--Whatsapp Connecting

const {

  WAConnection,

  MessageType,

  Presence,

  Mimetype,

  GroupSettingChange,

  MessageOptions,

  WALocationMessage,

  WA_MESSAGE_STUB_TYPES,

  ReconnectMode,

  ProxyAgent,

  waChatKey,

  mentionedJid,

  processTime,

  ChatModification,

} = require('@adiwajshing/baileys');

//--



//--File js

const {color, bgcolor} = require('./lib/color');

const {bahasa} = require('./src/bahasa');

const {negara} = require('./src/kodenegara');

const {wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');

const {fetchJson} = require('./lib/fetcher');

const {recognize} = require('./lib/ocr');



//--



//--Pakage Npm

const fs = require('fs');

const moment = require('moment-timezone');

const {exec} = require('child_process');

const kagApi = require('@kagchi/kag-api');

const fetc = require('node-fetch');

const tiktod = require('tiktok-scraper');

const ffmpeg = require('fluent-ffmpeg');

const {removeBackgroundFromImageFile} = require('remove.bg');

const imgbb = require('imgbb-uploader');

const lolis = require('lolis.life');

const loli = new lolis();

const speed = require('performance-now');

const cd = 4.32e+7 ;

const crypto = require('crypto');

const qrcode = require("qrcode-terminal");

const axios = require('axios');

//--



//--File json bot

const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));

const up = JSON.parse(fs.readFileSync('./data/settings.json'));

const samih = JSON.parse(fs.readFileSync('./data/simi.json'))

//--



//--File json temp

const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))

const videonye = JSON.parse(fs.readFileSync('./temp/vid.json'))

const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))

const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))



//--File json user

/*const _limit = JSON.parse(fs.readFileSync('./datauser/limit.json'));

const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));*/

const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));

//--



//--File json data

const trut = JSON.parse(fs.readFileSync('./data/truth.json'));

const fak = JSON.parse(fs.readFileSync('./data/dare.json'));

const dare = JSON.parse(fs.readFileSync('./data/fakta.json'));

//--





//--Setting

prefix = up.prefix

//const limitawal = up.limit;

const memberlimit = up.memberlimit;

const cr = up.cr;

//const hargalimit = up.hargalimit;

const NamaBot = up.NamaBot;

const Ig = up.Ig;

const Wa1 = up.Wa1;

const Wa2 = up.Wa2;

const Ovo = up.Ovo;

const Pulsa = up.Pulsa;

const Dana = up.Dana;

const blocked = [];

const ownerNumber = up.ownerNumber;

//--



//--Apikey

BarBarKey = up.BarBarKey;

vKey = up.Vhtearkey;

viKey = up.Vinzapi

meKey = up.Itsmeikyapi

lolKey = up.LolHumanKey

//--

//--Kontak

const vcard = 'BEGIN:VCARD\n'

+ 'VERSION:3.0\n'

+ 'FN: kick-ass bot\n' // Nama

+ 'ORG:kick-ass bot;\n' // Nama bot

+ 'TEL;type=CELL;type=VOICE;waid=556992482009:+55 69 9248-2009\n' // Nomor bot

+ 'END:VCARD' 





//--Datauser



/*const getLimit = (sender) => {

  let position = false

  Object.keys(limit).forEach ((i) => {

if (limit[position].id === sender) {

  position = i

}

  })

  if (position !== false) {

return limit[position].limit

  }

}

*/

const getRegisteredRandomId = () => {

  return _registered[Math.floor(Math.random() * _registered.length)].id

}



const addRegisteredUser = (userid, sender, age, time, serials) => {

  const obj = {

id: userid,

name: sender,

age: age,

time: time,

serial: serials

  }

  _registered.push(obj)

  fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))

}



const createSerial = (size) => {

  return crypto.randomBytes(size).toString('hex').slice(0, size)

}



const checkRegisteredUser = (sender) => {

  let status = false

  Object.keys(_registered).forEach((i) => {

if (_registered[i].id === sender) {

  status = true

}

  })

  return status

}





/*const addATM = (sender) => {

  const obj = {

id: sender, uang: 0

  }

  uang.push(obj)

  fs.writeFileSync('./datauser/uang.json',

JSON.stringify(uang))

}



const addKoinUser = (sender, amount) => {

  let position = false

  Object.keys(uang).forEach((i) => {

if (uang[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

uang[position].uang += amount

fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))

  }

}



const checkATMuser = (sender) => {

  let position = false

  Object.keys(uang).forEach((i) => {

if (uang[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

return uang[position].uang

  }

}



const bayarLimit = (sender, amount) => {

  let position = false

  Object.keys(_limit).forEach((i) => {

if (_limit[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

_limit[position].limit -= amount

fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))

  }

}



const confirmATM = (sender, amount) => {

  let position = false

  Object.keys(uang).forEach((i) => {

if (uang[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

uang[position].uang -= amount

fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))

  }

}



const limitAdd = (sender) => {

  let position = false

  Object.keys(_limit).forEach((i) => {

if (_limit[i].id == sender) {

  position = i

}

  })

  if (position !== false) {

_limit[position].limit += 1

fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))

  }

}

*/



//--Waktu

function kyun(seconds){

  function pad(s){

    return (s < 10 ? '0' : '') + s;

  }

  var hours = Math.floor(seconds / (60*60));

  var minutes = Math.floor(seconds % (60*60) / 60);

  var second = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(second)}`;

}

//--





//--Whatsapp start connect

async function starts() {

	const Pin = new WAConnection()

	Pin.logger.level = 'warn'

	console.log(banner.string)

	Pin.on('qr', () => {

		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))

	})



	fs.existsSync('./alpin.json') && Pin.loadAuthInfo('./alpin.json')

	Pin.on('connecting', () => {

		start('2', 'Connecting...')

	})

	Pin.on('open', () => {

		success('2', 'Connected')

	})

	await Pin.connect({timeoutMs: 30*1000})

        fs.writeFileSync('./alpin.json', JSON.stringify(Pin.base64EncodedAuthInfo(), null, '\t'))





	Pin.on('group-participants-update', async (anu) => {

		if (!welkom.includes(anu.jid)) return

		try {

			const mdata = await Pin.groupMetadata(anu.jid)

			console.log(anu)

			if (anu.action == 'add') {

				num = anu.participants[0]

				teks = `EAI MANO @${num.split('@')[0]}

Bem-vindo ao Se conposta pra n leva ban, ${prefix}help pra vc abri meus comando mais, antis fala ${prefix}daftar

*${mdata.subject}*

────────────────

┏━━━━━━━━━━━━━━━━━━━━

┃──────〘  *Intro* 〙───────

┃━━━━━━━━━━━━━━━━━━━━

┠⊷️ *Nome* :

┠⊷️ *Número* :

┠⊷️ *Cidade natal* :

┠⊷️ *Gênero* :

┗━━━━━━━━━━━━━━━━━━━━



Modelo ${prefix}daftar para começar a usar bot.`

				Pin.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'remove') {

				num = anu.participants[0]

				teks = `VAI ENBORA MERMO SEU FDP ENTRA PRA QUE ARRONBADO FDP COME SEU CU SE VAI FICA CHORANDO @${num.split('@')[0]}👋`

				Pin.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})

			}

		} catch (e) {

			console.log('Error : %s', color(e, 'red'))

		}

	})



	Pin.on('CB:Blocklist', json => {

            if (blocked.length > 2) return

	    for (let i of json[1].blocklist) {

	    	blocked.push(i.replace('c.us','s.whatsapp.net'))

	    }

	})



	Pin.on('chat-update', async (mek) => {

		try {

            if (!mek.hasNewMessage) return

            mek = mek.messages.all()[0]

			if (!mek.message) return

			if (mek.key && mek.key.remoteJid == 'status@broadcast') return

			if (mek.key.fromMe) return

			global.prefix

			global.blocked

			const content = JSON.stringify(mek.message)

			const from = mek.key.remoteJid

			const type = Object.keys(mek.message)[0]

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''

			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1)

			const isCmd = body.startsWith(prefix)

      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()

			mess = {

  wait: '🌚𝐑𝐋𝐗 𝐀𝐈 𝐓𝐎 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐓𝐎𝐌𝐀 𝐔𝐌 𝐂𝐀𝐅𝐄 𝐀𝐈 𝐒𝐄 𝐃𝐀 𝐄𝐑𝐑𝐎 𝐒𝐄 𝐅𝐀𝐙 𝐃𝐄 𝐍𝐎𝐕𝐎...',

  success: 'Sucesso',

  Public: '*❌* recursos em modo privado agora apenas o proprietário pode usar o bot',

  ferr: '❌ Parece que o recurso está errado ❌',

  limitend: 'Desculpe, seu limite acabou, por favor, faça uma compra repetida.',

  error: {

  stick: '*❌* Por favor, tente novamente mais tarde',

  Iv: '*❌* Erro de link'

  },

  only: {

    group: '*❌* Este comando e so pra grupo*',

    ownerG: '*❌* Este recurso é para OWNER GRUPO',

    ownerB: '*❌* Este recurso é para ☂︎𓇽𝐊𝐈𝐂𝐊-𝐀𝐒𝐒𓇽☂︎',

    admin: '*❌* Este recurso é para ADMIN GRUPO',

    Badmin: '*❌* Torne-o alpino ADMIN !',

    daftarB: `𝐒𝐄 𝐂𝐀𝐃𝐀𝐒𝐓𝐑𝐀 𝐀𝐈, 𝐅𝐃𝐏 \n\n*${prefix}𝐃𝐀𝐅𝐓𝐀𝐑* \n𝐏𝐑𝐀 𝐓𝐔 𝐂𝐎𝐌𝐄𝐜̧𝐀 𝐔𝐒𝐀 𝐎 𝐁𝐎𝐓 ❌ \n\n𝐓𝐈𝐏 𝐀𝐒𝐈𝐌 ${prefix}𝐃𝐀𝐅𝐓𝐀𝐑 angelo`

  }

}

      const totalchat = await Pin.chats.all()

			const botNumber = Pin.user.jid

			const ownerNumber = [`${up.ownerNumber}@s.whatsapp.net`] // replace this with your number

			const isGroup = from.endsWith('@g.us')

			const sender = isGroup ? mek.participant : mek.key.remoteJid

			const groupMetadata = isGroup ? await Pin.groupMetadata(from) : ''

			const groupName = isGroup ? groupMetadata.subject : ''

			const groupId = isGroup ? groupMetadata.jid : ''

			const groupMembers = isGroup ? groupMetadata.participants : ''

			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

			const isGroupAdmins = groupAdmins.includes(sender) || false

			const isWelkom = isGroup ? welkom.includes(from) : false

			const isOwner = ownerNumber.includes(sender)

			const isSimi = isGroup ? samih.includes(from): false

      const isRegister = checkRegisteredUser(sender)

      const q = args.join(' ')

      const tescuk = ["0@s.whatsapp.net"]

			let pushname = Pin.contacts[sender] != undefined ? Pin.contacts[sender].vname || Pin.contacts[sender].notify: undefined

			const isUrl = (url) => {

			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))

			}

			

//--Balasan bot

			const reply = (teks) => {

				Pin.sendMessage(from, teks, text, {quoted:mek})

			}

			const sendMess = (hehe, teks) => {

				Pin.sendMessage(hehe, teks, text)

			}

			const mentions = (teks, memberr, id) => {

				(id == null || id == undefined || id == false) ? Pin.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Pin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})

			}

			const costum = (pesan, tipe, target, target2) => {

      Pin.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {

  remoteJid: from

}: {})

  }, message: {

conversation: `${target2}`

  }}})

}

const sendPtt = (teks) => {

  Pin.sendMessage(from, audio, mp3, {

quoted: mek

  })

}

			

//--MessageType

			const isMedia = (type === 'imageMessage' || type === 'videoMessage')

			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')



//--Colors

      colors = ['red','white','black','blue','yellow','green']



//--Console log grup

			if (!isGroup && isCmd) console.log('\x1b[1;37m>', time, color(command), 'from', color(pushname), 'args :', (args.length))

			

//--Console log chat pribadi

			if (isCmd && isGroup) console.log('\x1b[1;37m>', time, color(command), 'from', (groupName), 'args :', color(args.length))



//---Metadata stiker

			function addMetadata(packname, author) {	

				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	

				author = author.replace(/[^a-zA-Z0-9]/g, '');	

				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`

				const json = {	

					"sticker-pack-name": packname,

					"sticker-pack-publisher": author,

				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	

				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	



				let len = JSON.stringify(json).length	

				let last	



				if (len > 256) {	

					len = len - 256	

					bytes.unshift(0x01)	

				} else {	

					bytes.unshift(0x00)	

				}	



				if (len < 16) {	

					last = len.toString(16)	

					last = "0" + len	

				} else {	

					last = len.toString(16)	

				}	



				const buf2 = Buffer.from(last, "hex")	

				const buf3 = Buffer.from(bytes)	

				const buf4 = Buffer.from(JSON.stringify(json))	



				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	



				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	

					return `./src/stickers/${name}.exif`	

				})	



			}

if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/alpin');
                client.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }

		if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/Dappa');
                client.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }

//----limit

/*const isLimit = (sender) => {

  let position = false

  for (let i of _limit) {

if (i.id === sender) {

  let limits = i.limit

  if (limits >= limitawal) {

position = true

return true

  } else {

_limit

position = true

return false

  }

}

  }

  if (position === false) {

const obj = {

  id: sender,

  limit: 1

}

_limit.push(obj)

fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))

return false

  }

}



//--check limit user

const checkLimit = (sender) => {

      let found = false

     for (let lmt of _limit) {

     if (lmt.id === sender) {

      limitCounts = limitawal - lmt.limit

     if (limitCounts <= 0) return Pin.sendMessage(from, `Maaf limit kamu telah habis, silahkan lakukan pembelian ulang`, text,{ quoted: mek})

      Pin.sendMessage(from, `〘  *Limit* 〙

Sisa limit anda : *${limitCounts}*

_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})

      found = true

                                }

                        }

      if (found === false) {

      let obj = { id: sender, limit: 1 }

      _limit.push(obj)

     fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))

     Pin.sendMessage(from, `〘  *Limit* 〙

Sisa limit anda : *${limitCounts}*

_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})

                        }

                }



//--Balance

if (isRegister && isGroup) {

  const checkATM = checkATMuser(sender)

  try {

if (checkATM === undefined) addATM(sender)

const uangsaku = Math.floor(Math.random() * 10) + 90

addKoinUser(sender, uangsaku)

  } catch (err) {

console.error(err)

  }

}

*/



//--Member limit

if (isGroup) {

  try {

const getmemex = groupMembers.length

if (getmemex <= memberlimit) {

  Pin.sendMessage(from, `Desculpe, as condições de membro devem ser acima de ${memberlimit}, A deus add mais gente ai, Ai se me add🤠`, text)



  setTimeout(() => {

Pin.groupLeave(from) // ur cods

  }, 5000) // 1000 = 1s,

}

  } catch {

console.error(err)

  }

}





//--Other Function

const apakah = ['Ya',

  'Tidak',

  'Mungkin']

const bisakah = ['Bisa',

  'Tidak Bisa',

  'Mungkin']

const kapankah = ['Hari Lagi',

  'Minggu Lagi',

  'Bulan Lagi',

  'Tahun Lagi']







//--Auto respon

if(budy.match('alpin')){

result = fs.readFileSync(`./temp/stick/emm.webp`)

  Pin.sendMessage(from, result, sticker, {

quoted: mek

  })

}



//--End auto respon 1



//--Auto respon 2

switch(is) {

  case 'bot':

buf = fs.readFileSync(`./temp/audio/onichan.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



case '#menu':

case '#help':

case '!help':

case '!menu':

case '/menu':

case '/help':

case 'help':

case 'menu':

hasil = `        ────────────────

𝐍 𝐄 𝐄𝐒𝐒𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 *${pushname}* 𝐓𝐀𝐍𝐓𝐀 𝐃𝐈𝐆𝐈𝐓𝐀 ${prefix}𝐌𝐄𝐍𝐔

        ────────────────`

reply(hasil)

        break

}



			switch(command) {

case 'help':

  case 'menu':

case '?':

  if (!isRegister) return reply(mess.only.daftarB)

  uptime = process.uptime()

  const Menu = {

text: `  ────────────────


             TOME UMA FLOM 🥀

        ────────────────

𝐛𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 *${pushname}* 

        ────────────────͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

        ────────────────

〘 *𝐁𝐎𝐓 𝐊𝐈𝐂𝐊-𝐀𝐒𝐒* 〙

╠≽ Prefix:  *「 ${prefix} 」*

╠≽ Nome: *☂︎𓇽𝐊𝐈𝐂𝐊-𝐀𝐒𝐒𓇽☂︎*

╠≽ WA Conectado: *Baileys*

╠≽ Status online: *${kyun(uptime)}*

╠≽ Modelo: *ON*

╠≽ Grupo:  *${groupName}*

╠≽ Numero de usuários : *${_registered.length} ussando o bot*

╠≽ Numero de chats : *${totalchat.length} Chat*




      ────────────────
      AJUDA LA NO MEU CANAL 
  ┠⊷ https://youtube.com/channel/UCPtLWfe5t-46bvD0Iomr7LA
  
      LINK DO GRUPO DO BOT
  ┠⊷ https://chat.whatsapp.com/GgZb1gEk04lH8MiUwOLbjP
  
  
  

┏━━━━━━━━━━━━━━━━━━━━

┃─────〘 *☂︎𓇽𝐊𝐈𝐂𝐊-𝐀𝐒𝐒𓇽☂︎* 〙────

┃━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Simi (Texto)*

┃ _Simsimi Chat_
─────────────────────────────
┠⊷️ *${prefix}Info*

┃ _Info do bot_
─────────────────────────────
┠⊷️ *${prefix}antisticker*

┃ _digite on antisticker_
─────────────────────────────
┠⊷️ *${prefix}Owner*

┃ _Info proprietário do Bot_
─────────────────────────────
┠⊷️ *${prefix}Donasi*

┃ _Info donasi_
─────────────────────────────
┠⊷️ *${prefix}Ping*

┃ _Conheça a velocidade de resposta_

┗━━━━━━━━━━━━━━━━━━━━



┏━━━━━━━━━━━━━━━━━━━━

┃─────〘  *Lista menu* 〙─────

┗━━━━━━━━━━━━━━━━━━━━



   〘 GRUPO 〙

┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Listadmin*

┃ _Exibições de lista admin_
─────────────────────────────
┠⊷️ *${prefix}Listonline*

┃ _Exibe uma lista de membros online_
─────────────────────────────
┠⊷️ *${prefix}Closegc*

┃ _Fechar o Grupo_
─────────────────────────────
┠⊷️ *${prefix}Opengc*

┃ _Abrir o grupo_
─────────────────────────────
┠⊷️ *${prefix}Promote*

┃ _Levante o departamento admin_
─────────────────────────────
┠⊷️ *${prefix}Demote*

┃ _Rebaixado admin_
─────────────────────────────
┠⊷️ *${prefix}Setname*

┃ _Renomeia o grupo_
─────────────────────────────
┠⊷️ *${prefix}Setdesk*

┃ _Alterar a descrição do grupo_
─────────────────────────────
┠⊷️ *${prefix}Add*

┃ _Adicionar membro_
─────────────────────────────
┠⊷️ *${prefix}remover*

┃ _so o kick-ass_
─────────────────────────────
┠⊷️ *${prefix}marcar*

┃ _Identificar todos os membros_
─────────────────────────────
┠⊷️ *${prefix}Linkgrupo*

┃ _Pegue o link do grupo_
─────────────────────────────
┠⊷️ *${prefix}Leave*

┃ _bot sair do grupo_
─────────────────────────────
┠⊷️ *${prefix}Notif*

┃ _Notificar todos os membros_
─────────────────────────────
┠⊷️ *${prefix}Welcome*

┃ _On/off boas vindas_
─────────────────────────────
┠⊷️ *${prefix}Delete (Reply pesan)*

┃ _Apagar mensagens do Bot_

┗━━━━━━━━━━━━━━━━━━━━



*〘 FUN 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Alay (Texto)*

┃ _Fonte Alay_
─────────────────────────────
┠⊷️ *${prefix}Alay2 (Texto)*

┃ _Fonte Alay_
─────────────────────────────
┠⊷️ *${prefix}Reverse (Texto)*

┃ _Invertendo a grafia das frases_
─────────────────────────────
┠⊷️ *${prefix}Hilih (Texto)*

┃ _Mudar as vogais para i_
─────────────────────────────
┠⊷️ *${prefix}Namae (Texto)*

┃ _Nome ninpushnameu_
─────────────────────────────
┠⊷️ *${prefix}Pantun*

┃ _Poema aleatório_
─────────────────────────────
┠⊷️ *${prefix}Bucin*

┃ _Palavra aleatória bucin_
─────────────────────────────
┠⊷️ *${prefix}Bijak*

┃ _Palavras motivacionais aleatórias_
─────────────────────────────
┠⊷️ *${prefix}Chatprank (Texto1/Texto2)*

┃ _Ex : ${prefix}Torne-se sensato/sentado_

┠⊷️ *${prefix}Itsme*

┃ _Mostrar perfil_
─────────────────────────────
┠⊷️ *${prefix}Fml*

┃ _Citações Foda-se Minha Vida_
─────────────────────────────
┠⊷️ *${prefix}Asupan*

┃ _Vídeos de atualização da linha do tempo_
─────────────────────────────
┠⊷️ *${prefix}Tagme*

┃ _Auto tag_
─────────────────────────────
┠⊷️ *${prefix}Fitnah (Tag target|teks1|teks2)*

┃ _Bot de bate-papo de resposta falsa_

┗━━━━━━━━━━━━━━━━━━━━



*〘 MIDIA 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}listvn*

┃ _Exibe uma lista de bots vn_
─────────────────────────────
┠⊷️ *${prefix}listimg*

┃ _Mostra uma lista de fotos_
─────────────────────────────
┠⊷️ *${prefix}liststik*

┃ _Exibe uma lista de adesivos de bot_
─────────────────────────────
┠⊷️ *${prefix}listvid*

┃ _Exibições de lista video_
─────────────────────────────
┠⊷️ *${prefix}Tupai (Reply audio)*

┃ _Transforma voz em esquilo_
─────────────────────────────
┠⊷️ *${prefix}Slow (Reply audio)*

┃ _Alterar a velocidade do áudio_
─────────────────────────────
┠⊷️ *${prefix}Gemuk (Reply audio)*

┃ _Raposa de voz baixa_
─────────────────────────────
┠⊷️ *${prefix}Bass (Reply audio)*

┃ _Aumente os graves do áudio_

┗━━━━━━━━━━━━━━━━━━━━



*〘 EDITANDO 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Gtav (Foto)*

┃ _Faça um banner GTAV a partir de foto_
─────────────────────────────
┠⊷️ *${prefix}Wanted (Foto)*

┃ _Crie pôsteres WANTED apartir de foto_
─────────────────────────────
┠⊷️ *${prefix}Drawing (Foto)*

┃ _Filtro de foto de desenho a lápis_

┗━━━━━━━━━━━━━━━━━━━━



*〘 ANIME 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Kusonime (Query)*

┃ _Pesquisando informações anime di kusonime_
─────────────────────────────
┠⊷️ *${prefix}Neonime (Query)*

┃ _Pesquisando informações sobre anime por neonime_
─────────────────────────────
┠⊷️ *${prefix}Charnime (Query)*

┃ _Pesquisando informações karakter anime_
─────────────────────────────
┠⊷️ *${prefix}Wait*

┃ _Detectar informações de anime na imagem_
─────────────────────────────
┠⊷️ *${prefix}Anime*

┃ _Procurando imagens anime_
─────────────────────────────
┠⊷️ *${prefix}Loli*

┃ _pesquisando imagens de anime loli_
─────────────────────────────
┠⊷️ *${prefix}Neko*

┃ _pesquisando imagens de anime neko_

┠⊷️ *${prefix}shit

┃ _manda foto de shitpost_

┗━━━━━━━━━━━━━━━━━━━━



*〘 GAME 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Tebakgambar*

┃ _Adivinhe aleatoriamente a imagem_
─────────────────────────────
┠⊷️ *${prefix}Caklontong*

┃ _Quiz aleatório caklontong_
─────────────────────────────
┠⊷️ *${prefix}gay (Texto)*

┃ _Apresente-se gay_
─────────────────────────────
┠⊷️ *${prefix}Seberapabucin (Texto)*

┃ _Ele havia introduzido um chifre_

┗━━━━━━━━━━━━━━━━━━━━



*〘 TOD 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷ *${prefix}Truth*

┠⊷ *${prefix}Dare*

┗━━━━━━━━━━━━━━━━━━━━



*〘 Cartuchos MARAVILHOSO 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷ *${prefix}Apakah (Texto)*
─────────────────────────────
┠⊷ *${prefix}Bisakah (Texto)*
─────────────────────────────
┠⊷ *${prefix}Kapankah (Texto)*
─────────────────────────────
┠⊷ *${prefix}Rate (Texto)*
─────────────────────────────
┠⊷ *${prefix}Jeitoso (Texto)*
─────────────────────────────
┠⊷ *${prefix}Cantikcek (Texto)*

┗━━━━━━━━━━━━━━━━━━━━



*〘 FERRAMENTAS 〙*




┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Stiker*

┠⊷️ *${prefix}sticker


┠⊷️ *${prefix}f

┃ _Faça adesivos de fotos/video_
─────────────────────────────
┠⊷️ *${prefix}Triggered*

┃ _Crie adesivos acionados_
─────────────────────────────
┠⊷️ *${prefix}Wasted*

┃ _Faça adesivos perdidos_
─────────────────────────────
┠⊷️ *${prefix}Ttp (Teks)*

┃ _Crie adesivos a partir de texto_
─────────────────────────────
┠⊷️ *${prefix}Toimg*

┃ _Transforme adesivos em fotos_
─────────────────────────────
┠⊷️ *${prefix}Tomp3*

┃ _Converte vídeo em áudio_
─────────────────────────────
┠⊷️ *${prefix}Play (Texto)*

┃ _Tocar uma musica_
─────────────────────────────
┠⊷️ *${prefix}Tts (Texto)*

┃ _Texto to sound_
─────────────────────────────
┠⊷️ *${prefix}Igstalk (username)*

┃ _Perseguição Instagram_
─────────────────────────────
┠⊷️ *${prefix}Timer (Waktu)*

┃ _Cronômetro_
─────────────────────────────
┠⊷️ *${prefix}Wame*

┃ _Faço link wa.me_
─────────────────────────────
┠⊷️ *${prefix}Nulis eror bro (Teks)*

┃ _Escrever em livro_
─────────────────────────────
┠⊷️ *${prefix}Ocr*

┃ _Copie o texto na imagem_
─────────────────────────────
┠⊷️ *${prefix}Wait*

┃ _Informações de anime de fotos de anime_

┗━━━━━━━━━━━━━━━━━━━━



*〘 TEXTO〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Tahta (Texto)*
─────────────────────────────
┃ _Ex : ${prefix} Madeira alpina_

┗━━━━━━━━━━━━━━━━━━━━



*〘 TEXTE2 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Ephoto list*

┃ _Exibir código de texto ephoto_
─────────────────────────────
┠⊷️ *${prefix}Ephoto (código + Texto)*
─────────────────────────────
┃ _Ex : ${prefix}Ephoto 25 alpin_
─────────────────────────────
┠⊷️ *${prefix}Textpro list*
─────────────────────────────
┃ _Mostra o código textpro_
─────────────────────────────
┠⊷️ *${prefix}Textpro (Kode + Teks)*
─────────────────────────────
┃ _Ex : ${prefix}Textpro 55 alpin_

┗━━━━━━━━━━━━━━━━━━━━



*〘 FOTO 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Cogan*

┃ _Random foto cogan_
─────────────────────────────
┠⊷️ *${prefix}Cecan*

┃ _Random foto cecan_
─────────────────────────────
┠⊷️ *${prefix}Meme*

┃ _Random meme_
─────────────────────────────
┠⊷️ *${prefix}Twit*

┃ _Random foto status Twitter_
─────────────────────────────
┠⊷️ *${prefix}Quotes*

┃ _Random foto quotes_
─────────────────────────────
┠⊷️ *${prefix}Wp*

┃ _Random wallpaper_
─────────────────────────────
┠⊷️ *${prefix}Cyberpunk*

┃ _Random foto cyberpunk_
─────────────────────────────
┠⊷️ *${prefix}Img (Consulta)*

┃ _Encontre a imagem de acordo com o pedido_
─────────────────────────────
┠⊷️ *${prefix}Google (pesquisar imagem)*

┃ _Encontre a imagem de acordo com o pedido_

┗━━━━━━━━━━━━━━━━━━━━



*〘 EDUCAÇÃO 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Brainly (Pertanyaan)*

┃ _Procurando por respostas Brainly_
─────────────────────────────
┠⊷️ *${prefix}Wiki (Consulta )*

┃ _Procurar wiki_
─────────────────────────────
┠⊷️ *${prefix}Kbbi (Consulta)*

┃ _Ótimo dicionário de línguas Indonesia_
─────────────────────────────
┠⊷️ *${prefix}Tl (Teks/kode bahasa)*

┃ _Traduza todos os idiomas_
─────────────────────────────
┠⊷️ *${prefix}Fakta*

┃ _Ramdom fakta_
─────────────────────────────
┠⊷️ *${prefix}Kodebahasa*

┃ _Mostra o código do idioma_
─────────────────────────────
┠⊷️ *${prefix}Kodenegara*

┃ _Mostra o código do país_

┗━━━━━━━━━━━━━━━━━━━━



*〘 OUTRO 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Lirik (título da música)*

┃ _Pesquise letras de músicas_
─────────────────────────────
┠⊷️ *${prefix}Chord (título da música*)

┃ _Pesquise acordes de música_
─────────────────────────────
┠⊷️ *${prefix}Jadwaltvnow*

┃ _Esta programação da tv pushname vai ao ar_
─────────────────────────────
┠⊷️ *${prefix}Mapa (Área)*

┃ _Mostra o minimapa_
─────────────────────────────
┠⊷️ *${prefix}Trendtwit*

┃ _Mostra tendências Twitter_
─────────────────────────────
┠⊷️ *${prefix}Beritahoax*

┃ _Mostra informações de notícias falsas_
─────────────────────────────
┠⊷️ *${prefix}Gplaystore*

┃ _Pesquisa de aplicativos da playstore_

┗━━━━━━━━━━━━━━━━━━━━



*〘 PRIMBON 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Arti (Nama)*

┃ _Descubra o significado do seu nome_
─────────────────────────────
┠⊷️ *${prefix}Couple (Nama & Nama)*

┃ _Correspondências por nome_
─────────────────────────────
┠⊷️ *${prefix}Jadian (Tgl-bln-thn)*

┃ _Características do aniversário_
─────────────────────────────
┠⊷️ *${prefix}Weton (Tgl-bln-thn)*

┃ _Info data de nascimento weton_
─────────────────────────────
┠⊷️ *${prefix}Zodiak (Texto)*

┃ _Previsões diárias do zodíaco_
─────────────────────────────
┠⊷️ *${prefix}Artimimpi (Texto)*

┃ _o significado dos seus sonhos_

┗━━━━━━━━━━━━━━━━━━━━



*〘 ISLAMISMO 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Alquran (Número da surata)*

┃ _Mostra a surata interna Al-Qur'an_
─────────────────────────────
┠⊷️ *${prefix}Ngaji*

┃ _Versos aleatórios na surata Al-Qur'an_
─────────────────────────────
┠⊷️ *${prefix}Tafsir (Query)*

┃ _Procurando por interpretação no Alcorão_
─────────────────────────────
┠⊷️ *${prefix}Sholat (Daerah)*

┃ _Info horários de oração regionais_

┗━━━━━━━━━━━━━━━━━━━━



*〘 CLIMA 〙*




┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Cuaca (Daerah)*

┃ _Mostra informações meteorológicas_
─────────────────────────────
┠⊷️ *${prefix}Infogempa*

┃ _Exibe as informações mais recentes sobre terremotos_

┃━━━━━━━━━━━━━━━━━━━━

┗━━━━━━━━━━━━━━━━━━━━



*〘 download 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Ytmp3 (Link)*

┃ _Download audio youtube_
─────────────────────────────
┠⊷️ *${prefix}Ytmp4 (Link)*

┃ _Download video youtube_
─────────────────────────────
┠⊷️ *${prefix}Fb (Link)*

┃ _Download video Facebook_
─────────────────────────────
┠⊷️ *${prefix}Ig (Link)*

┃ _Download video Instagram_
─────────────────────────────
┠⊷️ *${prefix}Scdl (Link)*

┃ _Download lagu SoundCloud_
─────────────────────────────
┠⊷️ *${prefix}Tik (Link)*

┃ _Baixe o vídeo Tiktok_
─────────────────────────────
┠⊷️ *${prefix}Pin (Link)*

┃ _baixar vídeos do Pinterest_
─────────────────────────────
┠⊷️ *${prefix}Joox (Judul lagu*)

┃ _Download música ligada joox_

┗━━━━━━━━━━━━━━━━━━━━



*〘 OWNER 〙*



┏━━━━━━━━━━━━━━━━━━━━

┠⊷️ *${prefix}Clone*

┃ _Clonar a foto do alvo_
─────────────────────────────
┠⊷️ *${prefix}Block*

┃ _Bloquear alvo específico_
─────────────────────────────
┠⊷️ *${prefix}Unblock*

┃ _Desbloquear alvo específico_
─────────────────────────────
┠⊷️ *${prefix}Bc*

┃ _Transmitir mensagem_
─────────────────────────────
┠⊷️ *${prefix}Blocklist*

┃ _Listar usuário terblokir_
┗━━━━━━━━━━━━━━━━━━━━



 ╠≽ criador ${prefix}dono

 
 ╠≽     CABO OS COMANDO ZE 

┗━━━━━━━━━━━━━━━━━━━━`,



contextInfo: {

  mentionedJid: [sender]

}

  }

  Pin.sendMessage(from, Menu, text, {

quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "📄 BOT DE WHATSAPP", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })

  break



//--Cek limit user

case 'ceklimit':

  if (!isRegister) return reply(mess.only.daftarB)

  checkLimit(sender)

  break



//---cek saldo user

case 'ceksaldo':

  if (!isRegister) return reply(mess.only.daftarB)

  uangkau = checkATMuser(sender)

  hasil = `〘  *ATM* 〙

╔════════════════════

╠≽️ *Nome* : *${pushname}*
─────────────────────────────
╠≽️ *Saldo* : *Rp.${uangkau}.-*
─────────────────────────────
╠≽️ *Número* : *${sender.split("@")[0]}*

╚════════════════════`

  reply(hasil)

  break







	break

					case 'slow':

					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					slo = await Pin.downloadAndSaveMediaMessage(low)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(slo)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'tupai':

					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo



					tup = await Pin.downloadAndSaveMediaMessage(pai)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(tup)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'gemuk':

					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo



					gem = await Pin.downloadAndSaveMediaMessage(muk)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(gem)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'bass':                 

					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo



					bas = await Pin.downloadAndSaveMediaMessage(ass)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(bas)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

					break



//--Info bot
				case 'info':

  me = Pin.user

  uptime = process.uptime()

  teks = `*‣ 𝐍𝐎𝐌𝐄 𝐃𝐎 𝐁𝐎𝐓* : ${me.name}
──────────────────
  ‣ *𝐍𝐔𝐌𝐄𝐑𝐈 𝐃𝐎 𝐁𝐎𝐓* : @${me.jid.split('@')[0]}
──────────────────
  ‣ *𝐃𝐎𝐍𝐎* : ☂︎𓇽𝐊𝐈𝐂𝐊-𝐀𝐒𝐒𓇽☂︎
──────────────────
  ‣ *𝐏𝐑𝐄𝐅𝐈𝐗* : ${prefix}
──────────────────
  ‣ *𝐂𝐓𝐓𝐒 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎𝐒* : ${blocked.length}
──────────────────
  ‣ *0 𝐁𝐎𝐓 𝐄𝐒𝐓𝐀 𝐀𝐓𝐈𝐕𝐎 𝐄𝐌* : ${kyun(uptime)}
──────────────────
  ‣ *𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐓𝐎𝐓𝐀𝐋* : ${_registered.length} User
──────────────────
  ‣ *𝐓𝐎𝐓𝐀𝐋 𝐂𝐇𝐀𝐓 𝐃𝐎 𝐁𝐎𝐓* : ${totalchat.length}`

  buffer = await getBuffer(me.imgUrl)

  Pin.sendMessage(from, buffer, image, {

caption: teks, contextInfo: {

  mentionedJid: [me.jid]}})

  break
					


//--Info dono2
				case 'dono':

  me = Pin.user

  uptime = process.uptime()

  teks = `┣➢𝐍𝐎𝐌𝐄 𝐃𝐎 𝐃𝐎𝐍𝐎 : ANGELO
──────────────────
  ┣➢𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐎 𝐃𝐎𝐍𝐎* : wa.me/556992482009
──────────────────
  ┣➢𝐃𝐎𝐍𝐎* : ☂︎𓇽𝐊𝐈𝐂𝐊-𝐀𝐒𝐒𓇽☂︎
──────────────────
  ┣➢𝐏𝐑𝐄𝐅𝐈𝐗 * : ${prefix}
──────────────────
  ┣➢𝐂𝐓𝐓𝐒 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎𝐒* : ${blocked.length}
──────────────────
  ┣➢𝐓𝐎𝐓𝐀𝐋 𝐂𝐇𝐀𝐓 DO DONO* : ${totalchat.length}`

  buffer = await getBuffer(me.imgUrl)

  Pin.sendMessage(from, buffer, image, {

caption: teks, contextInfo: {

  mentionedJid: [me.jid]}})

  break



//---Kecepatan respon

case 'ping':

  case 'speed':

if (!isRegister) return reply(mess.only.userB)

const timestamp = speed();

const latensi = speed() - timestamp

Pin.updatePresence(from, Presence.composing)

uptime = process.uptime()

Pin.sendMessage(from, `*╠≽ 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄 𝐃𝐄 𝐑𝐄𝐒𝐏𝐎𝐒𝐓𝐀 𝐃𝐎 𝐁𝐎𝐓*\n‣ *𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄* : ${latensi.toFixed(4)} _𝐒𝐄𝐆𝐔𝐍𝐃𝐎_\n\n‣ *𝐈𝐌𝐅𝐎 𝐃𝐎 𝐁𝐎𝐓*\n‣ *𝐓𝐎𝐓𝐀𝐋 𝐂𝐇𝐀𝐓 𝐃𝐎 𝐁𝐎𝐓* : ${totalchat.length}\n‣ *𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐔𝐒𝐒𝐔𝐀𝐑𝐈𝐎* : ${_registered.length}\n‣ *𝐁𝐋𝐎𝐂𝐊* : ${blocked.length}\n‣ *𝐎𝐍𝐋𝐈𝐍𝐄* : ${kyun(uptime)}`, text, {

  quoted: mek

})

break



//---donasi

case 'donasi':

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

hasil = `Bantu donasi agar bot bisa terus berjalan.



Cuidado com o fogo, mesmo que você tenha um pedaço de tâmaras. Aquele que não encontra uma boa palavra

_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_



*Pulsa :* _${Pulsa}_

*Dana :* _${Dana}_

*OVO :* _${Ovo}_`,

Pin.sendMessage(from, hasil, text, {

  quoted: mek

})

break



//--arti nama

case 'arti':

if (args.length < 1) return reply('*❌* Digite o texto')

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

teks = body.slice(6)

try {

data = await fetchJson(`https://scrap.terhambar.com/nama?n=${teks}`)

hasil = `Nome : *${teks}*\n${data.result.arti}`

reply(hasil)



} catch {

  reply(mess.ferr)

}

break



//---couple pasangan

case 'couple':

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

if (!q.includes(' & ')) return  reply('O formato do texto está errado')

const aku = q.substring(0, q.indexOf(' &') - 0)

const kamu = q.substring(q.lastIndexOf('& ') + 1)

try {

data = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${aku}&pasangan=${kamu}`, {

  method: 'get'

})

yoi = `‣ *Nome* : ${aku}

‣ *Casal* : ${kamu}

‣ *Positivo* : ${data.positif}

‣ *Negativo* : ${data.negatif}`

Pin.sendMessage(from, yoi, text, {

  quoted: mek

})



} catch {

  reply(mess.ferr)

}

break



//---Zodiak harian

case 'zodiak':

if (args.length < 1) return reply('*❌* Digite o nome do seu zodíaco')

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

teks = body.slice(8)

try {

data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${vKey}`)

hasil = `Zodiak : *${data.result.zodiak}*\nRamalan hari ini : *${data.result.ramalan}*\n${data.result.inspirasi}`

reply(hasil)



} catch {

  reply(mess.ferr)

}

break



//--pencarian pinterest

  case 'img':

if (!isRegister) return reply(mess.only.daftarB)



if (args.length < 1) return reply('*❌* Insira uma consulta')

tels = body.slice(5)

Pin.updatePresence(from, Presence.composing)

reply(mess.wait)

try {

data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {

  method: 'get'

})

n = JSON.parse(JSON.stringify(data));

nimek = n[Math.floor(Math.random() * n.length)];

pok = await getBuffer(nimek)

Pin.sendMessage(from, pok, image, {

  quoted: mek, caption: `foto encontrada : *${tels}*`

})



} catch {

  reply(mess.ferr)

}

break



//--Pencarian pinterest

case 'pinterest':

tels = body.slice(11)

if (!isRegister) return reply(mess.only.daftarB)



if (args.length < 1) return reply('*❌* Insira uma consulta')

Pin.updatePresence(from, Presence.composing)

try {

data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {

  method: 'get'

})

reply(mess.wait)

n = JSON.parse(JSON.stringify(data));

nimek = n[Math.floor(Math.random() * n.length)];

pok = await getBuffer(nimek)

Pin.sendMessage(from, pok, image, {

  quoted: mek, caption: `foto encontrada : *${tels}*`

})



} catch {

  reply(mess.ferr)

}

break



case 'listonline':

        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from

			    let online = [...Object.keys(Pin.chats.get(ido).presences), Pin.user.jid]

			    Pin.sendMessage(from, '𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐓𝐓𝐒 𝐃𝐎 𝐁𝐎𝐓 𝐎𝐍𝐋𝐈𝐍𝐄:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,

  			  contextInfo: { mentionedJid: online }

			    })

				break







//--pinterest anime neko

case 'neko':

if (!isRegister) return reply(mess.only.daftarB)



Pin.updatePresence(from, Presence.composing)

uk = ["anime neko"]

nk = uk[Math.floor(Math.random() * uk.length)]

try {

data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

  method: 'get'

})

reply(mess.wait)

n = JSON.parse(JSON.stringify(data));

nimek = n[Math.floor(Math.random() * n.length)];

pok = await getBuffer(nimek)

Pin.sendMessage(from, pok, image, {

  quoted: mek, caption: `Ini ?`

})



} catch {

  reply(mess.ferr)

}

break



//--Pinteres anime loli

  case 'loli':

if (!isRegister) return reply(mess.only.daftarB)



Pin.updatePresence(from, Presence.composing)

uk = ["anime loli"]

nk = uk[Math.floor(Math.random() * uk.length)]

try {

data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

  method: 'get'

})

reply(mess.wait)

n = JSON.parse(JSON.stringify(data));

nimek = n[Math.floor(Math.random() * n.length)];

pok = await getBuffer(nimek)

Pin.sendMessage(from, pok, image, {

  quoted: mek, caption: `gostosa ne😳`

})



} catch {

  reply(mess.ferr)

}

break





//--Pinterest Twitter

  case 'twit':

if (!isRegister) return reply(mess.only.daftarB)



Pin.updatePresence(from, Presence.composing)

tw = ["Twitter lucu Indonesia",

  "Twitter harian",

  "Recehkan Twitter",

  "twit lucu"]

nk = tw[Math.floor(Math.random() * tw.length)]

try {

data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

  method: 'get'

})

reply(mess.wait)

n = JSON.parse(JSON.stringify(data));

nimek = n[Math.floor(Math.random() * n.length)];

pok = await getBuffer(nimek)

Pin.sendMessage(from, pok, image, {

  quoted: mek

})



} catch {

  reply(mess.ferr)

}

break



  //

  case 'anime':

if (!isRegister) return reply(mess.only.daftarB)



Pin.updatePresence(from, Presence.composing)

am = ["anime tumblr",

  "wallpaper anime hd",

  "anime aestethic",

  "anime hd"]

nk = am[Math.floor(Math.random() * am.length)]

data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

  method: 'get'

})

reply(mess.wait)

n = JSON.parse(JSON.stringify(data));

nimek = n[Math.floor(Math.random() * n.length)];

pok = await getBuffer(nimek)

Pin.sendMessage(from, pok, image, {

  quoted: mek, caption: `UAUUUU😳`

})



break



//--Pinterest wallpaper

  case 'wp':

case 'wallpaper':

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  pw = ["wallpaper aestethic",

"wallpaper tumblr",

"wallpaper lucu",

"wallpaper"]

  nk = pw[Math.floor(Math.random() * pw.length)]

  try {

  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

method: 'get'

  })

  reply(mess.wait)

  n = JSON.parse(JSON.stringify(data));

  nimek = n[Math.floor(Math.random() * n.length)];

  pok = await getBuffer(nimek)

  Pin.sendMessage(from, pok, image, {

quoted: mek, caption: `NUM E LEGAL KKK`

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--Pinterest cecan

case 'cecan':

  if (!isRegister) return reply(mess.only.daftarB)

  

  tels = body.slice(5)

  Pin.updatePresence(from, Presence.composing)

  ty = ["ulzhang girl",

"cewek cantik",

"cewe hijab",

"cewe rusia cantik",

"cewe jepang cantik",

"cecan indo"]

  nk = ty[Math.floor(Math.random() * ty.length)]

  try {

  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

method: 'get'

  })

  reply(mess.wait)

  n = JSON.parse(JSON.stringify(data));

  nimek = n[Math.floor(Math.random() * n.length)];

  pok = await getBuffer(nimek)

  Pin.sendMessage(from, pok, image, {

quoted: mek, caption: `Gimana ?`

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--Pinterest quotes

case 'quotes':

  if (!isRegister) return reply(mess.only.daftarB)

  

  tels = body.slice(5)

  Pin.updatePresence(from, Presence.composing)

  qt = ["quotes galau",

"quotes aestethic Indonesia"]

  nk = qt[Math.floor(Math.random() * qt.length)]

  try {

  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

method: 'get'

  })

  reply(mess.wait)

  n = JSON.parse(JSON.stringify(data));

  nimek = n[Math.floor(Math.random() * n.length)];

  pok = await getBuffer(nimek)

  Pin.sendMessage(from, pok, image, {

quoted: mek, caption: `Kasian jomblo`

  })

  

  } catch {

    reply(mess.ferr)

  }

  break







//--Pinterest cogan

case 'cogan':

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]

  nk = uk[Math.floor(Math.random() * uk.length)]

  try {

  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

method: 'get'

  })

  reply(mess.wait)

  n = JSON.parse(JSON.stringify(data));

  nimek = n[Math.floor(Math.random() * n.length)];

  pok = await getBuffer(nimek)

  Pin.sendMessage(from, pok, image, {

quoted: mek, caption: `Wah ganteng kek gua`

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--Pinterest cyberpunk

case 'cyberpunk':

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]

  nk = co[Math.floor(Math.random() * co.length)]

  try {

  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

method: 'get'

  })

  reply(mess.wait)

  n = JSON.parse(JSON.stringify(data));

  nimek = n[Math.floor(Math.random() * n.length)];

  pok = await getBuffer(nimek)

  Pin.sendMessage(from, pok, image, {

quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'jadian':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return Pin.sendMessage(from, `Insira a data-mês-ano`, text, {

quoted: mek

  })

  if (!q.includes('-')) return  reply('Insira data-mês-ano corretamente\n* Exemplo: 09-09-2009*')

  pc = body.slice(9)

  teks1 = pc.split("-")[0];

  teks2 = pc.split("-")[1];

  teks3 = pc.split("-")[2];

  reply(mess.wait)

  try {

  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/jadian/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {

method: 'get'

  })

  hasil = `‣ *Karakteristik* : ${iya.result.karakteristik}\n‣ *Deskripsi* : ${iya.result.deskripsi}`

  Pin.sendMessage(from, hasil, text, {

quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break





case 'asupan':

  

if (!isRegister) return reply(mess.only.daftarB)

try {

data = await fetchJson(`https://api.itsmeikyxsec404.xyz/asupan?apikey=${meKey}`)

reply(mess.wait)

hasil = await getBuffer(data.result)

Pin.sendMessage(from, hasil, video, {

  caption: 'Nih gan', quoted: mek

})



} catch {

  reply(mess.ferr)

}

break



case 'weton':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return Pin.sendMessage(from, `Insira a data-mês-ano`, text, {

quoted: mek

  })

  if (!q.includes('-')) return  reply('Insira data-mês-ano corretamente\n* Exemplo: 09-09-2009*')

  pc = body.slice(7)

  teks1 = pc.split("-")[0];

  teks2 = pc.split("-")[1];

  teks3 = pc.split("-")[2];

  reply(mess.wait)

  try {

  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/weton/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {

method: 'get'

  })

  hasil = `${iya.result.weton}\n\nKarakteristik: ${iya.result.karakter}\n Pekerjaan : ${iya.result.pekerjaan}\n Rejeki : ${iya.result.rejeki}\nJodoh : ${iya.result.jodoh}`

reply(hasil)

break

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'gay':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return Pin.sendMessage(from, 'coloca um nome', text, {

quoted: mek

  })

  teks = body.slice(13)

  Pin.updatePresence(from, Presence.composing)

  data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)

  hasil = `*Gay encontrado*\n\n┣➢Alvo : *${args[0]}*\n\n┣➢PORCENTAGEM : *${data.persen}%*\n\n*${data.desc}*`

  reply(hasil)

  

  break



case 'seberapabucin':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return Pin.sendMessage(from, '*❌ * Insira o nome do alvo', text, {

quoted: mek

  })

  teks = body.slice(15)

  try {

  Pin.updatePresence(from, Presence.composing)

  data = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`)

  hasil = `*Bucin Detected*\n‣ Target : *${args[0]}*\n‣ Persentase : *${data.persen}%*\n*${data.desc}*`

  reply(hasil)

  

  } catch {

    reply(mess.ferr)

  }

  break



//--searching lirik

case 'lirik':

  if (args.length < 1) return reply('Insira uma consulta')

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  tels = body.slice(7)

  try {

  anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {

method: 'get'

  })

  reply(anu.result.lirik)

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'namae':

  if (args.length < 1) return reply('*❌* Insira o nome')

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)



teks = body.slice(7) 

try {

data = await fetchJson(`https://api.terhambar.com/ninja?nama=${teks}`)

hasil = `*Nama ninja kamu*\n*${data.result.ninja}*`

reply(hasil)



} catch {

  reply(mess.ferr)

}

break



case 'alay':

  if (args.length < 1) return reply('*❌* Digite o texto')

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)



teks = body.slice(6)

try {

data = await fetchJson(`https://api.terhambar.com/bpk?kata=${teks}`)

reply(data.text)



} catch {

  reply(mess.ferr)

}

break





case 'gplaystore':

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)



goo = body.slice(12)

try {

data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${viKey}&q=${goo}`, {

method: 'get'

  })



teks = '*Google Play Store*\n\n'

				for (let i of data.result) {

					teks += `        ────────────────\n\n‣ *Nome* : ${i.title}\n‣ *Desenvolvedor* : ${i.developer}\n‣ *Avaliação* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`

				}

				teks += `        ────────────────`

reply(teks.trim())



} catch {

  reply(mess.ferr)

}



break

case 'bijak':

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)



try {

data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/katabijak?apikey=${lolKey}`)

reply(data.result)



} catch {

  reply(mess.ferr)

}

break



case 'pantun':



Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)



try {

data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/pantun?apikey=${lolKey}`)

reply(data.result)



} catch {

  reply(mess.ferr)

}

break



case 'bucin':

case 'gombal':



  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  

  try {

  data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/bucin?apikey=${lolKey}`)

  reply(data.result)

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'charnime':

  teks = body.slice(10)

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('*❌* Digite o nome do personagem de anime')

  try {

  data = await fetchJson(`http://lolhuman.herokuapp.com/api/character?apikey=${lolKey}&query=${teks}`)

  buf = await getBuffer(data.result.image.large)

  hasil = `‣ *Nome* : ${data.result.name.full} *(${data.result.name.native})*\n‣ *Descrição* : ${data.result.description}`

  Pin.sendMessage(from, buf, image, {

caption: hasil, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'textgen':

  teks = body.slice(9)

  if (args.length < 1) return reply('*❌* Digite o texto')

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  

  try {

  data = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${teks}`)

  reply(data.result)

  

  } catch {

    reply(mess.ferr)

  }

  break





case 'kusonime':

  teks = body.slice(6)

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('*❌* Digite o nome do anime')

  try {

  data = await fetchJson(`https://st4rz.herokuapp.com/api/kuso?q=${teks}`)

  hasil = `‣ *Título* : ${data.title}\n‣ *Info* : ${data.info}\n‣ *Sinopse* : ${data.sinopsis}\n‣ *Link download* :\n${data.link_dl}`

  buf = await getBuffer(data.thumb)

  Pin.sendMessage(from, buf, image, {

quoted: mek, caption: hasil

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'igstalk':

yolo = body.slice(9)

if (!isRegister) return reply(mess.only.daftarB)



if (args.length < 1) return reply('*❌* Insira nome de usuário')

try {

hmm = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${yolo}?apikey=${lolKey}`)

reply(mess.wait)

buffer = await getBuffer(hmm.result.photo_profile)

hasil = `‣ *Username* : ${hmm.result.username}\n‣ *Fullname* : ${hmm.result.fullname}\n‣ *Pengikut* : ${hmm.result.followers}\n‣ *Mengikuti* : ${hmm.result.following}\n‣ *Bio* : ${hmm.result.bio}\n‣ *Link* : https://www.instagram.com/${hmm.result.username}\n‣ Follow : ${Ig}`

Pin.sendMessage(from, buffer, image, {

  quoted: mek, caption: hasil

})



} catch {

  reply(mess.ferr)

}

break





case 'apakah':

  if (args.length < 1) return reply('*❌* Insira uma pergunta')

  Pin.updatePresence(from, Presence.composing)

  random = apakah[Math.floor(Math.random() * (apakah.length))]

  hasil = `Apakah : *${body.slice(8)}*\n\nJawaban : *${random}*`

  reply(hasil)

  break



//bisakah

case 'bisakah':

  if (args.length < 1) return reply('*❌* Insira uma pergunta')

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  random = bisakah[Math.floor(Math.random() * (bisakah.length))]

  hasil = `Bisakah : *${body.slice(9)}*\n\nJawaban : *${random}*`

  reply(hasil)

  break



case 'rate':

  if (args.length < 1) return reply('*Introduzir uma pergunta')

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  random = `${Math.floor(Math.random() * 100)}`

  hasil = `Rating : *${body.slice(6)}*\n\nJawaban : *${random}%*`

  reply(hasil)

  break



case 'kapankah':

  if (args.length < 1) return reply('*❌* Introduzir uma pergunta')

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  random = kapankah[Math.floor(Math.random() * (kapankah.length))]

  random2 = `${Math.floor(Math.random() * 8)}`

  hasil = `Kapankah : *${body.slice(10)}*\n\nJawaban : *${random2} ${random}*`

  reply(hasil)

  break



case 'kapan':

  if (args.length < 1) return reply('*❌* Insira uma pergunta')

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  random = kapankah[Math.floor(Math.random() * (kapankah.length))]

  random2 = `${Math.floor(Math.random() * 8)}`

  hasil = `Kapankah : *${body.slice(7)}*\n\nJawaban : *${random2} ${random}*`

  reply(hasil)

  break



case 'setppgc':



if (!isGroup) return reply(mess.only.group)

if (!isRegister) return reply(mess.only.daftarB)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek

reply(mess.wait)

const media = await Pin.downloadAndSaveMediaMessage(encmedia)

await Pin.updateProfilePicture (from, media)

reply('*☉* Alterar a foto do perfil do grupo')

break



case 'triggered':

					case 'ger':

 if (!isRegister) return reply(mess.only.userB)

            var imgbb = require('imgbb-uploader')

           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

           reply(mess.wait)

         owgi = await Pin.downloadAndSaveMediaMessage(ger)

           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)

        teks = `${anu.display_url}`

         ranp = getRandom('.gif')

        rano = getRandom('.webp')

        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`

       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                                                fs.unlinkSync(ranp)

                                                if (err) return reply(mess.error.stick)

                                                nobg = fs.readFileSync(rano)

                                                Pin.sendMessage(from, nobg, sticker, {quoted: mek})

                                                fs.unlinkSync(rano)

                                        })

                                    

                                             } else {

                                                 reply('use uma foto!')

                                          }

                                             break





case 'tourl':

 if (!isRegister) return reply(mess.only.userB)

            var imgbb = require('imgbb-uploader')

           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

           reply(mess.wait)

         owgi = await Pin.downloadAndSaveMediaMessage(ger)

           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)

        teks = `${anu.display_url}`

reply(teks)

}

break



//---stiker wasted

case 'wasted':

  case 'was':

if (!isRegister) return reply(mess.only.userB)

var imgbb = require('imgbb-uploader')

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek

  reply(mess.wait)

  owgi = await Pin.downloadAndSaveMediaMessage(ger)

  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)

  teks = `${anu.display_url}`

  ranp = getRandom('.gif')

  rano = getRandom('.webp')

  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`

  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

fs.unlinkSync(ranp)

if (err) return reply(mess.error.stick)

nobg = fs.readFileSync(rano)

Pin.sendMessage(from, nobg, sticker, {

  quoted: mek

})

fs.unlinkSync(rano)

  })



} else {

  reply('Usar foto!')

}

break



case 'drawing':

if (!isRegister) return reply(mess.only.userB)

var imgbb = require('imgbb-uploader')

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek

  reply(mess.wait)

  owgi = await Pin.downloadAndSaveMediaMessage(ted)

  tels = body.slice(7)

  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)

  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)

 Pin.sendMessage(from, hehe, image, {quoted:mek})

} else {

  reply('CADE A FOTO O SEU ARRONBADO??')

}

break





case 'wanted':

if (!isRegister) return reply(mess.only.userB)

var imgbb = require('imgbb-uploader')

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek

  reply(mess.wait)

  owgi = await Pin.downloadAndSaveMediaMessage(ted)

  tels = body.slice(7)

  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)

  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)

 Pin.sendMessage(from, hehe, image, {quoted:mek})

} else {

  reply('CADE A FOTO O SEU ARRONBADO??')

}

break



case 'gtav':

if (!isRegister) return reply(mess.only.userB)

var imgbb = require('imgbb-uploader')

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek

  reply(mess.wait)

  owgi = await Pin.downloadAndSaveMediaMessage(ted)

  tels = body.slice(7)

  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)

  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)

 Pin.sendMessage(from, hehe, image, {quoted:mek})

} else {

  reply('CADE A FOTO O SEU ARRONBADO??')

}

break



//--list kodebahasa

case 'kodebahasa':

Pin.sendMessage(from, bahasa(prefix, sender), text, {

  quoted: mek

})

break


//--list shit teste

case 'shit':

Pin.sendMessage(from, shitp(prefix, sender), text, {

  quoted: mek

})

break



//--list kode negara

case 'kodenegara':

Pin.sendMessage(from, negara(prefix, sender), text, {

  quoted: mek

})

break



//--link wame

case 'wa.me':

case 'wame':

  Pin.updatePresence(from, Presence.composing)

  options = {

text: `link whatsapp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,

contextInfo: {

  mentionedJid: [sender]

}

  }

  Pin.sendMessage(from, options, text, {

quoted: mek

  })

  break



//---quoted fuck my life

case 'fml':

  if (!isRegister) return reply(mess.only.daftarB)

  

  try {

data = await fetchJson(`https://api.zeks.xyz/api/fml`)

if (!isRegister) return reply(mess.only.daftarB)

hasil = data.result

reply(hasil)



} catch {

  reply(mess.ferr)

}

break



//--translate semua bahasa

  case 'tl':

    if (!isRegister) return reply(mess.only.daftarB)

  

if (args.length < 1) return Pin.sendMessage(from, '*❌* Insira o texto / código do idioma', text, {

  quoted: mek

})

var pc = body.slice(4)

nomor = pc.split("/")[0];

pesan = pc.split("/")[1];

try {

data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${pesan}`)

if (!isRegister) return reply(mess.only.daftarB)

hasil = `*Traduzir* :\n${data.data.result}`

reply(hasil)



} catch {

  reply(mess.ferr)

}

break



//---membalikan kalimat

  case 'reverse':

    if (!isRegister) return reply(mess.only.daftarB)

  

if (args.length < 1) return Pin.sendMessage(from, '*❌* Digite o texto', text, {

  quoted: mek

})

var pc = body.slice(9)

try {

data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)

if (!isRegister) return reply(mess.only.daftarB)

hasil = data.result.kata

reply(hasil)



} catch {

  reply(mess.ferr)

}

break







//--fake reply

case 'fitnah':

if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)

var gh = body.slice(7)

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

var replace = gh.split("|")[0];

var target = gh.split("|")[1];

var bot = gh.split("|")[2];

Pin.sendMessage(from, `${bot}`, text, {

  quoted: {

key: {

  fromMe: false, participant: `${mentioned}`, ...(from ? {

remoteJid: from

  }: {})

}, message: {

  conversation: `${target}`

}}})

break



//--Kejujuran

case 'truth':

const ttrth = trut[Math.floor(Math.random() * trut.length)]

Pin.sendMessage(from, `‣ *TRUTH*\n${ttrth}`, text, {

  quoted: mek

})

break



//---Tantangan

  case 'dare':

const der = dare[Math.floor(Math.random() * dare.length)]

Pin.sendMessage(from, `‣ *DARE*\n${der}`, text, {

  quoted: mek

})

break





//--notifikasi grup

  case 'notif':



if (!isGroupAdmins) return reply(mess.only.admin)

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

if (!isGroup) return reply(mess.only.group)

teks = `Notif de @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`

group = await Pin.groupMetadata(from);

member = group['participants']

jids = [];

member.map(async adm => {

  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));

})

options = {

  text: teks,

  contextInfo: {

mentionedJid: jids

  },

  quoted: mek

}

await Pin.sendMessage(from, options, text)

break



//--jawaban BRANLy

  case 'brainly':

if (!isRegister) return reply(mess.only.daftarB)

  

if (args.length < 1) return Pin.sendMessage(from, '*❌* Insira uma pergunta', text, {

  quoted: mek

})

teks = body.slice(9)

try {

Pin.updatePresence(from, Presence.composing)

data = await fetchJson(`https://api.vhtear.com/branly?query=${teks}&apikey=${vKey}`)

hasil = data.result.data

reply(hasil)

await limitAdd(mess.ferr)

} catch {

  reply(mess.ferr)

}

break
 case 'shit':
					data = fs.readFileSync('./outros/shit.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {caption: 'aqui está o fdp:)', quoted: mek})
                 break



  //pencarian wiki

  case 'wiki':

    if (!isRegister) return reply(mess.only.daftarB)



if (args.length < 1) return reply('Insira uma consulta')

tels = body.slice(6)

try {

anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {

  method: 'get'

})

reply(anu.result)



} catch {

  reply(mess.ferr)

}

break





//--Goolge Image



case 'google':

  if (!isRegister) return reply(mess.only.daftarB)



  if (args.length < 1) return reply('digita alguma coisa ai')

  goo = body.slice(7)

  try {

  pint = await getBuffer(`http://lolhuman.herokuapp.com/api/gimage?apikey=${lolKey}&query=${goo}`, {

method: 'get'

  })

  Pin.updatePresence(from, Presence.composing)

  reply(mess.wait)

  Pin.sendMessage(from, pint, image, {

caption: '*Google Imagem*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'alay2':

  if (!isRegister) return reply(mess.only.userB)

  if (args.length < 1) return reply('*❌* Digite o texto')

  goo = body.slice(7)

  try { 

  pint = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=${lolKey}&text=${goo}`, {

method: 'get'

  })

  Pin.updatePresence(from, Presence.composing)

  hasil = pint.result

  Pin.sendMessage(from, hasil, text, {

quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//---Neonime search

case 'neonime':

if (!isRegister) return reply(mess.only.daftarB)



Pin.updatePresence(from, Presence.composing)

reply(mess.wait)

if (args.length < 1) return reply(`*❌* Insira um título de anime`)

teks = body.slice(9)

try {

data = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${teks}&apikey=${viKey}`, {

  method: 'get'

})

teks = '••••••••••••••••••••••\n'

for (let i of data.result) {

  teks += `‣ *Title* : ${i.title}\n‣ *link* : ${i.link}\n••••••••••••••••••••••\n`

}

reply(teks.trim())

if (data.message) return reply(`Maaf Info anime *${teks} tidak ditemukan`)



} catch {

  reply(mess.ferr)

}

break



//---Ganti nama grup

  case 'setname':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

let idgrup = `${from.split("@s.whatsapp.net")[0]}`;

Pin.groupUpdateSubject(idgrup, `${body.slice(9)}`)

Pin.sendMessage(from, '*☉* Renomeando o Grupo', text, {

  quoted: mek

})

break



//--ganti desk

  case 'setdesk':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

Pin.groupUpdateDescription(from, `${body.slice(9)}`)

Pin.sendMessage(from, '* ☉ * Altera a descrição do grupo', text, {

  quoted: mek

})

break







//--random meme

case 'meme':

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)



try {

  beh = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${viKey}`)

  pint = await getBuffer(beh.result)

  reply(mess.wait)

  Pin.sendMessage(from, pint, image, {

quoted: mek

  })

  

} catch {

  reply(mess.ferr)

}

  break
  
  
  
//-canal

case 'canal':

memein = await kagApi.memeindo()

buffer = await getBuffer(`https://ibb.co/jWwyfyX`)

client.sendMessage(from, buffer, image, {quoted: mek, caption: '*CRIADOR:* ANGELO\n*YOUTUBE:* https://youtube.com/channel/UCPtLWfe5t-46bvD0Iomr7LA\n\n*WPP:* wa.me/+556992482009\n\n\nEspero que tenham gostado do bot seus fadaputa️'})

break



//--tagme

case 'Marqueme @':

if (!isRegister) return reply(mess.only.daftarB)

const tagme = {

  text: `@${sender.split("@")[0]} É aquele`,

  contextInfo: {

mentionedJid: [sender]

  }

}

Pin.sendMessage(from, tagme, text)

break



case 'kbbi':

  Pin.updatePresence(from, Presence.composing)

  if (args.length < 1) return reply(`*❌* Entrada de texto \ nExemplo : ${prefix}kbbi manusia`)

  if (!isRegister) return reply(mess.only.daftarB)

  

  tels = body.slice(6)

  try {

  data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=BotWeA`)

  if (data.error) return reply(data.error)

  hasil = `KAMUS BESAR BAHASA INDONESIA\n\n${data.result}`

  reply(hasil)

  

  } catch {

    reply(mess.ferr)

  }

  break





  case 'chatprank':

Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)



if (args.length < 1) return reply(`*❌* Entrada de texto\nExemplo : ${prefix}conversa fiada p/abaixo de`)

tels = body.slice(11)

var teks1 = tels.split("/")[0];

var teks2 = tels.split("/")[1];

hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`

Pin.sendMessage(from, hasil, text, {

  quoted: mek

})

break



//--searching chord

case 'chord':

  if (args.length < 1) return reply('Insira uma consulta')

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  tels = body.slice(7)

  try {

  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${tKey}`, {

method: 'get'

  })

  reply(anu.result)

  

  } catch {

    reply(mess.ferr)

  }

  break



//--jadwaltv now

case 'jadwaltvnow':

  if (!isRegister) return reply(mess.only.daftarB)

    

  Pin.updatePresence(from, Presence.composing)

  reply(mess.wait)

  try {

  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {

method: 'get'

  })

  reply(anu.result.jadwalTV)

  

  } catch {

    reply(mess.ferr)

  }

  break



//--jadwaltv ch

case 'jadwaltv':

  if (!isRegister) return reply(mess.only.daftarB)

  

  ch = body.slice(10)

  if (args.length < 1) return reply('*❌* Insira um nome de canal')

  Pin.updatePresence(from, Presence.composing)

  reply(mess.wait)

  try {

  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarKey}`, {

method: 'get'

  })

  n = JSON.parse(JSON.stringify(anu.result));

  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`

  reply(hasil)

  

  } catch {

    reply(mess.ferr)

  }

  break



//--mini map

case 'mapa':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('*❌* Insira o nome da área')

  daerah = body.slice(5)

  try {

  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)

  reply(mess.wait)

  hasil = await getBuffer(data.gambar)

  Pin.sendMessage(from, hasil, image, {

quoted: mek, caption: `Hasil Dari *${daerah}*`

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--pencarian surah Al-Qur'an

case 'alquran':

  Pin.updatePresence(from, Presence.composing)

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('*❌* Digite o número sura 1-114')

  if (isNaN(args.length < 1)) return await reply('Use um número de surata')

  tels = body.slice(9)

  try {

  data = await fetchJson(`https://api.zeks.xyz/api/quran?no=${tels}&apikey=${viKey}`, {

method: 'get'

  })

  teks = `

  〘  *${data.surah}*  〙

  Adalah surah ke ${data.no} dalam Al-Qur'an dengan jumlah ayat (${data.jumlah_ayat} ayat)

  ──────────────────────



  `

  for (let i of data.ayat) {

teks += `*(${i.number})* ${i.text}\n*(${i.number})* ${i.translation_id}\n••••••••••••••••••••••••••••••••••••••••••••••\n`

  }

  reply(teks.trim())

  

  } catch {

    reply(mess.ferr)

  }

  break



//--Cerpen

case 'cerpen':

if (!isRegister) return reply(mess.only.daftarB)

Pin.updatePresence(from, Presence.composing)



try {

data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)

hasil = `*HISTÓRIA CURTA*\n‣ cerpen : *${data.result.title}*\n‣ cerpen : *${data.result.pengarang}}*\n${data.result.cerpen}`

reply(hasil)



} catch {

  reply(mess.ferr)

}

break



//---kontak pemilik bot

case 'owner':

  case 'creator':

Pin.sendMessage(from, {

  displayname: "Jeff", vcard: vcard

}, MessageType.contact, {

  quoted: mek

})

break





//---Random ayat Alquran

case 'ngaji':

  if (!isRegister) return reply(mess.only.daftarB)

  

  try {

  anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {

method: 'get'

  })

  quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`

  Pin.sendMessage(from, quran, text, {

quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--tafsir Alquran

case 'tafsir':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('Insira uma consulta')

  teks = body.slice(8)

  try {

  Pin.updatePresence(from, Presence.composing)

  data = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/tafsir-quran?query=${teks}&apiKey=${Mkey}`)

  hasil = `*${data.result.query}*\n\n${data.result.ayat}\n\n*Terjemahan* :\n${data.result.terjemahan_ayat}\n\n*Tafsir* : ${data.result.tafsir_jalalayn}`

  reply(hasil)

  

  } catch {

    reply(mess.ferr)

  }

  break



//---Jadwal solat

case 'sholat':

  loc = body.slice(7)

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('Insira o nome da área')

  try {

  anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${loc}&apiKey=${BarBarKey}`, {

method: 'get'

  })

  mbteks = `*SHALAT*\nDaerah : ${loc}\n┣➢ *Ashar* : ${anu.Ashar}\n┣➢ *Dhuha* : ${anu.Dhuha}\n┣➢ *Dzuhur* : ${anu.Dzuhur}\n┣➢ *Imsyak* : ${anu.Imsyak}\n┣➢ *Isya* : ${anu.Isya}\n┣➢ *Maghrib* : ${anu.Maghrib}\n┣➢ *Subuh* : ${anu.Subuh}`

  Pin.sendMessage(from, mbteks, text, {

quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--info cuaca

case 'cuaca':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('Digite o nome da área')

  tels = body.slice(7)

  try {

  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/cuaca?p=${tels}`, {

method: 'get'

  })

  hasil = `┣➢ *Tempat* : ${anu.hasil.Nama}\n┣➢ *Cuaca* : ${anu.hasil.Cuaca}\n┣➢ *Angin* : ${anu.hasil.Angin}\n┣➢ *Suhu* : ${anu.hasil.Suhu}\n┣➢ *Kelembapan* : ${anu.hasil.Kelembaban}\n┣➢ *Keterangan* : ${anu.hasil.Keterangan}`

  Pin.sendMessage(from, hasil, text, {

quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//--info gempa

//informasi gempa terkini

case 'infogempa':

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  try {

  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infogempa`, {

method: 'get'

  })

  hasil = `┣➢ *Kedalaman* : ${anu.kedalaman}\n┣➢ *Koordinat* : ${anu.koordinat}\n┣➢ *Lokasi* : ${anu.lokasi}\n┣➢ *Magnitude* : ${anu.magnitude}\n┣➢ *Potensi* : ${anu.potensi}\n┣➢ *Waktu* : ${anu.waktu}`

  buffer = await getBuffer(anu.map)

  Pin.sendMessage(from, buffer, image, {

caption: hasil, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



//---Buy limit

/*case 'buylimit':

  if (args.length < 1) return reply(`Berapa limit yang mau di beli? Pastikan saldo ATM cukup juga! \n\nCara cek saldo : ${prefix}Ceksaldo`)

  if (!isRegister) return reply(mess.only.daftarB)

  payout = body.slice(10)

  const koinPerlimit = hargalimit

  const total = koinPerlimit * payout

  if (checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)

  if (checkATMuser(sender) >= total) {

confirmATM(sender, total)

bayarLimit(sender, payout)

await reply(`〘  *NOTA PEMBAYARAN*  〙\n\n┣➢ *Pengirim* : Admin\n‣ *Penerima* : ${pushname}\n‣ *Nominal pembelian* : ${body.slice(10)} \n‣ *Harga limit* : ${koinPerlimit}/limit\n‣ *Sisa saldo* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran \n${createSerial(15)}`)

  }

  break



//--transfer

case 'transfer':

  if (!isGroup) return reply(mess.only.group)

  if (!isRegister) return reply(mess.only.daftarB)

  if (args.length < 1) return reply(`Silahkan ulangi dengan

*${prefix}Transfer Tag target|Jumlah transfer*`)

  if (!q.includes('|')) return  reply('Maaf format teks salah')

  const tujuan = q.substring(0, q.indexOf('|') - 1)

  const jumlah = q.substring(q.lastIndexOf('|') + 1)

  if (isNaN(jumlah)) return await reply('Jangan tambahan tanda apapun !')

  if (jumlah < 5000) return reply(`minimal transfer Rp.5000`)



  if (checkATMuser(sender) <= jumlah) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan transfer lagi nanti`)

  if (checkATMuser(sender) >= jumlah) {

const tujuantf = `${tujuan.replace("", '')}@s.whatsapp.net`

fee = 0.005 *  jumlah

hasiltf = jumlah - fee

addKoinUser(tujuantf, hasiltf)

confirmATM(sender, jumlah)

addKoinUser('6289690719275@s.whatsapp.net', fee)

await reply(`〘  *TRANSFER*  〙

  Pengiriman saldo telah sukses

  ‣ *Dari* : ${sender.split("@")[0]}

  ‣ *Ke* : ${tujuan}

  ‣ *Jumlah transfer* : Rp.${jumlah},-

  ‣ *Biaya admin* : Rp.${fee},-`)

  }

  

  break

*/

case 'itsme':

  if (!isRegister) return reply(mess.only.daftarB)

  try {

ppimg = await Pin.getProfilePicture(`${sender.split('@')[0]}@c.us`)

  } catch {

ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

  }

  teks = `SALVE O SEU ARRONBADO \nESSE E TEU INFO 👇👇 \n‣ *NOME* : ${pushname}

  ‣ *TEU NOME* : ${sender.split("@")[0]}

  ‣ *TEU LINK* : wa.me/${sender.split("@")[0]}`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

  

  break



case 'play':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('Digite o título da musica talvez esse comando n pegue')

  reply(mess.wait)

  play = body.slice(6)

  try {

  anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/playmp3?apikey=${apikey}&query=${body.slice(6)}`, {method: 'get'})

  if (anu.error) return reply(anu.error)

  infomp3 = `*Áudio encontrado*\n‣ *Título* : ${anu.result.title}\n‣ *Fonte* : ${anu.result.source}\n‣ *Tamanho* : ${anu.result.size}\n\n_Enviando arquivos aguarde se o áudio não aparecer faça o download aqui pega leve ai✋_\n‣ *Link* : ${anu.result.url_audio}

  `

  buffer = await getBuffer(anu.result.thumbnail)

  lagu = await getBuffer(anu.result.url_audio)

  Pin.sendMessage(from, buffer, image, {

quoted: mek, caption: infomp3

  })

  Pin.sendMessage(from, lagu, audio, {

mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break





case 'ytmp3':

  if (!isRegister) return reply(mess.only.daftarB)

  

  reply(mess.wait)

  play = body.slice(7)

  if(!isUrl(args[0]) && !args[0].includes('Tem fotos')) return reply('Formato de link incorreto, use link do youtube')

  try {

  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=${viKey}`)

  infomp3 = `*Audio Ditemukan!!!*\n‣ Judul : ${anu.result.title}\n‣ Source : ${anu.result.source}\n‣ Ukuran : ${anu.result.size}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.link}`

  buffer = await getBuffer(anu.result.thumb)

  lagu = await getBuffer(anu.result.link)

  Pin.sendMessage(from, buffer, image, {

quoted: mek, caption: infomp3

  })

  Pin.sendMessage(from, lagu, audio, {

mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'ytmp4':

  if (!isRegister) return reply(mess.only.daftarB)

  

  reply(mess.wait)

  play = body.slice(7)

  try {

  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=${viKey}`)

  if(!isUrl(args[0]) && !args[0].includes('Tem fotos')) return reply('Formato de link incorreto, use link do youtube')

  if (anu.error) return reply(anu.error)

  infomp3 = `*Video Ditemukan*\n‣ *Judul* : ${anu.result.title}\n‣ *Source* : ${anu.result.source}\n‣ *Ukuran* : ${anu.result.size}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.url_video}`

  buffer = await getBuffer(anu.result.thumbnail)

  lagu = await getBuffer(anu.result.url_video)

  Pin.sendMessage(from, buffer, image, {

quoted: mek, caption: infomp3

  })

  Pin.sendMessage(from, lagu, video, {

mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break





//---Youtube search

				case 'ytsearch':

					if (args.length < 1) return reply('Insira uma consulta')

					try {

					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarKey}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					teks = '=================\n'

					for (let i of anu.result) {

						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`

					}

					reply(teks.trim())

					

					} catch {

					  reply(mess.ferr)

					}

					break



//--download pinterest

case 'pin':

  if (!isRegister) return reply(mess.only.daftarB)

  

    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('Formato de link incorreto, use o link do pinterest')

  reply(mess.wait)

  play = body.slice(5)

  try {

  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)

  if (anu.error) return reply(anu.error)

  n = JSON.parse(JSON.stringify(anu.result.data));

  lagu = await getBuffer(anu.result)

  Pin.sendMessage(from, lagu, video, {

mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'fb':

  if (!isRegister) return reply(mess.only.daftarB)

  

  reply(mess.wait)

  if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply('Formato de link incorreto, use link do Facebook')

  play = body.slice(4)

  try {

  anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${play}&apiKey=${BarbarKey}`)

  if (anu.error) return reply(anu.error)

  infomp3 = `*Video Ditemukan*\n‣ *Judul* : ${anu.title}\n‣ *Publikasi* : ${anu.published}\n‣ *Ukuran* : ${anu.filesize}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result}`

  lagu = await getBuffer(anu.result)

  Pin.sendMessage(from, lagu, video, {

mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'ig':

  if (!isRegister) return reply(mess.only.daftarB)

  

  reply(mess.wait)

    if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Formato de link incorreto, use link do Instagram')

  play = body.slice(4)

  try {

  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolKey}&url=${play}`)

  lagu = await getBuffer(anu.result)

  Pin.sendMessage(from, lagu, video, {

mimetype: 'video/mp4', filename: `Imalpin.mp4`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break





//joox download

case 'joox':

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('Digite o título da música')

  tels = body.slice(6)

  try {

  data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {

method: 'get'

  })

  infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`

  buffer = await getBuffer(data.result.thumb)

  lagu = await getBuffer(data.result.mp3)

  Pin.sendMessage(from, buffer, image, {

quoted: mek, caption: infomp3

  })

  Pin.sendMessage(from, lagu, audio, {

mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'scdl':

    if (!isRegister) return reply(mess.only.daftarB)

  

  if (args.length < 1) return reply('Digite o link do soundcloud')

  tels = body.slice(6)

  try {

  data = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=${lolKey}&url=${tels}`, {

method: 'get'

  })

  lagu = await getBuffer(data.result)

  Pin.sendMessage(from, lagu, audio, {

mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



case 'tik':

  if (args.length < 1) return reply('*❌* Insira o link')

  if (!isRegister) return reply(mess.only.daftarB)

  

  if (!isUrl(args[0]) && !args[0].includes('vt.tiktok')) return reply(mess.error.Iv)

  try {

  anu = await fetchJson(`https://api.arugaz.my.id/api/media/tiktok?url=${args[0]}`, {

method: 'get'

  })

  if (anu.error) return reply(anu.error)

  teks = `*Nama* : ${anu.result.nameInfo}\n*Caption* : ${anu.result.textInfo}\n\n_Mengirim file, silakan tunggu_`

  thumb = await getBuffer(anu.result.image)

  Pin.sendMessage(from, thumb, image, {

quoted: mek, caption: teks

  })

  buffer = await getBuffer(anu.result.mp4direct)

  Pin.sendMessage(from, buffer, video, {

mimetype: 'video/mp4', filename: `${anu.nameInfo}.mp4`, quoted: mek

  })

  

  } catch {

    reply(mess.ferr)

  }

  break



/*



				case 'tiktok':

				  case 'tik':

					if (args.length < 1) return reply('Urlnya mana um?')

					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)

					reply(mess.wait)

					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					buffer = await getBuffer(anu.result)

					Pin.sendMessage(from, buffer, video, {quoted: mek})

					break

*/



//--block user

				case 'blocklist':

					teks = '☂︎𓇽𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐓𝐓 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎 𝐏𝐄𝐋𝐎 𝐁𝐎𝐓𓇽☂︎ :\n'

					for (let block of blocked) {

						teks += `~> @${block.split('@')[0]}\n`

					}

					teks += `Total : ${blocked.length}`

					Pin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})

					break



//--read text on image

				case 'ocr':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						reply(mess.wait)

						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})

							.then(teks => {

								reply(teks.trim())

								fs.unlinkSync(media)

							})

							.catch(err => {

								reply(err.message)

								fs.unlinkSync(media)

							})

					} else {

						reply('manda uma ft pra pega o txt dela brow ')

					}

					break



//---textpro

				case 'textpro':

					if (args.length < 1) {

						return reply('Escolha o tema, tio, 1 - 162')

					} else if (args[0].toLowerCase() === 'list') {

						teks = await fetchText('https://mhankbarbar.tech/api/textpro/listtheme')

						teks = teks.replace(/<br>/g, '\n')

						return reply(teks)

					} else if (args.length < 2) {

						return reply('O texto também, tio')

					}

					reply(mess.wait)

					anu = `https://mhankbarbar.tech/api/textpro?pack=${args[0]}&text=${body.slice(1+args[0].length+1)}&apiKey=${BarBarKey}`

					voss = await fetc(anu)	

					ftype = require('file-type')	

					vuss = await ftype.fromStream(voss.body)

					if (vuss !== undefined) {

						Pin.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })

					} else {

						reply('Ocorreu um erro, escolha outro tema')

					}

					break



//ephoto

				case 'ephoto':

					if (args.length < 1) {

						return reply('Escolha o tema, tio, 1 - 216')

					} else if (args[0].toLowerCase() === 'list') {

						teks = await fetchText('https://mhankbarbar.tech/api/ephoto/listtheme')

						teks = teks.replace(/<br>/g, '\n')

						return reply(teks)

					} else if (args.length < 2) {

						return reply('O texto também, tio')

					}

					reply(mess.wait)

					anu = `https://mhankbarbar.tech/api/ephoto?pack=${args[0]}&text=${body.slice(2+args[0].length+1)}&apiKey=${BarBarKey}`

					voss = await fetc(anu)

					ftype = require('file-type')

					vuss = await ftype.fromStream(voss.body)

					//console.log(vuss)

					if (vuss !== undefined) {

						Pin.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })

					} else {

						reply('Ocorreu um erro, escolha outro tema')

					}

					break



//--harta tahta

				case 'tahta':

					if (args.length < 1) return reply('O texto em')

					anu = `https://mhankbarbar.tech/api/htahta?text=${args.join(' ')}&apiKey=${BarBarKey}`

					voss = await fetc(anu)

					teks = body.slice(7)

					ftype = require('file-type')

					vuss = await ftype.fromStream(voss.body)

					if (vuss !== undefined) {

						Pin.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: `*Harta Tahta ${teks}*` })

					} else {

						reply('Há um erro')

					}

					break



//--stiker maker

				case 'stiker':

				case 'sticker':

				  case 's':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.input(media)

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								reply(mess.error.stick)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('kick-ass', 'BOT KICK')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)	

									fs.unlinkSync(ran)	

								})

								/*Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)*/

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						reply(mess.wait)

						await ffmpeg(`./${media}`)

							.inputFormat(media.split('.')[1])

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								tipe = media.endsWith('.mp4') ? 'video' : 'gif'

								reply(`❌ Falha, no momento da conversão ${tipe} de stiker`)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('kick-ass︎', 'BOT KICK')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)

									fs.unlinkSync(ran)

								})

								Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ranw = getRandom('.webp')

						ranp = getRandom('.png')

						reply(mess.wait)

						keyrmbg = 'Your-ApiKey'

						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {

							fs.unlinkSync(media)

							let buffer = Buffer.from(res.base64img, 'base64')

							fs.writeFileSync(ranp, buffer, (err) => {

								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')

							})

							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {

								fs.unlinkSync(ranp)

								if (err) return reply(mess.error.stick)

								exec(`webpmux -set exif ${addMetadata('alpin', 'pinbot')} ${ranw} -o ${ranw}`, async (error) => {

									if (error) return reply(mess.error.stick)

									Pin.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

									fs.unlinkSync(ranw)

								})

								//Pin.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

							})

						})

					} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.on('start', function (cmd) {

								console.log('Started :', cmd)

							})

							.on('error', function (err) {

								fs.unlinkSync(media)

								console.log('Error :', err)

							})

							.on('end', function () {

								console.log('Finish')

								fs.unlinkSync(media)

								Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(ran)

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else {

						reply(`Envie fotos com legendas ${prefix}sticker ou tag de imagem que foi enviado`)

					}

					break



//-- temp

			case 'gets':

			  

				var itsme = `0@s.whatsapp.net`

				var split = `${cr}`

				var selepbot = {

					contextInfo: {

						participant: itsme,

						quotedMessage: {

							extendedTextMessage: {

								text: split,

							}

						}

					}

				}

				namastc = body.slice(6)

				try {

				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)

				Pin.sendMessage(from, result, sticker, selepbot)

				} catch {

				  reply('Pacote não está registrado')

				}

				break

			

			

			  case 'getstik':

				var itsme = `0@s.whatsapp.net`

				var split = `${cr}`

				var selepbot = {

					contextInfo: {

						participant: itsme,

						quotedMessage: {

							extendedTextMessage: {

								text: split,

							}

						}

					}

				}

				namastc = body.slice(9)

				try {

				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)

				Pin.sendMessage(from, result, sticker, selepbot)

				} catch {

				  reply('Pacote não está registrado')

				}

				break

			

			

			

			case 'liststik':

				teks = '*Sticker list :*\n\n'

				for (let awokwkwk of setiker) {

					teks += `- ${awokwkwk}\n`

				}

				teks += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}getstik (nama pack)*\nuntuk mengambil stiker`

				Pin.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })

				break

			

			case 'totalusuario':

				teks = '*Total De gente usando o bot :*\n\n'

				for (let i of _registered) {

					teks += `[${id.toString()}]\`\`\` @${i.split('@')[0]}`

				}

				teks += `\n*Total : ${_registered.length}`

				Pin.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": _registered} })

				break



			case 'addsticker':

				if (!isQuotedSticker) return reply('Responder o adesivo')

				if (!isOwner) return reply(mess.only.ownerB)

				svst = body.slice(9)

				if (!svst) return reply('Qual é o nome do adesivo?')

				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

				delb = await Pin.downloadMediaMessage(boij)

				setiker.push(`${svst}`)

				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)

				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))

				Pin.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })

				break

          if (budy.includes(`Alpin`)) {

                const Alpin = fs.readFileSync('./alpinstiker/alpin');

                client.sendMessage(from, Dappa, MessageType.sticker, {quoted: mek})

                  }



		if (budy.includes(`alpin`)) {

                const Alpin = fs.readFileSync('./alpinstiker/Alpin');

                client.sendMessage(from, Dappa, MessageType.sticker, {quoted: mek})

                  }

			case 'addvn':

				if (!isQuotedAudio) return reply('Reply vnnya')

				if (!isOwner) return reply(mess.only.ownerB)

				svst = body.slice(7)

				if (!svst) return reply('Qual é o nome do áudio')

				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

				delb = await Pin.downloadMediaMessage(boij)

				audionye.push(`${svst}`)

				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)

				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))

				Pin.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })

				break



			case 'getvn':

				namastc = body.slice(7)

				try {

				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)

				Pin.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })

				} catch {

				  reply('Pacote não está registrado')

				}

				break



			case 'listvn':

			case 'vnlist':

				teks = '*List Vn:*\n\n'

				for (let awokwkwk of audionye) {

					teks += `- ${awokwkwk}\n`

				}

				teks += `\n*Total : ${audionye.length}*\nUse comandos\n*${prefix}getvn (nama pack)*\nuntuk pegar vn`

				Pin.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })

				break



			case 'addimg':

				if (!isQuotedImage) return reply('Responder a imagem')

				if (!isOwner) return reply(mess.only.ownerB)

				svst = body.slice(8)

				if (!svst) return reply('Qual é o nome da imagem')

				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

				delb = await Pin.downloadMediaMessage(boij)

				imagenye.push(`${svst}`)

				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)

				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))

				Pin.sendMessage(from, `Sucesso na adição de vídeo\nVerificar pelo caminho ${prefix}listimage`, MessageType.text, { quoted: mek })

				break



			case 'getimg':

				namastc = body.slice(8)

				try {

				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)

				Pin.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })

				} catch {

				  reply('Pacote não está registrado')

				}

				break

				

			case 'listimg':

				teks = '*Lista Imagem :*\n\n'

				for (let awokwkwk of imagenye) {

					teks += `- ${awokwkwk}\n`

				}

				teks += `\n*Total : ${imagenye.length}*\nUse comandos\n*${prefix}getimg (pacote de nomes)*\tirar uma foto`

				Pin.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })

				break



			case 'addvid':

			  if (!isOwner) return reply(mess.only.ownerB)

				if (!isQuotedVideo) return reply('Responder o vídeo')

				svst = body.slice(8)

				if (!svst) return reply('O nome do video')

				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

				delb = await Pin.downloadMediaMessage(boij)

				videonye.push(`${svst}`)

				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)

				fs.writeFileSync('./temp/vid.json', JSON.stringify(videonye))

				Pin.sendMessage(from, `Sucesso Adicionais Video\nCek dengan cara ${prefix}listvid`, MessageType.text, { quoted: mek })

				break



			case 'getvid':

				namastc = body.slice(8)

				try {

				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)

				Pin.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })

				} catch {

				  reply('Pacote não está registrado')

				}

				break



			case 'listvid':

				teks = '*LISTA VIDEO :*\n\n'

				for (let awokwkwk of videonye) {

					teks += `- ${awokwkwk}\n`

				}

				teks += `\n*Total : ${videonye.length}*\nUse comando\n*${prefix}getvid (pacotes de nome)*\nPra fazer um video`

				Pin.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })

				break





//----caklontong

  case 'caklontong':



anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vKey}`,

  {

method: 'get'

  })

if (!isRegister) return reply(mess.only.daftarB)

yup = anu.result.soal

jawab = anu.result.jawaban

alasam = anu.result.desk

setTimeout(() => {

  Pin.sendMessage(from, `‣ *Jawaban* : ${jawab}\n‣ *Keterangn* : ${alasam}`, text, {

quoted: mek

  }) // ur cods

}, 30000) // 1000 = 1s,

setTimeout(() => {

  Pin.sendMessage(from, '_10 detik lagi_', text) // ur cods

}, 20000) // 1000 = 1s,

setTimeout(() => {

  Pin.sendMessage(from, '_20 Detik lagi_…', text) // ur cods

}, 10000) // 1000 = 1s,

setTimeout(() => {

  Pin.sendMessage(from, text) // ur cods

}, 1000) // 1000 = 1s,

setTimeout(() => {



  Pin.sendMessage(from, yup, text, {

quoted: mek

  }) // ur cods

}, 0) // 1000 = 1s,

break



//--stiker to video

  case 'tovid':

Pin.updatePresence(from,

  Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

if (!isQuotedSticker) return reply('*❌* Responder o adesivo')

reply(mess.wait)

anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

anum = await Pin.downloadAndSaveMediaMessage(anumedia)

ran = getRandom('.webp')

exec(`ffmpeg -i ${anum} ${ran}`, (err) => {

  fs.unlinkSync(anum)

  if (err) return reply('Falha ao converter o adesivo em vídeo')

  buffer = fs.readFileSync(ran)

  Pin.sendMessage(from, buffer, video, {

quoted: mek, caption: 'Para que serve isso ...'

  })

  fs.unlinkSync(ran)

})

break



//--mp4 to mp3

  case 'tomp3':

Pin.updatePresence(from,

  Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

if (!isQuotedVideo) return reply('*❌* Responder vídeo')

reply(mess.wait)

mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

duh = await Pin.downloadAndSaveMediaMessage(mitri)

ran = getRandom('.mp4')

exec(`ffmpeg -i ${duh} ${ran}`, (err) => {

  fs.unlinkSync(duh)

  if (err) return reply('*❌* Falha ao converter vídeo para mp3')

  buffer = fs.readFileSync(ran)

  Pin.sendMessage(from, buffer, audio, {

mimetype: 'audio/mp4', quoted: mek

  })

  fs.unlinkSync(ran)

})

break



//---random fakta

case 'fakta':

fakta = body.slice(1)

if (!isRegister) return reply(mess.only.daftarB)

if (isLimit(sender)) return reply(ind.limitend(pushname))

const keh = fak[Math.floor(Math.random() * fak.length)]

Pin.sendMessage(from, 'Fakta : '+ keh, text, {

  quoted: mek

})

break



//--Tebak gambar

  case 'tebakgambar':



anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vKey}`, {

  method: 'get'

})

if (!isRegister) return reply(mess.only.daftarB)

buffer = await getBuffer(anu.result.soalImg)

jawab = anu.result.jawaban

setTimeout(() => {

  Pin.sendMessage(from, `*➸ Jawaban :* ${jawab}`, text, {

quoted: mek

  }) // ur cods

}, 30000) // 1000 = 1s,

setTimeout(() => {

  Pin.sendMessage(from, '_10 detik lagi_', text) // ur cods

}, 20000) // 1000 = 1s,

setTimeout(() => {

  Pin.sendMessage(from, '_20 Detik lagi_…', text) // ur cods

}, 10000) // 1000 = 1s,

setTimeout(() => {

  Pin.sendMessage(from, text) // ur cods

}, 1000) // 1000 = 1s,

setTimeout(() => {



  Pin.sendMessage(from, buffer, image, {

quoted: mek, caption: 'QUE HAYOO'

  }) // ur cods

}, 0) // 1000 = 1s,

break





//--google voice

				case 'tts':

					if (args.length < 1) return Pin.sendMessage(from, 'Onde está o código do idioma, tio?', text, {quoted: mek})

					const gtts = require('./lib/gtts')(args[0])

					if (args.length < 2) return Pin.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})

					dtt = body.slice(8)

					ranm = getRandom('.mp3')

					dtt.length > 600

					? reply('A maior parte do texto é tio')

					: gtts.save(ranm, dtt, function() {

						Pin.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

						fs.unlinkSync(ranm)

					})

					break



//-- Setting prefix

				case 'setprefix':

					if (args.length < 1) return

					if (!isOwner) return reply(mess.only.ownerB)

				  prefix = args[0]

					up.prefix = prefix

					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))

					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)

					break





case 'block':

  Pin.updatePresence(from, Presence.composing)

  if (!isGroup) return reply(mess.only.group)

  if (!isOwner) return reply(mess.only.ownerB)

  Pin.blockUser (`${body.slice(8)}@c.us`, "add")

  Pin.sendMessage(from, `Números de block, Pedido Recebido @556992482009 seu lindo`, text, {

quoted: mek

  })

  break



//membuka blokir

case 'unblock':

  if (!isGroup) return reply(mess.only.group)

  if (!isOwner) return reply(mess.only.ownerB)

  Pin.blockUser (`${body.slice(9)}@c.us`, "remove")

  Pin.sendMessage(from, `Desbloquear, Pedido Recebido`, text)

  break





//--Hilih maker

				case 'hilih':

					if (args.length < 1) return reply('Digite o texto')

					try {

					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})

					reply(anu.result)

					} catch {

					  reply(mess.ferr)

					}

					break



				case 'tiktokstalk':

					try {

						if (args.length < 1) return Pin.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})

						let { user, stats } = await tiktod.getUserProfileInfo(args[0])

						reply(mess.wait)

						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`

						buffer = await getBuffer(user.avatarLarger)

						Pin.sendMessage(from, buffer, image, {quoted: mek, caption: teks})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('Possível nome de usuário inválido')

					}

					break

				case 'nulis':

				case 'tulis':

					if (args.length < 1) return reply('O que você quer escrever??')

					teks = body.slice(7)

					reply(mess.wait)

					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					buff = await getBuffer(anu.result)

					Pin.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})

					break

				case 'url2img':

					tipelist = ['desktop','tablet','mobile']

					if (args.length < 1) return reply('Qual é o tipo hum?')

					if (!tipelist.includes(args[0])) return reply('Desktop | tablet | tipo de celular')

					if (args.length < 2) return reply('Onde está o url, hum?')

					if (!isUrl(args[1])) return reply(mess.error.Iv)

					reply(mess.wait)

					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarKey}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					buff = await getBuffer(anu.result)

					Pin.sendMessage(from, buff, image, {quoted: mek})

					break







				case 'ttp':

				if (!isRegister) return reply(mess.only.daftarB)

					if (args.length < 1) return reply('CADE O TEXTO MANO?')

					ranp = getRandom('.png')

					rano = getRandom('.webp')

					teks = body.slice(5).trim()

					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

						fs.unlinkSync(ranp)

						if (err) return reply(mess.error.stick)

						exec(`webpmux -set exif ${addMetadata('kick-ass', 'BOT kick')} ${rano} -o ${rano}`, async (error) => {

							if (error) return reply(mess.error.stick)

							Pin.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})

							fs.unlinkSync(rano)

						})

					})

					

					break



//---marcar member

				case 'marcar':

Pin.updatePresence(from, Presence.composing)

if (!isGroup) return reply(mess.only.group)

if (!isRegister) return reply(mess.only.daftarB)

if (!isGroupAdmins) return reply(mess.only.admin)

members_id = []

teks = (args.length > 1) ? body.slice(8).trim(): ''

teks += `  Total : ${groupMembers.length}\n`

for (let mem of groupMembers) {

  teks += `┃ @${mem.jid.split('@')[0]}\n`

  members_id.push(mem.jid)

}

mentions('〘  *Marcado* 〙\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────✪ ☂︎𓇽𝐊𝐈𝐂𝐊-𝐀𝐒𝐒𓇽☂︎ ✪────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)

break





//clear all chat

				case 'linpa chat do bot':

					if (!isOwner) return reply('ESSE COMANDO E SOMENTE PARA O KICK-ASS')

					anu = await Pin.chats.all()

					Pin.setMaxListeners(25)

					for (let _ of anu) {

						Pin.deleteChat(_.jid)

					}

					reply('Sucesso em deletar todo o chat :)')

					break

				case 'bc':

					if (!isOwner) return reply('se pode ussa esse comando n caraio, so o kick-ass')

					if (args.length < 1) return reply('CADE O TEXTO? KICK')

					anu = await Pin.chats.all()

					if (isMedia && !mek.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						buff = await Pin.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							Pin.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})

						}

						reply('Transmissão de sucesso')

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `*${body.slice(4)}*`)

						}

						reply('Transmissão de sucesso')

					}

					break



//--menaikan jabatan

      case 'promote':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

					if (mentioned.length > 1) {

						teks = 'Sucesso Promote\n'

						for (let _ of mentioned) {

							teks += `@${_.split('@')[0]}\n`

						}

						mentions(from, mentioned, true)

						Pin.groupRemove(from, mentioned)

					} else {

						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)

						Pin.groupMakeAdmin(from, mentioned)

					}

					break



  //ganti nama grup

  case 'setname':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

idgrup = `${from.split("@s.whatsapp.net")[0]}`;

Pin.groupUpdateSubject(idgrup, `${body.slice(9)}`)

Pin.sendMessage(from, '*☉*Renomeando o Grupo', text, {

  quoted: mek

})

break



  //ganti desk

  case 'setdesk':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

Pin.groupUpdateDescription(from, `${body.slice(9)}`)

Pin.sendMessage(from, '*☉* Alterar a descrição do grupo', text, {

  quoted: mek

})

break



//--menurunkan jabatan

				case 'demote':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

					if (mentioned.length > 1) {

						teks = 'Sucesso Demote\n'

						for (let _ of mentioned) {

							teks += `@${_.split('@')[0]}\n`

						}

						mentions(teks, mentioned, true)

						Pin.groupRemove(from, mentioned)

					} else {

						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)

						Pin.groupDemoteAdmin(from, mentioned)

					}

					break



//--menambah member

				case 'add':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('Insira o número alvo')

					if (args[0].startsWith('08')) return reply('Use o código do país mas')

					try {

						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`

						Pin.groupAdd(from, [num])

					} catch (e) {

						console.log('Error :', e)

						reply('Falha ao adicionar destino, talvez porque é privado')

					}

					break



//--mengeluarkan member

				case 'remover':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

					if (mentioned.length > 1) {

						teks = 'Pedidos recebidos, emitidos :\n'

						for (let _ of mentioned) {

							teks += `@${_.split('@')[0]}\n`

						}

						mentions(teks, mentioned, true)

						Pin.groupRemove(from, mentioned)

					} else {

						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)

						Pin.groupRemove(from, mentioned)

					}

					break



//--list admin grup

				case 'listadmins':

				  case 'listadmin':

				    case 'adminlist':

					if (!isGroup) return reply(mess.only.group)

					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`

					no = 0

					for (let admon of groupAdmins) {

						no += 1

						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`

					}

					mentions(teks, groupAdmins, true)

					break



//--ganti pp bot

case 'setppbot':

  Pin.updatePresence(from, Presence.composing)

  if (!isOwner) return reply(mess.only.ownerB)

  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek

  const cuk = await Pin.downloadAndSaveMediaMessage(botpp)

  await Pin.updateProfilePicture(botNumber, cuk)

  reply('Obrigado pelo novo perfil😗')

  break



//event

/*case 'event':

  if (!isGroup) return reply(mess.only.group)

  if (!isOwner) return reply(mess.only.ownerB)

  if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')

  if (Number(args[0]) === 1) {

if (isEventon) return reply('*SUDAH AKTIF* !!!')

event.push(from)

fs.writeFileSync('./datauser/event.json', JSON.stringify(event))

reply('*☉]* Mengaktifkan *EVENT* di group ini*')

  } else if (Number(args[0]) === 0) {

event.splice(from, 1)

fs.writeFileSync('./datauser/event.json', JSON.stringify(event))

reply('*☉* Menonaktifkan *EVENT* di group ini*')

  } else {

reply(ind.satukos())

  }

  break

*/

//--Mengambil link grup

    case 'linkgr':

    case 'linkgrupo':

        if (!isGroup) return reply(mess.only.group)

        if (!isGroupAdmins) return reply(mess.only.admin)

        if (!isBotGroupAdmins) return reply(mess.only.Badmin)

        linkgc = await Pin.groupInviteCode(from)

        reply('https://chat.whatsapp.com/'+linkgc)

                    break



//--Mengeluarkan bot

      case 'leave':

      if (!isGroup) return reply(mess.only.group)

      if (isGroupAdmins || isOwner) {

      Pin.groupLeave(from)

                    } else {

      reply(mess.only.admin)

                    }

                    break



//--Convert stiker to image

				case 'toimg':

					if (!isQuotedSticker) return reply('Responder o adesivo')

					if (!isRegister) return reply(mess.only.daftarB)

					reply(mess.wait)

					imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					medimg = await Pin.downloadAndSaveMediaMessage(imgmed)

					ran = getRandom('.png')

					exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {

						fs.unlinkSync(medimg)

						if (err) return reply('Gagal')

						buffer = fs.readFileSync(ran)

						Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ini ?'})

						fs.unlinkSync(ran)

					})

					break





//--arti mimpi

  case 'artimimpi':

aruga = body.slice(11)

if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply(`Mimpi apa ?\nContoh: ${prefix}artimimpi ular`)

try {

anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${aruga}`, {

  method: 'get'

})

reply(anu.result.artimimpi)



} catch {

  reply('Parece que o recurso está apresentando um erro')

}

break



//--Simsimi talk

				case 'simi':

					if (args.length < 1) return reply(`VAI TOMA NO CU😡 ${pushname}`)

					teks = body.slice(6)

					try { 

					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${xKey}`, {method: 'get'})

					if (anu.error) return reply('Simi ga tau kak')

					reply(anu.jawaban)

					} catch {

					  reply(mess.ferr)

					}

					break



case 'bot':

					if (args.length < 1) return reply(`Salve ${pushname}`)

					teks = body.slice(5)

					try { 

					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})

					if (anu.error) return reply('Simi ga tau kak')

					reply(anu.jawaban)

					} catch {

					  reply(mess.ferr)

					}

					break



//--Verifkasi

case 'verify':

case 'daftar':

  case 'register':

if (isRegister) return reply('tua conta ja ta verificada mano')

const namaUser = `${pushname}`

const umurUser = `${sender}`

const serialUser = createSerial(20)

veri = sender

if (isGroup) {

  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)

  hasil = `〘  *𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐎, 𝐒𝐎 𝐔𝐒𝐀 𝐎 𝐁𝐎𝐓* 〙

Código : *${serialUser}*

╔════════════════════

╠≽️ *nome* : *${namaUser}*

╠≽️ *Numero* : *${sender.split("@")[0]}*

╚════════════════════`

reply(hasil)

  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))

} else {

  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)

  hasil = `〘  *𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐎 𝐒𝐎 𝐔𝐒𝐀 𝐎 𝐁𝐎𝐓* 〙

Código : *${serialUser}*

╔════════════════════

╠≽️ *Nome* : *${namaUser}*

╠≽️ *Numero* : *${sender.split("@")[0]}*

╚════════════════════`

reply(hasil)

  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))

}

tm = `a verificação está completa, digite ${prefix}Menu para exibir a lista do menu`

reply(tm)

break



//--grup semua peserta

case 'closegc':

  Pin.updatePresence(from, Presence.composing)

  if (!isGroup) return reply(mess.only.group)

  if (!isGroupAdmins) return reply(mess.only.admin)

  if (!isBotGroupAdmins) return reply(mess.only.Badmin)

  var nomor = mek.participant

  const close = {

text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administrador* quem pode enviar mensagens`,

contextInfo: {

  mentionedJid: [nomor]

}

  }

  Pin.groupSettingChange (from, GroupSettingChange.messageSend, true);

  reply(close)

  break



//--grup hanya admin

case 'opengc':

  case 'bukagc':

Pin.updatePresence(from, Presence.composing)

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

open = {

  text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* pode enviar mensagens`,

  contextInfo: {

mentionedJid: [sender]

  }

}

Pin.groupSettingChange (from, GroupSettingChange.messageSend, false)

Pin.sendMessage(from, open, text, {

  quoted: mek

})

break



//---mengahapus pesan bot

case 'delete':

  case 'del':

if (!isGroup)return reply(mess.only.group)

if (!isRegister) return reply(mess.only.daftarB)

if (!isGroupAdmins)return reply(mess.only.admin)

try {

Pin.deleteMessage(from, {

  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true

})

} catch {

  reply('Só pode deletar mensagens minhas')

}

break



//--ganteng cekkkk

  case 'jeitoso':

if (args.length < 1) return reply('Insira o nome do alvo')

ganteng = body.slice(12)

const gan = ['10',

  '30',

  '20',

  '40',

  '50',

  '60',

  '70',

  '62',

  '74',

  '83',

  '97',

  '100',

  '29',

  '94',

  '75',

  '82',

  '41',

  '39']

const teng = gan[Math.floor(Math.random() * gan.length)]

Pin.sendMessage(from, 'Jeitoso : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, {

  quoted: mek

})

break



//--Cantik cekk

  case 'cantikcek':

if (args.length < 1) return reply('Insira o nome do alvo')

cantik = body.slice(12)

const can = ['10',

  '30',

  '20',

  '40',

  '50',

  '60',

  '70',

  '62',

  '74',

  '83',

  '97',

  '100',

  '29',

  '94',

  '75',

  '82',

  '41',

  '39']

const tik = can[Math.floor(Math.random() * can.length)]

Pin.sendMessage(from, 'Cheque bonito *'+cantik+'*\n\nResposta : '+ tik+'%', text, {

  quoted: mek

})

break


case 'antisticker':
            case 'antistiker':
                    if (!isGroup) return reply(mess.only.group)
				        	if (!isGroupAdmins) return reply(mess.only.admin)
                   
                    if (args[0] == 'on') {
                        var cek = antisticker.includes(chatId);
                        if(cek){
                            return aruga.reply(from, '*Detector de adesivos anti-spam * já está ativo neste grupo', id) //if number already exists on database
                        } else {
                            antisticker.push(chatId)
                            fs.writeFileSync('./lib/Helper/antisticker.json', JSON.stringify(antisticker))
                            aruga.reply(from, '*[Anti Sticker SPAM]* foi ativado\nCada membro do grupo cujo adesivo de spam for maior que 7 serão chutados pelo bot!', id)
                        }
                    } else if (args[0] == 'off') {
                        var cek = antilink.includes(chatId);
                        if(cek){
                            return aruga.reply(from, '*O detector de adesivos anti-spam * não está mais ativo neste grupo', id) //if number already exists on database
                        } else {
                            let nixx = antisticker.indexOf(chatId)
                            antisticker.splice(nixx, 1)
                            fs.writeFileSync('./lib/helper/antisticker.json', JSON.stringify(antisticker))
                            aruga.reply(from, '*[Anti Sticker SPAM]* foi desabilitado\n', id)
                        }
                    } else {
                        aruga.reply(from, `escolher on / off\n\n*[Anti Sticker SPAM]*\nCada membro do grupo que for um adesivo de spam será chutado por bot!`, id)
                    }
                    break




				case 'welcome':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (args.length < 1) return reply('Hmmmm')

					if (Number(args[0]) === 1) {

						if (isWelkom) return reply('Já ativo um')

						welkom.push(from)

						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))

						reply('Ativou com sucesso o recurso de boas-vindas neste grupo')

					} else if (Number(args[0]) === 0) {

						welkom.splice(from, 1)

						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))

						reply('Desativando com sucesso o recurso de boas-vindas neste grupo')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

                                      break

				case 'clone':

					if (!isGroup) return reply(mess.only.group)

					if (!isOwner) return reply(mess.only.ownerB)

					if (args.length < 1) return reply('cade o alvo')

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]

					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)

					try {

						pp = await Pin.getProfilePicture(id)

						buffer = await getBuffer(pp)

						Pin.updateProfilePicture(botNumber, buffer)

						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)

					} catch (e) {

						reply('Gagal om')

					}

					break

				case 'wait':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						reply(mess.wait)

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						media = await Pin.downloadMediaMessage(encmedia)

						await wait(media).then(res => {

							Pin.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})

						}).catch(err => {

							reply(err)

						})

					} else {

						reply('use uma foto')

					}

					break





				default:

				if (body.startsWith(`${prefix}${command}`)) {

  reply(`        ────────────────\nSalve *${pushname}* !!!\n𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐀𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎/𝐂𝐎𝐌𝐀𝐍𝐃𝐎 : *${prefix}${command}*\n\n𝐍𝐀𝐃𝐀 𝐃𝐄𝐍𝐓𝐑𝐎 𝐃𝐎 𝐌𝐄𝐍𝐔! 𝐂𝐇𝐀𝐌𝐀 𝐎 𝐁𝐎𝐓 𝐃𝐄 𝐍𝐎𝐕𝐎 *${prefix}Menu*\n\n        ────────────────`)

				}

					if (isGroup && isSimi && budy != undefined) {

						console.log(budy)

						muehe = await simih(budy)

						console.log(muehe)

						reply(muehe)

					} else {

						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))

					}

                           }

		} catch (e) {

			console.log('Error : %s', color(e, 'green'))

		}

	})

}

starts()

