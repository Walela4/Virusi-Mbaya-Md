const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "virusimbaya@gmail.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.devs = "260979754055,260979754055,260979754055,260979754055,260979754055,260979754055";
global.sudo = process.env.SUDO || "260979754055";
global.owner = process.env.OWNER_NUMBER || "260979754055";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "260979754055";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "260979754055";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://virusi-2615bdac6a00.herokuapp.com/pair";

global.SESSION_ID =Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxLbEJMVSthODBJeWtRMmNNa0V4QlRvb0x4QlZHaStzcGszUmJtcnlGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0llUEZkUXMxRis1SUtEOUFzc3c5UC9OSi9KUlJWQ2FjaFgvUFAwV1luaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRXVZZ0t3RU9LUTNVRWtDd09kMTgrbFB5Y1VGQ0lHNjIxNW1yT1I1WDJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQWkxT1dadG9xeTQ1ZlNEekZuOWdPQnY4dkhYZXJmaWJLcG1rZ0FaZERRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBNEQ3UzVhdEpDNWxHZTFCVUphTWpDS1JRaWdFbEZOM3VNSXQzN2lpRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJSEJkU05sTUtqZDNxblBwT1RLcjJ0YlBZeFFsem4zUlJMUURHdlZtU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU83TW9TS2xHYytuRHNDL3pvUUpwOEEremZyK1dwQ1RJQlhwOUpkUGEzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGd6cllGemFGQjdlSGJITFYvWlFQaGd4bG9wbnFXR1p4em9yKys3Y0ZWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlRZ01uTU9BV3B2WXBwL3hybmdUMGd2ZHl0RmVtVkQvUXh4emliVk9Xd0tlWTBhTUR6SXl5VTR1LzhzdkhkOUxIQTlsbmRzRmdvSjVlek9zT1oyMkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJHNEkwYVpQZ0tyMStCeG41bTJJclZRM3hQMkVKV3ZNWFJpakY5YnhUWjNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5TU82dmVOV1FqMnZiXzdVZzR3bXJBIiwicGhvbmVJZCI6IjUxYjhhZGFmLTBlMTEtNDkyZS1hZDIxLTc5MjA4NjMwNjU0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQU01TzFEREZoU0NPRHlkd2RyeXJJNlJYSFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdxU09rTnhzcHFxa1ZXK1V1YjdiYzRlTEZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNSREsxUlFSIiwibWUiOnsiaWQiOiIyNjA5Nzk3NTQwNTU6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV2FsZWxhXzA0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLeTYrWWNIRUtIbjViSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaREg0TE9WVm1aVE5XZTR3b3VTd25TTnpXOWo3TFp0SHFBUnlWaEdURWtBPSIsImFjY291bnRTaWduYXR1cmUiOiJNVGNjcXI3ZkJJKzMyODdKQVlIMktwd1N4QytERUVZbjc4YStEd1o3cnl5YTA3ZmdPUUJhOGxPVFlGemVSYmJxVWlCM2lKSTY4R21wMUlWOFlaZENDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGZSRHRHWkdYdUZHYmtySU9rc1JQcTRTK2ppRE10Kzhia3NvdEd5R2RPTzg2M3czZVcwK0ZpalB1N0F2dE5WWDd4QThRSGxWNlVYMUtYcmpIY2J5Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5Nzk3NTQwNTU6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1F4K0N6bFZabVV6Vm51TUtMa3NKMGpjMXZZK3kyYlI2Z0VjbFlSa3hKQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzEzODM1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNHgifQ==
  process.env.SESSION_ID ||Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxLbEJMVSthODBJeWtRMmNNa0V4QlRvb0x4QlZHaStzcGszUmJtcnlGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0llUEZkUXMxRis1SUtEOUFzc3c5UC9OSi9KUlJWQ2FjaFgvUFAwV1luaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRXVZZ0t3RU9LUTNVRWtDd09kMTgrbFB5Y1VGQ0lHNjIxNW1yT1I1WDJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQWkxT1dadG9xeTQ1ZlNEekZuOWdPQnY4dkhYZXJmaWJLcG1rZ0FaZERRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBNEQ3UzVhdEpDNWxHZTFCVUphTWpDS1JRaWdFbEZOM3VNSXQzN2lpRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJSEJkU05sTUtqZDNxblBwT1RLcjJ0YlBZeFFsem4zUlJMUURHdlZtU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU83TW9TS2xHYytuRHNDL3pvUUpwOEEremZyK1dwQ1RJQlhwOUpkUGEzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGd6cllGemFGQjdlSGJITFYvWlFQaGd4bG9wbnFXR1p4em9yKys3Y0ZWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlRZ01uTU9BV3B2WXBwL3hybmdUMGd2ZHl0RmVtVkQvUXh4emliVk9Xd0tlWTBhTUR6SXl5VTR1LzhzdkhkOUxIQTlsbmRzRmdvSjVlek9zT1oyMkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJHNEkwYVpQZ0tyMStCeG41bTJJclZRM3hQMkVKV3ZNWFJpakY5YnhUWjNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5TU82dmVOV1FqMnZiXzdVZzR3bXJBIiwicGhvbmVJZCI6IjUxYjhhZGFmLTBlMTEtNDkyZS1hZDIxLTc5MjA4NjMwNjU0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQU01TzFEREZoU0NPRHlkd2RyeXJJNlJYSFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdxU09rTnhzcHFxa1ZXK1V1YjdiYzRlTEZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNSREsxUlFSIiwibWUiOnsiaWQiOiIyNjA5Nzk3NTQwNTU6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV2FsZWxhXzA0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLeTYrWWNIRUtIbjViSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaREg0TE9WVm1aVE5XZTR3b3VTd25TTnpXOWo3TFp0SHFBUnlWaEdURWtBPSIsImFjY291bnRTaWduYXR1cmUiOiJNVGNjcXI3ZkJJKzMyODdKQVlIMktwd1N4QytERUVZbjc4YStEd1o3cnl5YTA3ZmdPUUJhOGxPVFlGemVSYmJxVWlCM2lKSTY4R21wMUlWOFlaZENDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGZSRHRHWkdYdUZHYmtySU9rc1JQcTRTK2ppRE10Kzhia3NvdEd5R2RPTzg2M3czZVcwK0ZpalB1N0F2dE5WWDd4QThRSGxWNlVYMUtYcmpIY2J5Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5Nzk3NTQwNTU6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1F4K0N6bFZabVV6Vm51TUtMa3NKMGpjMXZZK3kyYlI2Z0VjbFlSa3hKQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzEzODM1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNHgifQ==
  ""
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗🦠",
  author: process.env.PACK_AUTHER || "Virusi-Md",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "Vurusian",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
