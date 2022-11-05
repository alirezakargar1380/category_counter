import { FastifyRequest, FastifyReply, RouteOptions, FastifySchema, FastifyInstance } from 'fastify';
import * as categorysOpts from '../Schemas/categorys.options'
import { apisMethods } from '../../Shared/constants/api/apis.methods';
import { getCategoryById, getCategorys, createCategorys } from '../Controllers/categorys.controller';



export default (fastifyApp: FastifyInstance) => {
  // get category
  fastifyApp.get(`${process.env.BASE_API_URL}/category/:category_id`, { schema: categorysOpts.getCategoryByIdOpts }, (req, rep) => { return 'get' })

  // get category
  fastifyApp.get(`${process.env.BASE_API_URL}/categorys/:page_num`, { schema: categorysOpts.getAllCategoryOpts }, getCategorys)

  // create category
  fastifyApp.post(`${process.env.BASE_API_URL}/category`, { schema: categorysOpts.createCategoryOpts }, createCategorys)
}
