import {ObjectId} from "mongodb";

export interface IUser {
    _id: ObjectId
    username: string
    password: string
    salt: string
    createdAt: Date
    updatedAt: Date
}

export interface IUserCreateInput extends Omit<IUser, '_id' | 'createdAt' | 'updatedAt'> { }
export interface IUserRegisterInput extends Omit<IUser, '_id' | 'salt' | 'createdAt' | 'updatedAt'> { }
