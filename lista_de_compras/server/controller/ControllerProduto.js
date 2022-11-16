const mysql = require("mysql2/promise")
const cors = require("cors")
const { appBarClasses } = require("@mui/material")
 

var db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Brunn4qu31r0z",
    database: "listamercado",
})

module.exports = {
    async insert(req, res){
        let datas = req.body

        try {
            const response = await db.query('INSERT INTO MERCADO SET ?', [datas]);
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    async delete(req, res){
        let datas = req.body;

        try {
            const response = await db.query('DELETE FROM mercado SET ?', [datas]);
            res.json(response)            
        } catch (error) {            
            console.log(error);
        }
    },

    async find(req, res){        
        try {
            const response = await db.query('SELECT * FROM mercado');
            res.json(response[0]);
        } catch(error) {
            console.log(error);
        }
    }
        
}

