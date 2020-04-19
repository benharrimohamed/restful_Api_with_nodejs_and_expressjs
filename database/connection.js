const {host,db_user,db_password,database} = require('../config')
const knex = require ('knex')({
    client : 'mysql',
    connection : {
    host : 'localhost',
    user : db_user,
    password : db_password,
    database : database 
}
}
)


module.exports = knex;

