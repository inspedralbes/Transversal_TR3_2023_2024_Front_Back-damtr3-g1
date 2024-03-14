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
const fs = require("fs");
const bcrypt = require('bcrypt');
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
const staticFieldMiddleware = express.static("public");
var history = require("connect-history-api-fallback");


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
//Agafar les estadístiques d'un usuari
app.get("/estadisticas/:id", async (req,res) =>{
    var id = req.params.id
    var sql = 'SELECT * FROM Estadisticas WHERE idUser = ' + id;
    var resultat = new Promise((resolve, reject) =>{
        conn.query(sql, (err, result) =>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        });
    })
    res.send(await resultat);
})




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

        const sql = 'INSERT INTO Usuario (username, password, mail, fechaNacimiento, monedas, gemas) VALUES("' + user + '", "' + pwd + '", "' + mail + '", "' + fechaN + '", ' + monedas +', ' + gemas + ')';
        
        const resultat = await new Promise((resolve, reject) => {
            conn.query(sql, (err, result) => {
                if (err) {
                    // Check the error code
                    if (err.code === 'ER_DUP_ENTRY') {
                        // Handle duplicate entry error
                        reject('Duplicate entry');
                    } else {
                        // Handle other errors
                        reject(err);
                    }
                } else {
                    resolve(result);
                }
            });
        });

        // Send a successful response only when the promise is resolved
        res.send("OK");
    } catch (error) {
        // Handle errors gracefully
        res.send(error);
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
        res.send("LOGIN INCORRECTE 0")
    } else {
        res.send(await Comparar(pwd, resultat[0].password))
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
    } else if(await Comparar(pwd, resultat[0].password) && resultat[0].admin) {
        res.send(true)
        console.log("ADMIN LOGIN")
    }else{
        res.send(false);
        console.log("no Admin")
    }
});


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





//*************************************************************SOCKETS********************************************************************* */
io.on('connection', (socket)=>{
console.log('userconnected')


/*
{
    "user": user3,
    "x": 10,
    "y": 10,
}
*/
socket.on('posicio', (pos)=>{
    pos = JSON.parse(pos);
    //Etc
})



socket.on('disconnect', () => {
    console.log('User disconnected');
  });


})





/***********************************************REENVIAR DADES****************************************** */

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