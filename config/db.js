//Mesmo exercio
const express = require("express");
const dotenv = require ('dotenv');

//Loud config
dotenv.config({ path: './config/config.env' });

//Run server
const server = express();
const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log("Servidor rodando em "+ process.env.NODE_ENV  +" na porta " + PORT + " ..."));

server.get('/', (requi, resp) => {
    resp.send("Página Inicial")
});

server.get('/user', (requi, resp) => {
    resp.send('Página do Usuário')
})


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'foodreview',
  password : 'foodreview',
  database : 'foodreview'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();