import {ObjectId} from "mongodb";
import { repositorys } from "../Repositorys"
import { ICounter } from "../Shared/interfaces/counter.interface"

export const create = async (): Promise<ICounter> => {
    return await repositorys.counter.create({ 
        category_id: new ObjectId('56cb91bdc3464f14678934ca'),
        counter_number: 232
    })
}