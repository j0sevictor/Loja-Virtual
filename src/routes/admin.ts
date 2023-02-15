// Importações
    import { Request, response, Response, Router } from 'express'
    import { Product } from '@models/Product'
    import { productSchema } from '@controlles/productValidator'
    import { messages } from 'joi-translation-pt-br'
    import url from 'url'
    interface ProductInter {
        title: String,
        description: String,
        price: Number,
        units: Number
    }

// Criando router
    const router = Router()

// Rotas GET
    router.get('/', (request: Request, response: Response) => {
        response.render('admin/indexAdm')
    })

    router.get('/addProduto', (request: Request, response: Response) => {
        response.render('admin/addProduto')
    })

// Rotas POST
    router.post('/addProduto/validation', (request: Request, reponse: Response) => {
        const productForm:ProductInter = {
            title: request.body.title,
            price: request.body.price,
            description: request.body.description,
            units: request.body.units
        }

        const { value, error } = productSchema.validate(productForm, { messages })

        if (error) 
        {
            return reponse.redirect('/admin/addProduto')
        }

        Product.create(value).then((product) => {
            reponse.redirect('/admin')
        }).catch((erro) => {
            response.send('ERRO: ' + erro)
        })
    })

export { router as adminRouter }