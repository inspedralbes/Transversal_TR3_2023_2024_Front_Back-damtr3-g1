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
    getUsuariMonedes: function(user){
        var sql = 'SELECT monedas FROM Usuario WHERE Username = "' + user + '"';
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
    updateUsuariMonedes: function(monedes, user) {
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE Usuario SET monedas = monedas - ? WHERE username = ?';
            conn.query(sql, [monedes, user], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    

    insertUsuari: function(user, pwd, mail, fechaN, monedas, fecha_altaUser){
        const sql = 'INSERT INTO Usuario (username, password, mail, fechaNacimiento, monedas, fecha_altaUser, admin) VALUES("' + user + '", "' + pwd + '", "' + mail + '", "' + fechaN + '", ' + monedas + ', "' + fecha_altaUser + '", 0)';
        console.log(sql)
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
    },

    updateMonedesGastades: function(monedes, user) {
        return new Promise((resolve, reject) => {
            var sql = `
                UPDATE Estadisticas AS e
                JOIN Usuario AS u ON e.idUser = u.idUser
                SET e.monto_gastado = e.monto_gastado + ?
                WHERE u.username = ?
            `;
            conn.query(sql, [monedes, user], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    updateFinalPartidaWin : function(monedesWin, user) {
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE Usuario SET monedas = monedas + ? WHERE username = ?';
            conn.query(sql, [monedesWin, user.UserWIN], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    updateFinalPartidaLose : function(monedesLose, user) {
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE Usuario SET monedas = monedas + ? WHERE username = ?';
            conn.query(sql, [monedesLose, user.UserLose], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    
    

    


}




