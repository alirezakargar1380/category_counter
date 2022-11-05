import { FastifyInstance } from 'fastify';
import fastifyLoader from './fastify.loader';
import mongooseLoader from "./mongoose.loader"

export default (fastify: FastifyInstance) => {
    fastifyLoader(fastify)
    mongooseLoader();
}