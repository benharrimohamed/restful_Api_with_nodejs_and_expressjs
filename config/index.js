const dotenv = require ('dotenv')
dotenv.config()
module.exports = {
    port : process.env.PORT,
    db_host : process.env.HOST,
    db_user : process.env.USER,
    db_password : process.env.PASSWORD,
    database : process.env.DATABASE,
}