/*CMD
  command: /admininvpercent05
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id= User.getProperty("adminmsgid")
let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.editMessage("*Enter the daily profit % as investment plan 5⃣*",id)
Bot.runCommand("/inv05per")
}else{
Bot.runCommand("/start")}
