export async function login(user, pwd) {
    const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/loginWeb`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "user": user, "pwd": pwd }), 
    });
    const resultat = await response.json(); 
    return resultat.auth;
}

export async function createMap(map){
    const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/mapa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( map ), 
    });
    const resultat = await response.text(); 
    const boolValue = resultat === "true";
    return boolValue;
}

export async function createPersonaje(personaje){
    const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/personaje`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( personaje ), 
    });
    const resultat = await response.text(); 
    const boolValue = resultat === "true";
    return boolValue;
}

export async function createHabilidad(habilidad){
    const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/habilidad`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( habilidad ), 
    });
    const resultat = await response.text(); 
    const boolValue = resultat === "true";
    return boolValue;
}

export async function createArma(arma){
    const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/arma`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( arma ), 
    });
    const resultat = await response.text(); 
    const boolValue = resultat === "true";
    return boolValue;
}

export async function deleteMap(id) {
    try {
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/deletemapa/${id}`, {
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
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/deletepersonaje/${id}`, {
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
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/deletehabilidad/${id}`, {
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
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/deletearma/${id}`, {
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

export async function updateMap(id, map) {
try {
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/updatemapa/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( map ),
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
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/updatepersonaje/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( personaje ),
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
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/updatehabilidad/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( habilidad ),
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
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/updatearma/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( arma ),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar la arma');
    }
}

export async function getMapa() {
    try {
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/getMapa`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el mapa');
    }
}

export async function getPersonaje() {
    try {
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/getPersonaje`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener el personaje');
    }
}

export async function getHabilidad() {
    try {
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/getHabilidad`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la habilidad');
    }
}

export async function getArma() {
    try {
        const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/getArma`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la arma');
    }
}