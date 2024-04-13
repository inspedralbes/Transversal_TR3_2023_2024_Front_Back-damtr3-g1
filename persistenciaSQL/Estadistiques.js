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

    updateEstadistiquesWin: function(killsPartida, deathsPartida, assistsPartida, user){
        var sqlUser = `SELECT idUser FROM Usuario WHERE username = ?`;
        return new Promise((resolve, reject) =>{
            conn.query(sqlUser, [user], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    if (rows.length > 0) {
                        var idUsuario = rows[0].idUser;
                        var sql = `UPDATE Estadisticas SET PartidasJugadas = PartidasJugadas + 1, Kills = Kills + ?, NumeroVictorias = NumeroVictorias + 1 WHERE idUser = ?`;
                        var values = [killsPartida, deathsPartida, assistsPartida, idUsuario];
                        conn.query(sql, values, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                // Actualizar porcentaje de victorias
                                var sqlPorcentaje = `UPDATE PorcentageVictorias SET Porcentaje = (NumeroVictorias / PartidasJugadas) * 100 WHERE idUser = ?`;
                                conn.query(sqlPorcentaje, [idUsuario], (err, result) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(result);
                                    }
                                });
                            }
                        });
                    } else {
                        reject("Usuario no encontrado");
                    }
                }
            });
        });
    },
    
    updateEstadistiquesLose: function(killsPartida, deathsPartida, assistsPartida, user){
        var sqlUser = `SELECT idUser FROM Usuario WHERE username = ?`;
        return new Promise((resolve, reject) =>{
            conn.query(sqlUser, [user], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    if (rows.length > 0) {
                        var idUsuario = rows[0].idUser;
                        var sql = `UPDATE Estadisticas SET PartidasJugadas = PartidasJugadas + 1, Kills = Kills + ? WHERE idUser = ?`;
                        var values = [killsPartida, deathsPartida, assistsPartida, idUsuario];
                        conn.query(sql, values, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                // Actualizar porcentaje de victorias
                                var sqlPorcentaje = `UPDATE PorcentageVictorias SET Porcentaje = (NumeroVictorias / PartidasJugadas) * 100 WHERE idUser = ?`;
                                conn.query(sqlPorcentaje, [idUsuario], (err, result) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(result);
                                    }
                                });
                            }
                        });
                    } else {
                        reject("Usuario no encontrado");
                    }
                }
            });
        });
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




