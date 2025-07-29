"use strict";

const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT_NO || 3000;

// EJS
app.set("views", "./views");
app.set("view engine", "ejs");

//premier middleware
app.get("/", (req, res) => {
  res.render("liste-tickets", { message: "Hello World" });
});

app.use((req, res, next) => {
  res.status(404).send("La ressource demandée n'a pas été trouvée");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
