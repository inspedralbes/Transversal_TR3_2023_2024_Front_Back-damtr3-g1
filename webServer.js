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

const { getPersonajes, createPersonaje, updatePersonaje, deletePersonaje, getSkins, createSkin, updateSkin, deleteSkin, getSkinById } = require('./funcionesmongo/personajeskin');
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
const PORT = 3170;
server.listen(PORT, () => {
    console.log('server running at http://localhost:', PORT);
});

//Permetem que el servidor pugui rebre peticions de qualsevol origen
app.use(cors());

app.use(express.json());

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

app.post('/uploadSkin', uploadSkin.array('images', 4), (req, res) => {
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

app.post('/editSkin', uploadSkin.array('images', 4), async (req, res) => {
    try {
        const id = req.body.id;
        const skinPngSkin = await getSkinById(client, id); // Obtener el pngSkin de la skin por ID

        const existingImages = fs.readdirSync(folderPath);

        // Eliminar las imágenes existentes que no coinciden con ninguna de las imágenes en skinPngSkin
        existingImages.forEach(image => {
            // Verificar si la imagen no coincide con ninguno de los nombres de las imágenes en skinPngSkin
            if (!Object.values(skinPngSkin).includes(image)) {
                fs.unlink(path.join(folderPath, image), err => {
                    if (err) throw err;
                    console.log(`Imagen ${image} eliminada con éxito`);
                });
            }
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

app.get("/getEstadisticas/:id", async (req, res) => {
    var id = req.params.id
    res.send(await bdEstadistiques.getEstadistiques(id))
})

app.get('/getCompras', (req, res) => {
    // Llamamos a la función getCompres para obtener todas las compras
    bdEstadistiques.getCompres()
        .then((compras) => {
            res.json(compras);
        })
        .catch((err) => {
            // Si hay un error, enviamos un mensaje de error
            console.error('Error al obtener las compras:', err);
            res.status(500).send('Error al obtener las compras');
        });
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

app.get("/getBroadcastNews", async (req, res) => {
    try {
        const result = await getNoticias(client);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }

});

app.get("/getUsuarios/", async (req, res) => {
    res.send(await bdUsuaris.getUsuaris())
})

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

app.get("/getImgGraphBenefits", async (req,res)=>{

    // infoStats = await bdUsuaris.getUsuaris();

    const python = spawn('python3', ['./graphbenefits.py']);

 
    python.stdout.on('data', (data) =>{
        console.log(`Python script output: ${data}`);
    })


    python.stdout.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
        res.sendFile(__dirname + "/grafico_beneficios.png");
      });
})

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

app.post("/addStats", async (req, res) => {
    var id = req.body.id
    var resultat2 = await bdEstadistiques.getEstadistiques(id);
    await bdEstadistiques.updateEstadistiques(resultat2.PartidasJugadas, resultat2.TiempoPartida, req.body.tiempoJugado, resultat2.kills, req.body.kills, resultat2.deaths, req.body.deaths, resultat2.assists, req.body.assists, resultat2.wins, req.body.wins)
})

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

function DetenerGame() {
    const con = new Client();
    const sshConfig = {
        host: '89.168.118.150',
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync('ssh-key-2024-03-18.key')
    };

    con.on('ready', function () {
        console.log('Conexión establecida. Ejecutando comando...');
        // Detener el contenedor especificado
        con.exec("sudo docker stop transversal_tr3_2023_2024_front_back-damtr3-g1_app_server_1", function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log('Comando sudo docker stop ejecutado.');
                    con.end();
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

function ArrancarGame() {
    const con = new Client();
    const sshConfig = {
        host: '89.168.118.150',
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync('ssh-key-2024-03-18.key')
    };

    con.on('ready', function () {
        console.log('Conexión establecida. Ejecutando comando...');
        // Arrancar el contenedor especificado
        con.exec("sudo docker start transversal_tr3_2023_2024_front_back-damtr3-g1_app_server_1", function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log('Comando sudo docker start ejecutado.');
                    con.end();
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

app.post('/detenerGame', async (req, res) => {
    try {
        await DetenerGame(); // Esperar a que la función DetenerOdoo() se complete
        res.send('Game detenido correctamente.');
    } catch (error) {
        console.error('Error al detener Game:', error);
        res.status(500).send('Error al detener Game.');
    }
});

app.post('/arrancarGame', async (req, res) => {
    try {
        await ArrancarGame(); // Esperar a que la función DetenerOdoo() se complete
        res.send('Game arrancadas correctamente.');
    } catch (error) {
        console.error('Error al arrancar Game:', error);
        res.status(500).send('Error al arrancar Game.');
    }
})

function checkGame() {
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
            con.exec("sudo docker inspect --format='{{.State.Status}}' transversal_tr3_2023_2024_front_back-damtr3-g1_app_server_1", function (err, stream) {
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

app.post('/checkarGame', async (req, res) => {
    try {
        const estadoGame = await checkGame(); // Esperar a que la función checkOdoo() se complete
        const isRunning = estadoGame === 'running'; // Devuelve true si el estado es 'running', false en caso contrario
        console.log("juego: " + isRunning);
        res.send(isRunning);
    } catch (error) {
        console.error('Error al comprobar el estado de Game:', error);
        res.status(500).send('Error al comprobar el estado de Game.');
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