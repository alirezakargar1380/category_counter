import { FastifyInstance } from 'fastify';
import fastifyLoader from './fastify.loader';

export default (fastify: FastifyInstance) => {
    fastifyLoader(fastify)
}