import { Request, Response, Router } from 'express'
const router = Router()

router.get('/', (request: Request, response: Response) => {
    response.render('admin/indexAdm')
})

export { router as adminRouter }