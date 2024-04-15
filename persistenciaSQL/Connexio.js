const mysql = require("mysql2");

// Crear el pool de conexiones
const pool = mysql.createPool({
    host: "dam.inspedralbes.cat",
    user: "a22pabjimpri_user",
    password: "Dam2024+++",
    database: "a22pabjimpri_joc",
    connectionLimit: 20,
    queueLimit: 5,
    waitForConnections: true,
});

// Exportar el pool de conexiones
module.exports = pool;
