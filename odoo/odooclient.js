const xmlrpc = require('xmlrpc');

async function insertDataIntoOdoo(contactos) {
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

                    // Insertar cada contacto
                    contactos.forEach(contacto => {
                        const contactData = {
                            name: contacto.username,
                            email: contacto.mail,
                        };

                        objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'create', [contactData]], (error, contactId) => {
                            if (error) {
                                console.error('Error al crear el contacto:', error);
                            } else {
                                console.log('ID del nuevo contacto:', contactId);
                            }
                        });
                    });
                }
            }
        });
    });
}

module.exports = insertDataIntoOdoo;
