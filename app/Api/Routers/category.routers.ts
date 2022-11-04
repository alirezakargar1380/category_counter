import { FastifyInstance } from 'fastify';

export default (fastifyApp: FastifyInstance) => {
    // get category by id
    fastifyApp.get('/category/:category_id', (req, rep) => { return 'get' })

    // create category
    fastifyApp.post('/category', (req, rep) => { return 'get' })

    // get all category
    fastifyApp.get('/categorys', (req, rep) => { return 'get' })
}
