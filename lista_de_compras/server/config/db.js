const mysql = require("mysql2/promise")

var db = mysql.createConnection({
    host: "bnd5dssud6aytjfy9grh-mysql.services.clever-cloud.com",
    user: "ufiwipddw1qhlebr",
    password: "BwOOoga7uXdHwt2N0GZMl",
    database: "lbnd5dssud6aytjfy9grh",
    port: 3306
})

module.export = db;