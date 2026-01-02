const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("MC Ticket System online ✅");
});

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connesso"))
  .catch(err => console.error(err));

// PORT OBBLIGATORIA PER RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});

const ticketRoutes = require("./routes/tickets");

app.use("/api/tickets", ticketRoutes);
