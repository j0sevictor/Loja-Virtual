// Importações
    import express from 'express'
    import path from 'path'
    import mongoose from 'mongoose'
    import { adminRouter } from '@routes/admin'

// Configurações
    const PORT: number = 8000 
    const app = express()

    // Arquivos estáticos
        app.use(express.static(path.join(__dirname, 'public')))

    // View Engine
        app.set('view engine', 'pug')
        app.set('views', './src/views')
    
    // Banco de dados, Mongoose
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb://127.0.0.1:27017/lojaVirtual').then(() => {
        console.log('Conectado ao Banco')
    }).catch((erro) => {
        console.log('Erro de conexao. ' + erro)
    })

// Rotas
    app.get('/', (request, response) => {
        response.render('index', {nome: 'Victor'})
    })

    app.use('/admin', adminRouter)


app.listen(PORT, () => {
    console.log('Servidor On')
})