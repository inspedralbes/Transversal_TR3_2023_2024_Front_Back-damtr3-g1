const xmlrpc = require('xmlrpc');

async function getPartnerDataFromOdoo() {
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

                    objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'search_read', [[]], {fields: ['name', 'email', 'x_sqlid']}], (error, partners) => {
                        if (error) {
                            console.error('Error al obtener los partners:', error);
                            reject(error);
                        } else {
                            const formattedPartners = partners.map(partner => {
                                return {
                                    odoo_id: partner.id,
                                    nombre: partner.name,
                                    email: partner.email,
                                    idUser: partner.x_sqlid
                                };
                            });
                            resolve(formattedPartners);
                        }
                    });
                }
            }
        });
    });
}

module.exports = getPartnerDataFromOdoo;
