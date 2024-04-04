const xmlrpc = require('xmlrpc');

// Función para insertar personajes y skins en Odoo
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

                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'search', [[]]], (error, productIds) => {
                        if (error) {
                            console.error('Error al obtener los IDs de los productos:', error);
                        } else {
                            console.log('IDs de los productos:', productIds);

                            // Eliminar cada producto
                            let deletePromises = productIds.map(productId => {
                                return new Promise((resolve, reject) => {
                                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'unlink', [[productId]]], (error, result) => {
                                        if (error) {
                                            console.error('Error al eliminar el producto con ID', productId, ':', error);
                                            reject(error);
                                        } else {
                                            console.log('Producto con ID', productId, 'eliminado correctamente');
                                            resolve();
                                        }
                                    });
                                });
                            });

                            Promise.all(deletePromises)
                                .then(() => {
                                    // Insertar personajes
                                    personajes.forEach(personaje => {
                                        const productData = {
                                            name: personaje.nombre,
                                            x_lvlDesbloqueo: personaje.lvlDesbloqueo, // No se especifica precio para los personajes
                                            categ_id: 4, // ID de la categoría 'all/personaje'
                                            list_price: 0,
                                        };

                                        objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'create', [productData]], (error, productId) => {
                                            if (error) {
                                                console.error('Error al crear el personaje:', error);
                                            } else {
                                                console.log('ID del nuevo personaje:', productId);
                                            }
                                        });
                                    });

                                    // Insertar skins
                                    skins.forEach(skin => {
                                        const productData = {
                                            name: skin.nombre,
                                            x_valorMonedas: skin.valorMonedas, // Utilizar el valorMonedas como precio
                                            categ_id: 5, // ID de la categoría correspondiente a las skins
                                            list_price: 0,
                                        };

                                        objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'create', [productData]], (error, productId) => {
                                            if (error) {
                                                console.error('Error al crear la skin:', error);
                                            } else {
                                                console.log('ID de la nueva skin:', productId);
                                            }
                                        });
                                    });
                                })
                                .catch(error => {
                                    console.error('Error al eliminar productos:', error);
                                });
                        }
                    });
                }
            }
        });
    });
}

module.exports = insertDataIntoOdoo;
