const appRoot = require ('app-root-path');
const express = require ('express')
const router = express.Router();
const model = require (appRoot+'/models/Book')


router.get ('/books', (req,res) => {
    
   model.Books.getBooks().then(books => {
       res.json(books);
   })
}
)

router.get ('/book/:id', (req,res) => {

    model.Books.getBook(req.params.id).then(book => {
        res.json(book)
    })

}
)

router.post ('/book', (req,res) => {
  
})

router.delete ('/book/:id' , (req,res) => {

}) 




module.exports = router