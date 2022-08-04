import express  from "express";
import dotenv from 'dotenv';

//Loud config
dotenv.config({ path: './config/config.env' });

//Run server
const server = express();
const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log("Servidor rodando na porta " + PORT + " ..."));

server.get('/', (requi, resp) => {
    resp.send("Página Inicial")
});

server.get('/user', (requi, resp) => {
    resp.send('Página do Usuário')
})