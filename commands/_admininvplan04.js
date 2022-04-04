/*CMD
  command: /admininvplan04
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
Bot.editMessage(" Now send Me number of Investment Plan°4",id)
Bot.runCommand("/inv04edit")
}else{
Bot.runCommand("/start")}
