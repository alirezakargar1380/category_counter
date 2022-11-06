import { repositorys } from "../Repositorys"
import { IUser, IUserCreateInput, IUserRegisterInput } from "../Shared/interfaces/users.interface"
import { hashBysalt } from "../utils/crypto.utils"
import Exception from "./../utils/error.utility"
import jwtUtils from './../utils/jwt.utils';
import validation from "./../Validation/auth.validation";
import { hash } from './../utils/crypto.utils';

export const registerNewUser = async (data: IUserRegisterInput): Promise<string> => {
    validation.register(data)
    const hashPass = hash(data.password)
    const user: IUser = await repositorys.user.create({
        username: data.username,
        password: hashPass.hash,
        salt: hashPass.salt
    })
    return jwtUtils.login_token({ _id: user._id })
}

export const loginUser = async (username: string, password: string): Promise<string> => {
    const user: IUser | null = await repositorys.user.findByUsername(username)
    if (!user) throw Exception.setError("username or password was wrong", true);
    if (hashBysalt(password, user.salt) !== user.password) throw Exception.setError("username or password was wrong", true);
    return jwtUtils.login_token({ _id: user._id })
}