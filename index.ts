import Fastify, { FastifyInstance } from 'fastify';
require('dotenv').config({ path: '.env' })
import loaders from './app/Loaders'
import * as categorysService from "./app/Services/category.services"
const fastify: FastifyInstance = Fastify()

const start = async () => {
    try {
        const port: number = Number(process.env.PORT) || 3000

        loaders(fastify)

        await fastify.ready()
        
        await categorysService.create('gy')

        fastify.swagger()
        fastify.listen({ port: port }, (err) => {
            if (err) console.log(err)
            else {
                console.log(`app listen on port ${port}`)
                console.log(`http://127.0.0.1:${port}/documentation`)
            }
        })

    } catch (err) {
        fastify.log.error(err)
    }
}
start()