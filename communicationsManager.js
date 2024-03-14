export async function login(user, pwd) {
    const response = await fetch(`http://r6pixel.dam.inspedralbes.cat:3169/loginWeb`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "user": user, "pwd": pwd }), 
    });
    const resultat = await response.text(); 
    const boolValue = resultat === "true";
    return boolValue;
}
