const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

client.once("ready", () => {
  console.log(`Discord bot online ✅`);
});

client.login(process.env.DISCORD_TOKEN);

// Funzione per inviare messaggi nel canale staff
async function sendTicketMessage(ticket) {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (!channel) return console.log("Canale Discord non trovato");

    const msg = `🎫 **Nuovo Ticket**
**Utente:** ${ticket.username}
**UUID:** ${ticket.uuid}
**Messaggio:** ${ticket.message}`;

    channel.send({ content: msg });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { sendTicketMessage };
