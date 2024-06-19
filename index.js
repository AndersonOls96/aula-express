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

app.get("/ola/:nome", (req, res) => {
    //REQ => DADOS ENVIADOS PELO CLIENTE
    //RES => DADOS ENVIADOS PELO SERVIDOR
    let nome = req.params.nome
    res.send(`<h1>Ola ${nome}</h1>`)
})

app.get("/ola/:nome/:empresa", (req, res) => {
    //REQ => DADOS ENVIADOS PELO CLIENTE
    //RES => DADOS ENVIADOS PELO SERVIDOR
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`<h1>Ola ${nome} da empresa ${empresa}</h1>`)
})

app.get("/blog/:artigo?", (req, res) => {
    let artigo = req.params.artigo
    if (artigo) {
        res.send(`<h1>Artigo: ${artigo}</h1>`)
    } else {
        res.send('<h1>Blog</h1>')
    }
})



app.listen(3000, (erro) =>{
    if (erro) {
        console.log('Não foi possivel iniciar o servidor.')
    } else {
        console.log('Servidor iniciado com sucesso.')
    }
})
    
    