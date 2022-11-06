import { FastifyInstance } from 'fastify';
import { login, register } from '../Controllers/authentication.controller';
import * as authOpts from '../Schemas/auth.options'

export default (fastifyApp: FastifyInstance) => {
    fastifyApp.post(`${process.env.BASE_API_URL}/auth/login`, { schema: authOpts.login }, login)
    fastifyApp.post(`${process.env.BASE_API_URL}/auth/register`, { schema: authOpts.register }, register)
    // fastifyApp.post(`${process.env.BASE_API_URL}/auth/resetpassword`, {})
}