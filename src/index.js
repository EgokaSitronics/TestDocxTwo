const express = require("express");
const EasyDocx = require("node-easy-docx");

const app = express();

app.get("/", (req, res) => {
  const easyDocx = new EasyDocx({
    path: `${__dirname}/DECLARACIÓN RESPONSABLE PRL - Canon - No UO Seleccionada (1).docx`
  });

  easyDocx
    .parseDocx()
    .then((data) => {
      // JSON data as result
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
  res.send("hello");
});

app.listen(8080);
