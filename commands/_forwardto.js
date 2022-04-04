/*CMD
  command: /forwardto
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

var names = Bot.getProperty("names", names, "text")
var hash = Bot.getProperty("hash",hash,"text")
var amountse = Bot.getProperty("amountse", amountse, "text")
Api.sendMessage({
    chat_id: "@TRXRichChannel",
    text:
      "👤 " +
      names +
      " just invested " +
      amountse +
      " TRX\n\n🔗 TRANSACTION ID" +
      "\n [" +
      hash +
      "]" +
      "(https://tx.botdev.me/TRX/" +
      hash +
      "\n)",
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
