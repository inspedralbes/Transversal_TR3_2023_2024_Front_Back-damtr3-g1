var session = require("express-session");
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