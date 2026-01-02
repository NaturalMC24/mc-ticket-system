const { sendTicketMessage } = require("../bot/discord");
const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// CREA UN TICKET
router.post("/", async (req, res) => {
  try {
    const { username, uuid, message } = req.body;

    if (!username || !uuid || !message) {
      return res.status(400).json({ error: "Dati mancanti" });
    }

    const ticket = new Ticket({
      username,
      uuid,
      message
    });

    await ticket.save();
    sendTicketMessage(ticket);
    res.status(201).json(ticket);

  } catch (err) {
    res.status(500).json({ error: "Errore server" });
  }
});

// LISTA TICKET
router.get("/", async (req, res) => {
  const tickets = await Ticket.find().sort({ createdAt: -1 });
  res.json(tickets);
});

module.exports = router;
