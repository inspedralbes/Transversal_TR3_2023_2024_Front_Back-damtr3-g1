const { MongoClient } = require("mongodb");

// URL de conexión a MongoDB
const url = "mongodb://a22pabjimpri:3T1rkBzBxlETr8gO@ac-qsbdd98-shard-00-00.lgl13za.mongodb.net:27017,ac-qsbdd98-shard-00-01.lgl13za.mongodb.net:27017,ac-qsbdd98-shard-00-02.lgl13za.mongodb.net:27017/?replicaSet=atlas-fqazj8-shard-0&ssl=true&authSource=admin";

// Crear una instancia del cliente de MongoDB
const client = new MongoClient(url);

// Conectar al servidor de MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log("Conexión a MongoDB establecida correctamente");
        return client;
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        throw error;
    }
}

module.exports = client;
