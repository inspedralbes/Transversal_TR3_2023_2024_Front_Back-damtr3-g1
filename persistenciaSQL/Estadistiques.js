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
    }
   
}




