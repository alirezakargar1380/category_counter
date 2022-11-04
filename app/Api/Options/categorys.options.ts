import { FastifySchema } from 'fastify';

export const getAllCategoryOpts = {
    schema: {
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
                type: 'object',
                properties: {
                    page_num: { type: 'string' }
                }
            }
        },
        security: [
            // {
            //     "apiKey": []
            // }
        ]
    }
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
    schema: {
        description: 'create category with counter',
        tags: ['categorys'],
        summary: 'qwerty',
        body: {
            type: 'object',
            properties: {
                categoryTitle: { type: 'string' },
                counterNum: { type: 'integer' }
            }
        },
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
    }
}