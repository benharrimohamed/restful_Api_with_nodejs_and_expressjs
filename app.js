const express = require('express')
const app = express ()
const bodyParser = require ('body-parser')
const booksRoutes = require('./api/routes/book');

/*app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(bodyParser.json())*/




app.use ('/api',booksRoutes);

module.exports  = app;
