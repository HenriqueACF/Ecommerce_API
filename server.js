require('dotenv').config()
//const express = require('express')
//const mongoose = require('mongoose')
const cors =  require('cors')
const  fileupload = require('express-fileupload')

//CONEXAO AO BANCO DE DADOS
const express = require('express');
const mongoose = require('mongoose');

// Configuração do banco de dados MongoDB
mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Conexão bem sucedida com o banco de dados');
});

//SERVER EXPRESS CONFIG
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(fileupload())
server.use(express.static(__dirname+'/public'))
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

//ROUTES
const routes = require('./src/Router/routes')
server.use('/', routes)
