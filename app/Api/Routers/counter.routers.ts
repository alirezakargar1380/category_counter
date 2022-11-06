import { FastifyInstance } from 'fastify';
import * as counterOpts from '../Schemas/counter.options'
import {plus, min} from "./../Controllers/counter.controller";
import { loginMiddleware } from './../Middlewares/login.middleware';

export default (fastifyApp: FastifyInstance) => {
    fastifyApp.put('/counter/plus/:category_id', { 
        schema: counterOpts.plusCounterOpts,
        preHandler: loginMiddleware
    }, plus)
    fastifyApp.put('/counter/min/:category_id', { 
        schema: counterOpts.minCounterOpts,
        preHandler: loginMiddleware
    }, min)
}