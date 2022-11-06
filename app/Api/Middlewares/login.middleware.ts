import { FastifyRequest, FastifyReply } from 'fastify';
import { ILoginMiddlewareHeaders } from '../../Shared/interfaces/api/login.middleware.interface';
import jwtUtils from '../../utils/jwt.utils';
import Exception from "./../../utils/error.utility"

export const loginMiddleware = (request: FastifyRequest<{ Headers: ILoginMiddlewareHeaders }>, reply: FastifyReply, done: any) => {
    try {
        let token: string = request.headers.authorization
        if (!token) throw Exception.setError("please login", true);
        jwtUtils.verify_token(token)
        done()
    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}