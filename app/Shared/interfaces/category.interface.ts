import {ObjectId} from "mongodb";

export interface ICategory {
    _id: ObjectId,
    title: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface ICategoryCreateInput extends Omit<ICategory, '_id' | 'createdAt' | 'updatedAt'> { }
export interface ICategoryUpdateInput extends Partial<ICategoryCreateInput>{}
