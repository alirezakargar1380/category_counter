import { FastifyRequest, FastifyReply, RouteOptions, FastifySchema } from 'fastify';
import * as categorysOpts from './../Options/categorys.options'
import {IFastifyRoutes} from "./../../Shared/interfaces/apis/fastify.api.interface"
import { apisMethods } from '../../Shared/constants/api/apis.methods';

// export default (fastifyApp: FastifyInstance) => {
//     // get category
//     fastifyApp.get('/category/:category_id', categorysOpts.getCategoryByIdOpts, (req, rep) => { return 'get' })
//     // get category
//     fastifyApp.get('/categorys/:page_num', categorysOpts.getAllCategoryOpts, (req, rep) => { return req.params })
//     // create category
//     fastifyApp.post('/category', categorysOpts.createCategoryOpts, (req, rep) => { return 'get' })
// }

const routers: RouteOptions[] = [
  {
    method: apisMethods.GET,
    url: '/test',
    schema: categorysOpts.getCategoryByIdOpts,
    handler: (req: FastifyRequest, rep: FastifyReply) => {
      return 'blogs'
    }
  }
]

export default routers
