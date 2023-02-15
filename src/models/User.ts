import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    date_assingne: {
        type: Date,
        default: Date.now()
    },
    admin: {
        type: Boolean,
        default: false
    }
})

export const User = model('usuarios', userSchema)

