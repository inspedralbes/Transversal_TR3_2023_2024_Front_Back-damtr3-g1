const xmlrpc = require('xmlrpc');

async function getProductDataFromOdoo() {
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

                    objectClient.methodCall('execute_kw', [db, uid, password, 'product.product', 'search_read', [[]]], (error, products) => {
                        if (error) {
                            console.error('Error al obtener los productos:', error);
                            reject(error);
                        } else {
                            const formattedProducts = products.map(product => {
                                return {
                                    odoo_id: product.id,
                                    nombre: product.name,
                                    lvlDesbloqueo: product.x_lvlDesbloqueo,
                                    valorMonedas: product.x_valorMonedas,
                                    mongoid: product.x_mongoid
                                };
                            });
                            resolve(formattedProducts);
                        }
                    });
                }
            }
        });
    });
}

module.exports = getProductDataFromOdoo;
