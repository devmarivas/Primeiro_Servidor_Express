const express = require('express');

const servidor = express();

const usuarios = [
    {id: 8, nome: 'Mouse', valor: 140 },
    {id: 2, nome: 'Teclado', ivalor: 250 },
    {id: 4, nome: 'Headset', valor: 265 },
    {id: 1, nome: 'Notbook', valor: 3000 },
    {id: 123, nome: 'Monitor', valor: 1200 },
]

servidor.get('/usuarios', (requisicao , resposta) =>{
    resposta.send(usuarios);
});

servidor.listen(3000, () =>{
    console.log('Servidor inicializado na porta 3000');
});