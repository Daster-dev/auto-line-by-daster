const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

const {prefix, set_channel, set_line, resetc, previewc} = require('./config');

const token = OTQyMzMxOTI2NTY2NTY3OTM2.Ygi8_g.m-316VZWwT2BqYimHpCMIphfI1w
process.env.token;

//process.env.token


var _0x9fad=["\x6D\x65\x73\x73\x61\x67\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x41\x44\x4D\x49\x4E\x49\x53\x54\x52\x41\x54\x4F\x52","\x68\x61\x73\x50\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E","\x6D\x65\x6D\x62\x65\x72","\u0644\u0627\x20\u062A\u0645\u062A\u0644\u0643\x20\u0627\u0644\u0628\u0631\u0645\u0634\u0646\x20\u0627\u0644\u0645\u0637\u0644\u0648\u0628","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\u274C","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x66\x69\x72\x73\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\u0645\u0646\u0634\u0646\x20\u0627\u0644\u0631\u0648\u0645","\x6C\x69\x6E\x65\x5F","\x69\x64","\x67\x75\x69\x6C\x64","","\x73\x65\x74","\u062A\u0640\u0645\x20\u062A\u0639\u0640\u064A\u0646\x20","\x20\u0643\u0640\x20\u0631\u0648\u0645\x20\u062E\u0637\x20\u062A\u0644\u0642\u0627\u0626\u064A","\u2705","\x6F\x6E","\x20","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x73\x70\x6C\x69\x74","\u0644\u0627\u0632\u0645\x20\u062A\u062D\u0637\x20\u0631\u0627\u0628\u0637\x20\u0627\u0644\u062E\u0637","\x6C\x69\x6E\x65\x73\x5F","\x73\x65\x74\x49\x6D\x61\x67\x65","\u062A\u0645\x20\u062A\u0639\u064A\u0646\x20\u0627\u0644\u062E\u0637\x20\u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A","\x66\x65\x74\x63\x68","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x30","\x54\x68\x65\x20\x6C\x69\x6E\x65\x20\x77\x6F\x72\x6B\x20\x6F\x6E\x6C\x79\x20\x6F\x6E\x20\x3C\x23","\x3E\x0D\x0A\x09\x0D\x0A\x09\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x54\x68\x65\x20\x6C\x69\x6E\x65\x20\x69\x6D\x61\x67\x65\x20\x69\x73\x20","\x64\x65\x6C\x65\x74\x65","\u062A\u0645\x20\u0627\u0639\u0627\u062F\u0629\x20\u062A\u0639\u064A\u0646\x20\u0627\u0644\u062E\u0637\x20\u0648\x20\u0627\u0644\u0631\u0648\u0645"];client[_0x9fad[24]](_0x9fad[0],async (_0x5884x1)=>{if(_0x5884x1[_0x9fad[2]][_0x9fad[1]](prefix+ set_channel)){if(!_0x5884x1[_0x9fad[5]][_0x9fad[4]](_0x9fad[3])){return msg[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[8]}`)[_0x9fad[7]](`${_0x9fad[6]}`))};var _0x5884x2=_0x5884x1[_0x9fad[14]][_0x9fad[13]][_0x9fad[12]]();if(!_0x5884x2){return _0x5884x1[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[8]}`)[_0x9fad[7]](`${_0x9fad[15]}`))};db[_0x9fad[20]](`${_0x9fad[16]}${_0x5884x1[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`,_0x5884x2[_0x9fad[17]]);_0x5884x1[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[23]}`)[_0x9fad[7]](`${_0x9fad[21]}${_0x5884x2}${_0x9fad[22]}`))}});client[_0x9fad[24]](_0x9fad[0],async (_0x5884x1)=>{if(_0x5884x1[_0x9fad[2]][_0x9fad[1]](prefix+ set_line)){if(!_0x5884x1[_0x9fad[5]][_0x9fad[4]](_0x9fad[3])){return msg[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[8]}`)[_0x9fad[7]](`${_0x9fad[6]}`))};var _0x5884x3=_0x5884x1[_0x9fad[2]][_0x9fad[28]](_0x9fad[25])[_0x9fad[27]](1)[_0x9fad[26]](_0x9fad[25]);if(!_0x5884x3){return _0x5884x1[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[8]}`)[_0x9fad[7]](`${_0x9fad[29]}`))};db[_0x9fad[20]](`${_0x9fad[30]}${_0x5884x1[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`,_0x5884x3);_0x5884x1[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[23]}`)[_0x9fad[7]](`${_0x9fad[32]}`)[_0x9fad[31]](_0x5884x3))}});client[_0x9fad[24]](_0x9fad[0],async (_0x5884x1)=>{var _0x5884x4=db[_0x9fad[33]](`${_0x9fad[16]}${_0x5884x1[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`);var _0x5884x5=db[_0x9fad[33]](`${_0x9fad[30]}${_0x5884x1[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`);if(_0x5884x1[_0x9fad[35]][_0x9fad[34]]){return};if(_0x5884x1[_0x9fad[11]][_0x9fad[17]]!= _0x5884x4){return};if(_0x5884x1[_0x9fad[35]][_0x9fad[10]]){_0x5884x1[_0x9fad[11]][_0x9fad[10]]({files:[`${_0x9fad[19]}${_0x5884x5}${_0x9fad[19]}`]})}});client[_0x9fad[24]](_0x9fad[0],async (_0x5884x6)=>{if(_0x5884x6[_0x9fad[2]]=== prefix+ previewc){let _0x5884x3=db[_0x9fad[33]](`${_0x9fad[30]}${_0x5884x6[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`);let _0x5884x7=db[_0x9fad[33]](`${_0x9fad[16]}${_0x5884x6[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`);if(_0x5884x3== null){_0x5884x3= _0x9fad[19]};if(_0x5884x7== null){_0x5884x7= _0x9fad[36]};let _0x5884x8= new Discord.MessageEmbed()[_0x9fad[7]](`${_0x9fad[37]}${_0x5884x7}${_0x9fad[38]}`)[_0x9fad[31]](_0x5884x3|| _0x9fad[19]);_0x5884x6[_0x9fad[11]][_0x9fad[10]](_0x5884x8)}});client[_0x9fad[24]](_0x9fad[0],async (_0x5884x6)=>{if(_0x5884x6[_0x9fad[2]][_0x9fad[1]](prefix+ resetc)){if(!_0x5884x6[_0x9fad[5]][_0x9fad[4]](_0x9fad[3])){return _0x5884x6[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[8]}`)[_0x9fad[7]](`${_0x9fad[6]}`))};db[_0x9fad[39]](`${_0x9fad[30]}${_0x5884x6[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`);db[_0x9fad[39]](`${_0x9fad[16]}${_0x5884x6[_0x9fad[18]][_0x9fad[17]]}${_0x9fad[19]}`);_0x5884x6[_0x9fad[11]][_0x9fad[10]]( new Discord.MessageEmbed()[_0x9fad[9]](`${_0x9fad[23]}`)[_0x9fad[7]](`${_0x9fad[40]}`))}})

client.on('message', async msg =>{
	if(msg.content.startsWith(prefix + "help")){
	msg.author.send(`اذا تريد صنع مثل هذا البوت 
	https://github.com/Daster-dev/auto-line-by-daster/`)
	}
})

client.on('message', async msg =>{
	if(msg.content.startsWith(prefix + "help")){
		let embed = new Discord.MessageEmbed()
		.addField(`لتعين روم الخط التلقائي`, `${prefix}${set_channel}`)
		.addField(`لتعين الخط التلقائي`, `${prefix}${set_line}`)
		.addField(`لاعادة تعين كل المعلومات`, `${prefix}${resetc}`)
		.addField(`لاضهار نضرة اولية للمعلومات`, `${prefix}${previewc}`)
		msg.channel.send(embed)
	}
})

client.login(token);
