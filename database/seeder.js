const db = require ("./connection")
const faker = require("faker")
const argv = require("yargs").argv


for (i = 0; i < argv.row -1 ; i ++)
{
let book = {
    title : faker.name.title(),
    description : faker.lorem.text(100),
    pages : faker.random.number(200)
}

let query = 'INSERT INTO BOOKS SET ?'

db.query(query,book, (err,res,fields) => {

    if (err)
    throw err

    if (res)
    console.log ("One row successfully added to books ");

})
}