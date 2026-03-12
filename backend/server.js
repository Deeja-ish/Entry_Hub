const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const eventRoutes = require("./routes/eventRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", eventRoutes);

module.exports = app;