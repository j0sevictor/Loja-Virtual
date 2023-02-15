import { Schema, model } from 'mongoose'

const saleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'usuarios'
    },
    product: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'produtos'
    },
    stage: {
        type: Number,
        default: 0
    },
    finished: {
        type: Boolean,
        default: false
    },
    sale_date: {
        type: Date,
        default: Date.now()
    }
})

export const Sale = model('vendas', saleSchema)