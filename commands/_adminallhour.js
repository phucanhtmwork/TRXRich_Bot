/*CMD
  command: /adminallhour
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
let g = 30
if(chat.chatid==ad){
Bot.setProperty("daily_hour1",g,"string")
Bot.setProperty("daily_hour2",g,"string")
Bot.setProperty("daily_hour3",g,"string")
Bot.setProperty("daily_hour4",g,"string")
Bot.setProperty("daily_hour5",g,"string")
let txt="<b>All Accural Hours are Change to "+g+" Hours</b>"
var b=[[{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:txt,parse_mode:"html",reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")
}
