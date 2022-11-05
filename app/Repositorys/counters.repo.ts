import { ICounter, ICounterCreateInput, ICounterUpdateInput } from '../Shared/interfaces/counter.interface';
import counter from './../Model/counter.model'

export class counterRepository {
    constructor(private counterModel: typeof counter) {}

    async create(inputs: ICounterCreateInput): Promise<ICounter> {
        return await this.counterModel.create(inputs)
    }

    async findOne(id: string) {
        return await this.counterModel.findOne({
            _id: id
        })
    }

    async findOneAndUpdate(id: string, newData: ICounterUpdateInput) {
        await this.counterModel.updateOne({ _id: id }, newData)
    }
}