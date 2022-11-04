import Fastify, { FastifyInstance } from 'fastify';
import loaders from './app/Loaders';

const fastify: FastifyInstance = Fastify()

const start = async () => {
    try {
        loaders(fastify)
        await fastify.ready()
        fastify.swagger()
        fastify.listen({ port: 3000 }, (err) => {
            if (err) console.log(err)
            else {
                console.log(`app listen on port 3000`)
                console.log(`http://127.0.0.1:3000/documentation`)
            }
        })

    } catch (err) {
        fastify.log.error(err)
    }
}
start()