/*CMD
  command: /onmultidep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var resultt = JSON.parse(content)
var mar = resultt.ticker.price
let amount=mar*params

Bot.run({
command : "/completedmulti",
options : { amount: amount }
});
