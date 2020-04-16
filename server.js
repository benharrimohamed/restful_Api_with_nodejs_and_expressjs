const express = require("express")
const api = require("./api/bookResource");
const app = express();
const PORT = process.env.PORT || 3000
const db = require("./database/connection.js")

app.listen(PORT , () => console.log (`Serveur running at ${PORT}`));

//console.log(app)
module.exports = app;








