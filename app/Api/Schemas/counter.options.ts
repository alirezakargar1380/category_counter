import { FastifySchema } from 'fastify';

export const plusCounterOpts: FastifySchema = {
    description: 'add one to counter',
    tags: ['counters'],
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
}

export const minCounterOpts: FastifySchema = {
    description: 'min one to counter',
    tags: ['counters'],
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
}