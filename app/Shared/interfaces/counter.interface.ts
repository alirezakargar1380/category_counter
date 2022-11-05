import {ObjectId} from "mongodb";

export interface ICounter {
    _id: ObjectId,
    category_id: ObjectId,
    counter_number: number,
    createdAt: Date;
    updatedAt: Date;
}

export interface ICounterCreateInput extends Omit<ICounter, '_id' | 'createdAt' | 'updatedAt'> { }
