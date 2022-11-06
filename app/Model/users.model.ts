import { Schema, model } from 'mongoose'
import { IUser } from '../Shared/interfaces/users.interface'

const usersSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default model('users', usersSchema)