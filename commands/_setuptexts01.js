/*CMD
  command: /setuptexts01
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
if(chat.chatid==user.telegramid){
var b=[
[{title:"β Welcome Text",command:"/welctext01admin"}],
[{title:"π± Acount Button Text",command:"/confirmacountbuttontext01"}],
[{title:"π€  Withdrawals Channel Text",command:"/adminautopost01"}],
[{title:"π Deposits Channel Text ",command:"/depositchanneltextadmin01"}],
[{title:"π Multi Deposits Channel Text ",command:"/multidepositchanneltextadmin01"}],
[{title:" βΉοΈInfo button Text",command:"/admininfotext01"},{title:"βοΈ FAQ button Text",command:"/adminfaqtext01"}],
[{title:"β¬οΈ Back To Settings", command:"/adminlogin r"}]]

var b2=[
[{text:"β Welcome Text",callback_data:"/welctext01admin"}],
[{text:"π± Acount Button Text",callback_data:"/confirmacountbuttontext01"}],
[{text:"π€  Withdrawals Channel Text",callback_data:"/adminautopost01"}],
[{text:"π Deposits Channel Text ",callback_data:"/depositchanneltextadmin01"}],
[{text:"π Multi Deposits Channel Text ",callback_data:"/multidepositchanneltextadmin01"}],
[{text:"π Statisticts Button Text",callback_data:"/textforstatistictsbutton01"}],
[{text:" βΉοΈInfo button Text",callback_data:"/admininfotext01"}],[{text:"βοΈ FAQ button Text",callback_data:"/adminfaqtext01"}],
[{text:"β¬οΈ Back To Settings", callback_data:"/adminlogin r"}]]
let txt='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+" <b>Select and option from the list bellow that you want to change</b>"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"html",reply_markup:{inline_keyboard:b2}})
}else{
Bot.runCommand("/start")
}
