import { FastifySchema } from 'fastify';

export const register: FastifySchema = {
    description: 'add one to counter',
    tags: ['authentication'],
    summary: 'qwerty',
    body: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                description: 'page number',
                default: 'alireza'
            },
            password: {
                type: 'string',
                description: 'page number',
                default: '12345678'
            }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                token: { type: 'string' }
            }
        },
        400: {
            description: 'Successful response',
            type: 'string'
        }
    },
    security: [
        // {
        //     "apiKey": []
        // }
    ]
}

export const login: FastifySchema = {
    description: 'add one to counter',
    tags: ['authentication'],
    summary: 'qwerty',
    body: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                description: 'page number',
                default: 'alireza'
            },
            password: {
                type: 'string',
                description: 'page number',
                default: '12345678'
            }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                token: { type: 'string' }
            }
        },
        400: {
            description: 'Successful response',
            type: 'string'
        }
    },
    security: [
        // {
        //     "apiKey": []
        // }
    ]
}