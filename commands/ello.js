/*CMD
  command: ello
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(message)) {
  Bot.sendMessage("Invalid Email")
  return
}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "*✳Bot Sent!*\n\n🖨Email : " +
    message +
    ""
)

