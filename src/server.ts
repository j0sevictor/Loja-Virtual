// Importações
    import express from 'express'
    import path from 'path'

// Configurações
    const PORT: number = 8000 
    const app = express()

    // Arquivos estáticos
        app.use(express.static(path.join(__dirname, 'public')))

    // View Engine
        app.set('view engine', 'pug')
        app.set('views', './src/views')

// Rotas
    app.get('/', (request, response) => {
        response.render('index', {nome: 'Victor'})
    })


app.listen(PORT, () => {
    console.log('Servidor On')
})