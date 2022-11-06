import { IUser, IUserCreateInput } from '../Shared/interfaces/users.interface';
import users from './../Model/users.model'

export class usersRepository {
    constructor(private usersModel: typeof users) {}

    async create(user: IUserCreateInput): Promise<IUser> {
        return this.usersModel.create(user);
    }

    async findByUsername(username:string): Promise<IUser | null> {
        return await this.usersModel.findOne({
            username: username
        })
    }
}