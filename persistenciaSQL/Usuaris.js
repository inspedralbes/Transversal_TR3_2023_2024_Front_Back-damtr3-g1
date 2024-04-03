const mysql = require("mysql2");

const conn = require("./Connexio.js");


module.exports = {
    getUsuaris: function(){
        var sql = 'SELECT * FROM Usuario WHERE admin != 1';
        return new Promise((resolve, reject) =>{
            conn.query(sql, (err, result) => {
                if (err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            });
        })
    },
    getUsuari: function(user){
        var sql = 'SELECT username, password FROM Usuario WHERE Username = "' + user + '"';
        return new Promise((resolve, reject) =>{
            conn.query(sql, (err, result) => {
                if (err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            });
        })
    },

    getUsuariAdmin: function(user){
        var sql = 'SELECT username, password, admin FROM Usuario WHERE username = "' + user + '"';
        return new Promise((resolve, reject) =>{
            conn.query(sql, (err, result) => {
                if (err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            });
        })
    },
    
    insertUsuari: function(user, pwd, mail, fechaN, monedas, gemas){
        const sql = 'INSERT INTO Usuario (username, password, mail, fechaNacimiento, monedas, gemas) VALUES("' + user + '", "' + pwd + '", "' + mail + '", "' + fechaN + '", ' + monedas + ', ' + gemas + ')';
        return new Promise((resolve, reject) =>{
            conn.query(sql, (err, result) => {
                if (err) {
                    // Check the error code
                    if (err.code === 'ER_DUP_ENTRY') {
                        // Handle duplicate entry error
                        reject("DUPLICADO");
                    } else {
                        // Handle other errors
                        reject("ERROR EN INSERT");
                        console.log(err.message)
                    }
                } else {
                    resolve(true);
                }
            });
        })
    },

    updateUsuari: function(mail, vetado, username, fechaN, id){
    var sql = 'UPDATE Usuario SET mail ="' + mail + '", vetado = ' + vetado + ', username = "' + username + '",fechaNacimiento = "' + fechaN +  '" WHERE idUser = ' + id;
    return new Promise((resolve, reject) =>{
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }else{
                resolve(result)
            }
        });
    })
    }


}




