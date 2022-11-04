import { FastifyInstance } from 'fastify';
import mongoDB_plugin from './../Plugins/mongodb.plugin'

export default (fastifyApp: FastifyInstance) => {
    fastifyApp.register(mongoDB_plugin)

    fastifyApp.get("/", () => {
        return 'done!'
    })
}