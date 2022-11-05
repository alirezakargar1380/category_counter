import { FastifyInstance } from 'fastify';
import mongoDB_plugin from './../Plugins/mongodb.plugin'
import Routers_plugin from './../Plugins/routers.plugin'
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"
import cors from '@fastify/cors'

// CONFIGS
import swaggerUiConfig from '../Config/swagger-ui.config';
import swaggerConfig from '../Config/swagger.config';

export default (fastifyApp: FastifyInstance) => {

    fastifyApp.register(mongoDB_plugin)
    fastifyApp.register(require('fastify-xml-body-parser'))
    fastifyApp.register(cors)

    // Swagger
    fastifyApp.register(fastifySwagger, swaggerConfig)
    fastifyApp.register(fastifySwaggerUi, swaggerUiConfig)

    fastifyApp.register(Routers_plugin)
}