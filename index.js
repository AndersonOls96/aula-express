const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Página Inicial')
});

app.get("/sobre", (req, res) => {
    res.send('Página Sobre')
});

app.get("/contato", (req, res) => {
    res.send('Página Contato')
});

app.get("/produtos", (req, res) => {
    res.send('Página Produtos')
});

app.get("/produtos/camisetas", (req, res) => {
    res.send('Página Camisetas')
})


app.listen(3000, (erro) =>{
    if (erro) {
        console.log('Não foi possivel iniciar o servidor.')
    } else {
        console.log('Servidor iniciado com sucesso.')
    }
})
    
    