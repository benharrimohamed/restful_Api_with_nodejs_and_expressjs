const knex = require ('../database/connection')

const getBooks = function () {
    return knex('books');
}

const getBook = function (id)  {
return knex('books').where('id', id)
}


module.exports = {

    Books : {
        getBooks ,
        getBook
    }

}
