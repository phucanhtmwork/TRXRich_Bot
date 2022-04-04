/*CMD
  command: /admininvhour03
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
Bot.editMessage("*Enter the Accural Minutes of investment plan 3⃣*",id)
Bot.runCommand("/inv03hr")
}else{
Bot.runCommand("/start")}
