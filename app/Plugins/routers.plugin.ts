import { FastifyInstance, FastifyRequest, FastifyReply, RouteOptions } from 'fastify';
import categoryRouters from './../Api/Routers/category.routers'

async function routes (fastify: FastifyInstance, options: any) {

    categoryRouters.forEach((element: RouteOptions) => {
        fastify.route(element)
    });

    fastify.route({
        method: 'GET',
        url: '/',
        handler: (req: FastifyRequest, rep: FastifyReply) => {
            return 'test'
        }
    })
}

export default routes