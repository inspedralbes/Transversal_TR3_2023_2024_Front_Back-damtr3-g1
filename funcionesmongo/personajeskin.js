const { ObjectId } = require('mongodb');

// Función para obtener todos los personajes
async function getPersonajes(client) {
    try {
        const database = client.db('Juego');
        const collection = database.collection('personajes');
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para crear un nuevo personaje
async function createPersonaje(client, personaje) {
    try {
        const database = client.db('Juego');
        const personajesCollection = database.collection('personajes');
        const result = await personajesCollection.insertOne(personaje);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para actualizar un personaje existente
async function updatePersonaje(client, id, updatedPersonaje) {
    try {
        const database = client.db('Juego');
        const personajesCollection = database.collection('personajes');
        const result = await personajesCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedPersonaje });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para eliminar un personaje
async function deletePersonaje(client, id) {
    try {
        const database = client.db('Juego');
        const personajesCollection = database.collection('personajes');
        const result = await personajesCollection.deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para obtener todas las skins
async function getSkins(client) {
    try {
        const database = client.db('Juego');
        const collection = database.collection('skins');
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para crear una nueva skin
async function createSkin(client, skin) {
    try {
        const database = client.db('Juego');
        const skinsCollection = database.collection('skins');
        const result = await skinsCollection.insertOne(skin);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para actualizar una skin existente
async function updateSkin(client, id, updatedSkin) {
    try {
        const database = client.db('Juego');
        const skinsCollection = database.collection('skins');
        const result = await skinsCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedSkin });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Función para eliminar una skin
async function deleteSkin(client, id) {
    try {
        const database = client.db('Juego');
        const skinsCollection = database.collection('skins');
        const result = await skinsCollection.deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function insertOrUpdateSkin(client, usuario, skinId) {
    try {
        const database = client.db('Juego');
        const collection = database.collection('inventari');

        const existingUser = await collection.findOne({ usuario });

        if (existingUser) {
            // Si el usuario ya existe, actualiza el array de skins
            await collection.updateOne(
                { usuario },
                { $addToSet: { skins: skinId } }// $addToSet asegura que no se añadan duplicados
            );
        } else {
            // Si el usuario no existe, crea un nuevo documento con el array de skins
            await collection.insertOne({ usuario, skins: [skinId] });
        }
        console.log('Skin insertada/actualizada correctamente.');
    } catch (error) {
        console.error('Error al insertar/actualizar la skin:', error);
        throw error;
    }
}

async function getSkinById(client, id) {
    try {
      const database = client.db('Juego');
      const collection = database.collection('skins');
      const result = await collection.findOne({ _id: new ObjectId(id) });
      if (!result) {
        throw new Error('No se encontró ninguna skin con el ID proporcionado');
      }
      return result.pngSkin;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  


module.exports = {
    getPersonajes,
    createPersonaje,
    updatePersonaje,
    deletePersonaje,
    getSkins,
    createSkin,
    updateSkin,
    deleteSkin,
    insertOrUpdateSkin,
    getSkinById
};
