/*CMD
  command: /setidtoforglibalnotsorryinvestmentplan09
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
let cur =Bot.getProperty("cur","⛔")
let exp=Bot.getProperty("daily_expired","⛔")
let pln1=Bot.getProperty("daily_amount1","⛔")
let pln2=Bot.getProperty("daily_amount2","⛔")
let pln3=Bot.getProperty("daily_amount3","⛔")
let pln4=Bot.getProperty("daily_amount4","⛔")
let pln5=Bot.getProperty("daily_amount5","⛔")
let hr1=Bot.getProperty("daily_hour1")
let hr2=Bot.getProperty("daily_hour2")
let hr3=Bot.getProperty("daily_hour3")
let hr4=Bot.getProperty("daily_hour4")
let hr5=Bot.getProperty("daily_hour5")

let mnm=Bot.getProperty("minimuminvestment","⛔")
let daily1=Bot.getProperty("daily_value1","⛔")
let daily2=Bot.getProperty("daily_value2","⛔")
let daily3=Bot.getProperty("daily_value3","⛔")
let daily4=Bot.getProperty("daily_value4","⛔")

let msg="_Here is your currently settuped investment plan_\n\n"+"🈯️* Investment Plan:*\n1⃣* From "+mnm+" "+cur+" to "+daily1+ " "+cur+"*\n"+pln1+" % Daily for "+exp*hr1+ " Minutes\n2⃣ *From "+daily1+" "+cur+" to "+daily2+ " "+cur+"*\n"+pln2+" % Daily for "+exp*hr2+ " Minutes\n3⃣ * From "+daily2+" "+cur+" to "+daily3+" "+cur+"*\n"+pln3+" Daily for "+exp*hr3+" Minutes\n4⃣* From "+daily3+" "+cur+" to "+daily4+ " "+cur+"*\n"+pln4+" % Daily for "+exp*hr4+ " Minutes\n5⃣ *More than "+daily4+" "+cur+"*\n"+pln5+" % Daily for "+exp*hr5+" Minutes"
Bot.editMessage(msg,id)

var b=[
[{title:"🈯️ Change Investment Plan",command:"/invedtmentplanadmin01"}],
[{title:"⏰ Change Accural Minutes",command:"/invedtmenthouradmin01"}],
[{title:"⌛ Change Expired Date",command:"/amjxhxhdhdhzrei01"}],
[{title:"Return ↩️ ",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}
