import {ObjectId} from "mongodb";

export interface ICounter {
    _id: ObjectId,
    category_id: ObjectId,
    counter_number: number,
    createdAt: Date;
    updatedAt: Date;
}