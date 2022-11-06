import { FastifyRequest, FastifyReply } from 'fastify';
import { loginUser, registerNewUser } from '../../Services/authentication.service';
import { IBodyLogin, IBodyRegister } from '../../Shared/interfaces/api/auth.api.interface';
import { IUser } from '../../Shared/interfaces/users.interface';
import { hash } from '../../utils/crypto.utils';
import jwtUtils from '../../utils/jwt.utils';
import validation from "./../../Validation/auth.validation";

export const register = async (request: FastifyRequest<{ Body: IBodyRegister }>, reply: FastifyReply) => {
    try {
        const token: string = await registerNewUser({
            username: request.body.username,
            password: request.body.password
        })
        reply.status(200).send({
            token: token
        })
    } catch (error: any) {
        if (error.code === 11000) reply.status(400).send("this user is already exist")
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}

export const login = async (request: FastifyRequest<{ Body: IBodyLogin }>, reply: FastifyReply) => {
    try {
        reply.status(200).send({
            token: await loginUser(request.body.username, request.body.password)
        })
    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}

export const resetpassword = (request: FastifyRequest, reply: FastifyReply) => {
    try {
        reply.status(200).send("login")
    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}