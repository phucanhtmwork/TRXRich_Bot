/*CMD
  command: /onwithdrawntfy01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var time = new Date();
var time = time.toLocaleString();
let txid= options.body.result.send_txid
let amount= options.body.result.amountf
let cur= options.body.result.coin
let address=options.body.result.send_address
let s= options.body.result.status_text
let fiat_amount = options.fiat_amount;
let goo=fiat_amount*1
let gooo=goo.toFixed(2)
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")
let arr=params.split(' ')
let cpx=arr[0]
if(!user.last_name){
var valid_name=user.first_name
}else{
var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name="@"+user.username
}
let txurl2='<a href="https://tx.botdev.me/'+cur+'/'+txid+'">'+txid+' </a>'
let mention_name='<a href="tg://user?id='+user.telegramid+'">'+valid_name+'</a>'
var Lang = {
    'amount' : amount+" "+cur,
   'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'txurl':txurl2,
'txnid':txid,
'usd':gooo,
'name':valid_name,
'mention':mention_name,
'balance':Libs.ResourcesLib.userRes("balance").value().toFixed(8),
'cur':cur,
'servertime':new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa' 
})
};
 let withdrawal_text=Bot.getProperty("withdrawal_channel_text")
if(!withdrawal_text){
var txt= "✅ *Paid Automatically !!\n\n⭐️ Amount - " +
    amount +
    " "+cur+"\n🦁 User - @" +
    user.username +
    "\n🍀 User ID - " +
    user.telegramid +
    "\n💠 Wallet - " +
    "\n☎️ User Referrals = " +
    refList.length +
    "\n☘Transaction ID* -\n[" +
    txid +
    "](https://tronscan.org/#/transaction/" +
    txid +
    ")\n\n🏖* Bot Link - @ALL_TOKENS_AUTO_PAY_ROBOT\n⏩ Please Check Your Wallet*"
var par="html"
}else{
var par="html"
var txt= withdrawal_text.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
let cpid=params
if(s=="Complete"){
let y=amount
let k=    "✅ *New  Succesfull Withdraw !!\n\n⭐️ Amount - " +
    amount +
    " "+cur+"\n🦁 User - @" +
    user.username +
    "\n🍀 User ID - " +
    user.telegramid +
    "\n💠 Wallet - "  +
    "\n☎️ User Referrals = " +
    refList.length +
    "\n☘Transaction ID* -\n[" +
    txid +
    "](https://tronscan.org/#/transaction/" +
    txid +
    ")\n\n🏖* Bot Link - @ALL_TOKENS_AUTO_PAY_ROBOT\n⏩ Please Check Your Wallet*"
Bot.sendMessage(k)
Bot.setProperty("wdtxid"+user.telegramid+wdlist.value(),txid,"string")
Bot.setProperty("wdstatus"+user.telegramid+wdlist.value(),"✅ Paid","string")
let apst=Bot.getProperty("autopoststatus")
if(apst=="en"){
let chann=Bot.getProperty("autopost")
Api.sendMessage({ chat_id : chann , text :txt, parse_mode:par, disable_web_page_preview: true });}
}else{
Bot.run( {
    command: "/wdntfy"+" "+cpx,
    run_after: 60,  // 5 days delay
    label: "myLabvcfel"
} )}
