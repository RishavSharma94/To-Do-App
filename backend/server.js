require("dotenv").config(); // sabse upar

const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

// middleware (data parse karne ke liye)
app.use(express.json());

// DB connect karo
connectDB();

// test route (check karne ke liye)
app.get("/", (req, res) => {
    res.send("API is running...");
});

// server start
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
});