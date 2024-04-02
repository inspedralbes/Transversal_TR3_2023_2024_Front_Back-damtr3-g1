var session = require("express-session");
const { MongoClient } = require("mongodb");
const { ObjectId } = require('mongodb');
const express = require("express");
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
    data: {
        motor_ences: false,
    },
};





//Permetem que el servidor pugui rebre peticions de qualsevol origen
app.use(cors());

app.use(express.json());



//Connexió a base de dades
const mysql = require("mysql2");
const { error } = require("console");
const { SourceTextModule } = require("vm");

//const url = "mongodb://127.0.0.1:27017";
const url = "mongodb://a22pabjimpri:3T1rkBzBxlETr8gO@ac-qsbdd98-shard-00-00.lgl13za.mongodb.net:27017,ac-qsbdd98-shard-00-01.lgl13za.mongodb.net:27017,ac-qsbdd98-shard-00-02.lgl13za.mongodb.net:27017/?replicaSet=atlas-fqazj8-shard-0&ssl=true&authSource=admin";
const client = new MongoClient(url);
client.connect();


//*************************************************************BASE DE DADES************************************************************ */
//Definir parametres per a la connexió a la base de dades
var conn = mysql.createPool({
    host: "dam.inspedralbes.cat",
    user: "a22pabjimpri_user",
    password: "Dam2024+++",
    database: "a22pabjimpri_joc",
    connectionLimit: 20,
    queueLimit: 5,
    waitForConnections: true,
});

//COnnexió a la base de dades
conn.getConnection((err, connection) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to database!");
    }
});



//**********************************************************OPERACIONS GET*************************************************************** */
app.get("/getMapes", async (req,res)=>{
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
    var sql = 'SELECT * FROM Estadisticas WHERE idUser = ' + id;
    var resultat = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }else{
                resolve(result)
            }
        });
    })
    res.send(await resultat);
})

app.get("/getUsuarios/", async (req, res) => {
    var sql = 'SELECT * FROM Usuario WHERE admin != 1';
    var resultat = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    })
    res.send(await resultat);
})

app.get("/getAssets", async (req, res) => {
    try {
        const database = client.db('Juego');
        const mapasCollection = database.collection('mapas');
        const personajesCollection = database.collection('personajes');
        const habilidadesCollection = database.collection('habilidades');
        const armasCollection = database.collection('armas');
        const skinsCollection = database.collection('skins');


        const mapas = await mapasCollection.find().toArray();
        const personajes = await personajesCollection.find().toArray();
        const habilidades = await habilidadesCollection.find().toArray();
        const armas = await armasCollection.find().toArray();
        const skins = await skinsCollection.find().toArray();


        const result = {
            mapas,
            personajes,
            habilidades,
            armas,
            skins
        };

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de las colecciones' });
    }
});

app.get("/getMapa", async (req, res) => {
    try {
        const database = client.db('Juego');
        const collection = database.collection('mapas');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }
});

app.get("/getPersonaje", async (req, res) => {
    try {
        const database = client.db('Juego');
        const collection = database.collection('personajes');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
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

app.get("/getSkin", async (req, res) => {
    try {
        const database = client.db('Juego');
        const collection = database.collection('skins');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el contenido de la colección' });
    }
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


/**********************************************************************OPERACIONS POST**************************************************************** */
//registrar un usuari
app.post("/register", async (req, res) => {
    try {
        var user = req.body.user;
        var pwd = req.body.pwd;
        var mail = req.body.mail;
        var fechaN = req.body.fechaN;
        var monedas = 1000;
        var gemas = 10;

        pwd = await Encriptar(pwd);

        const sql = 'INSERT INTO Usuario (username, password, mail, fechaNacimiento, monedas, gemas) VALUES("' + user + '", "' + pwd + '", "' + mail + '", "' + fechaN + '", ' + monedas + ', ' + gemas + ')';
        console.log(sql)
        const resultat = await new Promise((resolve, reject) => {
            conn.query(sql, (err, result) => {
                if (err) {
                    // Check the error code
                    if (err.code === 'ER_DUP_ENTRY') {
                        // Handle duplicate entry error
                        reject("DUPLICADO");
                    } else {
                        // Handle other errors
                        reject("ERROR EN INSERT");
                        console.log(err.message)
                    }
                } else {
                    resolve(true);
                }
            });
        });
        console.log(await resultat)
        if (resultat) {
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
    var sql = 'SELECT username, password FROM Usuario WHERE Username = "' + user + '"';

    var comandaSql = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        });
    })
    var resultat = await comandaSql;

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
    var sql = 'SELECT username, password, admin FROM Usuario WHERE username = "' + user + '"';

    var comandaSql = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        });
    })
    var resultat = await comandaSql;
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
    sales.forEach( sala => {
        if(sala.salaId === salaUnir){
            var existe = false;
            sala.users.forEach(usuari => {
                if(usuari===user){
                    existe = true;
                }
            });
            if(!existe){
                console.log("USUARIO NO EXISTE")
                sala.users.push(user);
                io.emit("newUser", req.body);
            }else{
                console.log("USUARIO EXISTE")
            }
            console.log("TODO OK")
            trobat = true;
            res.send({auth: true})
        }

    });
    if(!trobat){
        console.log("CODIGO INCORRECTO DE: " + user + ", CODIGO: " + salaUnir)
        res.send({auth: false})
    }
})


app.post("/updateCliente", async (req,res)=>{
    var id = req.query.id;
    var sql = 'UPDATE Usuario SET mail ="' + req.body.gmail + '", vetado = ' + req.body.activo + ', username = "' + req.body.nombre_usuario + '",fechaNacimiento = "' + req.body.fecha_nacimiento +  '" WHERE idUser = ' + req.body.idUser;
    var comandaSql = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        });
    })
    var resultat = await comandaSql
    res.send({updated: true});

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
    var sql = 'SELECT * FROM Estadisticas WHERE idUser = ' + id;
    var resultat = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    })
    var resultat2 = resultat;
    var sql2 = 'UPDATE Estadisticas SET PartidasJugadas = ' + (resultat2.PartidasJugadas + 1) + ', TiempoPartida = ' + (resultat2.TiempoPartida + req.body.tiempoJugado + ', kills = ' + (resultat2.kills + req.body.kills) + ', deaths = ' + (resultat2.deaths + req.body.deaths) + ', assists = ' + (resultat2.assists + req.body.assists) + ', wins = ' + (resultat2.wins + req.body.wins))
    var resultat3 = new Promise((resolve, reject) => {
        conn.query(sql2, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    })
    resultat3 = resultat3;
})



// Método POST para crear un nuevo mapa
app.post('/mapa', async (req, res) => {
    try {
        const mapa = req.body;
        const database = client.db('Juego');
        const mapaCollection = database.collection('mapas');
        const result = await mapaCollection.insertOne(mapa);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el mapa' });
    }
});

// Método POST para crear un nuevo personaje
app.post('/personaje', async (req, res) => {
    try {
        const personaje = req.body;
        const database = client.db('Juego');
        const personajesCollection = database.collection('personajes');
        const result = await personajesCollection.insertOne(personaje);
        res.status(200).json(result)
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
        const database = client.db('Juego');
        const skinCollection = database.collection('skins');
        const result = await skinCollection.insertOne(skin);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el skin' });
    }
});

// Método POST para actualizar un mapa por su ID
app.post('/updatemapa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedMapa = req.body;
        const database = client.db('Juego');
        const mapaCollection = database.collection('mapas');
        const result = await mapaCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedMapa });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el mapa' });
    }
});

// Método POST para actualizar un personaje por su ID
app.post('/updatepersonaje/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPersonaje = req.body;
        const database = client.db('Juego');
        const personajesCollection = database.collection('personajes');
        const result = await personajesCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedPersonaje });
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
        const database = client.db('Juego');
        const skinsCollection = database.collection('skins');
        const result = await skinsCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedSkin });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el arma' });
    }
});

/**********************************************************************OPERACIONS DELETE**************************************************************** */

// Método DELETE para borrar un mapa por su ID
app.delete('/deletemapa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const database = client.db('Juego');
        const mapaCollection = database.collection('mapas');
        const result = await mapaCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar el mapa' });
    }
});

// Método DELETE para borrar un personaje por su ID
app.delete('/deletepersonaje/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const database = client.db('Juego');
        const personajesCollection = database.collection('personajes');
        const result = await personajesCollection.deleteOne({ _id: new ObjectId(id) });
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
        const database = client.db('Juego');
        const skinsCollection = database.collection('skins');
        const result = await skinsCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al borrar el arma' });
    }
});


//*************************************************************SOCKETS********************************************************************* */
io.on('connection', (socket)=>{

    socket.on('userNuevo', (dades) => {
        dadesJson = JSON.parse(dades);
        console.log("Usuario Conectado: " + dadesJson.user)
        io.emit('userNuevo', (dades));
    })
    /*
    {
        "user": "user3",
        "tecla": "UP",
    }
    */
    socket.on('touchDragged', (dades) => {
        console.log("Touchdragged")
        io.emit('touchDragged', dades);
    })

    socket.on('posicioCorrecio', (dades) =>{
        io.emit('posicioCorrecio', dades);
    })


    socket.on('startGame', (dades) =>{
        io.emit('startGame', dades);
    })


    socket.on('disconnect', () => {
        console.log('User disconnected');
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

app.post('/arrancarOdoo', async (req, res)=>{
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