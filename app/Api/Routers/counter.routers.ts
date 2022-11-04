import { FastifyInstance } from 'fastify';

export default (fastifyApp: FastifyInstance) => {
    fastifyApp.put('/counter/plus/:category_id', (req, rep) => { return 'get' })
    fastifyApp.put('/counter/min/:category_id', (req, rep) => { return 'get' })
}