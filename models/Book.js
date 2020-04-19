const knex = require ('../database/connection')

const getAll = function () {
    return knex('books');
}

const getOne = function (id)  {
return knex('books').where('id', id).first()
}

const create = function (book) {

    if (book.id)
    return knex('books').where('id', book.id).update(book)
    return knex('books').insert(book)
}

const deleteOne = function (id) {
    return knex('books').where('id', id).del()
}


module.exports = {

    Books : {
        getAll ,
        getOne,
        create,
        deleteOne
    }

}
