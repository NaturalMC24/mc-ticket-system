cconst { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

client.once("ready", () => {
  console.log("🤖 Discord bot online");
});

client.login(process.env.DISCORD_TOKEN);

// funzione esportata
async function sendTicketMessage(ticket) {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (!channel) {
      console.log("Canale Discord non trovato");
      return;
    }

    await channel.send(
`🎫 **Nuovo Ticket**
👤 Utente: ${ticket.username}
🆔 UUID: ${ticket.uuid}
💬 Messaggio: ${ticket.message}`
    );
  } catch (err) {
    console.error("Errore Discord:", err.message);
  }
}

module.exports = { sendTicketMessage };
