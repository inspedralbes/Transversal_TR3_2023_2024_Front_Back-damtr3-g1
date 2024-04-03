
const mysql = require("mysql2");

var conn = mysql.createPool({
    host: "dam.inspedralbes.cat",
    user: "a22pabjimpri_user",
    password: "Dam2024+++",
    database: "a22pabjimpri_joc",
    connectionLimit: 20,
    queueLimit: 5,
    waitForConnections: true,
});
module.exports = {
    conn: conn, // Export the connection pool
    connect: function () {
        return new Promise((resolve, reject) => {
            conn.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })

    },

    close: function () {
        return new Promise((resolve, reject) => {
            conn.end((err) => {
                if (err) {
                    reject(err)
                } else { resolve() }
            })
        })
    }

}