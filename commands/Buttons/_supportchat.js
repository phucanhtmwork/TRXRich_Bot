/*CMD
  command: /supportchat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: π, π·ββ support, πhelp, π support
CMD*/

var tx="*π You are now in direct contact with our Administrator*\nSend here any message you want to submit, you will receive the answer directly here in chat!"

User.setProperty("is_support_admin",true,"boolean")
//Bot.runCommand("/setchatsup")
Bot.sendKeyboard("β¬οΈ Return",tx)
