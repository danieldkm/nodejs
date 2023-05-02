import { FastifyInstance } from 'fastify'

import {
  createMeals,
  updateMeals,
  deleteMeals,
  indexMeals,
} from '../controllers/meals-controller'

import { checkUserIdExists } from '../middlewares/check-user-id-exists'

const preHandler = [checkUserIdExists]

export async function mealsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler }, createMeals)
  app.put('/:id', { preHandler }, updateMeals)
  app.delete('/:id', { preHandler }, deleteMeals)
  app.get('/:id', { preHandler }, indexMeals)
}
