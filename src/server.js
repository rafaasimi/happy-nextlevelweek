// Importar dependencia
const express = require('express');
// Identifica o S.O e ajusta o path das rotas colocando / ou \
const path = require('path');
// Iniciando o express atribuindo uma função
const server = express();

// Utilizando arquivos estaticos
server
.use(express.static('public'));

// Criando rota
// / = index.html
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
});

// Ligar servidor
server.listen(5500);