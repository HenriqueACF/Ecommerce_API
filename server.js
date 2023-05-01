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
    //'mongodb+srv://henriqueassis:senha123@ecommercedb.jy5gazv.mongodb.net/test',
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Conexão bem sucedida com o banco de dados!');
});

// Configuração do servidor Express
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

//SERVER CONFIG
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(fileupload())

server.use(express.static(__dirname+'/public'))
