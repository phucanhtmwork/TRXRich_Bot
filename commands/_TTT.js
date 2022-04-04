/*CMD
  command: /TTT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1328930296){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("✅ El bot ha sido enviado")
}else{
Bot.sendMessage("❌ Tu no eres administrador")
}

