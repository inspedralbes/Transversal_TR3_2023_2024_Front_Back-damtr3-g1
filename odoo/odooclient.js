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

                    // Obtener IDs de todos los contactos existentes
                    objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'search_read', [[], ['id', 'x_sqlid']]], (error, existingContacts) => {
                        if (error) {
                            console.error('Error al obtener los contactos:', error);
                        } else {
                            console.log('Contactos existentes en Odoo:', existingContacts);

                            existingContacts.forEach(existingContact => {
                                const matchingContact = contactos.find(contact => contact.idUser.toString() === existingContact.x_sqlid.toString());
                                if (matchingContact) {
                                    // Actualizar el contacto en lugar de crear de nuevo
                                    const contactData = {
                                        name: matchingContact.username,
                                        email: matchingContact.mail,
                                        x_sqlid: matchingContact.idUser
                                    };

                                    objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'write', [[existingContact.id], contactData]], (error, result) => {
                                        if (error) {
                                            console.error('Error al actualizar el contacto:', error);
                                        } else {
                                            console.log('Contacto actualizado en Odoo:', result);
                                        }
                                    });
                                } else {
                                    // Eliminar el contacto en Odoo
                                    objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'unlink', [[existingContact.id]]], (error, result) => {
                                        if (error) {
                                            console.error('Error al eliminar el contacto:', error);
                                        } else {
                                            console.log('Contacto eliminado en Odoo:', result);
                                        }
                                    });
                                }
                            });

                            // Insertar nuevos contactos
                            contactos.forEach(contacto => {
                                const existingContact = existingContacts.find(existing => existing.x_sqlid.toString() === contacto.idUser.toString());
                                if (!existingContact) {
                                    const contactData = {
                                        name: contacto.username,
                                        email: contacto.mail,
                                        x_sqlid: contacto.idUser
                                    };

                                    objectClient.methodCall('execute_kw', [db, uid, password, 'res.partner', 'create', [contactData]], (error, contactId) => {
                                        if (error) {
                                            console.error('Error al crear el contacto:', error);
                                        } else {
                                            console.log('ID del nuevo contacto:', contactId);
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
