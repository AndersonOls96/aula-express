const express = require('express')
const app = express()

app.listen(3000, (erro) =>{
    if (erro) {
        console.log('Não foi possivel iniciar o servidor.')
    } else {
        console.log('Servidor iniciado com sucesso.')
    }
})
    
    