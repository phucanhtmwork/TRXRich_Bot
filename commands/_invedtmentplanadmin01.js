/*CMD
  command: /invedtmentplanadmin01
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
if(chat.chatid==ad){
let p1=Bot.getProperty("daily_amount1","⛔")
let p2=Bot.getProperty("daily_amount2","⛔")
let p3=Bot.getProperty("daily_amount3","⛔")
let p4=Bot.getProperty("daily_amount4","⛔")
let p5=Bot.getProperty("daily_amount5","⛔")
let l1=Bot.getProperty("minimuminvestment","⛔")
let l2=Bot.getProperty("daily_value1","⛔")
let l3=Bot.getProperty("daily_value2","⛔")
let l4=Bot.getProperty("daily_value3","⛔")
let l5=Bot.getProperty("daily_value4","⛔")
let x= user.first_name+" Select an option that you want to manage. \n\n*1⃣ min°1 to plan°2 =percent°1\n2⃣ plan°2 to plan°3 = percent°2\n3⃣ plan°3 to plan°4 =percent°3\n4⃣ plan°4 to plan°5 = percent°4\n5⃣ More than plan°5 = percent°5 *\n\n*Click on the buttons bellow to change investment plan %*"

var b=[
[{title:"Minimum°1 - "+l1,command:"/admininvplan01"},{title:"Percent°1 - "+p1+"%", command:"/admininvpercent01"}],
[{title:"Plan°2 - "+l2, command:"/admininvplan02"},{title:"Percent°2 - "+p2+"%",command:"/admininvpercent02"}],
[{title:"Plan°3 - "+l3, command:"/admininvplan03"},{title:"Percent°3 - "+p3+"%", command:"/admininvpercent03"}],
[{title:"Plan°4 - "+l4, command:"/admininvplan04"},{title:"Percent°4 - "+p4+"%",command:"/admininvpercent04"}],
[{title:"Plan°5 - "+l5, command:"/admininvplan05"},{title:"Percent°5 - "+p5+"%", command:"/admininvpercent05"}],
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]

Bot.editMessage(x,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}
