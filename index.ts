import Fastify, { FastifyInstance } from 'fastify';
import loaders from './app/Loaders';

const fastify: FastifyInstance = Fastify()

const start = () => {
    try {
        loaders(fastify)
        fastify.listen({ port: 3000 }, (err) => {
            if (err) console.log(err)
            else console.log(`app listen on port 3000`)
        })

    } catch (err) {
        fastify.log.error(err)
    }
}
start()