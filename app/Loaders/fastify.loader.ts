import { FastifyInstance } from 'fastify';
import mongoDB_plugin from './../Plugins/mongodb.plugin'
import Routers_plugin from './../Plugins/routers.plugin'

export default (fastifyApp: FastifyInstance) => {
    fastifyApp.register(mongoDB_plugin)
    fastifyApp.register(Routers_plugin)
}