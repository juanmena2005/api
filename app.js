const express = require('express');


global.app = express();
const port = 3000;

const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

require("./routes.js")



app.listen(port, () => {
  console.log("Servidor en ejecución en el puerto" + port);
});
