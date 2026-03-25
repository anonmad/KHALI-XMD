const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EXPERT-MD%>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUd1eksrUkNSUEgvYS9RcWEwZE9vWVRYNzJvRnFXcW5POEhsL0xzaU9FTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDVNcmJxRUtaMkcra2FRWGJXYm1nUkJmK3I1Q2Fzemh4WVBzYldUZXd5VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTFJLTlVXNDhuak9jNEMySkJFSzc2NVoxK1RIVEdyTGNnYlQrcWwzSWxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDOE9JSEJsK2c5Q0VEQ1ZVU1R2L2VkckwxMDByUGZ4bStNUlJBeXFMSzJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNWDI5a0pyZ1FrNjJTS3A5cHc0TWxCblE0ZUJQVE4yVGx4WGFoYnZ5R0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9vR2s1RHhDSEdXa3JoZTh0OXAyR0NwS3JmbTNZRGxUZnhYTVNpalJ4bWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJBT3JiSllFeXo1aWRKVTJnaWpCWnJDcHhuZm45dG5iaXlHMnhOejdXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmExVG14c1FObkNHYWFmSEJ2cStXR3FTTk9ZajVNOW5pRTNiSjdTQ0d4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDWjRBck5tWnB2dTBFTEUxUng5VGdhd3Y1bXplTmdQM0I0UWxvWXpubUd0TlJvSE5BWGVkVkRrbWp2OFVkUzEwL0R5MmZrN1NFZWdyekI3QzRzZmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6InF6cDRYdHY3dFVwYUNTTzVRY2s2VWpWYnUrZnQzY2xYUXBESjUxMU91SmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjE5NjE1MDY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RTkxQ0Y5NDNDMEFEQjU5NEFBRjBBM0MyRjczMDM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQ0ODAwNzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxOTYxNTA2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUIzRDk3RkZBQzI0MzU3MjQzQzNFQzg3OThEQThGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0NDgwMDc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2MTk2MTUwNjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVEOTkzM0NGQ0NEMDM4REU5NkZBMzI3RjhCOERERDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDQ4MDA3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjE5NjE1MDY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RERFOTk0QUM4RTc3MEM1M0ZEOUZGQjA1MzRGOUVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQ0ODAwNzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxOTYxNTA2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTlFOTZGNTZFMDQ4QUFERjE1MzMzMTI3NUY2OTIyQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0NDgwMTExfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2MTk2MTUwNjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU2MjM4RDg3RDM5NUMzODA0QURCQTQxNkI5QTQ5RjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDQ4MDExM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNkhEYVAzMVlTSm1jeHBlVUQzY0xyUSIsInBob25lSWQiOiIyNjQwYmQ2NS05NDNjLTRiMDctOGU4ZS03YmYyZDkwZTg1YzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGd6c2FoN3AzMkhIcUFXTjArZk5pTEFsSG84PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJleHBnUEFYY01zYXVoVTlQQ2JQSlJpOTQ1dGs9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcWI2N1lHRUxmVmtjNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3VlQ3K0UxRXJBM1Q3UzJIdTRQSlNZdlErSXZTaGpKRzI1d2liMWdvL3lRPSIsImFjY291bnRTaWduYXR1cmUiOiJTd1pYTHhyYkpwc2I3aUdGQjVESm5sQXkwZytnT2NaeCtSbGxHYnRhMDNiQWIrOXVocUU5dnhQa1dXeFFOZ3Z3VTh4MUNTR2VhN1lBSWhKT2xHZUlBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicHFtTkNiR0JkRHFiU1BmZkUrUVcvUzNJVDYvV05HUTdTVzl2L0tFNU1CR1YvY2VRc2lYZEViM3NQcGQrNldqV2hXZGJaN1lMNlVBRmJ1ckxtVlJKaGc9PSJ9LCJtZSI6eyJpZCI6IjI1NTYxOTYxNTA2NTo0MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCK8J2QmvCdkKXwnZCiLfCdkKjwnZCSLvCdkJ/wnZCo8J2QrvCdkKfwnZCdMCIsImxpZCI6IjI2ODMxMTUyMjc0NjQ4OTo0MkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjE5NjE1MDY1OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUxVSsvaE5SS3dOMCswdGg3dUR5VW1MMFBpTDBvWXlSdHVjSW05WUtQOGsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQWdTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NDQ4MDA3MSwibGFzdFByb3BIYXNoIjoiM21sMWpTIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOc1MifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://res.cloudinary.com/dzfc5yopz/image/upload/file_00000000d82c722faaf51d22b7f83ade_l03mq3.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐊𝐀𝐋𝐈-𝐌𝐃𝟏",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝐊𝐀𝐋𝐈-𝐌𝐃𝟏",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "255619615065",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "KHALI",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://res.cloudinary.com/dzfc5yopz/image/upload/file_00000000d82c722faaf51d22b7f83ade_l03mq3.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'ᗩᗰ *𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*❤️‍🔥",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "255619615065",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
