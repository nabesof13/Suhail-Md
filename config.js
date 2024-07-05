const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kabul";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "994407246274" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQQ0dEbzlwcFROTGMzNGR6MENHdDQxVW02Mkx5VUJlL042L3E1MFd6Q0F3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwNzI0NjI3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkM1OEJFMkNENkZBREE2NjdGN0Y1MDY5OEI0MkNGODVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTgyNjI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDA3MjQ2Mjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOEFFMUE1Njc1Njg5QjdCRjA3RkU0MzJCNDczNTA3MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxODI2MzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXNjZWdBVUNRX1NBYjV4ZW5fU0FBUVwiLFxuICBcInBob25lSWRcIjogXCIwM2U3NDQxNy1jZWZjLTQ1NTMtODI0Yy03OTQwNmZkYmQ3MmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgODIsXG4gICAgICA3NSxcbiAgICAgIDMyLFxuICAgICAgMjA2LFxuICAgICAgMTM4LFxuICAgICAgMjUwLFxuICAgICAgMjMwLFxuICAgICAgMzcsXG4gICAgICAxOTUsXG4gICAgICA5OCxcbiAgICAgIDExOSxcbiAgICAgIDQ3LFxuICAgICAgMjM2LFxuICAgICAgNzgsXG4gICAgICAyMTIsXG4gICAgICAzLFxuICAgICAgNjgsXG4gICAgICA4NyxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA1NCxcbiAgICAgIDIsXG4gICAgICAyMzAsXG4gICAgICAyNDksXG4gICAgICAxODQsXG4gICAgICAxODEsXG4gICAgICAxNixcbiAgICAgIDU1LFxuICAgICAgMTM1LFxuICAgICAgMzMsXG4gICAgICA5LFxuICAgICAgMjksXG4gICAgICA4LFxuICAgICAgMTI3LFxuICAgICAgMTAwLFxuICAgICAgMTQ0LFxuICAgICAgMTQxLFxuICAgICAgMTczLFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQajZsdjBGRU5yT243UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRwcWRhNjJJYTZzMHlod1I5T3JhSHN6QkR0MFdyekJsOXgxNVZER2VkaU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3lsbGEzQUdQU1FJVFhmMXIwbGUyazlzaHVWRmc0bjZqNnJTbXhCb0xTamlpcWErd0FtdmZpSVZMWkpsQ3lQSWVLa3RmWmI4aHN1VXRwdXpPVmJNQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNFRpbTFwTkJQZjRZRkM2Vm04QXRNMU9QaStPWTY5NUkxd2k2akFVdzZ1QVBnVVBNbDNCWXVnK2U4RjhMZzZsQktxbTRVYlRUQ2RCUEpPR21FYWNOakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDcyNDYyNzQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA3NTIwNzQ4MTc5NzAxOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+YrfCfp5Dwn6SU8J+kk8as04fQhCDGncabxoHQhManxqDGkfCfp6Dwn6Sv8J+TmvCfmLFcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwNzI0NjI3NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4MjYyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURxRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHFGLmpzb24iOiAie1wia2V5RGF0YVwiOlwibGs1dGpoTWQwOXNGSDVucElyQUpCOWI0RkdnVDg4TEJIOHBUWW5iSGJOdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjA0Njk3NDY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MTg3MTcyODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
