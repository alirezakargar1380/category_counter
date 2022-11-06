import { FastifyInstance } from 'fastify';
import categoryRouters from './../Api/Routers/category.routers'
import counterRouters from './../Api/Routers/counter.routers'
import authRouters from './../Api/Routers/authentication.routers'

async function routes (fastify: FastifyInstance, options: any) {
    categoryRouters(fastify)
    counterRouters(fastify)
    authRouters(fastify)
}

export default routes