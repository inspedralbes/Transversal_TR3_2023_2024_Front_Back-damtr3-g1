const xmlrpc = require('xmlrpc');

async function insertDataIntoOdoo(personajes, skins) {
    const clientOptions = {
        host: '89.168.118.150',
        port: 8069,
        path: '/xmlrpc/2/common'
    };

    const client = xmlrpc.createClient(clientOptions);

    const db = 'Juego_Odoo';
    const user = 'a22pabjimpri@inspedralbes.cat';
    const password = 'Dam2024+++';

    return new Promise((resolve, reject) => {
        client.methodCall('authenticate', [db, user, password, {}], (error, uid) => {
            if (error) {
                console.error('Error en la autenticación:', error);
                reject(error);
            } else {
                if (uid > 0) {
                    // Obtener IDs de todos los productos
                    const objectClientOptions = {
                        host: '89.168.118.150',
                        port: 8069,
                        path: '/xmlrpc/2/object'
                    };

                    const objectClient = xmlrpc.createClient(objectClientOptions);

                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'search_read', [[['categ_id','=',4]],['id','x_mongoid']]], (error, existingPersonajes) => {
                        if (error) {
                            console.error('Error al obtener los personajes:', error);
                        } else {
                            console.log('Personajes existentes en Odoo:', existingPersonajes);

                            existingPersonajes.forEach(existingPersonaje => {
                                const matchingPersonaje = personajes.find(personaje => personaje._id.toString() === existingPersonaje.x_mongoid.toString());
                                if (matchingPersonaje) {
                                    // Realizar un update en lugar de eliminar y crear de nuevo
                                    const productData = {
                                        name: matchingPersonaje.nombre,
                                        x_lvlDesbloqueo: matchingPersonaje.lvlDesbloqueo, // No se especifica precio para los personajes
                                        categ_id: 4, // ID de la categoría 'all/personaje'
                                        list_price: 0
                                    };

                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'write', [[existingPersonaje.id], productData]], (error, result) => {
                                        if (error) {
                                            console.error('Error al actualizar el personaje:', error);
                                        } else {
                                            console.log('Personaje actualizado en Odoo:', result);
                                        }
                                    });
                                } else {
                                    // Eliminar el producto en Odoo
                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'unlink', [[existingPersonaje.id]]], (error, result) => {
                                        if (error) {
                                            console.error('Error al eliminar el personaje:', error);
                                        } else {
                                            console.log('Personaje eliminado en Odoo:', result);
                                        }
                                    });
                                }
                            });

                            // Insertar nuevos personajes
                            personajes.forEach(personaje => {
                                const existingPersonaje = existingPersonajes.find(existing => existing.x_mongoid.toString() === personaje._id.toString());
                                if (!existingPersonaje) {
                                    const productData = {
                                        name: personaje.nombre,
                                        x_lvlDesbloqueo: personaje.lvlDesbloqueo,
                                        categ_id: 4, // ID de la categoría 'all/personaje'
                                        list_price: 0,
                                        x_mongoid: personaje._id.toString()
                                    };

                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'create', [productData]], (error, productId) => {
                                        if (error) {
                                            console.error('Error al crear el personaje:', error);
                                        } else {
                                            console.log('ID del nuevo personaje:', productId);
                                        }
                                    });
                                }
                            });
                        }
                    });
                    
                    // Manejar las skins
                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'search_read', [[['categ_id','=',5]],['id','x_mongoid']]], (error, existingSkins) => {
                        if (error) {
                            console.error('Error al obtener las skins:', error);
                        } else {
                            console.log('Skins existentes en Odoo:', existingSkins);

                            existingSkins.forEach(existingSkin => {
                                const matchingSkin = skins.find(skin => skin._id.toString() === existingSkin.x_mongoid.toString());
                                if (matchingSkin) {
                                    // Realizar un update en lugar de eliminar y crear de nuevo
                                    const productData = {
                                        name: matchingSkin.nombre,
                                        x_valorMonedas: matchingSkin.valorMonedas,
                                        categ_id: 5,
                                        list_price: 0,
                                    };

                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'write', [[existingSkin.id], productData]], (error, result) => {
                                        if (error) {
                                            console.error('Error al actualizar la skin:', error);
                                        } else {
                                            console.log('Skin actualizada en Odoo:', result);
                                        }
                                    });
                                } else {
                                    // Eliminar la skin en Odoo
                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'unlink', [[existingSkin.id]]], (error, result) => {
                                        if (error) {
                                            console.error('Error al eliminar la skin:', error);
                                        } else {
                                            console.log('Skin eliminada en Odoo:', result);
                                        }
                                    });
                                }
                            });

                            // Insertar nuevas skins
                            skins.forEach(skin => {
                                const existingSkin = existingSkins.find(existing => existing.x_mongoid.toString() === skin._id.toString());
                                if (!existingSkin) {
                                    const productData = {
                                        name: skin.nombre,
                                        x_valorMonedas: skin.valorMonedas,
                                        categ_id: 5,
                                        list_price: 0,
                                        x_mongoid: skin._id.toString()
                                    };

                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'create', [productData]], (error, productId) => {
                                        if (error) {
                                            console.error('Error al crear la skin:', error);
                                        } else {
                                            console.log('ID de la nueva skin:', productId);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    });
}

module.exports = insertDataIntoOdoo;
