import {ObjectId} from "mongodb";
import { ICounter } from "./counter.interface";

export interface ICategory {
    _id: ObjectId,
    title: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface ICategoryDoc extends ICategory {
    counter: ICounter
}

export interface ICategoryCreateInput extends Omit<ICategory, '_id' | 'createdAt' | 'updatedAt'> { }
export interface ICategoryUpdateInput extends Partial<ICategoryCreateInput>{}
