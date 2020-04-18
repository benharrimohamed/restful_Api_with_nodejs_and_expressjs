const connection = require ('../database/connection')
const getBooksQuery = "SELECT * FROM BOOKS"
const getBookQuery = "SELECT * FROM BOOKS WHERE id = ?"
const removeBooksQuery = "DELETE FROM BOOKS WHERE id = ?"
const addBooksQuery = "INSERT INTO BOOKS SET ?"
let Books;

const getBooks = async () => {
Books = await connection.query (getBooksQuery, (err,res,fie) => {
    if (err) throw err
    return res
})
}

console.log(Books)

setTimeout (()=> {
    console.log (getBooks())
},1000)



module.exports.model = getBooks