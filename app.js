"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT_NO || 3000;

//premier middleware
app.use((req, res, next) => {
  console.log(
    `premier middleware : ${req.method} ${req.url} - ${req.get("User-Agent")}`
  );
  next();
});

app.get("/bonjour", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.status(404).send("La ressource demandée n'a pas été trouvée");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
