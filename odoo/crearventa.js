const xmlrpc = require('xmlrpc');

async function createSaleOrderInOdoo(productId, partnerId, monedes) {
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

                    // Define la línea de pedido de venta sin impuesto
                    const saleOrderLine = {
                        product_id: productId,
                        product_uom_qty: 1, // Cantidad del producto
                        price_unit: monedes, // Precio unitario
                        tax_id: false
                    };

                    const saleOrderData = {
                        partner_id: partnerId,
                        order_line: [[0, 0, saleOrderLine]]
                    };

                    objectClient.methodCall('execute_kw', [db, uid, password, 'sale.order', 'create', [saleOrderData]], (error, saleOrderId) => {
                        if (error) {
                            console.error('Error al crear la orden de venta:', error);
                            reject(error);
                        } else {
                            objectClient.methodCall('execute_kw', [db, uid, password, 'sale.order', 'action_confirm', [[saleOrderId]]], (error, result) => {
                                if (error) {
                                    console.error('Error al confirmar la orden de venta:', error);
                                    reject(error);
                                } else {
                                    resolve(saleOrderId);
                                }
                            });
                        }
                    });
                }
            }
        });
    });
}

module.exports = createSaleOrderInOdoo;
