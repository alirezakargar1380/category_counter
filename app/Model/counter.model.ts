import { Schema, model } from 'mongoose'
import { ICounter } from '../Shared/interfaces/counter.interface'

const counterSchema = new Schema<ICounter>({
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'categorys',
        required: true
    },
    counter_number: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

export default model('counters', counterSchema)