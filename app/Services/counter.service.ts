import { ObjectId } from "mongodb";
import { repositorys } from "../Repositorys"
import { ICounter } from "../Shared/interfaces/counter.interface"
import Exception from "./../utils/error.utility"

export const create = async (id: ObjectId, counter: number): Promise<ICounter> => {
    return await repositorys.counter.create({
        category_id: id,
        counter_number: counter
    })
}

export const plus = async (id: string) => {
    const counter: ICounter | null = await repositorys.counter.findOneByCategoryId(id)
    if (!counter) throw Exception.setError("can't find counter", true);
    counter.counter_number++
    await repositorys.counter.findOneAndUpdate(counter._id.toString(), counter)
    return counter
}

export const min = async (id: string): Promise<any> => {
    const counter: ICounter | null = await repositorys.counter.findOneByCategoryId(id)
    if (!counter) throw Exception.setError("can't find counter", true);
    counter.counter_number--
    await repositorys.counter.findOneAndUpdate(counter._id.toString(), counter)
    return counter
}