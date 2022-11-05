import { FastifyInstance, FastifyRequest, FastifyReply, RouteOptions } from 'fastify';
import categoryRouters from './../Api/Routers/category.routers'
import counterRouters from './../Api/Routers/counter.routers'

async function routes (fastify: FastifyInstance, options: any) {

    categoryRouters(fastify)
    counterRouters(fastify)
    
}

export default routes