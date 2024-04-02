async function getAssets(client) {
    try {
        const database = client.db('Juego');
        const mapasCollection = database.collection('mapas');
        const personajesCollection = database.collection('personajes');
        const habilidadesCollection = database.collection('habilidades');
        const armasCollection = database.collection('armas');
        const skinsCollection = database.collection('skins');

        const mapas = await mapasCollection.find().toArray();
        const personajes = await personajesCollection.find().toArray();
        const habilidades = await habilidadesCollection.find().toArray();
        const armas = await armasCollection.find().toArray();
        const skins = await skinsCollection.find().toArray();

        return {
            mapas,
            personajes,
            habilidades,
            armas,
            skins
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getAssets };