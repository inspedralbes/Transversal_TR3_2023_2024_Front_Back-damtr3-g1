export async function login(user, pwd) {
    const response = await fetch(`http://localhost:3169/loginWeb`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "user": user, "pwd": pwd }),
    });
    const resultat = await response.json();
    return resultat.auth;
}

export async function createMap(map) {
    const response = await fetch(`http://localhost:3169/mapa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(map),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function createPersonaje(personaje) {
    const response = await fetch(`http://localhost:3169/personaje`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaje),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function habilidad(habilidad) {
    const response = await fetch(`http://localhost:3169/habilidad`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(habilidad),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function arma(arma) {
    const response = await fetch(`http://localhost:3169/arma`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arma),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function crearSkin(skin) {
    const response = await fetch(`http://localhost:3169/skin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(skin),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function deleteMap(id) {
    try {
        const response = await fetch(`http://localhost:3169/deletemapa/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al borrar el mapa');
    }
}

export async function deletePersonaje(id) {
    try {
        const response = await fetch(`http://localhost:3169/deletepersonaje/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al borrar el personaje');
    }
}

export async function deleteHabilidad(id) {
    try {
        const response = await fetch(`http://localhost:3169/deletehabilidad/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al borrar la habilidad');
    }
}

export async function deleteArma(id) {
    try {
        const response = await fetch(`http://localhost:3169/deletearma/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al borrar la arma');
    }
}

export async function deleteSkin(id) {
    try {
        const response = await fetch(`http://localhost:3169/deleteskin/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al borrar la skin');
    }
}

export async function updateMap(id, map) {
    try {
        const response = await fetch(`http://localhost:3169/updatemapa/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(map),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el mapa');
    }
}

export async function updatePersonaje(id, personaje) {
    try {
        const response = await fetch(`http://localhost:3169/updatepersonaje/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personaje),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el personaje');
    }
}

export async function updateHabilidad(id, habilidad) {
    try {
        const response = await fetch(`http://localhost:3169/updatehabilidad/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(habilidad),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar la habilidad');
    }
}

export async function updateArma(id, arma) {
    try {
        const response = await fetch(`http://localhost:3169/updatearma/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(arma),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar la arma');
    }
}

export async function updateSkin(id, skin) {
    try {
        const response = await fetch(`http://localhost:3169/updateskin/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(skin),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar la skin');
    }
}

export async function getMapa() {
    try {
        const response = await fetch(`http://localhost:3169/getMapa`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el mapa');
    }
}

export async function getPersonaje() {
    try {
        const response = await fetch(`http://localhost:3169/getPersonaje`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el personaje');
    }
}

export async function getHabilidad() {
    try {
        const response = await fetch(`http://localhost:3169/getHabilidad`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la habilidad');
    }
}

export async function getArma() {
    try {
        const response = await fetch(`http://localhost:3169/getArma`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la arma');
    }
}

export async function getSkin() {
    try {
        const response = await fetch(`http://localhost:3169/getSkin`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la skin');
    }
}

export async function getAssets() {
    try {
        const response = await fetch(`http://localhost:3169/getAssets`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los assets');
    }
}


// SELECT LOS USUARIOS
export async function getUsuarios() {
    try {
        const response = await fetch(`http://localhost:3169/getUsuarios`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener usuarios');
    }
}

// SELECT A LAS ESTADISTICAS DE LOS USUARIOS
export async function getEstadisticas(id) {
    try {
        const response = await fetch(`http://localhost:3169/getEstadisticas/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar las estadisticas');
    }
}

// UPDATE CLIENTES
export async function updateCliente(datosActualizadosCliente) {
    try {
        const response = await fetch(`http://localhost:3169/updateCliente`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizadosCliente)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el cliente');
    }
}

// DETENER SERVER ODOO
export async function detenerOdoo() {
    try {
        const response = await fetch(`http://localhost:3169/detenerOdoo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error('Error al detener Odoo');
        }
        alert('Odoo y db detenidas correctamente.');
    } catch (error) {
        console.error('Error al detener Odoo:', error);
        alert('Error al detener Odoo.');
    }
}

// ARRANCAR SERVER ODOO
export async function arrancarOdoo() {
    try {
        const response = await fetch(`http://localhost:3169/arrancarOdoo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error('Error al arrancar Odoo');
        }
        alert('Odoo y db arrancar correctamente.');
    } catch (error) {
        console.error('Error al arrancar Odoo:', error);
        alert('Error al arrancar Odoo.');
    }
}

// VER ESTADO ODOO
export async function getOdooStatus() {
    try {
        const response = await fetch(`http://localhost:3169/checkarOdoo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el estado de Odoo');
    }
}

export async function uploadMap(imageFile) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(`http://localhost:3169/uploadMap`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al subir la imagen al mapa');
    }
}

export async function uploadSkin(imageFile) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(`http://localhost:3169/uploadSkin`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al subir la imagen de la skin');
    }
}

export async function editMap(imageFile, oldImageName) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);
        formData.append('oldImageName', oldImageName);

        const response = await fetch(`http://localhost:3169/editMap`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al subir la nueva imagen o eliminar la antigua');
    }
}

export async function editSkin(imageFile, oldImageName) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);
        formData.append('oldImageName', oldImageName);

        const response = await fetch(`http://localhost:3169/editSkin`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al subir la nueva imagen o eliminar la antigua');
    }
}
