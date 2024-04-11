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
