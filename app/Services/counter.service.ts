import {ObjectId} from "mongodb";
import { repositorys } from "../Repositorys"
import { ICounter } from "../Shared/interfaces/counter.interface"

export const create = async (id: ObjectId, counter: number): Promise<ICounter> => {
    return await repositorys.counter.create({ 
        category_id: id,
        counter_number: counter
    })
}