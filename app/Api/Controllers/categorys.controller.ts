import { FastifyRequest, FastifyReply, RouteOptions, FastifySchema, RouteHandlerMethod, RawReplyDefaultExpression, RawServerDefault, RawRequestDefaultExpression } from 'fastify';

import { IBodyCreateCategory, IReplyCreateCategory } from '../../Shared/interfaces/api/categorys.api.interface';
import { ICategory } from '../../Shared/interfaces/category.interface';

// services
import * as categoryService from '../../Services/category.services';
import * as counterService from '../../Services/counter.service';
import { ICounter } from '../../Shared/interfaces/counter.interface';

export const getCategoryById = (req: FastifyRequest, rep: FastifyReply) => {

}

export const getCategorys = (req: FastifyRequest, rep: FastifyReply) => {

}

export const createCategorys = async (request: FastifyRequest<{ Body: IBodyCreateCategory, Reply: IReplyCreateCategory }>, reply: FastifyReply) => {
    try {
        const { categoryTitle, counterNum } = request.body

        const category: ICategory = await categoryService.create(categoryTitle)
        const counter: ICounter = await counterService.create(category._id, counterNum)

        reply.send({
            title: category.title,
            counter: counter
        })
    } catch (error) {
        console.log(error)
        reply.status(500).send("internal server error")
    }
}