import { FastifyInstance } from 'fastify';
import categoryRouters from './../Api/Routers/category.routers'

async function routes (fastify: FastifyInstance, options: any) {
    categoryRouters(fastify)
}

export default routes