/*CMD
  command: /invedtmenthouradmin01
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
let p1=Bot.getProperty("daily_hour1","⛔ ")
let p2=Bot.getProperty("daily_hour2","⛔ ")
let p3=Bot.getProperty("daily_hour3","⛔ ")
let p4=Bot.getProperty("daily_hour4","⛔ ")
let p5=Bot.getProperty("daily_hour5","⛔ ")
let x= "_Here is your currently settuped Accural Minutes._\n\n*1⃣ "+p1+" Minutes\n2⃣ "+p2+" Minutes\n3⃣ "+p3+" Minutes\n4⃣ "+p4+" Minutes\n5⃣ "+p5+" Minutes*\n\n_Click on the buttons bellow to change investment plan_* Accural Minutes*"

var b=[
[{title:"All 24 Minutes",command:"/adminallhour"},
{title:"Minute°1⃣ - "+p1+" Min", command:"/admininvhour01"}],
[{title:"Minute°2⃣ - "+p2+" Min",command:"/admininvhour02"},{title:"Minute°3⃣ - "+p3+" Min", command:"/admininvhour03"}],
[{title:"Minute°4⃣ - "+p4+" Min",command:"/admininvhour04"},{title:"Minute°5⃣ - "+p5+" Min", command:"/admininvhour05"}],
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]

Bot.editMessage(x,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}
