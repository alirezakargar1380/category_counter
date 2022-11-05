import { FastifySchema } from 'fastify';

export const getAllCategoryOpts = {
    // schema: {
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
            // {
            //     "apiKey": []
            // }
        ]
    // }
}

export const getCategoryByIdOpts: FastifySchema = {
    // schema: {
        description: 'post some data',
        tags: ['categorys'],
        summary: 'qwerty',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'user id'
                }
            }
        },
        // body: {
        //     type: 'object',
        //     properties: {
        //         hello: { type: 'string' }
        //     }
        // },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        },
        security: [
            // {
            //     "apiKey": []
            // }
        ]
    // }
}

export const createCategoryOpts = {
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
        // {
        //     "apiKey": []
        // }
    ]
}