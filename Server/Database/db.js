const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "Priyank",
    host : "localhost",
    port : "5432",
    database : "pertendo"
});

module.exports = Pool;