/*CMD
  command: /ap
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cpid=options.body.result.id
let cps=options.body.error
let adm=Bot.getProperty("admin01")
let cur=Bot.getProperty("cur")
let amount=options.body.result.amount
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
let txid = content
//Bot.sendMessage(content)
let amo = User.getProperty("amo")
let wallet = User.getProperty("wall")
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(-amo)
Api.sendPhoto({
  photo: "https://telegra.ph/Tweet-05-03",
  caption:
    "✅* Paid automatically \n\n⭐️ Amount - " +
    amount +
    " TWEET\n🍀 User ID - " +
    user.telegramid +
    "\n🦁 Payment id - " +
    cpid +
    " \n💠 Wallet - " +
    wallet +
    "\n\n⏰ Hash - *[" +
    content +
    "](https://tronscan.org/#/transaction/" +
    txid +
    "",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "💠 Tronscan",
          url: "https://tronscan.org/#/transaction/" + txid + ""
        },
        { text: "↩️ Back", callback_data: "Cr" }
      ]
    ]
  },
  disable_web_page_preview: true
})
Api.sendMessage({
  chat_id: "@payouts_channel_01",
  text:
    "✅ *New Successful Withdraw !!\n\n⭐️ Amount - " +
    amo +
    " TWEET\n🦁 User - @" +
    user.username +
    "\n🍀 User ID - " +
    user.telegramid +
    "\n💠 Wallet - " +
    wallet +
    "\n☎️ User Referrals = " +
    refList.length +
    "\n☘Transaction ID* -\n[" +
    content +
    "](https://tronscan.org/#/transaction/" +
    txid +
    ")\n\n🏖* Bot Link - @ALL_TOKENS_AUTO_PAY_ROBOT\n⏩ Please Check Your Wallet*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "💠 Payment ID ",
          url: "https://tronscan.org/#/transaction/" + content + ""
        },
        { text: "🍀 Bot Link", url: "https://t.me/ALL_TOKENS_AUTO_PAY_ROBOT" }
      ]
    ]
  },
  disable_web_page_preview: true
})

