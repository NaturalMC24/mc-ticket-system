const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Ticket", TicketSchema);
