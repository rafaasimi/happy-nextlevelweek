// Importar dependencia
const express = require('express');
// Identifica o S.O e ajusta o path das rotas colocando / ou \
const path = require('path');
const pages = require('./pages.js')
// Iniciando o express atribuindo uma função
const server = express();

server
// Utilizar body do req
.use(express.urlencoded({extended: true}))
// Utilizando arquivos estaticos
.use(express.static('public'))

// Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Criando rota
// / = index.html
server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/save-orphanage', pages.saveOrphanage);

// Ligar servidor
server.listen(5500);