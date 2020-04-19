const appRoot = require ('app-root-path');
const express = require ('express')
const router = express.Router();
const model = require (appRoot+'/models/Book')


router.get ('/books', (req,res) => {
    
   model.Books.getAll().then(books => {
       res.json(books);
   })
}
)

router.get ('/book/:id', (req,res) => {

    model.Books.getOne(req.params.id).then(book => {
        res.json(book)
    })

}
)

router.post ('/book', (req,res) => {
   model.Books.create(req.body).then (book => {
    res.json(book)
   })
})


router.delete ('/book/:id' , (req,res) => {
  model.Books.deleteOne(req.params.id).then (book => {
      res.json(book)
  })
}) 




module.exports = router