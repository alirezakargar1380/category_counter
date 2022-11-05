import { ICounter, ICounterCreateInput } from '../Shared/interfaces/counter.interface';
import counter from './../Model/counter.model'

export class counterRepository {
    constructor(private counterModel: typeof counter) {}

    async create(inputs: ICounterCreateInput): Promise<ICounter> {
        return await this.counterModel.create(inputs)
    }
}