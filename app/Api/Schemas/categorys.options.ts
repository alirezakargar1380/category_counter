import { FastifySchema } from 'fastify';

export const getAllCategoryOpts: FastifySchema = {
    description: 'post some data',
    tags: ['categorys'],
    summary: 'qwerty',
    params: {
        type: 'object',
        properties: {
            page_num: {
                type: 'string',
                description: 'page number',
                default: '1'
            }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'array',
            properties: {
                title: { type: 'string' },
                counter: {
                    type: 'object',
                    properties: {
                        counter_number: { type: 'integer' },
                    }
                },
            }
        },
    },
    security: [
        {
            "authorization": []
        }
    ]
}

export const getCategoryByIdOpts: FastifySchema = {
    description: 'post some data',
    tags: ['categorys'],
    summary: 'qwerty',
    params: {
        type: 'object',
        properties: {
            category_id: {
                type: 'string',
                description: 'user id'
            }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'array',
            properties: {
                title: { type: 'string' },
                counter: {
                    type: 'object',
                    properties: {
                        counter_number: { type: 'integer' },
                    }
                },
            }
        },
        404: {
            description: 'document not found',
            type: 'string',
        }
    },
    security: [
        {
            "authorization": []
        }
    ]
}

export const createCategoryOpts: FastifySchema = {
    description: 'create category with counter',
    tags: ['categorys'],
    summary: 'qwerty',
    body: {
        type: 'object',
        properties: {
            categoryTitle: { type: 'string', default: "im title of a category" },
            counterNum: { type: 'integer', default: 200 }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                title: { type: 'string' },
                counter: {
                    type: 'object',
                    properties: {
                        counter_number: { type: 'integer' },
                    }
                },
            }
        },
        // 500: {
        //     description: 'internal server error',
        //     type: 'string',
        // }
    },
    security: [
        {
            "authorization": []
        }
    ]
}