const xmlrpc = require('xmlrpc');

async function getProductIdFromOdoo(mongoid) {
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
                    const objectClientOptions = {
                        host: '89.168.118.150',
                        port: 8069,
                        path: '/xmlrpc/2/object'
                    };

                    const objectClient = xmlrpc.createClient(objectClientOptions);

                    const domain = [['x_mongoid', '=', mongoid]];

                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'search_read', [domain]], (error, products) => {
                        if (error) {
                            console.error('Error al obtener los productos:', error);
                            reject(error);
                        } else {
                            if (products.length > 0) {
                                const product = products[0]; // Solo se espera un resultado, tomamos el primero
                                const odooId = product.id;
                                resolve(odooId);
                            } else {
                                resolve(null); // No se encontró ningún producto con el mongoid dado
                            }
                        }
                    });
                }
            }
        });
    });
}

module.exports = getProductIdFromOdoo;
