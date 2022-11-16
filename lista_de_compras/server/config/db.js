const mysql = require("mysql2/promise")

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Brunn4qu31r0z",
    database: "listamercado",
})

module.export = db;