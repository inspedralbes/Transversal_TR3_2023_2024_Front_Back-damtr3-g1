const xmlrpc = require('xmlrpc');

async function authenticateAndGetUid() {
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
                console.log('Autenticación exitosa con UID:', uid);
                resolve(uid);
            }
        });
    });
}

async function createSaleOrder(product, cliente) {
    const uid = await authenticateAndGetUid();

    const clientOptions = {
        host: '89.168.118.150',
        port: 8069,
        path: '/xmlrpc/2/object'
    };

    const client = xmlrpc.createClient(clientOptions);

    const db = 'Juego_Odoo';
    const password = 'Dam2024+++';

    const saleOrderData = {
        partner_id: cliente.id, // ID del cliente (partner) al que se le realiza la venta
        order_line: [ // Líneas de pedido
            [0, 0, {
                product_id: product.id, // ID del producto vendido
                product_uom_qty: 1, // Cantidad vendida
                price_unit: 100 // Precio unitario
            }]
        ]
    };

    return new Promise((resolve, reject) => {
        client.methodCall('execute_kw', [db, uid, password, 'sale.order', 'create', [saleOrderData]], (error, orderId) => {
            if (error) {
                console.error('Error al crear la venta:', error);
                reject(error);
            } else {
                console.log('Venta creada exitosamente con ID:', orderId);
                resolve(orderId);
            }
        });
    });
}

module.exports = createSaleOrder;
