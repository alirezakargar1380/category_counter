import { FastifyInstance } from 'fastify';
import * as categorysOpts from './../Options/categorys.options'

export default (fastifyApp: FastifyInstance) => {
    // get category
    fastifyApp.get('/category/:category_id', categorysOpts.getCategoryByIdOpts, (req, rep) => { return 'get' })
    
    // get category
    fastifyApp.get('/categorys/:page_num', categorysOpts.getAllCategoryOpts, (req, rep) => { return req.params })

    // create category
    fastifyApp.post('/category', categorysOpts.createCategoryOpts, (req, rep) => { return 'get' })
}
