const db = require("../database/connection");
const app = require ("../server");
const getBooksQuery = "SELECT * FROM BOOKS"
const getBookQuery = "SELECT * FROM BOOKS WHERE id = ?"
const removeBooksQuery = "DELETE FROM BOOKS WHERE id = ?"
const addBooksQuery = "INSERT INTO BOOKS SET ?"
var Books = undefined

console.log(app)

/*app.get ("/", (req,res) => {

    res.send("helow soerd");
})
*/

/*
app.get ("/api/books" , (req,res) => {

let query = db.query(getBooksQuery);
query.on('error', err => {throw err})
query.on('result', new Promise (result).
then(result => {
    res.send (result);
}))
})




exports.getBooks = getBooks;

/*
let getBook = (id) => {

}

let removeBook = (id) => {

}

let addBook = (book) => {

}

    
  
exports.getBook = getBook;
exports.addBook = addBook;
exports.removeBook = removeBook;

*/



