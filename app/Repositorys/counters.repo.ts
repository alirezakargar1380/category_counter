import { ICounter, ICounterCreateInput, ICounterUpdateInput } from '../Shared/interfaces/counter.interface';
import counter from './../Model/counter.model'

export class counterRepository {
    constructor(private counterModel: typeof counter) {}

    async create(inputs: ICounterCreateInput): Promise<ICounter> {
        return await this.counterModel.create(inputs)
    }

    async findOne(id: string): Promise<ICounter | null> {
        return await this.counterModel.findOne({
            _id: id
        })
    }

    async findOneByCategoryId(id: string): Promise<ICounter | null> {
        return await this.counterModel.findOne({
            category_id: id
        })
    }

    async findOneAndUpdate(id: string, newData: ICounter) {
        await this.counterModel.updateOne({ _id: id }, newData)
    }
}