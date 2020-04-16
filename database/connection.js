const mysql = require("mysql")

const db = mysql.createConnection ({
    host : "127.0.0.1",
    user : "root",
    password : "",
    database : "maktaba"
})

db.connect((err) => {
    if (err) throw err 
    else console.log ("Connection to database")
 });

module.exports = db;

