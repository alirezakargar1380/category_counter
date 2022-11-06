import { FastifyRequest, FastifyReply } from 'fastify';
import * as categoryService from '../../Services/category.services';
import * as counterService from '../../Services/counter.service';

import { ILoginMiddlewareHeaders } from '../../Shared/interfaces/api/login.middleware.interface';

// interface
import { IBodyCreateCategory, IParamGetCategoryById, IParamGetCategorys, IReplyCreateCategory } from '../../Shared/interfaces/api/categorys.api.interface';
import { IParamCounterMin, IParamCounterPlus } from '../../Shared/interfaces/api/counter.api.interface';

export const plus = async (request: FastifyRequest<{ Params: IParamCounterPlus, Headers: ILoginMiddlewareHeaders }>, reply: FastifyReply) => {
    try {
        reply.status(200).send(await counterService.plus(request.params.category_id))
    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}

export const min = async (request: FastifyRequest<{ Params: IParamCounterMin, Headers: ILoginMiddlewareHeaders }>, reply: FastifyReply) => { 
    try {
        reply.status(200).send(await counterService.min(request.params.category_id))
    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
 }