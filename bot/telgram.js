const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
  polling: true
});

console.log("🤖 Telegram bot online");

const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function sendTelegramTicket(ticket) {
  if (!CHAT_ID) {
    console.log("CHAT_ID Telegram mancante");
    return;
  }

  const msg =
`🎫 Nuovo Ticket
👤 Utente: ${ticket.username}
🆔 UUID: ${ticket.uuid}
💬 Messaggio: ${ticket.message}`;

  bot.sendMessage(CHAT_ID, msg).catch(err =>
    console.error("Errore Telegram:", err.message)
  );
}

module.exports = { sendTelegramTicket };
