// mapaFunctions.js

const { ObjectId } = require('mongodb');

// Función para obtener todos los mapas
async function getMapas(client) {
    try {
        const database = client.db('Juego');
        const collection = database.collection('mapas');
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para actualizar un mapa por su ID
async function updateMapa(client, id, updatedMapa) {
    try {
        const database = client.db('Juego');
        const mapaCollection = database.collection('mapas');
        const result = await mapaCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedMapa });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para crear un nuevo mapa
async function createMapa(client, mapa) {
    try {
        const database = client.db('Juego');
        const mapaCollection = database.collection('mapas');
        const result = await mapaCollection.insertOne(mapa);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteMapa(client, id) {
    try {
        const database = client.db('Juego');
        const mapaCollection = database.collection('mapas');
        const result = await mapaCollection.deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getMapas, updateMapa, createMapa, deleteMapa };