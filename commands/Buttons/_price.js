/*CMD
  command: /price
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 📶 live, 📶 price, 📈 price, 📶 live price, 📈 live price
CMD*/

let txt ="🎗 *Please Select the Currency you want to Convert!*"
var b=[
[{title:"BTC",command:"/multiprice bitcoin"},{title:"ETH", command:"/multiprice ethereum"},{title:" LTC", command:"/multiprice litecoin"},
{title:"BNB", command:"/multiprice binancecoin"}],
[{title:"TRX",command:"/multiprice tron"},
{title:"DOGE", command:"/multiprice dogecoin"}],[{title:"BCH", command:"/multiprice bitcoin-cash"},{title:"DASH", command:"/multiprice dash"},
{title:"ZEC", command:"/multiprice zcoin"},{title:"XRP",command:"/multiprice ripple"}]]

Bot.sendInlineKeyboard(b, txt,{on_result:"/settaki"})
