//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9Tb3FRa3FCRG9HUG9UblNxWWRCZWJpOElKTXVuYWswYXJyV2xoWlpuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGZkb1pXMFJZZmY5bjVWc0RqVFl1K2pNL3lncjZSZ0VhRmF3aTZJNTF6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUGs0bDlkUE5DcWZZNGlERVllSGZOWXB4VTZuS1BDVnIxdXNSWTg1bVh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcU9tZ2ZVMENUWldwamtxMDJRWlFTekdRRyt6SGVyRk0wVkgwak5yY2lnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IR2M2T1ZzMTAyelBod1p6QzQrLzREUTBESGk4RmJiaEhLeFU1N3JvbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpiRm81REtGRHhVWHYzNkMzOWFrbnFwdXo1clJIQjZ5TkkrOUpqUGU3bDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEIrU3RHSVlwMkFUWU9BdVRzMHl6dm5qOFhwcjV2OGVLcHpyQ0kxcVNXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBZUmF1cTVHSzJDOFZ1QnBReDYzTGlhSTVTeHlROVI4VjREckQ5V0p3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCVDd4NTNDanMzdEMvWXFJMFRIalIzQlovVVFuWnNJc2I4bTcvSDMyWkNibDdlZkYrWlhFYWIrMElwVVA3VHRDOTBYYkkycE9BdVVKZW9SQW8xbmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IllSVldJUzNLWFROODBjVUJJbVUxdzZkRi9WYUtreFROMnFwRk55c0c1WXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVQOGRkRG1nUldtOVdGZE5TaWNGdWciLCJwaG9uZUlkIjoiNTc0MmM4NzktMzFjOS00YjRhLWFiMWQtYjliODc4Y2M5NDg3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhJZEw4anBPbUo4RURjOTVHNzZPSnVUMnVhWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR2dvTDdQMmh0bGhOVmdweExzRTQ1eUVpd1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVEyVFAzWjgiLCJtZSI6eyJpZCI6Ijk0NzUyOTYyNDk4OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzY4NDIxNjMxNTEwMzE6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMSzhQc0ZFSytOcWNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxCZlhkK0MyOWQ4akZqOFArTDNYZHRyOUpSUmJiS3FCcGRCWnZ4RndYeTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVKN3RKKzZLUGQzaURxd1BMZGZmSWhLS0lwUEZCUC9tSGpjRzVPZzZ6eDNNYllOcXlXM1BsVnBKRlNTOEdka3liWERlMkxSVzlPaFRmbk5RNzZWMER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwdHhTNmNQWjg5RmNwblJ0SjJtVWo0VzZWKzMvMGIzYzN6ZG01eFpITWxLTWUzbTc5UTZMT1J2ZlowR09ON28ySjVrVmNjOUZQQjV3c2JvaFNIVUpoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUyOTYyNDk4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3dYMTNmZ3R2WGZJeFkvRC9pOTEzYmEvU1VVVzJ5cWdhWFFXYjhSY0Y4dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNzk1Mzg5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94752962498",
  PASSWORD: 
    process.env.PASSWORD || "EQ2TP3Z8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
