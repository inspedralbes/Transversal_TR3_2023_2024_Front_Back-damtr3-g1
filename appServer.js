var session = require("express-session");
const { MongoClient } = require("mongodb");
const { ObjectId } = require('mongodb');
const express = require("express");
const multer = require("multer");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
var spawn = require("child_process").spawn;
const app = express();
const { v4: uuidv4 } = require('uuid');
const server = createServer(app);
const { Client } = require('ssh2');
const fs = require("fs");
const path = require('path');
const bcrypt = require('bcrypt');
const archiver = require('archiver');

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
const staticFieldMiddleware = express.static("public");
var history = require("connect-history-api-fallback");
let sales = [];
let usuarisConnectats = [];
const http = require('http');
let folderPath = '';


/*****************ACCES A DADES AMB PERSISTENCIA********************* */
const conn = require('./persistenciaSQL/Connexio.js');
const bdEstadistiques = require('./persistenciaSQL/Estadistiques.js');
const bdUsuaris = require('./persistenciaSQL/Usuaris.js');

const { getPersonajes, createPersonaje, updatePersonaje, deletePersonaje, getSkins, createSkin, updateSkin, deleteSkin, insertOrUpdateSkin } = require('./funcionesmongo/personajeskin');
const client = require('./funcionesmongo/conexion');
const { getAssets } = require('./funcionesmongo/assets'); // Importa la función getAssets
const { getMapas, updateMapa, createMapa, deleteMapa } = require('./funcionesmongo/mapa'); // Importa las funciones relacionadas con los mapas
const { getNoticias, updateNoticia, createNoticia, deleteNoticia } = require('./funcionesmongo/noticias.js');
const { getInventari, updateInventari, createInventari, deleteInventari, updateActivo } = require('./funcionesmongo/inventari.js');

const insertDataIntoOdoo = require('./odoo/odooproduct.js');
const insertClientOdoo = require('./odoo/odooclient.js');
const getProductIdFromOdoo = require('./odoo/getodooproductbymongoid.js')
const getPartnerIdFromOdoo = require('./odoo/getodooclientbyname.js');
const createSaleOrderInOdoo = require('./odoo/crearventa')

//Definim la sessió i encenem el servidor
const PORT = 3168;
server.listen(PORT, () => {
    console.log('server running at http://localhost:', PORT);
});

//Permetem que el servidor pugui rebre peticions de qualsevol origen
app.use(cors());

app.use(express.json());

app.post("/comprarProducte", async (req, res) => {
    var user = req.body.user;
    var monedes = req.body.monedes;
    var idProducte = req.body.idProducto;

    await bdUsuaris.updateUsuariMonedes(monedes, user);
    await bdUsuaris.updateMonedesGastades(monedes, user);
    await bdEstadistiques.insertCompra(monedes, user)
    await insertOrUpdateSkin(client, user, idProducte);
    const idOdooProduct = await getProductIdFromOdoo(idProducte)
    const idOdooClient = await getPartnerIdFromOdoo(user);

    await createSaleOrderInOdoo(idOdooProduct, idOdooClient, monedes);



    res.send("OK");
});

app.get('/getOdooProduct', async (req, res) => {
    try {
        const result = await getProductDataFromOdoo();
        console.log(result);
    } catch (error) {
        console.error('Error al sincronizar el estado de Odoo:', error);
        res.status(500).send('Error al sincronizar el estado de Odoo.');
    }
})

app.get('/getOdooClient', async (req, res) => {
    try {
        const result = await getClientDataFromOdoo();
        console.log(result);
    } catch (error) {
        console.error('Error al sincronizar el estado de Odoo:', error);
        res.status(500).send('Error al sincronizar el estado de Odoo.');
    }
})

app.get("/getAssets", async (req, res) => {
    try {
        const result = await getAssets(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de las colecciones' });
    }
});


app.get("/getNovaTenda", (req, res) => {
    var data = ''; // Inicializamos data como un string vacío
    const options = {
        hostname: 'r6pixel.dam.inspedralbes.cat',
        port: 3169,
        path: '/getAssets',
        method: 'GET'
    };

    const reqHttp = http.request(options, (response) => {
        // Un fragmento de datos ha sido recibido
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Toda la respuesta ha sido recibida
        response.on('end', () => {
            data = JSON.parse(data); // Convertir los datos a JSON
            data = data["skins"];
            data = getRandomSkin(data, 4); // Obtener 4 elementos aleatorios

            // Función para borrar el contenido de la tienda
            const database = client.db('Juego');
            const collection = database.collection('tienda');
            collection.deleteMany({}) // Borrar todos los documentos de la colección tienda
                .then(() => {
                    // Función para añadir cada skin a la tienda actual
                    let insertPromises = data.map(skin => {
                        // Añadir cada skin a la tienda actual utilizando el ID de la skin
                        console.log(skin); // Mostrar
                        return collection.insertOne(skin);
                    });

                    Promise.all(insertPromises)
                        .then(() => {
                            res.json(data);
                        })
                        .catch(error => {
                            console.error(error);
                            res.status(500).send('Error interno del servidor');
                        });
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).send('Error interno del servidor');
                });
        });
    });

    // Manejo de errores
    reqHttp.on('error', (error) => {
        console.error(error);
        // Responder con un código de error en caso de que ocurra un error durante la solicitud HTTP
        res.status(500).send('Error interno del servidor');
    });

    // Finalizar la solicitud
    reqHttp.end();
});

function getRandomSkin(array, n) {
    let result = [];
    let tempArray = [...array]; // Crear una copia del array original

    while (result.length < n && tempArray.length > 0) {
        // Seleccionar un índice aleatorio
        let randomIndex = Math.floor(Math.random() * tempArray.length);

        // Añadir el elemento seleccionado al resultado
        result.push(tempArray[randomIndex]);

        // Eliminar el elemento seleccionado del array temporal para evitar duplicados
        tempArray.splice(randomIndex, 1);
    }

    return result;
}

app.post("/activarSkin", async (req,res)=>{
    id = req.body.idNuevo;
    idUser = req.body.id;
    console.log("IDNUEVO: " +id);
    console.log("IDUSER" + idUser);
    await updateActivo(client, idUser, id);
    res.send("OK");
})

//registrar un usuari
app.post("/register", async (req, res) => {
    try {
        var user = req.body.user;
        var pwd = req.body.pwd;
        var mail = req.body.mail;
        var fechaN = req.body.fechaN;
        var monedas = 1000;
        pwd = await Encriptar(pwd);
        // Create a new Date object
        var currentDate = new Date();

        // Get the current year, month, and day
        var year = currentDate.getFullYear();
        // Month is zero-indexed, so add 1 to get the correct month
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();

        // Add leading zeros if needed
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        // Concatenate the year, month, and day with hyphens to get the desired format
        var formattedDate = year + '-' + month + '-' + day;

        console.log(formattedDate)

        //Afegir usuari a inventari
        var inventari = { usuario: user, skins: [] }
        createInventari(client, inventari);


        if (await bdUsuaris.insertUsuari(user, pwd, mail, fechaN, monedas, formattedDate)) {
            console.log("Usuario Registrado")
            res.send({ auth: true });
        } else {
            console.log("Error registrando")
            res.send({ auth: false })
        }
    } catch (error) {
        // Handle errors gracefully
        res.send({ auth: false });
    }
});

//comprovar login
app.post("/login", async (req, res) => {
    var user = req.body.user;
    var pwd = req.body.pwd;


    var resultat = await bdUsuaris.getUsuaris(user);

    if (resultat.length === 0) {
        res.send({ auth: false })
    } else {
        console.log("CORRECTO")
        res.send({ auth: await Comparar(pwd, resultat[0].password) });
    }
});



app.post("/unirSala", (req, res) => {
    var user = req.body.user;
    var salaUnir = req.body.sala;
    var trobat = false;
    sales.forEach(sala => {
        if (sala.salaId === salaUnir) {
            var existe = false;
            sala.users.forEach(usuari => {
                if (usuari === user) {
                    existe = true;
                }
            });
            if (!existe) {
                console.log("USUARIO NO EXISTE")
                sala.users.push(user);
                io.emit("newUser", req.body);
            } else {
                console.log("USUARIO EXISTE")
            }
            console.log("TODO OK")
            trobat = true;
            res.send({ auth: true })
        }

    });
    if (!trobat) {
        console.log("CODIGO INCORRECTO DE: " + user + ", CODIGO: " + salaUnir)
        res.send({ auth: false })
    }
})


app.post("/updateCliente", async (req, res) => {
    await bdUsuaris.updateUsuari(req.body.gmail, req.body.activo, req.body.nombre_usuario, req.body.fecha_nacimiento, req.body.idUser);
    res.send({ updated: true });

})

//Funció per a encriptar passwords i strings
function Encriptar(string) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(string, 10, (err, hashedPassword) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(hashedPassword);
        });
    });
}

//Funció per a comparar un string normal i un ecnriptat
function Comparar(plainTextPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainTextPassword, hashedPassword, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

app.get("/getMapes", async (req, res) => {
    try {
        const directoryPath = "assets/mapas"; // Specify the path to the directory

        // Read the contents of the directory
        const files = fs.readdirSync(directoryPath);

        // Filter out directories
        const directories = files.filter(file => {
            return fs.statSync(path.join(directoryPath, file)).isDirectory();
        });
        res.send(directories);
    } catch (err) {
        console.error("Error reading directory:", err);
        res.status(500).send("Internal Server Error");
    }

})

app.get("/getBroadcastNews", async (req, res) => {
    try {
        const result = await getNoticias(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }

});


app.get("/getMonedes/:user", async (req, res) => {
    var user = req.params.user;
    var resultat = await bdUsuaris.getUsuariMonedes(user);
    res.send(resultat);
})
app.get("/checkarServidor", (req, res) => {
    res.send(true);
})

app.get("/getInventari/:user", async (req, res) => {
    var user = req.params.user
    var resultat = await getInventari(client);
    resultat = resultat.filter(item => item.usuario === user);
    res.send(resultat)

})

//CrearSala
app.get("/crearSala", (req, res) => {
    var usuari = req.query.user;
    console.log(usuari);
    var sala = {
        salaId: generateRandomString(6),
        users: [usuari]
    };
    sales.push(sala);
    res.send(JSON.stringify(sala));
});

//Agafar les estadístiques d'un usuari
app.get("/getEstadisticas/:id", async (req, res) => {
    var id = req.params.id
    res.send(await bdEstadistiques.getEstadistiques(id))
})

app.get("/getUsuarios/", async (req, res) => {
    res.send(await bdUsuaris.getUsuaris())
})


app.get("/getTenda", async (req, res) => {
    try {
        const database = client.db('Juego');
        const collection = database.collection('tienda');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        throw error;
    }
})

app.get("/getImg/:path", (req, res) => {
    console.log(req.params.path);
    var filepath = path.join(__dirname, "assets", req.params.path);
    res.sendFile(filepath)
})

app.post("/getImg", (req, res) => {
    console.log(req.body.path);
    var filepath = path.join(__dirname, "assets", req.body.path);
    res.sendFile(filepath)
})

app.get("/getImgBroadcast/:path", (req, res) => {
    console.log(req.params.path);
    var filePath = path.join(__dirname, "assets", "broadcast", req.params.path);
    res.sendFile(filePath)
})

app.post("/getAssets_post", (req, res) => {
    const directory = req.body.directory;
    const directoryPath = "./assets/" + directory;

    // Comprobar si el directorio existe
    fs.access(directoryPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('El directorio no existe:', err);
            res.status(404).send('El directorio no existe');
            return;
        }

        // Comprimir el directorio en un archivo zip
        const output = fs.createWriteStream(__dirname + '/mapas.zip'); // Nombre del archivo zip
        const archive = archiver('zip');

        output.on('close', () => {
            console.log('Archivos comprimidos correctamente');
            res.sendFile(__dirname + '/mapas.zip'); // Enviar el archivo zip con el nombre "mapas.zip"
        });

        archive.on('error', (err) => {
            console.error('Error al comprimir archivos:', err);
            res.status(500).send('Error al comprimir archivos');
        });

        archive.pipe(output);
        // Agregar un directorio llamado "mapas" dentro del archivo ZIP
        if (directory=="mapas") {
            archive.directory(directoryPath, 'mapas');
            console.log("mapas enviados")
        }
        else {
            archive.directory(directoryPath, 'skinsMod');
            console.log("skins enviados")
        }
        
        archive.finalize();
    });
});

app.get("/getSales", (req, res) => {
    res.send(sales)
})

app.get("/getSala", (req, res) => {
    let salaFound = false; // Flag to indicate if the sala is found

    sales.forEach(sala => {
        if (sala.salaId === req.query.idSala) {
            console.log("Sala trobada");
            console.log(sala);
            res.send(sala);
            salaFound = true; // Set the flag to true if sala is found
        }
    });

    // If sala is not found, send a response indicating so
    if (!salaFound) {
        res.send("Sala not found");
    }
});


app.get("/logged/:user", (req, res) => {
    var user = req.params.user;
    if (usuarisConnectats.find(value => value === user)) {
        console.log("USUARI CONNECTAT")
        res.send({ auth: true })
    } else {
        console.log("USUARI NO CONNECTAT")
        res.send({ auth: false })
    }
});

app.post("/addStats", async (req, res) => {
    var id = req.body.id
    var resultat2 = await bdEstadistiques.getEstadistiques(id);
    await bdEstadistiques.updateEstadistiques(resultat2.PartidasJugadas, resultat2.TiempoPartida, req.body.tiempoJugado, resultat2.kills, req.body.kills, resultat2.deaths, req.body.deaths, resultat2.assists, req.body.assists, resultat2.wins, req.body.wins)
})


//*************************************************************SOCKETS********************************************************************* */
io.on('connection', (socket) => {

    socket.on("loggedIn", (dades) => {
        dadesJson = JSON.parse(dades);
        socket.user = dadesJson.user;
        usuarisConnectats.push(dadesJson.user);
    });

    socket.on('userNuevo', (dades) => {
        dadesJson = JSON.parse(dades);
        console.log("Usuario Conectado: " + dadesJson.user)
        io.emit('userNuevo', (dades));
    })

    socket.on('touchDragged', (dades) => {
        console.log("Touchdragged")
        io.emit('touchDragged', dades);
    })

    socket.on('disparo', (dades) => {
        console.log("Disparo")
        io.emit('disparo', dades);
    })

    socket.on('posicioCorrecio', (dades) => {
        io.emit('posicioCorrecio', dades);
    })


    socket.on('startGame', (dades) => {
        io.emit('startGame', dades);
    })

    socket.on("sesionCerrada", () => {
        usuarisConnectats.pop(socket.user);
    });

    socket.on('disconnect', () => {
        let index = usuarisConnectats.indexOf(socket.user);
        if (index !== -1) {
            usuarisConnectats.splice(index, 1);
        }
        console.log('User disconnected => ', socket.user);
        socket.user = "";
    });


})