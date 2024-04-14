//localhost
export async function login(user, pwd) {
    const response = await fetch(`http://localhost:3170/loginWeb`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "user": user, "pwd": pwd }),
    });
    const resultat = await response.json();
    return resultat.auth;
}

export async function createMap(map) {
    const response = await fetch(`http://localhost:3170/mapa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(map),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function createBroadcastNews(news) {
    const response = await fetch(`http://localhost:3170/createBroadcastNews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(news),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function createPersonaje(personaje) {
    const response = await fetch(`http://localhost:3170/personaje`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaje),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function arma(arma) {
    const response = await fetch(`http://localhost:3170/arma`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arma),
    });
    const resultat = await response.text();
    const boolValue = resultat === "true";
    return boolValue;
}

export async function crearSkin(skin) {
    const response = await fetch(`http://localhost:3170/skin`, {
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
        const response = await fetch(`http://localhost:3170/deletemapa/${id}`, {
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
        const response = await fetch(`http://localhost:3170/deletepersonaje/${id}`, {
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

export async function deleteArma(id) {
    try {
        const response = await fetch(`http://localhost:3170/deletearma/${id}`, {
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
        const response = await fetch(`http://localhost:3170/deleteskin/${id}`, {
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

export async function deleteBroadcastNews(id) {
    try {
        const response = await fetch(`http://localhost:3170/deleteBroadcastNews/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al borrar la noticia');
    }
}

export async function updateMap(id, map) {
    try {
        const response = await fetch(`http://localhost:3170/updatemapa/${id}`, {
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
        const response = await fetch(`http://localhost:3170/updatepersonaje/${id}`, {
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

export async function updateArma(id, arma) {
    try {
        const response = await fetch(`http://localhost:3170/updatearma/${id}`, {
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
        const response = await fetch(`http://localhost:3170/updateskin/${id}`, {
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

export async function updateBroadcastNews(id, news) {
    try {
        const response = await fetch(`http://localhost:3170/updateBroadcastNews/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(news),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar las noticias');
    }
}

export async function getMapa() {
    try {
        const response = await fetch(`http://localhost:3170/getMapa`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el mapa');
    }
}

export async function getPersonaje() {
    try {
        const response = await fetch(`http://localhost:3170/getPersonaje`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el personaje');
    }
}

export async function getArma() {
    try {
        const response = await fetch(`http://localhost:3170/getArma`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la arma');
    }
}

export async function getSkin() {
    try {
        const response = await fetch(`http://localhost:3170/getSkin`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la skin');
    }
}

export async function getAssets() {
    try {
        const response = await fetch(`http://localhost:3170/getAssets`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los assets');
    }
}

export async function getBroadcastNews() {
    try {
        const response = await fetch(`http://localhost:3170/getBroadcastNews`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener Broadcast News');
    }
}

export async function uploadMapimg(imageFile) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(`http://localhost:3170/uploadMap`, {
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

export async function uploadSkinimg(imageFile) {
    try {
        let formData = new FormData();
        formData.append('images', imageFile);

        const response = await fetch(`http://localhost:3170/uploadSkin`, {
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

export async function uploadBroadcastImg(imageFile) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(`http://localhost:3170/uploadBroadcast`, {
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

export async function editMapimg(imageFile, oldImageName) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);
        formData.append('oldImageName', oldImageName);

        const response = await fetch(`http://localhost:3170/editMap`, {
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

export async function editSkinimg(imageFiles, id) {
    try {
        let formData = new FormData();
        for (const key in imageFiles) {
            if (imageFiles[key] instanceof File) {
                formData.append('images', imageFiles[key]);
            }
        }
        formData.append('id', id)

        const response = await fetch(`http://localhost:3170/editSkin`, {
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


export async function editBroadcastimg(imageFile, oldImageName) {
    try {
        let formData = new FormData();
        formData.append('image', imageFile);
        formData.append('oldImageName', oldImageName);

        const response = await fetch(`http://localhost:3170/editBroadcast`, {
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

// SELECT LOS USUARIOS
export async function getUsuarios() {
    try {
        const response = await fetch(`http://localhost:3170/getUsuarios`);
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
        const response = await fetch(`http://localhost:3170/getEstadisticas/${id}`, {
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

// SELECT A LOS BENEFICIOS
export async function getBeneficios() {
    try {
        const response = await fetch(`http://localhost:3170/getCompras`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar los beneficios');
    }
}

// UPDATE CLIENTES
export async function updateCliente(datosActualizadosCliente) {
    try {
        const response = await fetch(`http://localhost:3170/updateCliente`, {
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
        const response = await fetch(`http://localhost:3170/detenerOdoo`, {
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
        const response = await fetch(`http://localhost:3170/arrancarOdoo`, {
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
        const response = await fetch(`http://localhost:3170/checkarOdoo`, {
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

// VER ESTADO game server
export async function getGameStatus() {
    try {
        const response = await fetch(`http://localhost:3170/checkarGame`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el estado de game');
    }
}

export async function detenerGame() {
    try {
        const response = await fetch(`http://localhost:3170/detenerGame`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error('Error al detener Game');
        }
        alert('Game detenido correctamente.');
    } catch (error) {
        console.error('Error al detener game:', error);
        alert('Error al detener game.');
    }
}

// ARRANCAR SERVER Game
export async function arrancarGame() {
    try {
        const response = await fetch(`http://localhost:3170/arrancarGame`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error('Error al arrancar game');
        }
        alert('game arrancar correctamente.');
    } catch (error) {
        console.error('Error al arrancar game:', error);
        alert('Error al arrancar game.');
    }
}

export async function syncOdoo() {
    try {
        const response = await fetch(`http://localhost:3170/syncOdoo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al sincronizar Odoo');
    }
}

// SYNC CLIENTES ODOO
export async function syncOdooClient() {
    try {
        const response = await fetch(`http://localhost:3170/syncClientOdoo
        `, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al sincronizar Odoo');
    }
}

export async function getImg(path) {
    try {
        // console.log("Haciendo solicitud a:", `http://localhost:3170/getImgBroadcast/${path}`);
        const response = await fetch(`http://localhost:3170/getImgBroadcast/${path}`);
        //console.log("Respuesta de la solicitud:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.url;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la imagen');
    }
}

export async function getImgGraph() {
    try {
        const response = await fetch(`http://localhost:3170/getImgGraph`);
        //console.log("Respuesta de la solicitud:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.url;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la imagen');
    }
}

export async function getImgGraphBeneficios() {
    try {
        const response = await fetch(`http://localhost:3170/getImgGraphBenefits`);
        //console.log("Respuesta de la solicitud:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.url;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la imagen');
    }
}