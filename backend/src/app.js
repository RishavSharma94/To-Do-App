const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

const todoRoutes = require("./routes/todo.routes");

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
}));

app.use("/api/todos", todoRoutes);

// cookie routes
app.get("/set-cookie", (req, res) => {
    res.cookie("name", "user-1");
    res.send("Cookie set");
});

app.get("/login", (req, res) => {
    req.session.username = "user1"; // session set
    res.send("User logged in");


});


app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("User logged out");
});

app.get("/get-cookie", (req, res) => {
    res.json(req.cookies);
});

module.exports = app;