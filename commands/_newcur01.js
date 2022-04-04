/*CMD
  command: /newcur01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let b =Bot.getProperty("admin01")
let ap=User.getProperty("adminmsgid")
let cur =Bot.getProperty("cur")

if(chat.chatid==b)
{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});
Bot.setProperty("cur",message,"string")
Bot.editMessage("✅ Currency updated to "+message,ap)
var bd=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(bd,ap)
if(cur!==message){
let res = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
res.add(1)
}
}else{
Bot.runCommand("/start")}
