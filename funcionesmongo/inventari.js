// noticias.js

const { ObjectId } = require('mongodb');

// Función para obtener todas las noticias
async function getInventari(client) {
    try {
        const database = client.db('Juego');
        const inventari = database.collection('inventari');
        const result = await inventari.find().toArray();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para actualizar una noticia por su ID
async function updateInventari(client, id, updatedInventari) {
    try {
        const database = client.db('Juego');
        const inventariCollection = database.collection('inventari');
        const result = await inventariCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedInventari });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para actualizar una noticia por su ID
async function updateActivo(client, id, idNuevo) {
    try {
        const database = client.db('Juego');
        const inventariCollection = database.collection('inventari');
        const result = await inventariCollection.updateOne({ _id: new ObjectId(id) }, { $set: {"activo": idNuevo} });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para crear una nueva noticia
async function createInventari(client, inventari) {
    try {
        const database = client.db('Juego');
        const inventariCollection = database.collection('inventari');
        const result = await inventariCollection.insertOne(inventari);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//Borrar una noticia
async function deleteInventari(inventari, id) {
    try {
        const database = client.db('Juego');
        const inventariCollection = database.collection('inventari');
        const result = await inventariCollection.deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getInventari, updateInventari, createInventari, deleteInventari, updateActivo };