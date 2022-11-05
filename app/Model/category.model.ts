import { Schema, model } from 'mongoose'
import { ICategory } from '../Shared/interfaces/category.interface'

const categorySchema: Schema = new Schema<ICategory>({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default model('categorys', categorySchema)