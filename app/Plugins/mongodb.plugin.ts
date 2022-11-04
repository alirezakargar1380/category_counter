import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
import { FastifyInstance } from 'fastify';

const dbConnector = async (fastify: FastifyInstance, options: any) => {
    fastify.register(fastifyMongo, {
      url: 'mongodb://127.0.0.1:27017/test_database'
    })
}

export default fastifyPlugin(dbConnector)