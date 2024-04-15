const xmlrpc = require('xmlrpc');

async function getPartnerIdFromOdoo(username) {
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

                    const domain = [['name', '=', username]];

                    objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'search_read', [domain]], (error, partners) => {
                        if (error) {
                            console.error('Error al obtener los partners:', error);
                            reject(error);
                        } else {
                            if (partners.length > 0) {
                                const partner = partners[0]; // Solo se espera un resultado, tomamos el primero
                                const partnerId = partner.id;
                                resolve(partnerId);
                            } else {
                                resolve(null); // No se encontró ningún partner con ese username
                            }
                        }
                    });
                }
            }
        });
    });
}

module.exports = getPartnerIdFromOdoo;
