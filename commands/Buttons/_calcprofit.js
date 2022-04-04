/*CMD
  command: /calcprofit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons

  <<ANSWER
🖥 *Profit Calculator *🖥

Calculate here your incoming profits!

*Send the amount of <cur> you want to invest*
  ANSWER
  keyboard: 
  aliases: 📝 calculator, 🕹 calculator, 🖥 profit calulator, 🖥 calculator
CMD*/

let aa = message

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("⛔️ Enter amount "+" Numberic Only")
return }
var a=aa*1
let hr1=Bot.getProperty("daily_hour1")
let hr2=Bot.getProperty("daily_hour2")
let hr3=Bot.getProperty("daily_hour3")
let daily_amount=Bot.getProperty("daily_amount1")
let daily_amount2=Bot.getProperty("daily_amount2")
let daily_amount3=Bot.getProperty("daily_amount3")
let zero= Bot.getProperty("zero")
let cur=Bot.getProperty("cur")
let ko10=daily_amount*1
let ko11=ko10/100
let df1=ko11*1
let ko20=daily_amount2*1
let ko22=ko20/100
let df2=ko22*1
let ko30=daily_amount3*1
let ko33=ko30/100
let df3=ko33*1
let daily_expired=Bot.getProperty("daily_expired")
var mnm1=Bot.getProperty("minimuminvestment")
let mnm2=Bot.getProperty("daily_value1")
let mnm3=Bot.getProperty("daily_value2")
if(message*1<mnm1*1){
Bot.sendMessage("*⛔️ Enter amount "+" Bigger than "+mnm1+" "+cur+"*")
return }
if((message*1>=mnm1*1)&&(message*1<mnm2*1)){
let moko=df1*1
var rc24=message*moko
var rc96=rc24*daily_expired
let kl=6
var g="🖥* Profit Calculator*\n\n*Amount Invested: *"+message+" "+cur+" \n*Plan:* "+daily_amount+"% daily for "+daily_expired*hr1+" Hours\n*Credit Time: *"+" "+daily_amount+"% every "+hr1+" hours\n\n*After "+hr1+" Hours: *"+rc24.toFixed(kl)+" "+cur+" \n⏱ _Your first payment will arrive after "+hr1+" hours!_"+"\n\n💰 *After "+daily_expired*hr1+" Hours: *"+rc96.toFixed(kl)+"\n❓_ You will get back more than what you invested after just "+daily_expired*hr1+" Hours_"+"\n\n🔥 *Total Profit: *"+rc96.toFixed(kl)+" "+cur

Bot.sendKeyboard("Back 🔙",g)
} else if((message*1>=mnm2*1)&&(message*1<mnm3*1)){
let moko2=df2*1
var rc242=message*moko2
var rc962=rc242*daily_expired
let kl=6
var g="🖥* Profit Calculator*\n\n*Amount Invested: *"+message+" "+cur+" \n*Plan:* "+daily_amount2+"% daily for "+daily_expired*hr2+" Hours\n*Credit Time: *"+" "+daily_amount2+"% every "+hr2+" hours\n\n*After "+hr2+" Hours: *"+rc242.toFixed(kl)+" "+cur+" \n⏱ _Your first payment will arrive after "+hr2+" hours!_"+"\n\n💰 *After "+daily_expired*hr2+" Hours: *"+rc962.toFixed(kl)+"\n❓_ You will get back more than what you invested after just "+daily_expired*hr2+" Hours_"+"\n\n🔥 *Total Profit: *"+rc962.toFixed(kl)+" "+cur

Bot.sendKeyboard("Back 🔙",g)
} else if(message*1>=mnm3*1){
let moko3=df3*1
var rc243=message*moko3
var rc963=rc243*daily_expired
let kl=6
var g="🖥* Profit Calculator*\n\n*Amount Invested: *"+message+" "+cur+" \n*Plan:* "+daily_amount3+"% daily for "+daily_expired*hr3+" Hours\n*Credit Time: *"+" "+daily_amount3+"% every "+hr3+" hours\n\n*After "+hr3+" Hours: *"+rc243.toFixed(kl)+" "+cur+" \n⏱ _Your first payment will arrive after "+hr3+" hours!_"+"\n\n💰 *After "+daily_expired+" Days: *"+rc963.toFixed(kl)+"\n❓_ You will get back more than what you invested after just "+daily_expired*hr3+" Hours_"+"\n\n🔥 *Total Profit: *"+rc963.toFixed(kl)+" "+cur

Bot.sendKeyboard("Back 🔙",g)
}
