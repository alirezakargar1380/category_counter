import Fastify, { FastifyInstance } from 'fastify';
import fastifyLoader from './app/Loaders';

const fastify: FastifyInstance = Fastify()


fastify.get("/", () => {
    return 'fuck'
})

const start = async () => {
    try {
        fastifyLoader(fastify)
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
    }
}
start()