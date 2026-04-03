require("dotenv").config();

const connectDB = require("./src/config/db");
const app = require("./src/app"); // ✅ FIX

// DB connect
connectDB();

// test route (optional)
app.get("/", (req, res) => {
    res.send("API is running...");
});

// server start
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});