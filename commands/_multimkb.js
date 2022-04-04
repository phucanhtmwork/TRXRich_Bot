/*CMD
  command: /multimkb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("multidep",options,"json")
let currency=options.currency
let amount=options.amount
let cur=Bot.getProperty("cur")
var url="https://api.cryptonator.com/api/ticker/"+currency+"-"+cur

HTTP.get({
url:url,
success:"/onmultidep "+amount
})
