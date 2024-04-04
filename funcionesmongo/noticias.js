// noticias.js

const { ObjectId } = require('mongodb');

// Función para obtener todas las noticias
async function getNoticias(client) {
    try {
        const database = client.db('Juego');
        const collection = database.collection('noticias');
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para actualizar una noticia por su ID
async function updateNoticia(client, id, updatedNoticia) {
    try {
        const database = client.db('Juego');
        const mapaCollection = database.collection('noticias');
        const result = await mapaCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedNoticia });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para crear una nueva noticia
async function createNoticia(client, noticia) {
    try {
        const database = client.db('Juego');
        const noticiaCollection = database.collection('noticias');
        const result = await noticiaCollection.insertOne(noticia);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//Borrar una noticia
async function deleteNoticia(client, id) {
    try {
        const database = client.db('Juego');
        const mapaCollection = database.collection('noticias');
        const result = await mapaCollection.deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getNoticias, updateNoticia, createNoticia, deleteNoticia };