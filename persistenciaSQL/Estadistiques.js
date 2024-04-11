const mysql = require("mysql2");

const conn = require("./Connexio.js");

module.exports = {
    getEstadistiques: function(id){
        var sql = 'SELECT * FROM Estadisticas WHERE idUser = ' + id;
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

    updateEstadistiques: function(partidasJugadas, tiempoPartida, tiempoJugado, totalkills, killsPartida, totalDeaths, deathsPartida, totalAssists, assistsPartida, totalWins, winsPartida){
        var sql = 'UPDATE Estadisticas SET PartidasJugadas = ' + (partidasJugadas + 1) + ', TiempoPartida = ' + (tiempoPartida + tiempoJugado + ', kills = ' + ( totalkills + killsPartida) + ', deaths = ' + (totalDeaths + deathsPartida) + ', assists = ' + (totalAssists + assistsPartida) + ', wins = ' + (totalWins + winsPartida))
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

    getCompres: function(){
        var sql = 'SELECT * FROM Compras';
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

    insertCompra: function(monto, username) {
        return new Promise((resolve, reject) => {
            // Primero, obtenemos el idUser basado en el username
            var getUserSql = 'SELECT idUser FROM Usuario WHERE username = ?';
            conn.query(getUserSql, [username], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    if (rows.length > 0) {
                        var idUser = rows[0].idUser;
                        // Luego, insertamos la nueva fila en la tabla Compras
                        var insertSql = 'INSERT INTO Compras (idUser, dinero_gastado) VALUES (?, ?)';
                        conn.query(insertSql, [idUser, monto], (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    } else {
                        reject(new Error('No se encontró ningún usuario con ese nombre.'));
                    }
                }
            });
        });
    }
    
   

}




