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
const { getInventari, updateInventari, createInventari, deleteInventari } = require('./funcionesmongo/inventari.js');

const insertDataIntoOdoo = require('./odoo/odooproduct.js');
const insertClientOdoo = require('./odoo/odooclient.js');
const getProductIdFromOdoo = require('./odoo/getodooproductbymongoid.js')
const getPartnerIdFromOdoo = require('./odoo/getodooclientbyname.js');
const createSaleOrderInOdoo = require('./odoo/crearventa')

//Definim la sessió i encenem el servidor
const PORT = 3169;
server.listen(PORT, () => {
    console.log('server running at http://localhost:', PORT);
});

var sess = {
    //app.use és el intermediari, middleware
    secret: "paraula secreta",
    resave: false, //Obsolet
    saveUninitialized: true,
};



//Permetem que el servidor pugui rebre peticions de qualsevol origen
app.use(cors());

app.use(express.json());



//Connexió a base de dades
const mysql = require("mysql2");
const { error, log } = require("console");
const { SourceTextModule } = require("vm");



//const url = "mongodb://127.0.0.1:27017";
//const url = "mongodb://a22pabjimpri:3T1rkBzBxlETr8gO@ac-qsbdd98-shard-00-00.lgl13za.mongodb.net:27017,ac-qsbdd98-shard-00-01.lgl13za.mongodb.net:27017,ac-qsbdd98-shard-00-02.lgl13za.mongodb.net:27017/?replicaSet=atlas-fqazj8-shard-0&ssl=true&authSource=admin";
//const client = new MongoClient(url);

//*************************************************************DESAR IMATGES************************************************************ */
// Configura multer para almacenar archivos en la carpeta 'assets'
const storageMap = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/mapas');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadMap = multer({ storage: storageMap });


const storageSkin = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, folderPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadSkin = multer({ storage: storageSkin });

const storageBroadcast = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/broadcast');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadBroadcast = multer({ storage: storageBroadcast });


app.post('/uploadMap', uploadMap.single('image'), (req, res) => {
    try {
        res.status(200).json({ message: 'Imagen subida con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la imagen' });
    }
});

app.post('/uploadSkin', uploadSkin.single('image'), (req, res) => {
    try {
        res.status(200).json({ message: 'Imagen subida con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la imagen' });
    }
});

app.post('/uploadBroadcast', uploadBroadcast.single('image'), (req, res) => {
    try {
        res.status(200).json({ message: 'Imagen subida con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la imagen' });
    }
})

app.post('/editMap', uploadMap.single('image'), (req, res) => {
    try {
        const oldImageName = req.body.oldImageName;
        fs.unlink(path.join(__dirname, './assets/mapas', oldImageName), err => {
            if (err) throw err;
            console.log('Imagen antigua eliminada con éxito');
        });
        res.status(200).json({ message: 'Imagen subida y antigua imagen eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la nueva imagen o eliminar la antigua' });
    }
});

app.post('/editSkin', uploadSkin.single('image'), (req, res) => {
    try {
        const oldImageName = req.body.oldImageName;
        fs.unlink(path.join(folderPath, oldImageName), err => {
            if (err) throw err;
            console.log('Imagen antigua eliminada con éxito');
        });
        res.status(200).json({ message: 'Imagen subida y antigua imagen eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la nueva imagen o eliminar la antigua' });
    }
});

app.post('/editBroadcast', uploadBroadcast.single('image'), (req, res) => {
    try {
        const oldImageName = req.body.oldImageName;
        fs.unlink(path.join(__dirname, './assets/broadcast', oldImageName), err => {
            if (err) throw err;
            console.log('Imagen antigua eliminada con éxito');
        });
        res.status(200).json({ message: 'Imagen subida y antigua imagen eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la nueva imagen o eliminar la antigua' });
    }
})

app.post("/comprarProducte", async (req, res) => {
    var user = req.body.user;
    var monedes = req.body.monedes;
    var idProducte = req.body.idProducto;

    await bdUsuaris.updateUsuariMonedes(monedes, user);
    await insertOrUpdateSkin(client, user, idProducte);
    const idOdooProduct = await getProductIdFromOdoo(idProducte)
    const idOdooClient = await getPartnerIdFromOdoo(user);

    await createSaleOrderInOdoo(idOdooProduct, idOdooClient);



    res.send("OK");
});

//**********************************************************OPERACIONS GET*************************************************************** */
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

app.get("/getAssets", async (req, res) => {
    try {
        const result = await getAssets(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de las colecciones' });
    }
});

app.get("/getMapa", async (req, res) => {
    try {
        const result = await getMapas(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }
});

app.get("/getPersonaje", async (req, res) => {
    try {
        const result = await getPersonajes(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los personajes' });
    }
});

app.get("/getHabilidad", async (req, res) => {
    try {
        const database = client.db('Juego');
        const collection = database.collection('habilidades');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }
});

app.get("/getArma", async (req, res) => {
    try {
        const database = client.db('Juego');
        const collection = database.collection('armas');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }
});

// Rutas para operaciones con skins
app.get("/getSkin", async (req, res) => {
    try {
        const result = await getSkins(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las skins' });
    }
});


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

app.get("/getImg/:path", (req, res) => {
    console.log(req.params.path);
    var path = "/app/assets/" + req.params.path;
    res.sendFile(path)
})

app.get("/getImgBroadcast/:path", (req, res) => {
    console.log(req.params.path);
    var path = "/app/assets/broadcast/" + req.params.path;
    res.sendFile(path)
})

const archiver = require('archiver');


app.get("/getImgGraph", async (req,res)=>{

    // infoStats = await bdUsuaris.getUsuaris();

    const python = spawn('python3', ['./graphPy.py']);

 
    python.stdout.on('data', (data) =>{
        console.log(`Python script output: ${data}`);
    })


    python.stdout.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
        res.sendFile(__dirname + "/grafico_usuarios.png");
      });
})

app.post("/getAssets_post", (req, res) => {
    const directory = req.body.directory;
    const directoryPath = "/app/assets/" + directory;

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
        archive.directory(directoryPath, 'mapas');
        archive.finalize();
    });
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


/**********************************************************************OPERACIONS POST**************************************************************** */
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

//comprovar login
app.post("/loginWeb", async (req, res) => {
    var user = req.body.user;
    var pwd = req.body.pwd;

    var resultat = await bdUsuaris.getUsuariAdmin(user);
    if (resultat.length === 0) {
        res.send(false);
        console.log("NO LOGIN")
    } else if (await Comparar(pwd, resultat[0].password) && resultat[0].admin) {
        res.send({ auth: true })
        console.log("ADMIN LOGIN")
    } else {
        res.send({ auth: false });
        console.log("no Admin")
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


/*************************************************************FUNCIONS********************************************************************************* */
//Funcio Generar random string
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function getRandomItems(array, count) {
    // Create a copy of the original array to avoid modifying it
    const shuffledArray = array.slice();

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Return the first 'count' items from the shuffled array
    return shuffledArray.slice(0, count);
}

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

//Funció per a afegir estadístiques
app.post("/addStats", async (req, res) => {
    var id = req.body.id
    var resultat2 = await bdEstadistiques.getEstadistiques(id);
    await bdEstadistiques.updateEstadistiques(resultat2.PartidasJugadas, resultat2.TiempoPartida, req.body.tiempoJugado, resultat2.kills, req.body.kills, resultat2.deaths, req.body.deaths, resultat2.assists, req.body.assists, resultat2.wins, req.body.wins)
})



// Método POST para crear un nuevo mapa
app.post('/mapa', async (req, res) => {
    try {
        const mapa = req.body;
        const result = await createMapa(client, mapa);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el mapa' });
    }
});
app.post('/createBroadcastNews', async (req, res) => {
    try {
        const noticia = req.body;
        const result = await createNoticia(client, noticia);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el noticia' });
    }
});
app.post('/personaje', async (req, res) => {
    try {
        const personaje = req.body;
        const result = await createPersonaje(client, personaje);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el personaje' });
    }
});

// Método POST para crear una nueva habilidad
app.post('/habilidad', async (req, res) => {
    try {
        const habilidad = req.body;
        const database = client.db('Juego');
        const habilidadesCollection = database.collection('habilidades');
        const result = await habilidadesCollection.insertOne(habilidad);
        res.status(200).json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la habilidad' });
    }
});

// Método POST para crear un nuevo arma
app.post('/arma', async (req, res) => {
    try {
        const arma = req.body;
        const database = client.db('Juego');
        const armasCollection = database.collection('armas');
        const result = await armasCollection.insertOne(arma);
        res.status(200).json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el arma' });
    }
});

app.post('/skin', async (req, res) => {
    try {
        const skin = req.body;
        console.log(skin.nombre);

        // Reemplaza los espacios en el nombre de la skin con nada (los une)
        const folderName = skin.nombre.replace(/\s/g, '');

        // Crea la ruta de la carpeta
        folderPath = path.join(__dirname, 'assets', 'skinsMod', folderName);

        // Crea la carpeta si no existe
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const result = await createSkin(client, skin);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la skin' });
    }
});

app.post('/updatemapa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedMapa = req.body;
        const result = await updateMapa(client, id, updatedMapa);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el mapa' });
    }
});
app.post('/updateBroadcastNews/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedNoticia = req.body;
        const result = await updateNoticia(client, id, updatedNoticia);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el mapa' });
    }
});

app.post('/updatepersonaje/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPersonaje = req.body;
        const result = await updatePersonaje(client, id, updatedPersonaje);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el personaje' });
    }
});

// Método POST para actualizar una habilidad por su ID
app.post('/updatehabilidad/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedHabilidad = req.body;
        const database = client.db('Juego');
        const habilidadesCollection = database.collection('habilidades');
        const result = await habilidadesCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedHabilidad });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la habilidad' });
    }
});

// Método POST para actualizar un arma por su ID
app.post('/updatearma/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedArma = req.body;
        const database = client.db('Juego');
        const armasCollection = database.collection('armas');
        const result = await armasCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedArma });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el arma' });
    }
});

app.post('/updateskin/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSkin = req.body;

        // Creamos la ruta de la carpeta usando el nombre de la skin
        const folderName = updatedSkin.nombre.replace(/\s/g, '');
        folderPath = path.join(__dirname, 'assets', 'skinsMod', folderName);


        const result = await updateSkin(client, id, updatedSkin);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la skin' });
    }
});


/**********************************************************************OPERACIONS DELETE**************************************************************** */

// Método DELETE para borrar un mapa por su ID
app.delete('/deletemapa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteMapa(client, id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar el mapa' });
    }
});
app.delete('/deleteBroadcastNews/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteNoticia(client, id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar el mapa' });
    }
});

app.delete('/deletepersonaje/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deletePersonaje(client, id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar el personaje' });
    }
});

// Método DELETE para borrar una habilidad por su ID
app.delete('/deletehabilidad/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const database = client.db('Juego');
        const habilidadesCollection = database.collection('habilidades');
        const result = await habilidadesCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar la habilidad' });
    }
});

// Método DELETE para borrar un arma por su ID
app.delete('/deletearma/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const database = client.db('Juego');
        const armasCollection = database.collection('armas');
        const result = await armasCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar el arma' });
    }
});

app.delete('/deleteskin/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteSkin(client, id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar la skin' });
    }
});


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

/***********************************************OPERACIONS ODOO****************************************** */

function DetenerOdoo() {
    const con = new Client();
    const sshConfig = {
        host: '89.168.118.150',
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync('ssh-key-2024-03-18.key')
    };

    con.on('ready', function () {
        console.log('Conexión establecida. Ejecutando comando...');
        // Detener primero el contenedor de la base de datos
        con.exec('sudo docker stop db', function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log('Comando sudo docker stop db ejecutado.');
                    // Luego detener el contenedor de Odoo
                    con.exec('sudo docker stop odoo', function (err, stream) {
                        if (err) throw err;
                        stream
                            .on('close', function (code, signal) {
                                console.log('Comando sudo docker stop odoo ejecutado.');
                                con.end();
                            })
                            .on('data', function (data) {
                                console.log('STDOUT: ' + data);
                            })
                            .stderr.on('data', function (data) {
                                console.log('STDERR: ' + data);
                            });
                    });
                })
                .on('data', function (data) {
                    console.log('STDOUT: ' + data);
                })
                .stderr.on('data', function (data) {
                    console.log('STDERR: ' + data);
                });
        });
    }).connect(sshConfig);

    con.on('error', function (err) {
        console.error('Error de conexión:', err);
    });
}

function ArrancarOdoo() {
    const con = new Client();
    const sshConfig = {
        host: '89.168.118.150',
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync('ssh-key-2024-03-18.key')
    };

    con.on('ready', function () {
        console.log('Conexión establecida. Ejecutando comando...');
        // Detener primero el contenedor de la base de datos
        con.exec('sudo docker start db', function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log('Comando sudo docker start db ejecutado.');
                    // Luego detener el contenedor de Odoo
                    con.exec('sudo docker start odoo', function (err, stream) {
                        if (err) throw err;
                        stream
                            .on('close', function (code, signal) {
                                console.log('Comando sudo docker start odoo ejecutado.');
                                con.end();
                            })
                            .on('data', function (data) {
                                console.log('STDOUT: ' + data);
                            })
                            .stderr.on('data', function (data) {
                                console.log('STDERR: ' + data);
                            });
                    });
                })
                .on('data', function (data) {
                    console.log('STDOUT: ' + data);
                })
                .stderr.on('data', function (data) {
                    console.log('STDERR: ' + data);
                });
        });
    }).connect(sshConfig);

    con.on('error', function (err) {
        console.error('Error de conexión:', err);
    });
}

function checkOdoo() {
    return new Promise((resolve, reject) => {
        const con = new Client();
        const sshConfig = {
            host: '89.168.118.150',
            port: 22,
            username: 'ubuntu',
            privateKey: require('fs').readFileSync('ssh-key-2024-03-18.key')
        };

        con.on('ready', function () {
            console.log('Conexión SSH establecida. Ejecutando comando...');
            con.exec("sudo docker inspect --format='{{.State.Status}}' odoo", function (err, stream) {
                if (err) {
                    reject(err);
                    return;
                }
                stream
                    .on('close', function (code, signal) {
                        console.log('Comando docker inspect ejecutado.');
                        con.end();
                    })
                    .on('data', function (data) {
                        const estadoOdoo = data.toString().trim(); // Convertir los datos a cadena y eliminar espacios en blanco
                        resolve(estadoOdoo); // Resolver la promesa con el estado obtenido
                    })
                    .stderr.on('data', function (data) {
                        console.error('Error al ejecutar docker inspect:', data.toString());
                        reject(data.toString()); // Rechazar la promesa si hay un error
                    });
            });
        }).connect(sshConfig);

        con.on('error', function (err) {
            console.error('Error de conexión SSH:', err);
            reject(err); // Rechazar la promesa en caso de error de conexión
        });
    });
}


app.post('/detenerOdoo', async (req, res) => {
    try {
        await DetenerOdoo(); // Esperar a que la función DetenerOdoo() se complete
        res.send('Odoo y db detenidas correctamente.');
    } catch (error) {
        console.error('Error al detener Odoo:', error);
        res.status(500).send('Error al detener Odoo.');
    }
});

app.post('/arrancarOdoo', async (req, res) => {
    try {
        await ArrancarOdoo(); // Esperar a que la función DetenerOdoo() se complete
        res.send('Odoo y db arrancadas correctamente.');
    } catch (error) {
        console.error('Error al arrancar Odoo:', error);
        res.status(500).send('Error al arrancar Odoo.');
    }
})

app.post('/checkarOdoo', async (req, res) => {
    try {
        const estadoOdoo = await checkOdoo(); // Esperar a que la función checkOdoo() se complete
        const isRunning = estadoOdoo === 'running'; // Devuelve true si el estado es 'running', false en caso contrario
        console.log(isRunning);
        res.send(isRunning);
    } catch (error) {
        console.error('Error al comprobar el estado de Odoo:', error);
        res.status(500).send('Error al comprobar el estado de Odoo.');
    }
});

app.post('/syncOdoo', async (req, res) => {
    try {
        const personajes = await getPersonajes(client);
        const skins = await getSkins(client);
        console.log(personajes);
        console.log(skins);
        const result = await insertDataIntoOdoo(personajes, skins);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al sincronizar el estado de Odoo:', error);
        res.status(500).send('Error al sincronizar el estado de Odoo.');
    }
})

app.post('/syncClientOdoo', async (req, res) => {
    try {
        const clients = await bdUsuaris.getUsuaris();
        console.log(clients);
        const result = await insertClientOdoo(clients);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al sincronizar el estado de Odoo:', error);
        res.status(500).send('Error al sincronizar el estado de Odoo.');
    }
})

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
/***********************************************REENVIAR ACCÉS****************************************** */

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(staticFieldMiddleware);
app.use(
    history({
        disableDotRules: true,
        verbose: true,
    })
);
app.use(staticFieldMiddleware);
