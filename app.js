const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.sendFile("index", {root:__dirname});
});
app.get("/contacts", (req, res) => {
    res.render("contacts");
});
app.post("/register", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});

const port = 3000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

