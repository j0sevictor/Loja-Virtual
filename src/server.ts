import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send('Loja kkkk')
})  

app.listen(8080)