/*CMD
  command: /multicur
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: š„ deposit, š± multicurrency, š± multi currency, š± multicurrency š±
CMD*/

var b=[
[{title:"BTC",command:"/multidep BTC"},{title:"ETH", command:"/multidep ETH"},{title:" LTC", command:"/multidep LTC"},{title:"BNB", command:"/multidep BNB"}],
[{title:"TRX",command:"/multidep TRX"},
{title:"DOGE", command:"/multidep DOGE"}],[{title:"BCH", command:"/multidep BCH"},{title:"XRP",command:"/multidep XRP"},{title:"ZEC", command:"/multidep ZEC"},{title:"DASH",command:"/multidep DASH"}]]
let cur=Bot.getProperty("cur")
let txt ="*š± Please select the Currency to make a Deposit!\n\nš© Note: *you deposit will automatically be conveted to "+cur
Bot.sendInlineKeyboard(b, txt,{on_result:"/settaki"})
