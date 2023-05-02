import { FastifyInstance } from 'fastify'

import { showUsersMeals } from '../controllers/users-meals-controller'

import { checkUserIdExists } from '../middlewares/check-user-id-exists'

const preHandler = [checkUserIdExists]

export async function usersMealsRoutes(app: FastifyInstance) {
  app.get('/', { preHandler }, showUsersMeals)
}
