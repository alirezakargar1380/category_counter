import { FastifyRequest, FastifyReply } from 'fastify';

// interface
import { IBodyCreateCategory, IParamGetCategoryById, IParamGetCategorys, IReplyCreateCategory } from '../../Shared/interfaces/api/categorys.api.interface';
import { ICategory } from '../../Shared/interfaces/category.interface';

// services
import * as categoryService from '../../Services/category.services';
import * as counterService from '../../Services/counter.service';
import { ICounter } from '../../Shared/interfaces/counter.interface';

import validation from "../../Validation/category.validation"

export const getCategoryById = async (request: FastifyRequest<{ Params: IParamGetCategoryById }>, reply: FastifyReply) => {
    try {
        reply.status(200).send(await categoryService.getCategoryById(request.params.category_id))
    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}

export const getCategorys = async (request: FastifyRequest<{ Params: IParamGetCategorys }>, reply: FastifyReply) => {
    try {
        validation.update(request.params)
        reply.status(200).send(await categoryService.getCategory(Number(request.params.page_num)))

    } catch (error: any) {
        if (error.extensions) reply.status(500).send(error.extensions)
        else reply.status(500).send("internal server error")
    }
}

export const createCategorys = async (request: FastifyRequest<{ Body: IBodyCreateCategory, Reply: IReplyCreateCategory }>, reply: FastifyReply) => {
    try {
        const { categoryTitle, counterNum } = request.body

        const category: ICategory = await categoryService.create(categoryTitle)
        const counter: ICounter = await counterService.create(category._id, counterNum)

        reply.status(200).send({
            title: category.title,
            counter: counter
        })
    } catch (error) {
        console.log(error)
        reply.status(500).send("internal server error")
    }
}