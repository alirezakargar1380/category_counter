import { FastifyInstance } from 'fastify';
import * as counterOpts from '../Schemas/counter.options'
import {plus, min} from "./../Controllers/counter.controller";

export default (fastifyApp: FastifyInstance) => {
    fastifyApp.put('/counter/plus/:category_id', { schema: counterOpts.plusCounterOpts }, plus)
    fastifyApp.put('/counter/min/:category_id', { schema: counterOpts.minCounterOpts }, min)
}