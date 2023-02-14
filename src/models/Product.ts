import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    units: {
        type: Number,
        default: 0
    },
    date_creation: {
        type: Date,
        default: Date.now()
    }
})

export const Product = model('produtos', productSchema)

