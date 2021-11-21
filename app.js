const express = require("express");
const session = require("express-session");
const app = express();
// use public directory
app.use(express.static("public"));
// json things
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.sendFile("index", {root:__dirname});
});
app.get("/contacts", (req, res) => {
    res.render("contacts");
});
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.use(session({secret:""}));

const router = require("./routes/apis");
app.use(router);

const port = 3000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

