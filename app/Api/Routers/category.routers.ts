import { FastifyRequest, FastifyReply, RouteOptions, FastifySchema, FastifyInstance } from 'fastify';
import * as categorysOpts from '../Schemas/categorys.options'
import { apisMethods } from '../../Shared/constants/api/apis.methods';
import { getCategoryById, getCategorys, createCategorys } from '../Controllers/categorys.controller';
import { loginMiddleware } from '../Middlewares/login.middleware';



export default (fastifyApp: FastifyInstance) => {
  // get category
  fastifyApp.get(`${process.env.BASE_API_URL}/category/:category_id`, { 
    schema: categorysOpts.getCategoryByIdOpts,
    preHandler: loginMiddleware  
  }, getCategoryById)

  // get category
  fastifyApp.get(`${process.env.BASE_API_URL}/categorys/:page_num`, { 
    schema: categorysOpts.getAllCategoryOpts,
    preHandler: loginMiddleware 
  }, getCategorys)

  // create category
  fastifyApp.post(`${process.env.BASE_API_URL}/category`, { 
    schema: categorysOpts.createCategoryOpts,
    preHandler: loginMiddleware
  }, createCategorys)
}
