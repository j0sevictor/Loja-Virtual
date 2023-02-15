import joi from 'joi'

interface ProductInter {
    title: String,
    description: String,
    price: Number,
    units: Number
}

export const productSchema = joi.object<ProductInter>({
    title: joi.string().min(2).max(128).required(),
    description: joi.string().min(2).max(256).required(),
    price: joi.number().sign('positive').precision(2).required(),
    units: joi.number().min(1).integer().required()
})