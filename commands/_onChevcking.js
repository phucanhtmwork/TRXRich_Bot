/*CMD
  command: /onChevcking
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/strt")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendKeyboard("✅ Joined","📡 *To use this bot you must join this channel: @TRXRichChannel*")
}

